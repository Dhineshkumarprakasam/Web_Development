import { useActionState } from 'react';

const App = () =>{
  function handleTaskSubmit(previousState,formData){
    const type = formData.get("type");
    const name = formData.get("name");
    const deadline = formData.get("deadline");
    const obj = {taskName : name,taskDeadline : deadline};

    if(type=="add"){
      return [...previousState,obj]
    }
    
    return previousState.filter(task=>task.taskName!=name);
  }

  

  const initialTaskData = [];
  const [taskData,formAction,isPending] = useActionState(handleTaskSubmit,initialTaskData);
  return (
    <>
      <div className="container mt-5">
        <form action={formAction}>
          <input type="hidden" name="type" value="add"/>
          <div className="row mt-2">
            <label htmlFor="" className="form-label">Task Name</label>
            <input name='name' type="text" className="form-control"/>
          </div>

          <div className="row mt-3">
            <label htmlFor="" className="form-label">Deadline</label>
            <input name="deadline" type="datetime-local" className="form-control"/>
          </div>

          <div className="row mt-3">
            <button type="submit" className="btn btn-outline-success" disabled={isPending}>{isPending? "Submitting.." : "Submit"}</button>
          </div>
        </form>

        <center>
          <table className='table mt-5 text-center'>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Task Deadline</th>
              <th>Delete Task</th>
            </tr>
          </thead>
          
          <tbody>
            {
              taskData.map((data)=>{
                return (
                  <tr>
                    <td>{data.taskName}</td>
                    <td>{data.taskDeadline}</td>
                    <td>
                      <form action={formAction}>
                        <input type="hidden" name="type" />
                        <input type="hidden" name="name" value={data.taskName} />
                        <input type="hidden" name="deadline" value={data.taskDeadline} />
                        <button className='btn btn-outline-danger' type='submit'>Delete</button>
                      </form>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        </center>
      </div>
    </>
  )
}

export default App;
