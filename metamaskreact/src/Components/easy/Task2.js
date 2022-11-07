import React from "react";
import ConnectWallet from "../ConnectWallet";
function easyTask1(props) {
    const CODE = () => {
        return <pre
            style={{ color: "#f8f8f2", backgroundColor: "#272822", "-moz-tab-size": "4", "-o-tab-size": "4", tabSize: "4" }}
        >
            <code class="language-solidity" data-lang="solidity"><span style={{ color: "#66d9ef" }}>{"pragma solidity ^0.8.16;"}</span><br />
                <span style={{ color: "#66d9ef" }}>{"//SPDX-License-Identifier: UNLICENSED"}</span><br />
                <span style={{ color: "#66d9ef" }}>{"contract Secopscoin {"}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`string public constant name = "SECOPS";`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`string public constant symbol = "SOP";`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{"uint8 public constant decimals = 18;"}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{"uint256 private constant totalToken = 1000;"}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{"event Transfer(address indexed from, address indexed to, uint tokens);"}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{"mapping(address => uint256) balances;"}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{"uint256 totalSupply_;"}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{"using SafeMath for uint256;"}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`{constructor(uint256 total)  {  }`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`totalSupply_ = totalToken;`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`balances[msg.sender] = totalSupply_;`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`}  `}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`function totalSupply() public view returns (uint256) {`}</span><br />
                <span style={{ marginLeft: "60px", color: "#66d9ef" }}>{`return totalSupply_;`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`}`}</span><br />

                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`function balanceOf(address tokenOwner) public view returns (uint) {`}</span><br />
                <span style={{ marginLeft: "60px", color: "#66d9ef" }}>{`return balances[tokenOwner];`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`}`}</span><br />

                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`function transfer(address receiver, uint numTokens) public returns (bool) {`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`require(numTokens <= balances[msg.sender]);`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`balances[msg.sender] = balances[msg.sender].sub(numTokens);`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`balances[receiver] = balances[receiver].add(numTokens);`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`emit Transfer(msg.sender, receiver, numTokens);`}</span><br />
                <span style={{ marginLeft: "60px", color: "#66d9ef" }}>{`return true;`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`}`}</span><br />
                <span style={{ marginLeft: "0px", color: "#66d9ef" }}>{`}`}</span><br />
                <span style={{ marginLeft: "0px", color: "#66d9ef" }}>{`library SafeMath { `}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`function sub(uint256 a, uint256 b) internal pure returns (uint256) {`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`assert(b <= a);`}</span><br />
                <span style={{ marginLeft: "60px", color: "#66d9ef" }}>{`return a - b;`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`}`}</span><br />

                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`function add(uint256 a, uint256 b) internal pure returns (uint256) {`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`uint256 c = a + b;`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`assert(c >= a);`}</span><br />
                <span style={{ marginLeft: "60px", color: "#66d9ef" }}>{`return c;`}</span><br />
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`}`}</span><br />
                <span style={{ marginLeft: "0px", color: "#66d9ef" }}>{`}`}</span><br />
            </code>
        </pre>
    }
    return (
        <div>
            <div>
                <ConnectWallet />
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "50%", marginLeft: "25%" }}>
                <div className="f4 dark-gray fw3 lh-copy lekton" style={{ textAlign: "left" }}>
                    <p style={{ textAlign: "left" }}><strong>Description :</strong> There is a token contract name secops where you have to find the owner's wallet address.</p>
                    <p style={{ textAlign: "left" }}><strong>Hint :</strong> Get the wallet address of the owner from the deployed Smart Contract.</p>
                    <p style={{ textAlign: "left" }}><strong>Flag :</strong> {"vnm{Owner Address}"}</p>
                    <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>

                    <ol>
                        <li> Go to  <a href="https://remix.ethereum.org/"target="_blank">Remix</a>.</li>
                        <li>Select <strong>Remix Vm London in</strong> the environment. </li>
                        <li>Select injected provider in the environment.</li>
                        <li>Select <strong>Goerli Testnet Network.</strong></li>
                        <li>Load the contract.</li>
                        <li>Get the flag value.</li>
                    </ol>
                    <div classNameName="highlight">
                        {CODE()}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default easyTask1;
