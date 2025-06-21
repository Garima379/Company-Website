import { Container, Typography, TextField, Button, Box } from '@mui/material';

function Contact() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
        <TextField label="Name" variant="outlined" required />
        <TextField label="Email" variant="outlined" type="email" required />
        <TextField label="Message" multiline rows={4} variant="outlined" />
        <Button variant="contained">Send</Button>
      </Box>
    </Container>
  );
}

export default Contact;


