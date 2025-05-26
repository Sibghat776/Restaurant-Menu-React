import React from 'react'

export default function Head() {
    return (
        <>
            <h1 style={{
                fontSize: "3.5rem",
                color: "#27548A",
                padding: "3% 0px 0px 0px"
            }}>-- Fast React Pizza Co. --</h1>
            <p style={{
                borderTop: "2px solid #4B352A",
                borderBottom: "2px solid #4B352A",
                padding: "0.5vh 0px",
                width: "20%",
                margin: "3vh auto",
                fontWeight: "bolder",
                color: "#27548A"
            }}>OUR MENU</p>
            <p  style={{
                marginBottom: "5%",
                color: "#000000",
                fontSize:"1rem",
                textTransform: "capitalize"
            }} >The best memories are made around the table with friends and delicious food.</p>
            <hr/>
        </>
    )
}
