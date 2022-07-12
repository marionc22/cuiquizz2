import React from 'react';
const NombreJoueurs = (props) => {
        const changeNbPlayers = (e) => {
            props.setNbJoueurs(e.target.value);
                       }
       return (
       <div>
            <form onChange={changeNbPlayers}>
           <input type="radio" name="nmpl" value={true} id="2" />
           <label for="2">
           2
           </label>
           <input type="radio" name="nmpl" value={false} id="3" />
           <label for="3">
     3
           </label>
           <button type={"button"} onClick={() => props.setDisplayNb(false)} > C'est parti!</button>
         </form>
       </div>
     );
   };
export default NombreJoueurs;