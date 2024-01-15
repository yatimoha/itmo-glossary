import { Card, CardContent, Typography } from '@mui/material';
const Ticket = ({title, description}) => {
  return (
    <>
      <Card sx={{ minWidth: 275, display: 'flex', justifyContent: 'space-between', flexDirection: 'column',  flexGrow: 1,}}>
        <CardContent>
          <Typography variant="h5" sx={{mb: 1}}>
            {title}
          </Typography>
          <Typography vatiant="body2" sx={{height: 150, overflow: 'hidden',}}>
            {description}
          </Typography>
        </CardContent>
      </Card>
   </>
  );
};

export default Ticket;