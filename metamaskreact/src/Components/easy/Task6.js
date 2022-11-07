import React from "react";
import ConnectWallet from "../ConnectWallet";
function Task6(props) {
    return (
        <div>
            <div>
                <ConnectWallet />
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "50%", marginLeft: "25%" }}>
                <div className="f4 dark-gray fw3 lh-copy lekton" style={{ textAlign: "left" }}>
                    <ol style={{ textAlign: "left" }}>
                        <h3 style={{ textAlign: "left" }}> What is seed pharse ? </h3>
                        <p style={{ textAlign: "left" }}> Blockchain wallets have a master key made up of a 12-word phrase to unlock your wallet on the blockchain.
                            They are usually called “seed phrase.”
                            To avoid confusion, MetaMask is changing from seed phrase to secret recovery phrase.
                        </p>
                        <br />
                        <p style={{ textAlign: "left" }}><strong>Description :</strong> This task is based on working of wallet. On the right hand side there is a button its called metamask ethereum wallet. Read the instruction and perform the task.</p>
                        <p style={{ textAlign: "left" }}><strong>Hint :</strong> Use the seed pharse and password</p>
                        <p style={{ textAlign: "left" }}><strong>Flag :</strong>{" vnm{Wallet Address}"}</p>
                        <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>

                        <li> Click on Metamask & Download the metamask wallet </li>
                        <li>Import wallet</li>
                        <li>Input seed phrase</li>
                        <li>Switch the Network  to Ethereum Mainnet</li>
                        <li>Below are Details for reference </li>
                        <li>SEED : rigid plunge cave motion book problem session solution orange drama excess furnace</li>
                        <li>Password : 12345678 </li>
                    </ol>
                </div>
            </div>
        </div >
    )
}
export default Task6;
