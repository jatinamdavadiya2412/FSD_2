function Map()
{
    const students=[{rollno:1,name:"JATIN",std:5},{rollno:2,name:"JAYNIL",std:5},{rollno:3,name:"KRISHNA",std:5}]
    return(
        <>
        vbnj
        {students.filter((s)=>
        s.std===5).map((s,i)=>
            <div key={s.rollno}>
                <h2>student name:{s.name}</h2>
                <h3>standard :{s.std+1}</h3>
            </div>
            )}
        </>
    )
    }
export default Map