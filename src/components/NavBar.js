import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import LogoDevIcon from '@mui/icons-material/LogoDev';

export default function Navbar(props) {
  const drawerWidth = 240;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div id="responsive-navbar">
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography id="responsive-title" variant="h6" sx={{ my: 2 }}>
          Yazılımcı
        </Typography>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                className="navbar-btns"
                to="home"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
              >
                <ListItemText primary="Anasayfa >" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                className="navbar-btns"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <ListItemText primary="Hakkımda >" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                className="navbar-btns"
                to="contact"
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
              >
                <ListItemText primary="İletişim >" />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // id appbar
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar id="appbar" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Yazılımcı
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }}>
              <Link
                className="navbar-btns"
                to="home"
                spy={true}
                smooth={true}
                offset={500}
                duration={500}
              >
                ANASAYFA
              </Link>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <Link
                className="navbar-btns"
                to="about"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                HAKKIMDA
              </Link>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <Link
                className="navbar-btns"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                İLETİŞİM
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
