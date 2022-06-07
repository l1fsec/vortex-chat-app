import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

//copied from LoginPageFooter.js
//when conditions are not met
const getFormNotValidMessage = () => {
  return "Username should contain between 3 and 12 characters. \n Password should contain between 6 and 12 characters. \n E-mail address should be provided!";
};
//when form conditions are met
const getFormValid = () => {
  return "Press to register!";
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate(); //Have an account? Push to /login
  const handlePushToLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValid()}>
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Have an account?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
