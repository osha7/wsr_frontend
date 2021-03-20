import React from "react";
import AuthButtons from './authButtons';
import PopUpSignUp from './popUpSignUp';
import PopUpSignIn from './popUpSignIn';
import SocialMediaButtons from './socialMediaButtons';
import SearchBar from './searchBar';

const NavBar = (props) => {

    return (
        console.log("navbar", props),
        <>
            <div className="navbar">
                <div className="nav-left"></div>
                <div className="nav-right">
                    <div className="nav-header">
                        <a href="/">
                        <h1>Wealth</h1>
                        <h1>Solutions</h1>
                        <h1>Report</h1>
                        </a>
                    </div>
                    <div className="header-right">
                        <div className="header-search-bar">
                            <SearchBar posts={props.posts} />   
                        </div>
                        <div className="mediaButtons">
                            <SocialMediaButtons />
                        </div>
                        
                        <div className="header-login-signup">
                            <AuthButtons user={props.user.user} />
                        </div>
                    </div>
                </div>
                <PopUpSignUp handleSignIn={props.handleSignIn} />
                <PopUpSignIn />
            </div>
        </>
    );
};

export default NavBar;
