import React, {useState,useEffect} from "react";
import "./meme.css";



function Meme(){

    // const [url, setUrl] = useState("src/assets/images/memeimg.png")
    const [meme, setMeme] = useState({
        topText: "",
        bottomText : "",
        randomImage : "src/assets/images/memeimg.png"
    })

    const [allMemes, setAllMemes] = useState([]);

    

    function getMemeImg(){
        
        const randNum= Math.floor(Math.random()* allMemes.length);
        const memeUrl= allMemes[randNum].url;
        setMeme(prevState => {
            return{
                ...prevState,
                randomImage: memeUrl
            }  
        } );
        
    }
    function handleChange(event){
        const {name, value} = event.target
        setMeme((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((data) => setAllMemes(data.data.memes))

    },[])



    // let randomMeme= {memesData.data}
    return(

        <div className="meme__container">
            <div className="meme">
                <div className="meme__form">
                    <input 
                        type="text"  
                        name="topText" 
                        placeholder="Top text"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                        
                    <input 
                        type="text" 
                        name="bottomText" 
                        placeholder="Bottom text"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button type="buton" className="meme__button" onClick={getMemeImg}>Get a new meme image 🖼️</button>

                <div className="meme__box">

                    <img src={meme.randomImage}  className="meme__box-img"></img>
                    <div className="meme__box-top_text">{meme.topText}</div>
                    <div className="meme__box-bottom_text"> {meme.bottomText}</div>
                </div>
            </div>
        </div>

    )
}

export default Meme;