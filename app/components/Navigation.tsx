// "use client";

// import { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Container,
//   useTheme,
//   useMediaQuery,
//   Tooltip,
//   Slide,
// } from "@mui/material";
// import { 
//   Menu as MenuIcon, 
//   Close as CloseIcon,
//   DarkMode as DarkModeIcon,
//   LightMode as LightModeIcon,
// } from "@mui/icons-material";
// import { useThemeMode } from "../theme/theme";

// export function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showNav, setShowNav] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const { mode, toggleMode } = useThemeMode();

//   const navItems = [
//     { href: "#about", label: "About" },
//     { href: "#projects", label: "Projects" },
//     { href: "#experience", label: "Experience" },
//     { href: "#certificates", label: "Certificates" },
//     { href: "#contact", label: "Contact" },
//   ];

//   const handleMenuItemClick = (href: string) => {
//     setIsMenuOpen(false);
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // 🔹 Detect scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setShowNav(true);
//       } else {
//         setShowNav(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <Slide direction="down" in={showNav} mountOnEnter unmountOnExit>
//       <AppBar 
//         position="fixed" 
//         elevation={0}
//         sx={{
//           backgroundColor: 'transparent',
//           backdropFilter: 'blur(10px)', // Optional: adds a subtle blur effect
//           // Remove the backdrop filter if you want completely transparent
//         }}
//       >
//         <Container maxWidth="xl">
//           <Toolbar
//             sx={{ justifyContent: "space-between", minHeight: "64px !important" }}
//           >
//             <Typography
//               variant="h6"
//               component="div"
//               sx={{
//                 color: "primary.main",
//                 fontWeight: 500,
//                 cursor: "pointer",
//               }}
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             >
//               Portfolio
//             </Typography>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 {navItems.map((item) => (
//                   <Button
//                     key={item.href}
//                     color="inherit"
//                     sx={{
//                       color: "text.primary",
//                       textTransform: "none", // This fixes the all-caps issue!
//                       "&:hover": {
//                         color: "primary.main",
//                         backgroundColor: "transparent",
//                       },
//                       px: 2,
//                       py: 1,
//                       borderRadius: 2,
//                       transition: "color 0.3s ease",
//                     }}
//                     onClick={() => handleMenuItemClick(item.href)}
//                   >
//                     {item.label}
//                   </Button>
//                 ))}
                
//                 {/* Theme Toggle Button for Desktop */}
//                 <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
//                   <IconButton
//                     onClick={toggleMode}
//                     sx={{
//                       color: "text.primary",
//                       ml: 1,
//                       "&:hover": {
//                         color: "primary.main",
//                         transform: "scale(1.1)",
//                       },
//                       transition: "all 0.2s ease-in-out",
//                     }}
//                   >
//                     {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
//                   </IconButton>
//                 </Tooltip>
//               </Box>
//             )}

//             {/* Mobile Navigation */}
//             {isMobile && (
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 {/* Theme Toggle Button for Mobile */}
//                 <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
//                   <IconButton
//                     onClick={toggleMode}
//                     sx={{
//                       color: "text.primary",
//                       "&:hover": {
//                         color: "primary.main",
//                         transform: "scale(1.1)",
//                       },
//                       transition: "all 0.2s ease-in-out",
//                     }}
//                   >
//                     {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
//                   </IconButton>
//                 </Tooltip>
                
//                 {/* Mobile menu button */}
//                 <IconButton
//                   color="inherit"
//                   aria-label="menu"
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   sx={{ color: "text.primary" }}
//                 >
//                   {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
//                 </IconButton>
//               </Box>
//             )}
//           </Toolbar>
//         </Container>

//         {/* Mobile Navigation Drawer */}
//         <Drawer
//           anchor="right"
//           open={isMenuOpen}
//           onClose={() => setIsMenuOpen(false)}
//           sx={{
//             "& .MuiDrawer-paper": {
//               width: 250,
//               boxSizing: "border-box",
//               pt: 2,
//             },
//           }}
//         >
//           <List>
//             {navItems.map((item) => (
//               <ListItem key={item.href} disablePadding>
//                 <ListItemButton
//                   onClick={() => handleMenuItemClick(item.href)}
//                   sx={{
//                     "&:hover": {
//                       color: "primary.main",
//                     },
//                   }}
//                 >
//                   <ListItemText primary={item.label} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//       </AppBar>
//     </Slide>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useTheme,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import { 
  Menu as MenuIcon, 
  Close as CloseIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";
import { useThemeMode } from "../theme/theme";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { mode, toggleMode } = useThemeMode();

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  const handleMenuItemClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{ justifyContent: "space-between", minHeight: "64px !important" }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "text.primary",
              fontWeight: 400,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              height: 60, // increased height
              width: 100, // increased width
              position: "relative",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
              <Image
                src={mode === "dark" ? "/white-logo.png" : "/black-logo.png"}
                alt="Ricardo Logo"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 120px, 150px"
              />
            </Box>
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  color="inherit"
                  sx={{
                    color: "text.primary",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    transition: "color 0.3s ease",
                  }}
                  onClick={() => handleMenuItemClick(item.href)}
                >
                  {item.label}
                </Button>
              ))}
              
              {/* Theme Toggle Button for Desktop */}
              <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
                <IconButton
                  onClick={toggleMode}
                  sx={{
                    color: "text.primary",
                    ml: 1,
                    "&:hover": {
                      color: "primary.main",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Tooltip>
            </Box>
          )}

          {/* Mobile Navigation */}
          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* Theme Toggle Button for Mobile */}
              <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
                <IconButton
                  onClick={toggleMode}
                  sx={{
                    color: "text.primary",
                    "&:hover": {
                      color: "primary.main",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Tooltip>
              
              {/* Mobile menu button */}
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                sx={{ color: "text.primary" }}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            pt: 2,
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                onClick={() => handleMenuItemClick(item.href)}
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
