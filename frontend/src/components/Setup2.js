import React from "react";
const Setup2 = (photo) => {
     const changePhoto = (e) => {
                photo.setChoice2(e.target.value);
                    }
    return (
    <div className="affichage">
         <form onChange={changePhoto}>
        <input type="radio" name="julien" value={photo.player1setup} id="julien"  className="blabla"/>
        <label for="julien">
          {" "}
          <img src={photo.player1setup} alt="player1" />{" "}
        </label>
        <input type="radio" name="julien" value={photo.player2setup} id="rey"  className="blabla"/>
        <label for="rey">
          {" "}
          <img src={photo.player2setup} alt="player2" />{" "}
        </label>
        <input type="radio" name="julien" value={photo.player3setup} id="marion"  className="blabla"/>
        <label for="marion">
          {" "}
          <img src={photo.player3setup} alt="player3" />{" "}
        </label>
        <input type="radio" name="julien" value={photo.player4setup} id="pigeon"  className="blabla"/>
        <label for="pigeon">
          {" "}
          <img src={photo.player4setup} alt="player4" />{" "}
        </label>
      </form>
    </div>
  );
};
export default Setup2;