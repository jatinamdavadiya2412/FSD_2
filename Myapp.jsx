// ch 7 and 8 
// M: 10 and 15 
// 7: 5 mark code    1 code routing of frontend
// 8: 10 mark code   2 code of hooks

// npm config set proxy http://192.168.10.251:808
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass (when first line was not working)
// npm create vite@latest (myapp,react,javascript,yes) note: 5713 port number
// npm create vite@latest myapp -- --template react   (to create app)
// npm run dev -- --port 3000    (for use personal port number)  development        


 import Task from "./Task.jsx"

// function Myapp()
// {
//     return(
//         <>
//         <Task/>
//         </>
//     )
// }
// export default Myapp

import Child from "./Child.jsx"
import Parent from "./Parents.jsx"
import Event from "./Event.jsx"
import Event2 from "./Event2.jsx"
import My from "./Router/My.jsx"
function Myapp()
{
    return(
        <>
        <My/>
        </>
    )
}
export default Myapp

