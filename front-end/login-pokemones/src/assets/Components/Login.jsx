import React from 'react'
import '../Components/Login.css'
import ButtonLogin from './Button'

const LoginCard = () => {

    return (
        <div className='login-section'>
            <div className='container'>
                <div className='header'>
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <ButtonLogin />
            </div>
        </div>
    )
}

export default LoginCard;
