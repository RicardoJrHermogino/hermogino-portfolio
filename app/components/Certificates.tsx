import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import {
  EmojiEvents as AwardIcon,
  Launch as ExternalLinkIcon,
  Event as CalendarIcon,
} from "@mui/icons-material";
import { certificatesData } from "../data/certificates";

export function Certificates() {
  return (
    <Box 
      component="section" 
      id="certificates" 
      sx={{ 
        py: 10,
        backgroundColor: 'background.default',
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
            Certificates & Achievements
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
            Professional certifications and achievements that demonstrate my commitment 
            to continuous learning and expertise in various technologies.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {certificatesData.map((cert, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'background.paper',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <AwardIcon sx={{ fontSize: 32, color: 'primary.main', flexShrink: 0 }} />
                    <Chip 
                      label={cert.date}
                      size="small"
                      variant="outlined"
                      sx={{ 
                        fontSize: '0.75rem',
                        borderColor: 'grey.400',
                        color: 'text.secondary',
                      }}
                    />
                  </Box>

                  <Typography 
                    variant="h6" 
                    component="h3" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 500, 
                      fontSize: '1.1rem',
                      color: 'text.primary',
                    }}
                  >
                    {cert.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    color="primary.main" 
                    sx={{ mb: 2, fontWeight: 500 }}
                  >
                    {cert.issuer}
                  </Typography>

                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ mb: 3, lineHeight: 1.5 }}
                  >
                    {cert.description}
                  </Typography>

                  <Stack spacing={2}>
                    <Box>
                      <Typography 
                        variant="subtitle2" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 500,
                          color: 'text.primary',
                        }}
                      >
                        Skills Covered:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {cert.skills.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            label={skill}
                            size="small"
                            variant="filled"
                            sx={{
                              fontSize: '0.75rem',
                              height: '24px',
                              backgroundColor: 'primary.main',
                              color: 'white',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    <Box sx={{ pt: 1 }}>
                      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                        <CalendarIcon sx={{ fontSize: 12, color: 'text.secondary' }} />
                        <Typography variant="caption" color="text.secondary">
                          ID: {cert.credentialId}
                        </Typography>
                      </Stack>
                      <Button
                        variant="outlined"
                        size="small"
                        fullWidth
                        startIcon={<ExternalLinkIcon sx={{ fontSize: 12 }} />}
                        component="a"
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ fontSize: '0.875rem' }}
                      >
                        Verify Certificate
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ mb: 2 }}
          >
            Always learning and staying up-to-date with the latest technologies and best practices.
          </Typography>
          <Button variant="outlined" size="large">
            View All Certifications
          </Button>
        </Box>
      </Container>
    </Box>
  );
}