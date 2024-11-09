import React, { useContext } from 'react';
import { UserContext } from '../index';


function Abdi() {
    const { setDisplayPage, setShowBanner } = useContext(UserContext);

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
                            setShowBanner(false);
                            setDisplayPage("abdi_privacy");
                        }}>
                        Privacy Policy
                    </span>

                    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
                        <img style={{ display: "flex", width: "200px" }} src="/images/screenshot_1.png" alt="" />
                        <img style={{ display: "flex", width: "200px" }} src="/images/screenshot_2.png" alt="" />
                        <img style={{ display: "flex", width: "200px" }} src="/images/screenshot_3.png" alt="" />
                        <img style={{ display: "flex", width: "200px" }} src="/images/screenshot_4.png" alt="" />
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
    )

}

export default Abdi;
