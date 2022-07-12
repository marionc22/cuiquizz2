import React from 'react';
import TableauRecap from './TableauRecap';
import loadingGif from "./What.gif"
import fireWork from "./fireworks.gif"
import fireWork2 from "./fireworks2.gif"
const Popup = (props) => {
    function refreshPage() {
        window.location.reload(false);
          }
    let [cavasafficherunjour, setCavsafficherunjour] = React.useState(false)
    const affichage = () => {setCavsafficherunjour(!cavasafficherunjour)}
    return (
            <div className='popup'>
                <h1>FELICITATIONS {props.joueur} !!!</h1>
                <div feugif>
                    <img src={fireWork} id="fireworks" alt="fireworks"></img>
                    <img src={loadingGif} className="giffinal" alt="giffinal"></img>
                    <img src={fireWork2} id="fireworks" alt="fireworks"></img>
                </div>
                <div className="doublearthur">
                    <img src='./arthur.png' id="arthur" alt="arthur"></img>
                    <button className='buttonpop' onClick={refreshPage}>RESTART</button>
                    <button className='buttonpop' onClick={affichage} >RECAP</button>
                    <img src='./arthur2.png' id="arthur2" alt="arthur2"></img>
                </div>
                {cavasafficherunjour ? <div> <TableauRecap recap={props.recap} /> </div>  : null}
                </div>
    );
};
export default Popup;