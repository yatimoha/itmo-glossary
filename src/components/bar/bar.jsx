import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Bar = ({title}) => {
  
  const containerStyles = {
    top: 0,
    position: 'sticky',
    zIndex: 100,
    flexWrap: 'nowrap',
    mb: 3,
    p: 3,
    display: 'flex',
    justifyContent: 'space-between'
  };
  
  return (
    <Grid
      container
      alignItems={'center'}
      sx={containerStyles}
    >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', }}>
        {title}
      </Typography>
      <Box mr={2}>
        <Link to={'/'}>
          <Button variant="contained" sx={{background: '#009688', '&:hover': {background: '#e0f2f1', color: '#009688'},}}>
            Glossary
          </Button>
        </Link>
      </Box>
      <Box>
        <Link to={'/graph'}>
          <Button variant="contained" sx={{background: '#009688', '&:hover': {background: '#e0f2f1', color: '#009688'},}}>
            Graph
          </Button>
        </Link>
      </Box>
    </Grid>
  );
};

export default Bar;