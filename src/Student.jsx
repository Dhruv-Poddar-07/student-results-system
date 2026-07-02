import React,{useState} from 'react'

function Student({addStudent}) {

    const [name,setName]= useState("")
    const [roll,setRoll]= useState("")
    const [eng,setEng]= useState("")
    const [math,setMath]= useState("")
    const [hindi,setHindi]= useState("")

    const HandleClick = ()=>{
       const total = eng + math + hindi
       const percentage = (total/300)*100

       addStudent({
        name,
        roll,
        eng,
        math,
        hindi,
        total,
        percentage,
        result: percentage >=33 ? "Pass" : "Fail"
       })
    }
  return (
    <div className="p-4">
      <div className="mb-3">
        <label className="form-label">Enter Name</label>
        <input className="form-control" type="text" placeholder='Enter your name...'
          onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Enter Roll number:</label>
        <input className="form-control" type="number" placeholder='Enter Roll no....'
          onChange={(e) => setRoll(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Marks of English:</label>
        <input className="form-control" type="number" placeholder='Enter Marks....'
          onChange={(e) => setEng(Number(e.target.value))} />
      </div>

      <div className="mb-3">
        <label className="form-label">Marks of Maths:</label>
        <input className="form-control" type="number" placeholder='Enter Marks....'
          onChange={(e) => setMath(Number(e.target.value))} />
      </div>

      <div className="mb-3">
        <label className="form-label">Marks of Hindi:</label>
        <input className="form-control" type="number" placeholder='Enter Marks....'
          onChange={(e) => setHindi(Number(e.target.value))} />
      </div>

      <button className="btn btn-primary" onClick={HandleClick} type='submit'>Get Results</button>
    </div>  
  )
}

export default Student