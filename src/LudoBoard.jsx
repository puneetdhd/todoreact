import {useState} from 'react'


export default function LudoBoard(){

    let [moves,setMoves]=useState({blue:0 , red:0 , green:0 , yellow:0});

    
// we put all the players in a single object rather making
//multiple state varr coz it is easier and does not req mroe
//initialization

    let [arr,SetArr]=useState(["no moves"]);



    let updateBlue=()=>{
        
        console.log(`moves=${moves.blue}`);
      //  setMoves({...moves, blue:moves.blue+1});
        
        
       //... tells too pass on the object as spread helps js know the changes

        //calllback
        
        // setMoves((prevMoves)=>{
        // return({...prevMoves, blue:prevMoves.blue+1})
        // });

        // arr.push("blue moves");
        // or we will spread and use
        SetArr((prevArray)=> {return[...arr,"blue moves"]});
        console.log(arr);
        
    }
;

    return(
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">

                <p>Blue moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}}  onClick={updateBlue}>+1</button>
                <p>Yellow moves={moves.yellow}</p>
                <button style={{backgroundColor:'yellow'}}>+1</button>
                <p>Red moves={moves.red}</p>
                <button style={{backgroundColor:"red"}}>+1</button>
                <p>Green moves={moves.green}</p>
                <button style={{backgroundColor:"green"}}>+1</button>
            </div>
        </div>

    )
}

