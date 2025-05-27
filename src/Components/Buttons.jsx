import React, { useEffect, useState } from 'react'

function Buttons({ setBtnText }) {
    let [bgColor, setBgColor] = useState("")
    function btnClick(text) {
        setBtnText(text)
        setBgColor(bgColor === "white" ? "back" : "white")
    }
    return (
        <>
            <div className='btnContainer' style={{
                margin: "2% auto",
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                flexWrap: "wrap",
                flexShrink: 0,
                gap: "13px"
            }}>
                <button onClick={() => btnClick("Pizza")} style={{
                    bgColor
                }}>Pizza</button>
                <button onClick={() => btnClick("Burger")}>Burger</button>
                <button onClick={() => btnClick("Sandwich")}>Sandwich</button>
                <button onClick={() => btnClick("cake")}>Cakes</button>
                <button onClick={() => btnClick("fruit")}>Fruits</button>
            </div>
            <hr />
        </>
    )
}

export default Buttons