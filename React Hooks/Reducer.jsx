import { useReducer } from "react";

const Gap = ()=>{
    return <span style={{display:"inline-block",minWidth:"10px"}}></span>
}

const Reducer = () =>{
    function counterReducer(state,action){
        switch(action){
            case "inc":
                return state+1
            case "dec":
                return state-1;
            case "reset":
                return 0;
        }
    }

    const [counterState,counterDispatch] = useReducer(counterReducer,0);
    return (
        <>
            <center>
                <h3>{counterState}</h3>
                <button onClick={()=>counterDispatch("inc")}>Increment</button> <Gap/>
                <button onClick={()=>counterDispatch("dec")}>Decrement</button> <Gap/>
                <button onClick={()=>counterDispatch("reset")}>Reset</button> <Gap/>
            </center>
        </>
    )
}

export default Reducer;