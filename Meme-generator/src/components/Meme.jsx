import React from "react";
import "./meme.css";


function Meme(){
    return(

        <div className="meme__container">
            <div className="meme">
            <form className="meme__form">
                <input type="text"  id="top_text" name="top_text>" placeholder="Top text"></input>
                <input type="text"  id="bottom_text" name="bottom_text>" placeholder="Bottom text"></input>
            </form>
            <button className="meme__button">Get a new meme image</button>

            <div className="meme__box">
                <img src="src/assets/images/memeimg.png"  className="meme__box-img"></img>
                <div className="meme__box-top_text">SHUT UP</div>
                <div className="meme__box-bottom_text"> AND TAKE MY MONEY</div>
            </div>
        </div>
        </div>

    )
}

export default Meme;