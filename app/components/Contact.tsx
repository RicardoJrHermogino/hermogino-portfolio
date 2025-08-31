import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import { contactInfo, socialLinks } from "../data/contact";

export function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 10,
        backgroundColor: "background.default", // ✅ adapts to theme
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.5rem" },
              fontWeight: 500,
              color: "text.primary", // ✅
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "text.secondary", // ✅
            }}
          >
            I&apos;m always interested in new opportunities and exciting projects.
            Let&apos;s discuss how we can work together!
          </Typography>
        </Box>

        <Grid container spacing={8}>
          {/* Contact Form */}
          <Grid item xs={12} lg={6}>
            <Card sx={{ backgroundColor: "background.paper" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 500, mb: 3, color: "text.primary" }}
                >
                  Send me a message
                </Typography>
                <Box component="form">
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Name" name="name" required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Subject" name="subject" required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={5}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        startIcon={<SendIcon />}
                        sx={{ py: 1.5, fontSize: "1rem" }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} lg={6}>
            <Stack spacing={4}>
              <Box>
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 500, mb: 3, color: "text.primary" }}
                >
                  Let&apos;s connect
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, lineHeight: 1.6, color: "text.secondary" }}
                >
                  I&apos;m always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology and
                  development.
                </Typography>

                <Stack spacing={3}>
                  {contactInfo.map((info, index) => (
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      key={index}
                    >
                      <Box sx={{ color: "primary.main" }}>
                        <info.icon style={{ fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          display="block"
                        >
                          {info.label}
                        </Typography>
                        {info.href ? (
                          <Typography
                            component="a"
                            href={info.href}
                            variant="body2"
                            sx={{
                              textDecoration: "none",
                              color: "text.primary",
                              "&:hover": { color: "primary.main" },
                              transition: "color 0.3s ease",
                            }}
                          >
                            {info.value}
                          </Typography>
                        ) : (
                          <Typography variant="body2" color="text.primary">
                            {info.value}
                          </Typography>
                        )}
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Box>

              <Box>
                <Typography
                  variant="h5"
                  component="h4"
                  gutterBottom
                  sx={{ fontWeight: 500, color: "text.primary" }}
                >
                  Follow me
                </Typography>
                <Stack direction="row" spacing={1}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        border: 1,
                        borderColor: "divider",
                        color: "text.primary",
                        "&:hover": {
                          borderColor: "primary.main",
                          color: "primary.main",
                        },
                      }}
                    >
                      <social.icon />
                    </IconButton>
                  ))}
                </Stack>
              </Box>

              <Card sx={{ p: 3, backgroundColor: "background.paper" }}>
                <Typography
                  variant="h6"
                  component="h4"
                  gutterBottom
                  sx={{ fontWeight: 500, color: "text.primary" }}
                >
                  Availability
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I&apos;m currently available for new projects and opportunities.
                  My typical response time is within 24 hours.
                </Typography>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
