import './Mine.css';
import Multiplier, {playAudio} from './Utilities';
// import { useMedia } from 'react-responsive'
import { useEffect } from 'react';

function Mine() {
    const mines = Array(25).fill(false);
    let count = 0;
    let mult = 0;

    function TileSetup() {
        mines.fill(false);

        let mineIndex = Math.floor(Math.random() * 25);
        console.log(mineIndex);
        mines[mineIndex] = true;
        mult = 1.00;
        count = 0;
        document.getElementsByClassName('multiplier')[0].innerHTML = "";
        document.querySelectorAll('.button').forEach(button => {
            button.style.backgroundColor = '#2F4551';
            button.disabled = false;
            document.getElementsByClassName('resetButton')[0].style.backgroundColor = "gray";
        });
    }

    function onTileClick(event) {
        let mineIndex = (event.target.id);

        if (!mines[parseInt(mineIndex, 10)]) {
            event.target.style.backgroundColor = "#00E701";
            event.target.disabled = true;
            count++;
            let mult = Multiplier(count, 1);
            document.getElementsByClassName('multiplier')[0].innerHTML = "Multiplier: " + mult.toFixed(2);
            playAudio("src/assets/gemAudio.m4a");
            if (count == 24) {
                playAudio("src/assets/victory.m4a");
                document.querySelectorAll('.button').forEach(button => {
                    button.disabled = true;
                })
                document.getElementsByClassName('resetButton')[0].style.backgroundColor = "#00E701";
            }
        } 
        else {
            event.target.style.backgroundColor = '#ff0000';
            document.querySelectorAll('.button').forEach(button => {
                button.disabled = true;
            })
            document.getElementsByClassName('resetButton')[0].style.backgroundColor = "#00E701";
            document.getElementsByClassName('multiplier')[0].innerHTML = "";
            playAudio("src/assets/mineAudio.m4a");
        }
    }

    useEffect(() => {
        TileSetup();
    }, []);

    return (
        <div className='container'>
            <audio src="src/assets/gemAudio.m4a" id="gemsound" preload='auto'></audio>
            <audio src="src/assets/mineAudio.m4a" id="minesound"></audio>
            <div className='row'>
                <button className='button' id='0' onClick={onTileClick}></button>
                <button className='button' id='1' onClick={onTileClick}></button>
                <button className='button' id='2' onClick={onTileClick}></button>
                <button className='button' id='3' onClick={onTileClick}></button>
                <button className='button' id='4' onClick={onTileClick}></button>
            </div>
            <div className='row'>
                <button className='button' id='5' onClick={onTileClick}></button>
                <button className='button' id='6' onClick={onTileClick}></button>
                <button className='button' id='7' onClick={onTileClick}></button>
                <button className='button' id='8' onClick={onTileClick}></button>
                <button className='button' id='9' onClick={onTileClick}></button>
            </div>
            <div className='row'>
                <button className='button' id='10' onClick={onTileClick}></button>
                <button className='button' id='11' onClick={onTileClick}></button>
                <button className='button' id='12' onClick={onTileClick}></button>
                <button className='button' id='13' onClick={onTileClick}></button>
                <button className='button' id='14' onClick={onTileClick}></button>
            </div>
            <div className='row'>
                <button className='button' id='15' onClick={onTileClick}></button>
                <button className='button' id='16' onClick={onTileClick}></button>
                <button className='button' id='17' onClick={onTileClick}></button>
                <button className='button' id='18' onClick={onTileClick}></button>
                <button className='button' id='19' onClick={onTileClick}></button>
            </div>
            <div className='row'>
                <button className='button' id='20' onClick={onTileClick}></button>
                <button className='button' id='21' onClick={onTileClick}></button>
                <button className='button' id='22' onClick={onTileClick}></button>
                <button className='button' id='23' onClick={onTileClick}></button>
                <button className='button' id='24' onClick={onTileClick}></button>
            </div>
            <div className='details'>
                <button onClick={TileSetup} className='resetButton'>Reset</button>
                <p className='multiplier'></p>
            </div>
        </div>
    );
}

export default Mine;
