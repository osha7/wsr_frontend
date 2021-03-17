import React, { useState, useEffect } from "react";
import { API_URL } from '../../apiConstants';

function LawyerLand(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL + "/categories/6")
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
            <img src="carouselImages/LawyerLand.png" alt=""></img>
            <h1>
              &nbsp; LAWYER
              <br/>
              &nbsp; LAND
            </h1>
            <span className="blackLineFull"></span>
           
        </div>
    );
}

export default LawyerLand;