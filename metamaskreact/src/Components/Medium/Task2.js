import React from "react";
import ConnectWallet from "../ConnectWallet";
function easyTask1(props) {
    const CODE = () => {
        return <pre
            style={{ color: "#f8f8f2", backgroundColor: "#272822", "-moz-tab-size": "4", "-o-tab-size": "4", tabSize: "4" }}
        >
            <code class="language-solidity" data-lang="solidity"><span style={{ color: "#66d9ef" }}>{"pragma solidity ^0.4.18;"}</span><br />
                <span style={{ color: "#66d9ef" }}>{"//SPDX-License-Identifier: UNLICENSED"}</span><br />
    
                <span style={{ marginLeft: "40px", color: "#66d9ef" }}>{`contract Election {
    struct Candidate {
        string name;
        uint voteCount;
    }
    struct Voter {
        bool authorized;
        bool voted;
        uint vote;
    }
    address public owner;
    string public electionName;
    mapping(address => Voter) public voters;
    Candidate[] public candidates;
    uint public totalVotes;
    modifier ownerOnly() {
        require(msg.sender == owner);
        _;
    }
    function addCandidates(////
    //    Complete the missing code //
    /////////////////////////////)
    }
    
    function authorize(////
    //    Complete the missing code //
    /////////////////////////////)
    }

    function Election(string _name) public {
        owner = msg.sender;
        electionName = _name;
    }
    function getTotalVotes() public view returns(uint) {
        return totalVotes;
    }
    function getLastCandidate(uint _index) public view returns(string) {
        return candidates[_index].name;
    } 
    function getVoteCount(uint _index) public view returns(uint) {
        return candidates[_index].voteCount;
    }
    function getNumCandidate() public view returns(uint) {
        return candidates.length;
    }
    function vote(uint _voteIndex) public {
        require(!voters[msg.sender].voted);
        require(voters[msg.sender].authorized);
        
        voters[msg.sender].vote = _voteIndex;
        voters[msg.sender].voted = true;
        
        candidates[_voteIndex].voteCount += 1;
        totalVotes += 1;
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
                    <p style={{ textAlign: "left" }}><strong>Description :</strong> This is the voting smart contract with the function like total vote, voteindex, voters, name of the election, who's owner of election contract. Add a Candidate Test123 and authorize it for voting and give 1 vote.</p>
                    <p style={{ textAlign: "left" }}><strong>Hint: </strong> Understand the code and write missing code accordingly.</p>
                    
                    <p style={{ textAlign: "left" }}><strong>Flag :</strong> {"vnm{Total Vote = 1}"}</p>
                    <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>

                    <ol>
                    <li> Go to  <a href="https://remix.ethereum.org/" target="_blank">Remix</a></li>
                    <li>Select <strong>Remix Vm London </strong> in the environment. </li>
                    <li>Select injected provider in the environment.</li>
                    <li>Select <strong>Goerli Testnet Network.</strong></li>
                    <li>Copy the source code and paste in the remix environment.</li>
                    <li>Compile and deploy the Smartcontract. </li>
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
