import React from "react";
import './ChallengesTable.css'
import { Link } from "react-router-dom";
const tabledata = [
    {
        "warmup": { "label": "Deploy a VulnContract", link: "/warmup/task1" },
        "easy": { "label": "Identify The Balance", link: "/easy/task1" },
        "medium": { "label": "Ownership Transfer", link: "/Medium/Task1" },
        "hard": { "label": "Coming Soon", link: "#" },
    },
    {
        "warmup": { "label": "Check the Boolean Value", link: "/warmup/task2" },
        "easy": { "label": "Relocation", link: "/easy/task2" },
        "medium": { "label": "Voting", link: "/Medium/Task2" },
        "hard": { "label": "Coming Soon", link: "#"},
    },
    {
        "warmup": { "label": "Missing Code", link: "/warmup/task3" },
        "easy": { "label": "Reversal of Transaction", link: "/easy/task3" },
        "medium": { "label": "Coming Soon", link: "#" },
        "hard": { "label": "Coming Soon", link: "#" },
    },
    {
        "warmup": { "label": "-", link: "#" },
        "easy": { "label": "Importance of Gas Value", link: "/easy/task4" },
        "medium": { "label": "Coming Soon", link: "#" },
        "hard": { "label": "Coming Soon", link: "#" },
    },
    {
        "warmup": {"label": "-", link: "#" },
        "easy": { "label": "Funding Faucet", link: "/easy/task5" },
        "medium": {"label": "Coming Soon", link: "#" },
        "hard": { "label": "Coming Soon", link: "#" },
    },
]
function ChallengesTable(props) {

    return (
        <table className="styled-table" border="1">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Warm Up</th>
                    <th>Easy</th>
                    <th>Medium</th>
                    <th>Hard</th>
                </tr>
            </thead>
            <tbody>
                {tabledata.map((row, i) => {
                    return <tr>
                        <td>{i + 1}</td>
                        <td>{row?.warmup?.label && <Link to={row?.warmup?.link}>{row.warmup.label}</Link>}</td>
                        <td>{row?.easy?.label && <Link to={row.easy.link}>{row.easy.label}</Link>}</td>
                        <td>{row?.medium?.label && <Link to={row.medium.link}>{row.medium.label}</Link>}</td>
                        <td>{row?.hard?.label && <Link to={row.hard.link}>{row.hard.label}</Link>}</td>
                    </tr>
                })}

            </tbody>
        </table>
    );
}
export default ChallengesTable;
