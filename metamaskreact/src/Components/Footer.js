import React from "react";
import "./../App.css";
function Footer(props) {
  return (
    <div>
    
      <footer className="pv4 ph3 ph5-m ph6-l bg-dark" >
        <small className="f6 dib ph2 link white">Built by <b className="f6 dib ph2 link white"><a href="https://www.twitter.com/vulnmachines"className="f6 dib ph2 link hover-orange">Vulnmachines</a></b></small>
        <div className="tc mt3">
          <a href="https://secops.group/" title="Language" className="f6 dib ph2 link hover-orange"><b>Managed by TheSecOps Group</b></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
