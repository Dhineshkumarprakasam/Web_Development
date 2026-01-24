import { useRef } from "react";
// as react uses vdom it is not recommeded to use normal dom. which might not work onrendering
// useRef is used to perform the dom operations
const Ref = () =>{

    const inputRef = useRef();
    const displayRef = useRef();

    function handleInput(){
        displayRef.current.innerHTML = inputRef.current.value;
    }

    return (
        <div className="container mt-5">
            <input ref={inputRef} type="text" onChange={handleInput} className="form-control" />

            <h4>
                Output : <span ref={displayRef}></span>
            </h4>
        </div>
    )
}

export default Ref;