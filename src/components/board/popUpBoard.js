import React from 'react';

function popUpBoard(props) {
    // console.log("popupsignup", props)
    return (
        <div className="popup" id="popupboard"> 
            <div className="popup__content">
                <div className="popup__left">

                </div>
                <div className="popup__right" >
                <a href="#" className="popup__close">&times;</a>
                    <div>
                        <h1>{props.name}</h1>
                        <h2>{props.title}</h2>
                        <p>{props.about}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default popUpBoard;



        
        
