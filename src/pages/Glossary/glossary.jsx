import Bar from '../../components/bar/bar.jsx';
import { Box, Grid } from '@mui/material';
import Ticket from '../../components/ticket/ticket.jsx';
import { terms } from '../../const/terms.const.js';

const Glossary = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Bar title="Глоссарий"></Bar>
        <Grid container spacing={2} sx={{p: 3}}>
          {
            terms.map(({description, title}) => (
              <Grid key={Math.random()} item xs={12} sm={6} md={4} lg={3} sx={{display: 'flex',}}>
                <Ticket  description={description} title={title}></Ticket>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  );
};

export default Glossary;