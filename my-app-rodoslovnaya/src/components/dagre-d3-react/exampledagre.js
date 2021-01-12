import React, { useState, useEffect } from "react";

import UserService from "../../services/user-service";
import DagreGraph from "dagre-d3-react";
import * as d3 from "d3";
const Rodoslovnaya = (props) => {
  const content = props.content;
  const [contents, setContent] = useState(content);

  let data = {
    nodes: [],
    links: []
  };

  Object.keys(content).forEach(function (i) {
    console.log(content[i].username);
    for (let k = 0; k < content.length; k++) {
      data.nodes.push({
        id: content[i].id,
        label: content[i].username,
        labelType: "string",
        config: {
          style: "fill: #afa",
        },
      });
    }
  });

  

  return (
    <div>
      <DagreGraph
        className="bg-blue-500"
        nodes={data.nodes}
        links={data.links}
        config={{
          rankdir: "LR",
          align: "UL",
          ranker: "tight-tree",
        }}
        width="2025"
        height="1000"
        animate={1000}
        shape="circle"
        fitBoundaries
        zoomable
        onNodeClick={(e) => console.log(e)}
        onRelationshipClick={(e) => console.log(e)}
      />
    </div>
  );
};

export default Rodoslovnaya;
