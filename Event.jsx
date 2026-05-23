
function Event()
{
    const myclick=()=>
    {
        alert("hello")
    }
    return(
        <>
            <button onClick={myclick()}>Click here</button>
        </>
    )
}export default Event;
