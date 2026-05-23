function Child(props)
{
    return(
        <>
        <h1>Surname: {props.surname}</h1>
        <h2>Age: {props.age}</h2>
        <h3 style={{color:"blue",textDecoration:"underline"}}>Welocome! {props.data.clg}</h3>

        </>
    )
}
export default Child