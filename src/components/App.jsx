import React from "react";
import Emoji from "./emoji";
import emojipedia from "../emojipedia";

function CreateEmoji(emoji) {
  return (
    <Emoji
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(CreateEmoji)}
    </div>
  );
}

export default App;
