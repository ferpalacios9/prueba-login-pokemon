import React from 'react';
import './Button.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BsMicrosoft } from 'react-icons/bs';

const ButtonLogin = () => {
    return (
        <div className='container-button'>
            <button
                className="button-login"
                onClick={() => {
                    const popup = window.open(
                        "http://localhost:3000/auth/microsoft",
                        "targetWindow",
                        `toolbar=no,
                        status=no,
                        menubar=no,
                        scrollbar=yes,
                        resizable=yes,
                        width=520,
                        heigth=600`
                    );

                    window.addEventListener("message", (event) => {
                        if (event.origin === "http://localhost:3000") {
                            if (event.data) {
                                // Authentication
                                sessionStorage.setItem("user", JSON.stringify(event.data));
                                popup.close();
                            }
                        }
                    });
                }}
            >
                <div className='microsoft-icon'>
                    <BsMicrosoft />
                </div>
                LOGIN WITH MICROSOFT
            </button>
        </div>
    )
}

export default ButtonLogin;