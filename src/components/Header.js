import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://freepikpsd.com/file/2019/10/lucasfilm-logo-png-5.png" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWoBufSnjGCgbVO28VSfUfIx8Al5ERNTEGyUUhut0oTPJtJ7ZnoLjwZ4csRrRTrHRYUSI&usqp=CAU" alt="usuario" />
                </a>
            </div>
        </header>
    );
}