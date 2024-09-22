import { styled } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Error = () => {
  const StyledLink = styled("a")(({ theme }) => ({
    display: "block",
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      textDecoration: "underline",
    },
  }));

  const referenceLinks = [
    "github.com/keikaavousi/fake-store-api",
    "fakestoreapi.com",
    "keikaavousi.medium.com/introduction-to-fake-store-api-dummy-data-for-your-shopping-web-application-a759ad53f3e",
    "dev.to/malikhaziq/10-web-apis-for-your-projects-65o",
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="70vh"
      width="100%">
      <Alert
        variant="outlined"
        severity="warning"
        sx={{
          backgroundColor: "#fdeded",
          fontSize: "1.2rem",
          "& .MuiAlert-icon": {
            fontSize: "2rem",
          },
        }}>
        API is not responding, please try again later. <br />
        <br /> Please visit the following websites for the fakestoreapi github,
        website or its mentions on blogs:
        <br />
        <br />
        {referenceLinks.map(link => (
          <StyledLink
            key={link}
            href={`https://${link}`}
            target="_blank"
            sx={{ marginTop: 1.5, ml: 2 }}>
            {link}
            <br />
          </StyledLink>
        ))}
      </Alert>

      <Typography variant="h6">Loading...</Typography>
    </Box>
  );
};

export default Error;
