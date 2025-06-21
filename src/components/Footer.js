import { Box, Typography } from "@mui/material"

function Footer() {
  return (
    <Box sx={{bgcolor :'black',p: 2,textAlign: "center"}}>
        <Typography variant="body1" sx={{color:"white"}}>
        career@lit.com . All rights reserved.
        </Typography>
    </Box>
  );
}
export default Footer;
