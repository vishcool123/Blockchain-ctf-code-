import React from "react";
import ConnectWallet from "../ConnectWallet";
function easyTask1(props) {
    const CODE = () => {
        return <pre
            style={{ color: "#f8f8f2", backgroundColor: "#272822", "-moz-tab-size": "4", "-o-tab-size": "4", tabSize: "4" }}
        >
            <code class="language-solidity" data-lang="solidity"><span style={{ color: "#66d9ef" }}>{"pragma solidity ^0.8.16;"}</span><br />
                <span style={{ color: "#66d9ef" }}>{"//SPDX-License-Identifier: UNLICENSED"}</span><br />
    
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`interface ERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
}
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }
    function _msgData() internal view virtual returns (bytes calldata) {
        this;
        return msg.data;
    }
}

contract Vulmachine is ERC20,Context {

    string private   constant name = "SECOPS"; 
    string private   constant symbol = "SG";
    uint8  private  constant decimals = 18;
    mapping(address => uint256) balances;
    mapping(address => mapping (address => uint256)) allowed;
    address public _owner;
    uint private   totalSupply_= 10;
    using SafeMath for uint256;

     constructor() public 
      {
        balances[msg.sender] = totalSupply_;
        _owner=msg.sender;
        emit OwnershipTransferred(address(0), _msgSender());
    }
    
    function totalSupply() public override view returns (uint256) {
    return totalSupply_;
    }
    function balanceOf(address tokenOwner) public override view returns (uint256) {
        return balances[tokenOwner];
    }
    function transfer(address receiver, uint256 numTokens) public override returns (bool) {
        require(numTokens <= balances[msg.sender]);
        balances[msg.sender] = balances[msg.sender].sub(numTokens);
        balances[receiver] = balances[receiver].add(numTokens);
        emit Transfer(msg.sender, receiver, numTokens);
        return true;
    }
    function transferOwnership( ////
    //    Complete the missing code //
    /////////////////////////////
    )

    modifier onlyOwner() {
        require(_owner == _msgSender(), "Ownable: caller is not the owner");
        _;
    }
}

library SafeMath {
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
      assert(b <= a);
      return a - b;
    }
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
      uint256 c = a + b;
      assert(c >= a);
      return c;
    }
}
`}</span><br />
                
            </code >
        </pre >
    }
    return (
        <div>
            <div>
                <ConnectWallet />
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "50%", marginLeft: "25%" }}>
                <div className="f4 dark-gray fw3 lh-copy lekton" style={{ textAlign: "left" }}>
                    <p style={{ textAlign: "left" }}><strong>Description :</strong> There is a contract name vulnmachine that has a basic function of ERC 20 for example burn token, mint token, transfer, etc. User has to write a missing code and transfer ownership of the contract to a Null address.
                   <br>
                   </br><strong>A null address is an address created specifically to receive tokens that are being intentionally removed out of circulation. Example of null address 0x0000000000000000000000000000000000000000</strong></p>
                    <p style={{ textAlign: "left" }}><strong>Hint: </strong> Understand the code and write missing code accordingly.</p>
                    
                    <p style={{ textAlign: "left" }}><strong>Flag :</strong> {"vnm{Address}"}</p>
                    <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>

                    <ol>
                    <li> Go to  <a href="https://remix.ethereum.org/" target="_blank">Remix</a></li>
                    <li>Select <strong>Remix Vm London </strong> in the environment. </li>
                    <li>Select injected provider in the environment.</li>
                    <li>Select <strong>Goerli Testnet Network.</strong></li>
                    <li>Copy the source code and paste in the remix environment.</li>
                    <li>Compile and Deploy the Smartcontract. </li>
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
