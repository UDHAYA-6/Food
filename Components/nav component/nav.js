import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Backdrop } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { blueGrey } from "@mui/material/colors";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import Billing from "../Billing/billing";

function NavBar() {
  const count = useSelector((state) => state.order.Foods);
  let c = 0;
  count.map((item) => {
    if (item.Ordered != undefined) {
      c = c + 1;
      return c;
    }
  });
  const [open, setopen] = React.useState(false);
  const HandleCart = () => {
    setopen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: blueGrey[900] }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Spicy
            <FastfoodIcon />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }} size="large" onClick={HandleCart}>
              Cart
              <Badge badgeContent={c} color="secondary">
                <ShoppingCartIcon size="small" />
              </Badge>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Billing close={HandleCart} />
      </Backdrop>
    </Box>
  );
}

export default NavBar;
