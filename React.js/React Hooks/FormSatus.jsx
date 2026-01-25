import {useFormStatus} from "react-dom";

function SubmitButton(){
    const {pending} = useFormStatus();
    return <button disabled={pending} className="btn btn-outline-primary mt-3" type="submit">{pending?"Submitting..":"Submit"}</button>
}

const FormStatus = () =>{
    async function handleSubmit(props){
        await new Promise((resolve,reject)=>setTimeout(resolve,3000));
        console.log(props.get("username"));
    }

    return (
        <>
            <div className="container mt-5">
                <form action={handleSubmit}>
                    <div className="row">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" name="username" className="form-control"/>
                    </div>

                    <div className="row">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control"/>
                    </div>
                   <div className="row">
                    <SubmitButton/>
                   </div>
                </form>
            </div>
        </>
    );
}

export default FormStatus;