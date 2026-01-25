import { createContext, useContext, useState } from "react";
// used to share data without using props. accros multiple components

const UserContext = createContext(null);

const RegisterUser = () =>{
    const {user,setUser} = useContext(UserContext);

    function handleSubmit(formData){
        const username = formData.get("username");
        const emailid = formData.get("email");
        setUser({name:username,email:emailid});
    }

    return (
        <div className="container mt-5">
                <form action={handleSubmit}>
                    <div className="row">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" name="username" className="form-control"/>
                    </div>

                    <div className="row">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control"/>
                    </div>
                   <div className="row">
                    <button type="submit" className="btn btn-outline-primary mt-3">Submit</button>
                   </div>
                </form>
            </div>
    )
}

const Profile = ()=>{
    const {user} = useContext(UserContext);
    return (
        <center>
            <div className="mt-5">
            <h4>Profile accessing Data</h4>
            <h3>Name : {user.name}</h3>
            <h3>Email : {user.email}</h3>
        </div>
        </center>
    )
}

const Context = () =>{
    const [user,setUser] = useState({name:"",email:""});
    return (
        <>
            <UserContext value={{user,setUser}}>
                <RegisterUser/>
                <Profile/>
            </UserContext>
        </>
    )
}

export default Context;