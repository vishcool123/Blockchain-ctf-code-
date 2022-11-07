import React from "react";
import ConnectWallet from "../ConnectWallet";
function Task1(props) {
    const CODE = () => {
        return <pre style={{ color: "#f8f8f2", backgroundColor: "#272822", "-moz-tab-size": "4", "-o-tab-size": "4", tabSize: "3" }}>
            <code classNameName="language-solidity" data-lang="solidity">
                <span style={{ color: "#66d9ef" }}>pragma solidity ^0.8.16;</span>{""}
                <br />
                <br />
                <span style={{ color: "#66d9ef", marginLeft: "50px" }}>contract {"DeploySecops {"}</span><br />
                <span style={{ color: "#66d9ef" }}>
                </span><span style={{ color: "#66d9ef" }}></span>
                <span style={{ color: "#66d9ef", marginLeft: "50px" }}>function {"welcomeTosecopsctf() "}</span>
                <span style={{ color: "#66d9ef" }}>public</span> <span style={{ color: "#66d9ef" }}>pure </span>
                <span style={{ color: "#66d9ef" }}>returns</span> <span style={{ color: "#66d9ef" }}>(string memory)</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "50px" }}>return</span> <span style={{ color: "#66d9ef" }}>{`"flag{}";`}</span>{""}<br />
                <span style={{ marginLeft: "30px", color: "#66d9ef" }}>{"}"}</span><br />
                <span style={{ marginLeft: "20px", color: "#66d9ef" }}>{"}"}</span><br />
            </code>
        </pre>
    }
    return (
        <div>
            <div>
                <ConnectWallet />
            </div>
            <div style={{ display: "flex", justifyContent: "center", maxwidth: "768px" }}>
                <div classNameNameName="f4 dark-gray fw3 lh-copy lekton" style={{ textAlign: "left" }}>
                    <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>
                    <ol style={{ textAlign: "left" }}>
                        <li> Go to <a href="https://remix.ethereum.org/"target="_blank">Remix</a>.</li>
                        <li>Select <strong>Remix Vm London </strong> in the environment. </li>
                        <li>Compile and deploy the contract.</li>
                        <li>Call the function <b>"welcomeTosecopsctf."</b></li>
                    </ol>
                    <p><strong> Note : </strong> Flag is not required for this challange. </p>

                    <div className="highlight">
                        {CODE()}
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Task1;
