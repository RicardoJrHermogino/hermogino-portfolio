// app/components/About.tsx
"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import { 
  Code as CodeIcon,
  Palette as DesignIcon,
  Speed as PerformanceIcon,
  Psychology as ProblemSolvingIcon,
} from "@mui/icons-material";
import { skills, expertise } from "../data/skills";

export function About() {
  return (
    <Box 
      component="section" 
      id="about" 
      sx={{ 
        py: 10, 
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 10 } }} >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
          }}
        >
          {/* Left Section - Centered Intro Text */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              textAlign: "center",
              px: { xs: 2, md: 4 },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem" },
                  fontWeight: 600,
                  color: "text.primary",
                  mb: 8,
                }}
              >
                About Me
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                sx={{
                  maxWidth: "500px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                I&apos;m a passionate full stack developer with over 5 years of experience
                building web applications and mobile solutions. I love turning complex
                problems into simple, beautiful designs.
              </Typography>
            </Box>
          </Box>

          {/* Right Section - Big Picture Box */}
          <Box
            sx={{
              flex: 1,
              borderRadius: 2,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: { xs: 700, sm: 500, md: 500, lg: 550, xl: 600 },
            }}
          >
            <Box
              component="img"
              src="me.jpg"
              alt="About Me Picture"
              sx={{
                width: { xs: "80%", s: "100%", md: "80%", lg: "70%", xl: "70%" },
                height: "100%",
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>
      </Container>

      <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 5, md: 6, lg: 8, xl: 10 } }}>
        <Typography 
          variant="h4" 
          component="h3" 
          gutterBottom
          sx={{ 
            fontWeight: 250,
            color: 'text.primary',
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem' },
            mb: { xs: 2, sm: 3, md: 4 },
            mt: 7
          }}
        >
          My Expertise
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 2, sm: 3, md: 4, lg: 5 },
          }}
        >
          
          {/* Left Section - Expertise Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { 
                xs: "1fr", 
                sm: "1fr 1fr", 
                md: "1fr 1fr", 
                lg: "1fr 1fr" 
              },
              gap: { xs: 1.5, sm: 2, md: 2.5 },
              flex: 1,
            }}
          >
            {expertise.map((item, index) => (
              <Box
                key={item.title}
                sx={{
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  borderRadius: { xs: 1.5, sm: 2 },
                  height: { xs: 130, sm: 140, md: 150, lg: 160 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: { xs: 1.5, sm: 2, md: 2.5 },
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: (theme) => theme.palette.mode === 'dark' 
                      ? '0 4px 20px rgba(255, 255, 255, 0.1)' 
                      : 3,
                    borderColor: 'primary.main',
                    backgroundColor: (theme) => theme.palette.mode === 'dark' 
                      ? 'grey.100' 
                      : 'background.paper',
                  },
                }}
              >
                <Box sx={{ mb: { xs: 0.5, sm: 1 } }}>
                  <item.icon 
                    sx={{ 
                      fontSize: { xs: 24, sm: 28, md: 32, lg: 36 }, 
                      color: 'primary.main',
                    }} 
                  />
                </Box>
                <Typography 
                  variant="subtitle1" 
                  component="h4" 
                  sx={{ 
                    fontWeight: 500,
                    color: 'text.primary',
                    textAlign: 'center',
                    mb: { xs: 0.25, sm: 0.5 },
                    fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem', lg: '1.1rem' },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem', lg: '0.8rem' },
                    lineHeight: 1.4,
                    textAlign: 'center',
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Right Section - Technical Skills */}
          <Box
            sx={{
              flex: 1,
              borderRadius: 2,
              minHeight: { xs: 200, sm: 250, md: 300, lg: "100%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ width: '100%' }}>
              <Box>
                <Typography 
                  variant="h4" 
                  component="h3" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 250,
                    color: 'text.primary',
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem' },
                    mb: { xs: 1, sm: 1.5, md: 2 }
                  }}
                >
                  Technical Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, sm: 0.75, md: 1 } }}>
                  {skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      variant="filled"
                      size="small"
                      sx={{
                        fontSize: { xs: '0.65rem', sm: '0.7rem', md: '0.75rem' },
                        height: { xs: 24, sm: 26, md: 28 },
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
                        color: (theme) =>
                          theme.palette.mode === 'dark' ? '#000' : theme.palette.text.primary, // 🔹 black text in dark mode
                        '&:hover': {
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[300],
                        },
                      }}
                    />

                  ))}
                </Box>
              </Box>

              <Box>
                <Typography 
                  variant="h4" 
                  component="h3" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 250,
                    color: 'text.primary',
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem' },
                    mb: { xs: 1, sm: 1.5, md: 2 }
                  }}
                >
                  What I Bring
                </Typography>
                <List dense sx={{ p: 0 }}>
                  <ListItem disablePadding sx={{ mb: { xs: 0.5, sm: 1 } }}>
                    <ListItemText 
                      primary="5+ years of professional development experience"
                      sx={{ 
                        color: 'text.secondary',
                        '& .MuiListItemText-primary': {
                          fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: { xs: 0.5, sm: 1 } }}>
                    <ListItemText 
                      primary="Strong foundation in computer science and software engineering"
                      sx={{ 
                        color: 'text.secondary',
                        '& .MuiListItemText-primary': {
                          fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: { xs: 0.5, sm: 1 } }}>
                    <ListItemText 
                      primary="Experience with agile methodologies and team collaboration"
                      sx={{ 
                        color: 'text.secondary',
                        '& .MuiListItemText-primary': {
                          fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: { xs: 0.5, sm: 1 } }}>
                    <ListItemText 
                      primary="Passion for clean code, testing, and continuous learning"
                      sx={{ 
                        color: 'text.secondary',
                        '& .MuiListItemText-primary': {
                          fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText 
                      primary="Track record of delivering projects on time and within budget"
                      sx={{ 
                        color: 'text.secondary',
                        '& .MuiListItemText-primary': {
                          fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem', lg: '0.95rem' },
                        },
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}