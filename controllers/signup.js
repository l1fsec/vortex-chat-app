const connection = require("../database");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Získá data z register formu
  const { username, password } = req.body;

  connection.query(
    // sql příkaz, který hledá jestli daný email už neexistuje
    "SELECT username FROM users WHERE username = ?",
    [username],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      // Hledá stejný email
      if (results.length > 0) {
        return res.render("signup", {
          message: "Zadané jméno se již využívá",
        });
      }
      // Hashování hesla
      let hashedPassword = await bcrypt.hash(password, 10);

      connection.query(
        // Vkládá data do tabulky users
        "INSERT INTO users SET ?",
        {
          username: username,
          password: hashedPassword,
        },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log(results);
            // Přesměruje na přihlášení
            res.redirect("/auth/login");
          }
        }
      );
    }
  );
};
