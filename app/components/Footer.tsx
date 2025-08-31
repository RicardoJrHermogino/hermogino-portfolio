import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Mail as MailIcon,
  Favorite as HeartIcon,
} from "@mui/icons-material";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'grey.300',
        pt: 6,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography 
                variant="h5" 
                component="h3"
                sx={{ 
                  fontWeight: 500,
                  color: 'text.primary',
                }}
              >
                Portfolio
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ lineHeight: 1.6 }}
              >
                Full Stack Developer passionate about creating amazing digital experiences.
              </Typography>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography 
                variant="h6" 
                component="h4"
                sx={{ 
                  fontWeight: 500,
                  color: 'text.primary',
                }}
              >
                Quick Links
              </Typography>
              <Stack spacing={1}>
                {[
                  { href: '#about', label: 'About' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#experience', label: 'Experience' },
                  { href: '#certificates', label: 'Certificates' },
                  { href: '#contact', label: 'Contact' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    component="button"
                    variant="body2"
                    onClick={() => handleNavClick(link.href)}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      textAlign: 'left',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Social & Contact */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography 
                variant="h6" 
                component="h4"
                sx={{ 
                  fontWeight: 500,
                  color: 'text.primary',
                }}
              >
                Connect
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton
                  component="a"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="mailto:hello@example.com"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  <MailIcon />
                </IconButton>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                hello@example.com
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'grey.300' }} />
        
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Portfolio. All rights reserved.
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="body2" color="text.secondary">
              Made with
            </Typography>
            <HeartIcon sx={{ fontSize: 16, color: 'error.main' }} />
            <Typography variant="body2" color="text.secondary">
              and lots of coffee
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}