import { Box, Typography } from '@mui/material';
import Bar from '../../components/bar/bar.jsx';

const NotFound = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Bar title={"404"}></Bar>
        <Typography variant="h3">Упс! Страница не найдена!</Typography>
      </Box>
    </>
  );
};

export default NotFound;