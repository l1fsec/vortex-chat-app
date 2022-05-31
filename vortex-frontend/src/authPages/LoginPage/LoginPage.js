import React, {useState, useEffect } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';        
import { validateLoginForm } from '../../shared/utils/validator';
import { connect } from "react-redux";
import { getActions} from '../../store/actions/authActions';
import { useNavigate} from 'react-router-dom';

const LoginPage = ({ login }) => {
    const navigate = useNavigate(); //import navigate

    const [mail, setMail] = useState('');       //basic state
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({ mail, password })); //validate form with validator.js

    }, [mail, password, setIsFormValid]); //change state

    const handleLogin = () => {
        const userDetails = {
            mail, 
            password,
        };

        login(userDetails, navigate);

       // console.log(mail);
       // console.log(password);
        // console.log("Logged In!");    
    };

    //Authbox component with Header component here.
    return (
        <AuthBox>
        <LoginPageHeader />     
        <LoginPageInputs
        mail={mail}
        setMail={setMail}       //input the values here from LoginPageInputs.js
        password={password}
        setPassword={setPassword}
         />
         <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
        </AuthBox>
        
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(LoginPage);