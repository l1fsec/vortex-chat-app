export const validateLoginForm = ({ mail, password}) => {
    const isMailValid = validateMail;
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
};

const validatePassword = (password) => {
    return password.length > 6 && password.length < 12;
};

const validateMail = (mail) => {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(mail);
};