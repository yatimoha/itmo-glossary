import Bar from '../../components/bar/bar.jsx';
import { Box } from '@mui/material';

const Graph = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Bar title={"Граф"}></Bar>
        Graph!
      </Box>
      
    </>
  );
};

export default Graph;