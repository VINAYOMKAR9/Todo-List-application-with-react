const TodoList = ({todo,handleToggle,handleDelete})=>{
    return (  <div>
    {
        todo.map((el)=>{
            return ( <div 
                key={el.id} 
                style={{
                backgroundColor:el.status?'lightgreen':'yellow', 
                padding:'3px', 
                margin: '4px'}}>
                    <h1>{el.id}</h1>
                <h4>
                {el.title}
                </h4>
                <p>{el.status? 'Completed' : 'Active'}</p>
                <button onClick={()=>handleToggle(el.id)}>Toggle Status</button>
                <button onClick={()=>handleDelete(el.id)}>Delete</button>
                </div>
            )
        })
    }
    </div>
    )
}


const Todo = ()=>{
    const[text,setText] = React.useState('')
    const[todo,setTodo] = React.useState([ {id: 1 ,title:'Todo 1',status:true},])

    const handleChange = (event)=>{
        let val = event.target.value;
        setText(val)
    }


    const handleClick=()=>{
        const obj={
            id: todo.length + 1,
            title:text,
            status:false
        }
        setTodo([...todo,obj]);
        setText('');
    }
    console.log(todo)
   
    let handleToggle=(id)=>{
        let toggleData = todo.map((el)=>el.id == id ? {...el,status : !el.status} : el);   
        setTodo(toggleData)
    }

    const handleDelete=(id)=>{
        let filteredData = todo.filter((el) => el.id != id)     
        setTodo(filteredData)
    }

    
        return( <div>
            <h1>TODO</h1>
            <input type='text'
            placeholder='Enter TODO' 
            value={text}
            onChange={handleChange} 
            />
        <button onClick={handleClick}>Add</button>
        <div>
            <TodoList todo={todo} handleToggle={handleToggle} handleDelete={handleDelete}/>
        </div>
  
    </div>

    );
};







const App =() =>{
    return (
        <>
        <Todo/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)