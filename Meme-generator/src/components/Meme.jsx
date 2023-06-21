import React, {useState} from "react";
import "./meme.css";
import memesData from "../memesData.js";


function Meme(){

    // const [url, setUrl] = useState("src/assets/images/memeimg.png")
    const [meme, setMeme] = useState({
        topText: "",
        bottomText : "",
        randomImage : "src/assets/images/memeimg.png"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    

    function getMemeImg(){
        const memesArray = allMemeImages.data.memes;
        const randNum= Math.floor(Math.random()* memesArray.length);
        const memeUrl= memesArray[randNum].url;
        setMeme(prevState => {
            return{
                ...prevState,
                randomImage: memeUrl
            }
        } );
        
    }

    // let randomMeme= {memesData.data}
    return(

        <div className="meme__container">
            <div className="meme">
            <div className="meme__form">
                <input type="text"  id="top_text" name="top_text>" placeholder="Top text"></input>
                <input type="text"  id="bottom_text" name="bottom_text>" placeholder="Bottom text"></input>
            </div>
            <button className="meme__button" onClick={getMemeImg}>Get a new meme image 🖼️</button>

            <div className="meme__box">
                <img src={meme.randomImage}  className="meme__box-img"></img>
                <div className="meme__box-top_text">SHUT UP</div>
                <div className="meme__box-bottom_text"> AND TAKE MY MONEY</div>
            </div>
        </div>
        </div>

    )
}

export default Meme;