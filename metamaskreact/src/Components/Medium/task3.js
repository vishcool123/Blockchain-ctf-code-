import React from "react";
import ConnectWallet from "../ConnectWallet";
function Task3(props) {
    const CODE = () => {
        return <pre
            style={{ color: "#f8f8f2", backgroundColor: "#272822", "-moz-tab-size": "4", "-o-tab-size": "4", tabSize: "4" }}>
            <code className="language-solidity" data-lang="solidity">
                <span style={{ color: "#66d9ef", marginLeft: "120px" }}>{"pragma solidity ^0.8.16;;"}<br />
                    <span style={{ marginLeft: "140px" }}>{"contract test{"}</span><br />
                    <span style={{ marginLeft: "150px" }}>{"uint  test = 50;"}</span><br />
                    <span style={{ marginLeft: "160px" }}>{"function testnumber(uint z) {"}</span><br />
                    <span style={{ marginLeft: "170px" }}>{"if (z >test){"}</span><br />
                    <span style={{ marginLeft: "190px" }}>{`return "test number is greater ";`}</span><br />
                    <span style={{ marginLeft: "170px" }}>{"}"}</span><br />
                    <span style={{ marginLeft: "170px" }}>{"else if (z < test ) {"}</span><br />
                    <span style={{ marginLeft: "190px" }}>{`return "test number is less";`}</span><br />
                    <span style={{ marginLeft: "170px" }}>{"}"}</span><br />
                    <span style={{ marginLeft: "170px" }}>{"else if (z==test) {"}</span><br />
                    <span style={{ marginLeft: "190px" }}>    {`return "test number is equal!!";`}</span><br />
                    <span style={{ marginLeft: "170px" }}>{"}"}</span><br />
                    <span style={{ marginLeft: "170px" }}>{"else {"}</span><br />
                    <span style={{ marginLeft: "190px" }}>{`return "nothing";`}</span><br />
                    <span style={{ marginLeft: "170px" }}> {"}"}</span><br />
                    <span style={{ marginLeft: "160px" }}>{"}"}</span><br />
                    <span style={{ marginLeft: "140px" }}>{"}"}</span><br />
                </span>
            </code></pre>
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
                        <li> Go to  <a href="https://remix.ethereum.org/">Remix</a>.</li>
                        <li>Select <strong>Remix Vm London in</strong> the environment. .</li>
                        <li>Compile and deploy the contract</li>
                        <li>Missing Code</li>
                        <li>Analyze the output</li>
                    </ol>
                    <div classNameName="highlight">
                        {CODE()}
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Task3;
