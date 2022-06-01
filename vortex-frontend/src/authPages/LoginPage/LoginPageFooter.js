import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

//when conditions are not met
const getFormNotValidMessage = () => {
  return "Enter correct e-mail address and password. It should contain characters between 6 to 12 characters!";
};
//when form conditions are met
const getFormValid = () => {
  return "Press to log in!";
};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate(); //Don't have an account? Push to /register
  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValid()}>
        <div>
          <CustomPrimaryButton
            label="Log In"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          ></CustomPrimaryButton>
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account?"
        redirectText=" Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
