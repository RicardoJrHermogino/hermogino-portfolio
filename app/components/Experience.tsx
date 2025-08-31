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
} from "@mui/material";
import {
  Business as BuildingIcon,
  CalendarToday as CalendarIcon,
} from "@mui/icons-material";
import { experienceData } from "../data/experience";

export function Experience() {
  return (
    <Box 
      component="section" 
      id="experience" 
      sx={{ 
        py: 10, 
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
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
            Work Experience
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
            My professional journey as a full stack developer, highlighting key roles 
            and achievements throughout my career.
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 16, md: '50%' },
              transform: { md: 'translateX(-50%)' },
              height: '100%',
              width: '2px',
              backgroundColor: 'grey.300',
              zIndex: 1,
            }}
          />

          <Stack spacing={6}>
            {experienceData.map((exp, index) => (
              <Box 
                key={index}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 16, md: '50%' },
                    transform: { xs: 'translateX(-50%)', md: 'translate(-50%, -50%)' },
                    top: { md: '50%' },
                    width: 16,
                    height: 16,
                    backgroundColor: 'primary.main',
                    borderRadius: '50%',
                    border: '4px solid',
                    borderColor: 'background.default',
                    zIndex: 2,
                  }}
                />

                {/* Content */}
                <Box
                  sx={{
                    ml: { xs: 6, md: 0 },
                    width: { md: '50%' },
                    pr: { md: index % 2 === 0 ? 4 : 0 },
                    pl: { md: index % 2 === 0 ? 0 : 4 },
                  }}
                >
                  <Card 
                    sx={{
                      backgroundColor: 'background.default',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                        <BuildingIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                        <Typography variant="body2" color="text.secondary">
                          {exp.company}
                        </Typography>
                      </Stack>
                      
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 500,
                          color: 'text.primary',
                        }}
                      >
                        {exp.title}
                      </Typography>
                      
                      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                        <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          {exp.duration}
                        </Typography>
                      </Stack>

                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ mb: 3, lineHeight: 1.6 }}
                      >
                        {exp.description}
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
                            Key Achievements:
                          </Typography>
                          <List dense sx={{ pl: 0 }}>
                            {exp.achievements.map((achievement, achIndex) => (
                              <ListItem key={achIndex} disablePadding>
                                <ListItemText 
                                  primary={`• ${achievement}`}
                                  sx={{ 
                                    color: 'text.secondary',
                                    '& .MuiListItemText-primary': {
                                      fontSize: '0.875rem',
                                    }
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Box>

                        <Box>
                          <Typography 
                            variant="subtitle2" 
                            gutterBottom
                            sx={{ 
                              fontWeight: 500,
                              color: 'text.primary',
                            }}
                          >
                            Technologies:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {exp.technologies.map((tech, techIndex) => (
                              <Chip
                                key={techIndex}
                                label={tech}
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
                      </Stack>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}