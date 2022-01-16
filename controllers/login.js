const conn = require("../database");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");

// LOGIN
exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sql = "SELECT * FROM users WHERE username = ?";
  const search_query = mysql.format(sql, [username]);

  conn.query(
    search_query,
    // Hledá jestli se email z inputu nachází v databázi
    async (err, results) => {
      if (err) throw err;
      // Pokud nenajde stejný email, hodí message 'Zadaný email neexistuje
      if (results.length == 0) {
        return res.render("login", {
          message: "Zadaný email neexistuje",
        });
      } else {
        // Získá zahashované heslo
        const hashedPassword = results[0].password;
        const isMatch = await bcrypt.compare(password, hashedPassword);
        // Kontroluje jestli jsou hesla stejná
        if (!isMatch) {
          return res.render("login", {
            message: "Zadané heslo není správné",
          });
        } else {
          // Pokud najde uživatele, přihlásí ho
          res.redirect("/");
        }
      }
    }
  );
};