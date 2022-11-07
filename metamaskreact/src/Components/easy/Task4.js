import React from "react";
import ConnectWallet from "../ConnectWallet";
function Task4(props) {
    const CODE = () => {
        return <pre
            style={{ color: "#f8f8f2", backgroundColor: "#272822", "-moz-tab-size": "4", "-o-tab-size": "4", tabSize: "4", fontSize: "12px" }}
        >
            <code className="language-solidity" data-lang="solidity">
                <span style={{ color: "#66d9ef" }}>{"pragma solidity ^0.8.16;"}</span><br />
                <span style={{ color: "#66d9ef" }}>{"contract"} {"Secops {"}</span> <br />
                <span style={{ color: "#66d9ef", marginLeft: "40px" }}>{"string  = 'welcome to secops ctf '"} </span><br />
                <span style={{ color: "#66d9ef" }}>{"}"}</span>
            </code>
        </pre >
    }
    return (
        <div>
            <div>
                <ConnectWallet />
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "50%", marginLeft: "25%" }}>

                <div classNameName="f4 dark-gray fw3 lh-copy lekton" style={{ textAlign: "left" }}>
                    <ol style={{ textAlign: "left" }}>
                        <h3 style={{ textAlign: "left" }}>What is Gas Value in Smart Contract?</h3>
                        <p style={{ textAlign: "left" }}> Gas is the fee required to successfully conduct a transaction or execute a contract on the Ethereum blockchain platform. Fees are priced in tiny fractions of the cryptocurrency ether (ETH)—denominations called gwei (10-9 ETH). </p>
                        <strong> Why I need to pay Gas? </strong>
                        <p style={{ textAlign: "left" }}>The Ethereum gas fee exists to pay network validators for their work securing the blockchain and network. Without the fees, there would be few reasons to stake ETH and become a validator. The network would be at risk without validators and the work they do. Parameter in ethereum transactions like transaction hash, block, timestamp, value, fees etc. User need to find value of Gas price and Transaction fees</p>
                        <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>
                        <li >Find the Gas price and Transaction fees from deployed contract address.</li>

                        <li> Deployed Address <strong>0xA9A84621A9b93B8E4Befed02461096787fe0AcCF</strong></li>
                    </ol>
                    <div classNameNameName="highlight">
                        {CODE()}
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Task4;
