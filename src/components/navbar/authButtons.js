import React from 'react';

function authButtons(props) {
    return (
        <div className="auth-buttons">
            <button className="auth-buttons__yellow" ><a href="#popup">Sign Up</a></button>
            <span className="divider">|</span>
            <button className="auth-buttons__yellow"><a href="#popup">Sign In</a></button>
        </div>
    );
}

export default authButtons;