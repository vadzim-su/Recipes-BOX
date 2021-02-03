import React from "react";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__wrapper">
        <h1 className="welcome__title"> The best recipe App</h1>
        <h2 className="welcome__save">
          You can save your favorite recipes here
        </h2>
        <p className="welcome__description">
          These days, you can use your phone and tablet to pull up a recipe for
          any dish: Mexican, Italian, Lebanese, or any other cuisine you can
          dream of. <br />
          There’s no shortage of freemium and reasonably priced recipe apps. To
          help you cut through the noise, we’ve rounded up a handful of our
          favorites, so you can get your grub on without wasting time on duds
          that are loaded with more ads than info.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
