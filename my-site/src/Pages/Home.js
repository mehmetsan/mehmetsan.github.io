import React, { useContext } from 'react';
import { UserContext } from '../index';
import Project from "./Project";

function Home() {
    const { showBanner } = useContext(UserContext);

    return (
        <>
            {/* Banner Part */}
            {showBanner && (
                <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "200px", backgroundColor: "#3FB4C4", borderRadius: "20px" }}>
                    <div style={{ display: "flex", height: "70%" }}>
                        <span style={{ display: "flex", margin: "auto auto auto auto", "fontSize": "32px" }}>
                            Mehmet Sanisoglu Portfolio
                        </span>
                    </div>
                    <div style={{ display: "flex", height: "30%" }}>
                        <i style={{ display: "flex", margin: "auto auto auto auto", "fontSize": "20px" }}>
                            Graphic design is my passion
                        </i>
                    </div>
                </div>
            )}

            {/* Projects */}
            <div style={{ display: "flex", flexDirection: "column", marginTop: "50px", gap: "30px" }}>
                {/* Project Row */}
                <div style={{ display: "flex", flexDirection: "row", height: "270px", gap: "4%" }}>
                    {/* Project */}
                    <Project topic={"abdi"} />
                </div>
            </div>
        </>
    )

}

export default Home;
