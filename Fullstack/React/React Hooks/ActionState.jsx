import { useActionState } from "react";
// for form controling
const ActionState = () =>{

    async function submit(previousState,formData){
        let curr = formData.get("username");
        await new Promise((resolve,reject)=> setTimeout(resolve,3000));
        if (previousState.username==curr){
            return {username:"again",password:"again",message:"again",attempts:100}
        }
        return {username:curr,password:"1234",message:"hi dhinesh",attempts:10};
    }

    const initialState = {username:"",password:"",message:"",attempts:0};
    const [state,formAction,isPending] = useActionState(submit,initialState);

    return (
        <>
            <div className="container mt-5">
                <form action={formAction}>
                    <div className="row">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="row">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <button className="btn btn-outline-primary mt-3" type="submit">{isPending?"submitting...":"submit"}</button>
                </form>
            </div>

            <div>
                <ul>
                    <li>{state.username}</li>
                    <li>{state.password}</li>
                    <li>{state.message}</li>
                    <li>{state.attempts}</li>
                </ul>
            </div>
        </>
    );
}

export default ActionState;
