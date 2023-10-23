import TrollFace from "./images/troll-face.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo-and-title-container">
          <img src={TrollFace} />
          <h1>Meme Generator</h1>
        </div>
        <p>TypeScript React - Project 3</p>
      </nav>
    </header>
  );
}
