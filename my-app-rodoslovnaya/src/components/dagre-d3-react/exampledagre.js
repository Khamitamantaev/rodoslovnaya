
import React, { useState, useEffect } from "react";

import UserService from "../../services/user-service";
import DagreGraph from "dagre-d3-react";
import * as d3 from "d3";
const  Rodoslovnaya = (props) => {
  const content = props.content;
  const [contents, setContent] = useState(content);

  let data = {
   
    nodes: [
      {
        id: "1",
        label: "<h3>Khamit </h3>",
        labelType: "html"
      },
      {
        id: "2",
        label: "<h3>Azamat </h3>",
        labelType: "html",
        config: {
                style: 'fill: #afa'
            }
      }
     
    ],
    links: [
      {
        source: '1',
        target: '2',
        label: '----->',
        config: {
                arrowheadStyle: 'display: none',
                curve: d3.curveBasis,
                style: 'fill:none'
        }
      },
    ]
  }

//   const renderBody = () => {
//     return  content.map((user) => {
//         return (
//             <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.username}</td>
//             </tr>
//         )
//     })
// }


  return (
    
        
    <div> 
  
      <DagreGraph
        nodes={data.nodes}
        links={data.links}
        config={{
          rankdir: "LR",
          align: "UL",
          ranker: "tight-tree",
        }}
        width="1000"
        height="500"
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
