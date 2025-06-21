import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const services = [
  { title: 'Web Development', description: 'Custom websites built with modern technologies.' },
  { title: 'App Development', description: 'Mobile apps for Android & iOS.' },
  { title: 'UI/UX Design', description: 'Beautiful, user-friendly designs.' }
];

function Services() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Our Services</Typography>
      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{service.title}</Typography>
                <Typography>{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;
