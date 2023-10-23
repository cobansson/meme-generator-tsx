import { useState, useEffect } from "react";
import { Meme, MemeData } from "./Interface";

export default function Main() {
  const [meme, setMeme] = useState<Meme>({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState<MemeData[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.imgflip.com/get_memes", {
        method: "GET",
      });
      const data = await response.json();
      const memes = data.data.memes as MemeData[];
      setAllMemes(memes);
    })();
  }, []);

  const randomIndex: number = Math.floor(Math.random() * allMemes.length);
  const randomUrl: string =
    allMemes.length > 0 ? allMemes[randomIndex].url : "";

  const updateMeme = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const getMemeImg = (): void => {
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomUrl,
    }));
  };

  return (
    <main>
      <div className="form">
        <div className="input-container">
          <input
            type="text"
            placeholder="Top text"
            name="topText"
            onChange={updateMeme}
          />
          <input
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            onChange={updateMeme}
          />
        </div>
        <button onClick={getMemeImg}>Get a new meme image</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
