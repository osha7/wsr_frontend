import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function WalletShare(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/9")
            .then((res) => res.json())
            .then((result) => {
                // console.log(result.posts.data)
                setPosts(result.posts.data);
            })
            .catch((err) => {
                alert("Unable to load posts At This Time");
            });
    }, []);

    return (
        console.log(posts),
        <div className="category-show">
            <img src="carouselImages/WalletShare.png" alt=""></img>
            <h1>
              &nbsp; WALLET
              <br/>
              &nbsp; SHARE
            </h1>
            <span className="blackLineFull"></span>
           
        </div>
    );
}

export default WalletShare;