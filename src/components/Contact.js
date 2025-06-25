import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';

function Contact() {
  return (
    <Box sx={{ py: 6, backgroundColor: '#f9f9f9' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Get in Touch
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          We'd love to hear from you! Fill out the form and we’ll get back to you soon.
        </Typography>

        <Grid container spacing={4} sx={{justifyContent:"center"}}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, boxShadow: 3 }}>
              <Typography variant="h6" gutterBottom>
                Send us a message
              </Typography>
              <form>
                <TextField
                  fullWidth
                  label="Your Name"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  margin="normal"
                  variant="outlined"
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Message"
                  margin="normal"
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, boxShadow: 3 }}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                📍 Address: XXXXX
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                📞 Phone: XXXXX
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                📧 Email: info@mycompany.com
              </Typography>
              <Box sx={{ mt: 2 }}>
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.7618301496826!2d78.032191!3d30.316495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929cff49f729d%3A0x75c8ec3a39a758e1!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1660000000000"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
