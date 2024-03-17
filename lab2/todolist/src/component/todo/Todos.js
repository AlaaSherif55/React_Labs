import './Todos.css'
import  {Fragment, useState} from 'react'
import Todo from '../../reusableComponent/div/Todo'

function Todos() {
    
   const [todoList, setTodoList] = useState([]);

   const [todoContent, setTodoContent ]= useState("");

   const handelAddEvent = () => {
       const newtodo ={
        id: todoList[todoList.length-1]?.id+1||0,
        content:todoContent
       };
       console.log(newtodo.id)
        //    todoList.push(newtodo);
        //    setTodoList(todoList)
       setTodoList([...todoList,newtodo])
   };

   const handleTodoContent = (event) =>{
    setTodoContent(event.target.value)
   };
   
   const handleDeleteTodo = (id)=>{
    setTodoList(todoList.filter(todo => todo.id !== id));
   };
    return (
     <>
        <div class="container-fluid bg-light">
            <div class="container bg-light">

                <div class="row mt-4" >
                    <div class="col"></div>
                    <div class="col-md-6 bg-white shadow">
        
                    
                        <div class="card bg-warning mt-4">
                            <h4 class="text-white p-3 pt-2 pb-2">To Do App</h4>
                        </div>
                        
                        <div class="shadow">
                            <div class="input-group p-4">
                                <input type="text" class="form-control" placeholder="Enter task " name="task" onChange={handleTodoContent} ></input>
                                <button class="btn btn-outline-success" type="button"  onClick={handelAddEvent} >+</button>
                            </div>
                        </div>
                          
                        <h4 class="text-primary mt-4">Tasks :</h4>
                            <div >
                               {todoList.map((todo, index) => (
                                    <Fragment key={`todo-${index}`}>
                                        <Todo key={index} content={todo.content} handleDeleteTodo={handleDeleteTodo} todoId={todo.id}></Todo>
                                    </Fragment>
                                ))}
                            </div>
                        
                    </div>
                    <div class="col"></div>
                </div>

            </div>
        </div>
     </>

    );
  }


  export default Todos;
  