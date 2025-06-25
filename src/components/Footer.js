import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { WhatsApp } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #1a1a1a, #333)',
        color: 'white',
        mt: 8,
        pt: 6,
        pb: 4,
        px: 4,
      }}
    >
      <Grid container spacing={5} justifyContent="center">
        {/* Company Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
            MyCompany
          </Typography>
          <Typography variant="body2">
            We build modern, scalable web applications to help your business grow.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
            Quick Links
          </Typography>
          {['Home', 'About', 'Services', 'Contact'].map((text, i) => (
            <Link
              key={i}
              href={`/${text.toLowerCase()}`}
              color="inherit"
              underline="none"
              sx={{
                display: 'block',
                mb: 1,
                transition: '0.3s',
                '&:hover': { color: 'primary.main', pl: 1 },
              }}
            >
              {text}
            </Link>
          ))}
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
            Contact
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            📧 info@mycompany.com
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            📞 +91 98765 43210
          </Typography>
          <Typography variant="body2">📍 Landon</Typography>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textTransform: 'uppercase' }}>
            Follow Us
          </Typography>
          <Box sx={{justifyContent:"space-between"}}>
            {[
              { icon: <FacebookIcon />, link: '#' },
              { icon: <InstagramIcon />, link: '#' },
              { icon: <LinkedInIcon />, link: '#' },
              { icon: <WhatsApp />, link: '#'},
            ].map((item, i) => (
              <IconButton
                key={i}
                href={item.link}
                sx={{
                  bgcolor: 'white',
                  color: '#1a1a1a',
                  m: 1,
                  transition: '0.3s',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          textAlign: 'center',
          borderTop: '1px solid #444',
          mt: 5,
          pt: 2,
        }}
      >
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
