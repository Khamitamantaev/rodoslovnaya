
import React, { useState, useEffect } from "react";
import { Stage, Layer, Circle } from "react-konva";

import UserService from "../../services/user-service";
import DagreGraph from "dagre-d3-react";
import * as d3 from "d3";
const  Rodoslovnayax = (props) => {
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
    <Stage width={window.innerWidth} height={4000} className="bg-blue-400">
    <Layer>
      {props.content.map((user, index) => (
        <Circle key={index} x={200} y={100} radius={30} fill="yellow" name={user.username} draggable shadowBlur={5}/>
      ))}
    </Layer>
  </Stage>
    </div>
  );
};

export default Rodoslovnayax;
