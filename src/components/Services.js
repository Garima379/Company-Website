import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

const servicesData = [
  {
    title: "Web Development",
    description: "We create fast, modern and responsive websites.",
    image: "/bg2.jpg",
  },
  {
    title: "Mobile App Development",
    description: "Build sleek cross-platform apps with performance.",
    image: "/OurTeam.jpg",
  },
  {
    title: "UI/UX Design",
    description: "Design interfaces that users love to use.",
    image: "/Mission.jpg",
  },
  {
    title: "Digital Marketing",
    description: "Grow your brand with smart digital campaigns.",
    image: "/Vision.jpg",
  },
];

function Services() {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f4f4f4" }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Our Services
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Explore the wide range of services we offer to help your business
          thrive.
        </Typography>

        <Grid container spacing={4} sx={{ justifyContent: "space-evenly" }}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%", // 🔸 Important
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
                <Box sx={{ px: 2, pb: 2 }}>
                  <Button fullWidth variant="outlined" color="primary">
                    Learn More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
