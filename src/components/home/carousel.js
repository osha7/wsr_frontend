import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function carousel(props) {
    let settings = {
        arrows: true,
        // prevArrow:"<img className='a-left control-c prev slick-prev' src='carouselImages/arrow-left.png'>",
        // nextArrow:"<img className='a-right control-c next slick-next' src='carouselImages/arrow-right.png'>",
        dots: false,
        infinite: true, 
        speed: 600,
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
    return (
        <div className="carousel-top" >
            <Slider {...settings} >
            
                <div className="carousel-wrapper" >
                    <div className="box">
                        <a href="/point-counterpoint" className="crsltop">
                            {/* model */}
                            <img src="carouselImages/PointCounterPoint.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>POINT-COUNTERPOINT</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="capital-connections" className="crsltop">
                            <img src="carouselImages/CapitolConnections.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>CAPITAL CONNECTIONS</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/the-digital-domain" className="crsltop">
                            <img src="carouselImages/DigitalDomains.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>THE DIGITAL DOMAIN</h2>
                        </a>
                    </div>
                </div>

                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/letters-from-larry" className="crsltop">
                            <img src="carouselImages/LettersFromLarry.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>LETTERS FROM LARRY</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/wallet-share" className="crsltop" >
                            <img src="carouselImages/WalletShare.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>WALLET SHARE</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/Dramatis-Personae" className="crsltop">
                            <img src="carouselImages/DramatisPersonae.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>DRAMATIS PERSONAE</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/Investment-Solutions-and-Gatekeepers" className="crsltop">
                            <img src="carouselImages/InvestmentSolutions&Gatekeepers.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>INVESTMENT SOLUTIONS AND GATEKEEPERS</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="//Bizarre-Industry-Bazaar" className="crsltop">
                            <img src="carouselImages/BizarreIndustryBazaar.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>BIZARRE INDUSTRY BAZAAR</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/newsmakers-roundup" className="crsltop">
                            <img src="carouselImages/NewsMakersRoundUp.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>NEWSMAKERS ROUNDUP</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/On-The-Rise" className="crsltop">
                            <img src="carouselImages/OnTheRise.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>ON THE RISE</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/Buy-It-Or-Build-It" className="crsltop">
                            <img src="carouselImages/BuyItOrBuildIt.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>BUY IT OR BUILD IT?</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/Nightmare-On-Compliance-St" className="crsltop">
                            <img src="carouselImages/NightmareOnCompSt.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>NIGHTMARE ON COMPLIANCE ST</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        <a href="/Beltway-And-Beyond" className="crsltop">
                            <img src="carouselImages/Beltway&Beyond.png" className="top-carousel-model" alt=""/>
                            {/* model */}
                            {/* header */}
                            <h2>BELTWAY AND BEYOND</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/Shout-Outs-And-Put-Downs" className="crsltop">
                            <img src="carouselImages/ShoutOuts.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>SHOUT-OUTS & PUT DOWNS</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/transactions-and-transitions" className="crsltop">
                            <img src="carouselImages/Transactions&Trans.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>TRANSACTIONS AND TRANSITIONS</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/CyberCrypt-Tales" className="crsltop">
                            <img src="carouselImages/CryptTales.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>CYBERCRRYPT TALES</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/People-Moves" className="crsltop">
                            <img src="carouselImages/PeopleMoves.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>PEOPLE MOVES</h2>
                        </a>
                    </div>
                </div>
                <div className="carousel-wrapper" >
                    <div className="box">
                        {/* model */}
                        <a href="/Cast-And-Crew" className="crsltop">
                            <img src="carouselImages/Cast&Crew.png" className="top-carousel-model" alt=""/>
                            {/* header */}
                            <h2>CAST & CREW</h2>
                        </a>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default carousel;