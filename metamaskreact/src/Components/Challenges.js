import React from "react";
import './tachyons.min.css'
import ConnectWallet from "./ConnectWallet";
// import { Link } from "react-router-dom";
import ChallengesTable from "./ChallengesTable";
function Challenges(props) {

    return (
        <div>
            <div>
                <ConnectWallet />
            </div>
            <div>
                <article className="ph3 center" style={{ maxWidth: "1400px" }}>
                    <div className="measure mt4 center lh-copy f4 avenir bw1 bl-0 bt-0 br-0 b--dotted b--light-gray">
                        <h2 className="fw5 f2 mb0 avenir" style={{ marginBottom:"70px",marginTop:"-90px"}}>
                            Challenges
                        </h2>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <ChallengesTable />
                        </div>
                        {/* <p>The <b>Warm-up</b> tasks are designed to familiarize you with the setup of Smart contract tools.  </p>
                        <ul className="list pl0 pv3">

                            <li className="mv3 lekton lh-title">
                                <Link className="blue no-underline underline-hover" to="warmup/task1">Deploy a VulnContract</Link>
                                <small className="f6 fr black-hover black-40"></small>
                            </li>
                            <li className="mv3 lekton lh-title">
                                <Link className="blue no-underline underline-hover" to="warmup/task2">Check the Boolean Value</Link>
                                <small className="f6 fr black-hover black-40"></small>
                            </li>
                            <li className="mv3 lekton lh-title">
                                <Link className="blue no-underline underline-hover" to="warmup/task3">Missing Code</Link>
                                <small className="f6 fr black-hover black-40"></small>
                            </li>
                        </ul>
                        <p>The <b>Easy</b> tasks are designed to familiarize you with the setup of Smart contract tools. </p>
                        <ul className="list pl0 pv3">
                            <li className="mv3 lekton lh-title">
                                <Link className="blue no-underline underline-hover" to="/easy/task1">Identify The Balance</Link>
                                <small className="f6 fr black-hover black-40"></small>
                            </li>
                            <li className="mv3 lekton lh-title">
                                <Link className="blue no-underline underline-hover" to="/easy/task2">Relocation</Link>
                                <small className="f6 fr black-hover black-40"></small>
                            </li>
                            <li className="mv3 lekton lh-title">
                                <Link className="blue no-underline underline-hover" to="/easy/task3">Reversal of Transaction</Link>
                                <small className="f6 fr black-hover black-40"></small>
                            </li>
                            <li className="mv3 lekton lh-title">
                                <Link className="blue no-underline underline-hover" to="/easy/task4">Importance of Gas Value</Link>
                                <small className="f6 fr black-hover black-40"></small>
                            </li>
                            {window.location.pathname === "/Challenges" && <>
                                <li class="mv3 lekton lh-title">
                                    <Link class="blue no-underline underline-hover" to="easy/task5">Funding faucet</Link>
                                    <small class="f6 fr black-hover black-40"></small>
                                </li>
                                <li class="mv3 lekton lh-title">
                                    <Link class="blue no-underline underline-hover" to="easy/task6">seed</Link>
                                    <small class="f6 fr black-hover black-40"></small>
                                </li>
                            </>
                            }
                        </ul> */}
                    </div>
                </article >
            </div>
        </div>
    );
}
export default Challenges;
