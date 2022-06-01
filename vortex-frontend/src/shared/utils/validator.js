export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail;
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ mail, password, username }) => {
  return (
    validateMail(mail) &&
    validatePassword(password) &&
    validateUsername(username) //validate register
  );
};

const validatePassword = (password) => {
  return password.length > 6 && password.length < 13;
};

const validateMail = (mail) => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(mail);
};

const validateUsername = (username) => {
  return username.length > 2 && username.length < 13;
};
