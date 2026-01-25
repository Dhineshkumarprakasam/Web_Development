import useFetch from "./CustomHook";
import { useState } from "react";

const App = () =>{
  const [input,setInput] = useState("");
  const [data,error,loading] = useFetch(input);

  function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    setInput(formData.get("property"));
  }

  return (
    <div className="container mt-5">
      <center>
        <form onSubmit={handleSubmit} className="w-50">
          <div className="row mt-3">
            <input type="text" name="property" id="" className="form-control" />
          </div>
          <div className="row mt-3">
            <button type="submit" className="btn btn-success" disabled={loading}>{loading?"Submitting" : "Submit"}</button>
          </div>
        </form>
      </center>

      <div className="mt-5">
        <h3 className="text-center mb-3">Result : {input}</h3>
        {error && (
          <p className="text-danger text-center">
            {error.message || "Something went wrong"}
          </p>
        )}

        {loading && (
          <div className="text-center"><div className="spinner-border text-primary"></div></div>
        )}
          {
            data && data.map((data)=>(
              <li key={JSON.stringify(data)}>{JSON.stringify(data)}</li>
            ))
          }
      </div>
    </div>
  );
}

export default App;
