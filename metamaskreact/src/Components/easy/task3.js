import React from "react";
import ConnectWallet from "../ConnectWallet";
function Task3(props) {
    const CODE = () => {
        return <pre
            style={{ color: "#f8f8f2", backgroundColor: "#272822", "-moz-tab-size": "4", "-o-tab-size": "4", tabSize: "4", fontSize: "12px" }}
        >
            <code class="language-solidity" data-lang="solidity"><span style={{ color: "#66d9ef" }}>{"pragma solidity ^0.8.16;"}</span><br />
                <span style={{ color: "#66d9ef" }}>{"//SPDX-License-Identifier: UNLICENSED"}</span><br />
                <span style={{ color: "#66d9ef" }}>{"contract Secopscoin {"}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`string public constant name = "SECOPS";`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`string public constant symbol = "SOP";`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{"uint8 public constant decimals = 18;"}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{"uint256 private constant totalToken = 1000;"}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{"event Transfer(address indexed from, address indexed to, uint tokens);"}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{"mapping(address => uint256) balances;"}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{"uint256 totalSupply_;"}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{"using SafeMath for uint256;"}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`{constructor(uint256 total)  {  }`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "40px" }}>{`totalSupply_ = totalToken;`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "40px" }}>{`balances[msg.sender] = totalSupply_;`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`}  `}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "40px" }}>{`function totalSupply() public view returns (uint256) {`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "60px" }}>{`return totalSupply_;`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`}`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`function balanceOf(address tokenOwner) public view returns (uint) {`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "60px" }}>{`return balances[tokenOwner];`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`}`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`function transfer(address receiver, uint numTokens) public returns (bool) {`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "40px" }}>{`require(numTokens <= balances[msg.sender]);`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "40px" }}>{`balances[msg.sender] = balances[msg.sender].sub(numTokens);`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "40px" }}>{`balances[receiver] = balances[receiver].add(numTokens);`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "40px" }}>{`emit Transfer(msg.sender, receiver, numTokens);`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "60px" }}>{`return true;`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`}`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`}`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`library SafeMath { `}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`function sub(uint256 a, uint256 b) internal pure returns (uint256) {`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "40px" }}>{`assert(b <= a);`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "60px" }}>{`return a - b;`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`}`}</span><br />

                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`function add(uint256 a, uint256 b) internal pure returns (uint256) {`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "40px" }}>{`uint256 c = a + b;`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "40px" }}>{`assert(c >= a);`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "60px" }}>{`return c;`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`}`}</span><br />
                <span style={{ color: "#66d9ef", marginLeft: "0px" }}>{`}`}</span><br />
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
                    <ol style={{ textAlign: "left" }}>
                        <h3 style={{ textAlign: "left" }}> What is Goerli? </h3>
                        <p style={{ textAlign: "left" }}> Goerli is one of the largest and most active Ethereum testnets, and the last to transition to proof-of-stake (PoS). In our contract, there are several transactions which are deployed on Goerli network. From the reference link identify the transaction and get the flag.</p>
                        <br />
                        <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>
                        <li> Find the block no 772xxx8, and find the value of the token transfered for the same. </li>

                        <li><strong>Token : 0x8a37df3d6b05e71a225b2b5cc7270a110c1fe55f</strong></li>
                        <li> For reference visit <a href="https://goerli.etherscan.io/token/" target="_blank">Etherscan.io</a></li>
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
