import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { referenceLinks } from "../../utils/referenceLinks";

export default function Error() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="70vh"
      width="100%">
      <Alert
        sx={{
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
    </Box>
  );
}
