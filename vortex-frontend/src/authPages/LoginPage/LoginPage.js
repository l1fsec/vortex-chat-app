import React, {useState} from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';

const LoginPage = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    return (<AuthBox>
        <LoginPageHeader />
        <LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
         />
        </AuthBox> //Authbox component with Header component here.
    );
};

export default LoginPage;