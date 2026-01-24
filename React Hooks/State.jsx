import { useState } from "react";
const State = ()=>{
 
    const [bg,setBg] = useState("white");
    const [color,setColor] = useState("Empty");
    const handleInput=(event)=>{
        let text = event.target.value;
        setColor(text);
        setBg(text);
    }

    return(
        <>
            <center>
                <div className="boxStyle" style={{backgroundColor:bg}}>
                    <h5>{color}</h5>
                </div>

                <input onChange={handleInput} type="text" id="colorBox"/>
                <button>Toggle Text</button>
            </center>
        </>
    )
}

export default State;