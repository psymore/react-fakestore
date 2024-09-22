// @ts-nocheck
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import useThemeStore from "../../../store/themeStore";
import { darkTheme } from "../../../themes";

export default function DetailDialog({
  product,
  detailDialogOpen,
  setDetailDialogOpen,
}) {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme => theme.breakpoints.down("md"));

  const { themeMode } = useThemeStore();

  return (
    <Dialog
      open={detailDialogOpen}
      onClose={() => setDetailDialogOpen(false)}
      fullWidth
      maxWidth="md">
      <Stack
        direction={"column"}
        sx={{
          p: 4,
          display: "flex",
          justifyContent: "center",
          border: themeMode === darkTheme ? "1px solid" : "2px solid",
          borderColor: theme => theme.palette.secondary.light,
          borderRadius: "0.25rem",
        }}>
        <Stack direction={"row"}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              maxWidth: isSmallScreen ? "30%" : isMediumScreen ? "20%" : "15%",
              objectFit: "contain",
              borderRadius: "6px",
            }}
          />
          <Stack direction={"column"} sx={{ ml: 2, mt: 2 }}>
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              sx={{
                color: theme => theme.palette.text.secondary,
              }}>
              {product.title}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              gutterBottom
              sx={{ color: theme => theme.palette.text.secondary }}>
              Price: ${product.price}
            </Typography>

            <Typography
              variant="body2"
              component="div"
              gutterBottom
              sx={{ color: theme => theme.palette.text.secondary }}>
              Rating: {product.rating.rate}
            </Typography>
            <Typography
              variant="body2"
              component="div"
              gutterBottom
              sx={{ color: theme => theme.palette.text.secondary }}>
              Stock: {product.rating.count}
            </Typography>
          </Stack>
        </Stack>

        <Box mt={2}>
          <Typography
            variant="body1"
            component="div"
            gutterBottom
            sx={{
              color: theme => theme.palette.text.secondary,
              lineHeight: "1.8rem",
              textAlign: "justify",
              fontWeight: "bold",
              textDecoration: "underline",
            }}>
            Description
          </Typography>
          <Typography
            variant="body1"
            component="div"
            gutterBottom
            sx={{
              mt: -0.7,
              color: theme => theme.palette.text.primary,
              lineHeight: "1.8rem",
              textAlign: "justify",
            }}>
            {product.description}
          </Typography>
        </Box>
      </Stack>
    </Dialog>
  );
}
