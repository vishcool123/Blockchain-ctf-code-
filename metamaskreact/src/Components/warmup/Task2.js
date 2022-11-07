import React from "react";
import ConnectWallet from "../ConnectWallet";
function Task2(props) {
    const CODE = () => {
        return <pre
            style={{ color: "#f8f8f2", backgroundColor: "#272822", "-moz-tab-size": "4", "-o-tab-size": "4", tabSize: "4" }}
        >
            <code className="language-solidity" data-lang="solidity">
                <span style={{ color: "#66d9ef" }}>{"pragma solidity ^0.8.16;"}<br /><br />

                    <span style={{ marginLeft: "50px" }}>{"contract test {"}</span><br />
                    <span style={{ marginLeft: "50px" }}>{"bool public secops;"}</span><br />

                    <span style={{ marginLeft: "50px" }}>{"function setflag (bool _secops) public {"}</span><br />
                    <span style={{ marginLeft: "50px" }}>{"secops = _secops;"}</span><br />
                    <span style={{ marginLeft: "50px" }}>{"}"}</span><br />
                    <span style={{ marginLeft: "40px" }}>{"}"}</span><br />
                </span>
            </code>
        </pre>
    }
    return (
        <div>
            <div>
                <ConnectWallet />
            </div>
            <div style={{ display: "flex", justifyContent: "center", maxwidth: "768px" }}>
                <div classNameName="f4 dark-gray fw3 lh-copy lekton" style={{ textAlign: "left" }}>
                    <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>
                    <ol style={{ textAlign: "left" }}>
                    <li> Go to  <a href="https://remix.ethereum.org/" target="_blank">Remix</a></li>
                    <li>Select <strong>Remix VM London</strong> in the environment. </li>
                    <li>Compile and deploy the contract.</li>
                    <li>Set the value and call the function and "setflag".</li>
                    <p>After completion of this task user will learn how to complie and deploy the Smart Contract.</p>
                    </ol>
                    <p><strong> Note : </strong> Flag is not required for this challange. </p>
                
                    <div classNameName="highlight">
                        {CODE()}
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Task2;
