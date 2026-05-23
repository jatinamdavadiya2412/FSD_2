import Child from "./Child.jsx"
function Parent()
{
    var obj ={name:"Test",clg:"lju"}
    return(
        <>
        <Child surname={n} age="20"/>
        <Child surname="xyz" age={23}/>
        <child data={obj}></child>
        </>
    )
}export default Parent


