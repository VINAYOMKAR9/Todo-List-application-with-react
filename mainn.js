const TodoList = ({todo})=>{
    return (  <div>
    {
        todo.map((el)=>{
            return ( <div key={el.id}>
                <h4>
                {el.title}
                </h4>
                <p>{el.status? 'Completed' : 'Active'}</p>
                </div>
            )
        })
    }

    </div>
    )
}




const Todo = ()=>{
    const[text,setText] = React.useState('')
    const[todo,setTodo] = React.useState([{id:1,title:'Todo 1',status:true}])

    const handleChange = (event)=>{
        let val = event.target.value;
        setText(val)
    }


    const handleClick=()=>{
        const obj={
            id: todo.lenght + 1,
            title:text,
            status:false
        }
        setTodo([...todo,obj]);
        setText('');
        
        
        console.log(todo.lenght)
    }
    console.log(todo)
    
    return( <div>
        <h1>TODO</h1>
        <input type='text' placeholder='Enter TODO' value={text} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
        <div>
            <TodoList todo={todo} />
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