import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        This is not an official site and is not affiliated with NASA or SpaceX in any way. For educational purposes only.
      </Typography>
    </Box>
  );
};

export default Footer;
