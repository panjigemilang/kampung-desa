import React from "react"
import spinner from "./Spinner.gif"

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{
          width: "200px",
          margin: "auto",
          display: "block",
          padding: "20vh 0"
        }}
        alt="Loading . . ."
      />
      
    </div>
  )
}
