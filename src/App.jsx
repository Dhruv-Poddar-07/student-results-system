import React, { useState } from 'react'
import Student from './Student'
import Card from './Card'
import './App.css'

function App() {
  const [dark, setDark] = useState(false)
  const [students, setStudents] = useState([])

  const addStudent = (student) => {
    setStudents([...students, student])
  }

 return (
    <div data-bs-theme={dark ? "dark" : "light"} className="min-vh-100 bg-body text-body" style={{ backgroundColor: dark ? '#1a1a1a' : '#fff', minHeight: '100vh' }}>
      
      <style>{`
        .toggle-switch {
          width: 64px;
          height: 32px;
          background: ${dark ? "#343a40" : "#ffc107"};
          border-radius: 50px;
          border: none;
          position: relative;
          cursor: pointer;
          transition: background 0.3s;
        }
        .toggle-knob {
          position: absolute;
          top: 4px;
          left: ${dark ? "36px" : "4px"};
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: left 0.3s;
          font-size: 14px;
        }
      `}</style>

      <div className="d-flex justify-content-between align-items-center p-3">
        <h1>Students Results Management System</h1>
       <button className="toggle-switch" onClick={() => setDark(!dark)}>
        <div className="toggle-knob">{dark ? "🌙" : "☀️"}</div>
       </button>
      </div>

      <div className="px-4">
       <Student addStudent={addStudent} />
       {students.map((student, index) => (
       <Card key={index} student={student} />
       ))}
      </div>

    </div>
  )
}

export default App