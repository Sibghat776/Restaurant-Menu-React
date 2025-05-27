import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Main({ btnText }) {
    const [myDishes, setMyDishes] = useState([]);

    async function allDishesAPI() {
        try {
            const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${btnText? btnText: "tikka"}`);
            setMyDishes(response.data.data.recipes);
        } catch (error) {
            console.error("Failed to fetch dishes:", error);
        }
    }

    useEffect(() => {
        allDishesAPI();
    }, [btnText]);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            padding: "2%"
        }}>
            {myDishes.map(dish => (
                <div className='card'
                    key={dish.id}
                    style={{
                        display: "flex",
                        width: "100%",
                        maxWidth: "500px",
                        marginTop: "2%",
                        borderRadius: "10px",
                        overflow: "hidden",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        boxShadow: "0 3px 3px rgba(0,0,0,0.3), 0 -3px 3px rgba(0,0,0,0.3), 2px 0 3px rgba(0,0,0,0.3), -2px 0 3px rgba(0,0,0,0.3)",
                        transition: "transform 0.3s ease-in-out",
                    }}
                >
                    <div style={{
                        width: "100%",
                        maxWidth: "270px",
                        height: "200px",
                        flexShrink: 0
                    }}>
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                            src={dish.image_url}
                            alt={dish.title}
                        />
                    </div>

                    <div style={{
                        flex: 1,
                        padding: "16px",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "start",
                        justifyContent: "center"
                    }}>
                        <h3 style={{ color: "Black", margin: "0 0 10px", textTransform: "uppercase", fontFamily: "inherit" }}>
                            {dish.title || "No Title"}
                        </h3>
                        <p style={{ color: "#155E95", margin: "0 0 10px", fontFamily: "serif", fontWeight: "bold" }}>
                            Rs: {Math.floor(Math.random() * 200) + 100} -/
                        </p>
                        <p style={{ color: "#009990", fontWeight: "bold", margin: 0 }}>
                            {dish.publisher || "No Publisher"}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Main;
