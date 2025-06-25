import { Container, Typography, Button, Box } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(/bg2.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Container sx={{color:'black'}}>
        <Typography variant="h3" gutterBottom>
          Welcome to MyCompany
        </Typography>
        <Typography variant="h5" gutterBottom>
          We create modern, fast and beautiful websites.
        </Typography>
        <Button variant="contained" color="black" backgroundc>
          Get Started
        </Button>
      </Container>
    </Box>
  );
}

export default Home;

