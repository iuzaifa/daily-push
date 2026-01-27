


 function withParamFunction(fruit) {
   setTimeout(() => {
     alert("Param Function Called param is 1: " + fruit);
   }, 1);
 }

function ClickEventAndFunctionCall (){

   function noParamFunction(){
        alert ("No Param Function Called")
   }

   function withParamFunction (fruit){
    setTimeout(() => {
        alert("Param Function Called param is 2: " + fruit);
    }, 1)
   }
    return (
        <>
            <h1>Event and Function </h1>

            <button onClick={()=> noParamFunction() }>No Param Btn</button>
            <hr />
            <button onClick={()=> withParamFunction("Apple")}>With Param Btn</button>

        </>
    )
}

export default ClickEventAndFunctionCall;