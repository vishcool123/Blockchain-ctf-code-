import React, { useEffect } from "react";
import './Home.css'
import ConnectWallet from "./ConnectWallet";
import { Link, useHistory } from "react-router-dom";
const Q4 = () => {

    return <span>
        There are various categories in the list of challenges. If you are new to the Ethereum development, just try out the warmup challenges after reading the documentation of solidity.
           <a href = "https://docs.soliditylang.org/en/v0.8.17/" target="blank">Click Here</a>
    </span >
}
const QandA = {
    "What is Blockchain?": " Blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in a digital format.",
    "What is a smart contract in blockchain?": "Smartcontract (or cryptocontract) is a computer program that directly and automatically controls the transfer of digital assets between the parties under certain conditions.",
    "Why smart contract security is important?": "Smartcontract security assists you in identifying potential security vulnerabilities in your system. it allow you to address these vulnerabilities.",
    "Want to learn? From Where to start?": Q4()
}
function Home(props) {
    const history = useHistory()
    useEffect(() => {
        // document.title("Connect MetaMask")
    }, []);

    return (
        <div>
            {/* <Challenges /> */}
            <div style={{marginTop:"10px"}}> 
                {/* <ConnectWallet /> */}
                <img src="./logo.ico.png" alt="logo" width= "180px" ></img>
            </div>
            <div style={{
                display: "flex",
                // maxWidth: "50%", justifyContent: "center",
                flexDirection: "row",
                // aligContent: "center",
                // alignItems: "flex-start",
                marginTop: "5%",
                padding: "0 50px"
            }}>
                {Object.keys(QandA)?.map((q, i) => {
                    return <div style={{ minWidth: "25%", padding: "0 20px" }}>
                        <div><b>{q}</b></div>
                        <div>{QandA[q]}</div>
                    </div>
                })}
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "3%", }}>
                <span>Now I think you are ready to go. Let's explore the challenges.</span>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1%", marginBottom: "3%" }}>
            <button onClick={() => { history.push("/Challenges") }}><Link to="/Challenges">Challenges</Link></button>
            </div>
        </div >

    );
}
export default Home;
