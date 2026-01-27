
function Todo() {

    function helloFun(){
        alert("Hello JSX Function ")
    }
    return (
      <>
        <div style={{width : "270px", margin : "auto" ,  border : "1px solid gray", padding : "30px"}}>
          <h2>Mohammad Huzifa Todos</h2>
          <img src="cat.png" alt="cate" />
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>

          <button onClick={() => helloFun()} >Click Me</button>
        </div>
      </>
    );
}

export default Todo;