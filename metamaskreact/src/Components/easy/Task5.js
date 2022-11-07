import React from "react";
import ConnectWallet from "../ConnectWallet";
function Task5(props) {
    return (
        <div>
            <div>
                <ConnectWallet />
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "50%", marginLeft: "25%" }}>
                <div className="f4 dark-gray fw3 lh-copy lekton" style={{ textAlign: "left" }}>
                    <p style={{ textAlign: "left" }}><strong>Description :</strong> This task is based on working of wallet. On the right hand side there is a button its called metamask ethereum wallet. Read the instruction and perform the task.</p>
                    <p style={{ textAlign: "left" }}><strong>Hint :</strong> Get the wallet address and fund test ether.</p>
                    <p style={{ textAlign: "left" }}><strong>Flag :</strong>{" vnm{faucet value}"}</p>
                    <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>

                    <ol>
                        <li> Click on Metamask & Download the metamask wallet. </li>
                        <li>Configure the metamask.</li>
                        <li>Connect the wallet.</li>
                        <li>Activate the test network.</li>
                        <li>Choose the goerli test network.</li>
                        <li>Get the faucet ether.</li>
                        <li> For faucet visit <a href="https://goerlifaucet.com/" target="_blank">goerlifaucet</a></li>
                    </ol>
                </div>
            </div>
        </div >
    )
}
export default Task5;
