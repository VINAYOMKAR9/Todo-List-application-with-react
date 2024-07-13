




const Counter = ()=>{
    const items = ['a','b','c','d']
return(
    <>
    {
      items.map((el, i) => {
        return (
          <>
          <ul><li> {el} </li> </ul> 
          </>
        )
    }
        </>


   
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