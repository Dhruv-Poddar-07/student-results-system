import React from 'react'

function Card({student}) {
  return (
    <div className="result-card">
        <h3>{student.name}</h3>

        <div className="result-row">
          <span>Roll:</span>
          <span>{student.roll}</span>
        </div>

        <div className="result-row">
          <span>English marks:</span>
          <span>{student.eng}</span>
        </div>

        <div className="result-row">
          <span>Math marks:</span>
          <span>{student.math}</span>
        </div>

        <div className="result-row">
          <span>Hindi marks:</span>
          <span>{student.hindi}</span>
        </div>

        <div className="result-row">
          <span>Total marks:</span>
          <span>{student.total}</span>
        </div>

        <div className="result-row">
          <span>Percentage:</span>
          <span>{student.percentage.toFixed(2)}%</span>
        </div>

        <div className="result-row">
          <span>Result:</span>
          <span className={`result-badge ${student.result.toLowerCase()}`}>{student.result}</span>
        </div>

    </div>
  )
}

export default Card