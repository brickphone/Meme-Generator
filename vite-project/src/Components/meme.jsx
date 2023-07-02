import {useState} from "react"
import memesData from '../memesdata'

export default function Meme() {
  
  const [meme, setMeme] = useState(
    {
      topText:"",
      bottomText:"",
      randomImage:"http://i.imgflip.com/1bij.jpg"  
    }
  )
  
  const [allMemeImages, setAllMemeImages] = useState(memesData) 

  function getMemeImg() {
    const memesArray = allMemeImages.data.memes
    const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)]
    const url = randomMeme.url
    console.log(`Getting random image ${url}`)
    
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <main>
      <div className="form">
        <div className="meme-container">
          <div className="input-group">
            <input type="text" placeholder="Top text" />
            <input type="test" placeholder="Boottom text" />
          </div>
            <button onClick={getMemeImg} className="meme-button">Get a new meme image🖼️</button>
        </div>
        <img src={meme.randomImage} className="meme-img"></img>
      </div>
    </main>
  )
}