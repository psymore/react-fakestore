import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Loading = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="70vh"
      width="100%">
      <CircularProgress
        size={80}
        thickness={30}
        sx={{
          color: "#3f51b5",
          mb: 2,
        }}
      />
      <Typography variant="h6">Loading...</Typography>
    </Box>
  );
};

export default Loading;
