import React, { useState, useEffect } from "react";
import "./emojirain.css";

const EmojiRain = () => {
  const [emojis, setEmojis] = useState([]);

  const createEmoji = (x, y) => {
    const emoji = <div className="emoji">💊</div>;
    setEmojis((prevEmojis) => [
      ...prevEmojis,
      { emoji, x, y }
    ]);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      createEmoji(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className="emoji-fall"
          style={{ top: emoji.y, left: emoji.x }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  );
};

export default EmojiRain;
