function Event2()
{
    const handlesubmit=(e)=>
    {
        e.preventDefault()
        var u=document.getElementById('un').value
        alert(`welcome ${u}`)
    }
    const handlechange=(e)=>
    {
        document.getElementById('text').innerHTML=e.target.value
        console.log(e.target.value)
    }
    const handledoubleclick=()=>
    {
        alert("you clicked twice")
    }
    const handleclick=()=>
    {
        console.log("you clicked once")
    }
    return(
        <>
            <h1>handle change and submit</h1>
            <form onSubmit={handlesubmit}>
                <input type="text" id="un" onChange={handlechange}/>
                <input type="submit" />
            </form>
            <h3 id="text"></h3>
            <button onDoubleClick={handledoubleclick} onClick={handleclick}>click here</button>
        </>
    )
}export default Event2;