import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Chip,
  Grid,
  Stack,
} from "@mui/material";
import {
  Launch as ExternalLinkIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import Image from "next/image"; // ✅ use next/image
import { projectsData } from "../data/projects";

export function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.5rem" },
              fontWeight: 500,
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Here are some of my recent projects that showcase my skills and
            experience in full stack development.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 240,
                    position: "relative",
                    overflow: "hidden",
                    "&:hover img": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill // ✅ makes the image fill the parent (since CardMedia has fixed height)
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </CardMedia>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.6 }}
                  >
                    {project.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ flexWrap: "wrap", gap: 1 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: "0.75rem",
                          height: "24px",
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<ExternalLinkIcon />}
                    component="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mr: 1 }}
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<GitHubIcon />}
                    component="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Button
            variant="outlined"
            size="large"
            component="a"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ px: 4 }}
          >
            View All Projects on GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
