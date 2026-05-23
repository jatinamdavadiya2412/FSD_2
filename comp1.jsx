import img1 from './assets/hero.png'
import "./Myapp.css"

function Comp1()
{
    var n="ABC"
    var c={color:"red",textTransform:"uppercase" ,fontSize:"30px"}    
    return(
        <>
            <h1 style={{color:"blue",fontSize:"50px"}}>hii {n} </h1>
            <h2 style={c}>hello</h2>           {/*  2 {{}} compalsory */}

        <img src={img1} className='i1'/>
        <input type="email" />

        {/* comments */}
        </>
    )
}
export default Comp1;