import React from 'react';
import { FaAngleLeft } from "react-icons/fa";

function Abdi() {

    return (
        <div style={{ display: "flex", flexDirection: "column", marginTop: "10px", backgroundColor: "#f0e09c", borderRadius: "20px" }}>
            {/* Banner */}
            <div style={{ display: "flex", backgroundColor: "#FACF4C", width: "100%", height: "100px", borderRadius: "20px" }}>
                <span style={{ display: "flex", margin: "auto", fontSize: "32px", fontWeight: "600" }}>
                    ABDI Drinking Card Game
                </span>
            </div>

            {/* Texts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "60px 120px 60px 120px" }}>
                {/* Description Section */}
                <div style={{ display: "flex", flexDirection: "column" }}>

                    <div style={{
                        display: "flex", flexDirection: "row", cursor: "pointer", borderBottom: "2px solid black",
                        paddingBottom: "2px", width: "60px", marginBottom: "20px"
                    }}
                        onClick={() => {
                            window.location.href = `${process.env.PUBLIC_URL}`
                        }
                        }>
                        <FaAngleLeft style={{ display: "flex", margin: "auto 5px auto 0px" }} />
                        <span style={{ display: "flex" }}>Back</span>
                    </div>

                    <span style={{ display: "flex", fontWeight: "700", fontSize: "32px", textDecoration: "underline" }}>
                        ABDI Game
                    </span>

                    <p style={{ display: "flex", fontSize: "18px", maxWidth: "1000px", textAlign: "justify", lineHeight: "30px" }}>
                        A mobile game adaptation of the popular drinking card game Abdi. The game is played in a group, where each
                        player takes a card in turn. Each card in the game has a distinct rule that the player has to read aloud.
                        According to the challenge on the game, players drink up. The game is over when all the 52 cards in the
                        standard solitaire deck is finished.
                    </p>

                    <span
                        style={{ display: "flex", marginBottom: "20px", color: "blue", fontWeight: "600", cursor: "pointer" }}
                        onClick={() => {
                            window.location.href = `${process.env.PUBLIC_URL}/#/abdi/privacy`
                        }}
                    >
                        Privacy Policy
                    </span>

                </div>

                {/* Screenshots Section */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <span style={{ display: "flex", fontWeight: "700", fontSize: "32px", textDecoration: "underline" }}>
                        Screenshots
                    </span>
                    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
                        <img style={{ display: "flex", width: "20%" }} src={`${process.env.PUBLIC_URL}/images/screenshot_1.png`} alt="Screenshot 1" />
                        <img style={{ display: "flex", width: "20%" }} src={`${process.env.PUBLIC_URL}/images/screenshot_2.png`} alt="Screenshot 2" />
                        <img style={{ display: "flex", width: "20%" }} src={`${process.env.PUBLIC_URL}/images/screenshot_3.png`} alt="Screenshot 3" />
                        <img style={{ display: "flex", width: "20%" }} src={`${process.env.PUBLIC_URL}/images/screenshot_4.png`} alt="Screenshot 4" />
                    </div>
                </div>

                {/* Technical Section */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ display: "flex", fontWeight: "700", fontSize: "32px", textDecoration: "underline" }}>
                        Project
                    </span>

                    <p style={{ display: "flex", fontSize: "18px", maxWidth: "1000px", textAlign: "justify", lineHeight: "30px" }}>
                        The project is implemented in Swift. It makes use of predefined Card, Suit and Deck objects to implement
                        the original game logic. The transition between the pages is done by conditional rendering based on a
                        common state property. No user data is collected inside the app.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Abdi;
