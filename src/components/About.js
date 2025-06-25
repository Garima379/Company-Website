import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const aboutData = [
  {
    title: 'Our Mission',
    description: 'To deliver high-quality digital products that help businesses grow.',
    image: '/Mission.jpg',
  },
  {
    title: 'Our Vision',
    description: 'Empowering innovation through technology and design.',
    image: '/Vision.jpg',
  },
  {
    title: 'Our Team',
    description: 'We are a group of passionate developers and designers.',
    image: '/OurTeam.jpg',
  },
  {
    title: 'Target',
    description: 'To deliver high-quality digital products that help businesses grow.',
    image: '/bg.jpg',
  },
];

function About() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        We’re a tech company committed to building scalable, modern solutions.
      </Typography>

      <Grid container spacing={10} sx={{justifyContent:"space-between"}}>
        {aboutData.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default About;

