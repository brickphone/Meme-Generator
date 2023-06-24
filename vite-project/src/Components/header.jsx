import Troll from '../assets/troll.png'

export default function Header() {
  return (
    <nav>
      <div className="navbar">
        <img className='trollface' src={Troll} alt="trollface"></img>
        <h2 className='navbar-title'>Meme Generator</h2>
        <h3 className='navbar-p'>React Course - Project 3</h3>
      </div>
    </nav>
  )
}