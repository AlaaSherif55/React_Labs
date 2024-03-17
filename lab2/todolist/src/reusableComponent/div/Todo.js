import './Todo.css'
function Todo({content,handleDeleteTodo,todoId}) {
    return (
        <div class="m-2">
            <div class="p-2 shadow border" id="tasks">
                <div class="input-group row ps-3">
                    <div class="card col-md-10 border-0">{content}</div>
                    <div class="btn btn-outline-danger col" onClick={()=>handleDeleteTodo(todoId)} >X</div>
                </div>
            </div>   
        </div>
    );
  }
  
  export default Todo;
  