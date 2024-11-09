
import topicsData from "./data.json"
import React, { useContext } from 'react';
import { UserContext } from './index';

function Project({ topic }) {
    const topicData = topicsData[topic]
    const { setDisplayPage } = useContext(UserContext);

    return (
        <div style={{
            display: "flex", flexDirection: "column", width: "48%", minHeight: "300px", cursor: "pointer",
            backgroundColor: "#D7E278", borderRadius: "20px", padding: "20px", fontFamily: "'Comic Sans MS', 'Comic Sans', cursive"

        }}
            onClick={() => {
                console.log(topicData.page);

                setDisplayPage(topicData.page)
            }}
        >
            {/* Topic Part */}
            <h1 style={{ display: "flex", height: "10%" }}>
                {topicData.title}
            </h1>

            {/* Content Part */}
            <div style={{ display: "flex", flexDirection: "column", height: "90%", backgroundColor: "#F8C738", borderRadius: "20px" }}>
                {/* Paragraph Part */}
                <p style={{
                    display: "flex", height: "80%", borderRadius: "20px", opacity: "0.7",
                    padding: "20px", textAlign: "justify"
                }}>
                    {topicData.paragraph}
                </p>

                {/* Keywords Part */}
                <div style={{ display: "flex", flexDirection: "row", height: "30%", gap: "10px", marginLeft: "20px" }}>
                    {/* Keyword */}
                    {topicData.keywords.map((keyword) => {
                        return (
                            <div
                                key={keyword}
                                style={{
                                    display: "flex",
                                    height: "50%",
                                    backgroundColor: "white",
                                    borderRadius: "20px",
                                    padding: "5px"
                                }}
                            >
                                <span style={{ fontSize: "12px" }}>{keyword}</span>
                            </div>
                        );
                    })}
                </div>


            </div>

        </div>

    );
}

export default Project;
