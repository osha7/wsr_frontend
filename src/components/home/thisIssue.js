import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function thisIssue(props) {
    let settings = {
        arrows: true,
        dots: false,
        infinite: true, 
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                }

            ]
    }




    if(props.posts.length > 0){

        let cItems = props.posts.map(post => {
            return(
                <div className="ticrslwrapper" >
                        <div className="ti-box">
                            <a href="#" className="ti-a">
                                {/* model */}
                                <img src={post.attributes.image} className="circular-image" />
                                {/* header */}
                                <h2>{post.attributes.title}</h2>
                                <p>by {post.attributes.author}</p>
                            </a>
                        </div>
                    </div>
            )
        })

        return (
            console.log("this issue - ", props.posts),
    
            <div className="ticrsl" >
                <h1>THIS ISSUE</h1>
                <Slider {...settings} >
                    {cItems}
    
                </Slider>
            </div>
        );
        
    } else {
        return(<div></div>)
    }

    
}

export default thisIssue;