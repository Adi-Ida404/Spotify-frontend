import React from 'react'

export const SearchBar = () => {
  return (
    <div>
         <div className="flex items-center" style={{ marginTop: "5px", marginLeft: "5px", borderRadius: "50px", border: "3px solid #93a2b8", width: "300px", height: "50px", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search....."
          style={{
            border: "none",
            outline: "none",
            borderRadius: "50px",
            backgroundColor: "#1e2a3b",
            color: "white",
            width: "100%" ,
            height: "100%",
            paddingLeft: "15px",
            boxSizing: "border-box" // Includes padding and border in width and height
          }}
        />
      </div>
      </div>
  )
}
