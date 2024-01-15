import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import './graph.style.css'
import Bar from '../../components/bar/bar.jsx';
import { Box } from '@mui/material';
import { nodes } from '../../const/nodes.const.js';
import { edges } from '../../const/edges.const.js';
const Graph = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Bar title={"Граф"}></Bar>
        <Box sx={{ width: '100vw', height: "80vh"}}>
          <ReactFlow nodes={nodes} edges={edges}>
            <Background />
            <Controls/>
          </ReactFlow>
        </Box>
      </Box>
      
    </>
  );
};

export default Graph;