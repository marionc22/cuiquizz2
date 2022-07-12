import React from "react";

const Setup1 = (photo) => {

     const changePhoto = (e) => {
      
                photo.setChoice(e.target.value);
                console.log(photo.choice);
                
                    }
    
    return (
    <div className="affichage">

         <form onChange={changePhoto}>

        <input type="radio" name="julien" value={photo.player1setup} id="julien" />
        <label for="julien">
          {" "}
          <img src={photo.player1setup} />{" "}
        </label>

        <input type="radio" name="julien" value={photo.player2setup} id="rey" />
        <label for="rey">
          {" "}
          <img src={photo.player2setup} />{" "}
        </label>

        <input type="radio" name="julien" value={photo.player3setup} id="marion" />
        <label for="marion">
          {" "}
          <img src={photo.player3setup} />{" "}
        </label>
      </form>
    </div>
  );
};

export default Setup1;

