import { Grid, styled } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { personalLinks, referenceLinks } from "../utils/referenceLinks";

const Error = () => {
  const StyledLink = styled("a")(({ theme }) => ({
    display: "block",
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      textDecoration: "underline",
    },
  }));

  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="70vh"
        width="90vw">
        <Alert
          variant="outlined"
          severity="warning"
          icon={false}
          sx={{
            fontSize: "1.2rem",
            "& .MuiAlert-icon": {
              fontSize: "2rem",
            },
          }}>
          You can find references of the Fake Store API below: <br />
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
          <br />
          Here are my GitHub repository and profile page links:
          {personalLinks.map(link => (
            <StyledLink
              href={`https://${link}`}
              target="_blank"
              sx={{ marginTop: 1.5, ml: 2 }}>
              {link}
            </StyledLink>
          ))}
          <br />
          Here is favicon credit:
          <StyledLink
            href="https://www.flaticon.com/free-icons/shopping-cart"
            target="_blank"
            title="shopping cart icons"
            sx={{ marginTop: 1.5, ml: 2 }}>
            Shopping cart icons created by Kiranshastry - Flaticon
          </StyledLink>
        </Alert>
      </Box>
    </Grid>
  );
};

export default Error;
