import memesdata from '../memesdata'

export default function Meme() {
  function getMemeImg() {
    const memesArray = memesdata.data.memes
    const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)]
    const Url = randomMeme.url

    console.log(Url)
  }

  return (
    <main>
      <div className="form">
        <div className="input-group">
          <input type="text" placeholder="Top text" />
          <input type="test" placeholder="Boottom text" />
        </div>
        <button onClick={getMemeImg} className="meme-button">Get a new meme image🖼️</button>
      </div>
    </main>
  )
}