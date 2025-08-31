// app/components/About.tsx
"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { 
  Code as CodeIcon,
  Palette as DesignIcon,
  Speed as PerformanceIcon,
  Psychology as ProblemSolvingIcon,
} from "@mui/icons-material";

// Define skills and expertise data
const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js",
  "Python", "Django", "PostgreSQL", "MongoDB", "AWS", "Docker",
  "Git", "REST APIs", "GraphQL", "Tailwind CSS", "Material-UI", "Figma"
];

const expertise = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks",
    icon: CodeIcon,
  },
  {
    title: "Backend Development", 
    description: "Creating robust APIs and server-side applications with scalable architecture",
    icon: PerformanceIcon,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user experiences that users love",
    icon: DesignIcon,
  },
  {
    title: "Problem Solving",
    description: "Analyzing complex problems and delivering efficient, maintainable solutions",
    icon: ProblemSolvingIcon,
  },
];

export function About() {
  return (
    <Box 
      component="section" 
      id="about" 
      sx={{ 
        py: 10, 
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ 
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem' },
              fontWeight: 500,
              color: 'text.primary',
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ 
              maxWidth: '600px',
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            I&apos;m a passionate full stack developer with over 5 years of experience 
            building web applications and mobile solutions. I love turning complex 
            problems into simple, beautiful designs.
          </Typography>
        </Box>

        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h4" 
                component="h3" 
                gutterBottom
                sx={{ 
                  fontWeight: 500,
                  color: 'text.primary',
                }}
              >
                My Expertise
              </Typography>
              <Grid container spacing={3}>
                {expertise.map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card 
                      sx={{ 
                        p: 3,
                        height: '100%',
                        transition: 'all 0.3s ease-in-out',
                        backgroundColor: 'background.default',
                        border: '1px solid',
                        borderColor: 'grey.200',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 3,
                          borderColor: 'primary.main',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Box sx={{ mb: 2 }}>
                            <item.icon 
                              sx={{ 
                                fontSize: 40, 
                                color: 'primary.main',
                              }} 
                            />
                          </Box>
                          <Typography 
                            variant="h6" 
                            component="h4" 
                            gutterBottom
                            sx={{ 
                              fontWeight: 500,
                              color: 'text.primary',
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ 
                              fontSize: '0.875rem',
                              lineHeight: 1.5,
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Stack spacing={4}>
              <Box>
                <Typography 
                  variant="h4" 
                  component="h3" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 500,
                    color: 'text.primary',
                  }}
                >
                  Technical Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      variant="filled"
                      size="small"
                      sx={{
                        fontSize: '0.75rem',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
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
                    fontWeight: 500,
                    color: 'text.primary',
                  }}
                >
                  What I Bring
                </Typography>
                <List dense>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemText 
                      primary="5+ years of professional development experience"
                      sx={{ 
                        color: 'text.secondary',
                        '& .MuiListItemText-primary': {
                          fontSize: '0.95rem',
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemText 
                      primary="Strong foundation in computer science and software engineering"
                      sx={{ 
                        color: 'text.secondary',
                        '& .MuiListItemText-primary': {
                          fontSize: '0.95rem',
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemText 
                      primary="Experience with agile methodologies and team collaboration"
                      sx={{ 
                        color: 'text.secondary',
                        '& .MuiListItemText-primary': {
                          fontSize: '0.95rem',
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemText 
                      primary="Passion for clean code, testing, and continuous learning"
                      sx={{ 
                        color: 'text.secondary',
                        '& .MuiListItemText-primary': {
                          fontSize: '0.95rem',
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
                          fontSize: '0.95rem',
                        },
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}