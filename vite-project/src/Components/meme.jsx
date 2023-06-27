import {useState} from "react"
import memesdata from '../memesdata'

export default function Meme() {
  const [memeImage, setMemeImage] = useState("")
  
  function getMemeImg() {
    const memesArray = memesdata.data.memes
    const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)]
    setMemeImage(randomMeme.url)
    
    console.log(setMemeImage)
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
        <img src={memeImage} className="meme-img"></img>
      </div>
    </main>
  )
}