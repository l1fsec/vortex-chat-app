import React, {useEffect, useState} from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';        
import { validateLoginForm } from '../../shared/utils/validator';

const LoginPage = () => {
    const [mail, setMail] = useState('');       //basic state
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({ mail, password})); //validate form with validator.js

    }, [mail, password, setIsFormValid]); //change state

    const handleLogin = () => {
       // console.log(mail);
       // console.log(password);
        console.log("Logged In!");    
    };

    //Authbox component with Header component here.
    return (<AuthBox>
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

export default LoginPage;