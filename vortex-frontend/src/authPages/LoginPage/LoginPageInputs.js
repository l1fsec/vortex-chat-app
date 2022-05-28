import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const LoginPageInputs = ({mail, setMail, password, setPassword}) => {
    return <>
    <InputWithLabel         //Define the input label for mail
    value={mail}
    setValue={setMail}
    label='E-mail' //fix labels!!!!!
    type='text'
    placeholder='Enter e-mail address'
     />
     <InputWithLabel        //Define the input label for password
    value={password}
    setValue={setPassword}
    label='Password'
    type='password'
    placeholder='Enter password'
     />
    </>;
};

export default LoginPageInputs;