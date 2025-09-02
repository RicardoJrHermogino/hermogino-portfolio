import {
  Box,
  Container,
  Button,
  IconButton,
  Stack,
  keyframes,
  useTheme,
  Typography
} from "@mui/material";
import {
  KeyboardArrowDown as ChevronDownIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import BlurText from "./ui/BlurText/BlurText";
import AnimatedContent from './ui/AnimatedContent/AnimatedContent'


const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transform: translate(-50%, 0);
  }
  40%, 43% {
    transform: translate(-50%, -10px);
  }
  70% {
    transform: translate(-50%, -5px);
  }
  90% {
    transform: translate(-50%, -2px);
  }
`;

const wormMove1 = keyframes`
  0% { 
    d: path("M0,50 Q50,10 100,50 T200,50 T300,50 T400,50");
  }
  25% { 
    d: path("M0,50 Q50,90 100,50 T200,10 T300,90 T400,50");
  }
  50% { 
    d: path("M0,50 Q50,30 100,90 T200,30 T300,10 T400,50");
  }
  75% { 
    d: path("M0,50 Q50,70 100,30 T200,90 T300,30 T400,50");
  }
  100% { 
    d: path("M0,50 Q50,10 100,50 T200,50 T300,50 T400,50");
  }
`;

const wormMove2 = keyframes`
  0% { 
    d: path("M0,30 Q100,70 200,30 T400,30 T600,30");
  }
  33% { 
    d: path("M0,30 Q100,10 200,70 T400,10 T600,30");
  }
  66% { 
    d: path("M0,30 Q100,90 200,10 T400,70 T600,30");
  }
  100% { 
    d: path("M0,30 Q100,70 200,30 T400,30 T600,30");
  }
`;

const wormMove3 = keyframes`
  0% { 
    d: path("M0,40 Q80,20 160,40 T320,40 T480,40 T640,40");
  }
  50% { 
    d: path("M0,40 Q80,80 160,20 T320,80 T480,20 T640,40");
  }
  100% { 
    d: path("M0,40 Q80,20 160,40 T320,40 T480,40 T640,40");
  }
`;

const float = keyframes`
  0%, 100% { transform: translateX(0px) translateY(0px); }
  25% { transform: translateX(-20px) translateY(-10px); }
  50% { transform: translateX(20px) translateY(10px); }
  75% { transform: translateX(-10px) translateY(5px); }
`;

export function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: isDark 
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
          : '#f4f4f4',
        overflow: 'hidden',
        pt: 8,
      }}
    >
      {/* Animated Worm Lines */}
      <Box
        component="svg"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.6,
          animation: `${float} 8s ease-in-out infinite`,
        }}
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke={isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}
          strokeWidth="1"
          d="M0,50 Q50,10 100,50 T200,50 T300,50 T400,50"
          style={{
            animation: `${wormMove1} 6s ease-in-out infinite`,
          }}
        />
      </Box>
      <Box
        component="svg"
        sx={{
          position: 'absolute',
          top: '35%',
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.25,
          animation: `${float} 14s ease-in-out infinite`,
        }}
        viewBox="0 0 640 100"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke={isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.05)'}
          strokeWidth="1.8"
          d="M0,40 Q80,20 160,40 T320,40 T480,40 T640,40"
          style={{
            animation: `${wormMove3} 9s ease-in-out infinite alternate`,
          }}
        />
      </Box>

      <Box
        component="svg"
        sx={{
          position: 'absolute',
          top: '20%',
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.4,
          animation: `${float} 12s ease-in-out infinite reverse`,
        }}
        viewBox="0 0 600 100"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke={isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)'}
          strokeWidth="1.5"
          d="M0,30 Q100,70 200,30 T400,30 T600,30"
          style={{
            animation: `${wormMove2} 8s ease-in-out infinite`,
          }}
        />
      </Box>

      <Box
        component="svg"
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.3,
          animation: `${float} 10s ease-in-out infinite`,
        }}
        viewBox="0 0 500 100"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'}
          strokeWidth="2"
          d="M0,60 Q125,20 250,60 T500,60"
          style={{
            animation: `${wormMove1} 10s ease-in-out infinite reverse`,
          }}
        />
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, px: { xs: 2, sm: 3, md: 4 } }}>
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={true}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.3}
        >
        <Box 
          sx={{ 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Stack spacing={6} sx={{ width: '100%', maxWidth: '900px' }}>
            <Stack spacing={3} sx={{ alignItems: 'center' }}>
              <Typography
                variant="h1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: '2.1rem', sm: '2.2rem', md: '2.3rem' },
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  mb: 1,
                  opacity: 0.8,
                }}
              >
                Hello, I'm
              </Typography>
              
              <BlurText
                text="Ricardo Jr. E. Hermogino"
                animateBy="letters"
                direction="top"
                delay={100}
                stepDuration={0.3}
                className="hero-title"
              />
              
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ 
                  maxWidth: { xs: '100%', sm: '600px', md: '700px', lg: '800px' },
                  mx: 'auto',
                  lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
                  fontSize: { 
                    xs: '1rem', 
                    sm: '1.1rem', 
                    md: '1.25rem', 
                    lg: '1.4rem' 
                  },
                  px: { xs: 1, sm: 2, md: 0 }, // Extra padding on smaller screens
                  textAlign: 'center',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                }}
              >
                Welcome to my portfolio! Discover my projects and the ideas I bring to life
                through code and design.
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ 
                justifyContent: 'center', 
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={handleScrollToProjects}
                sx={{
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  minWidth: { xs: '200px', sm: 'auto' },
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={handleScrollToContact}
                sx={{
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  minWidth: { xs: '200px', sm: 'auto' },
                }}
              >
                Get In Touch
              </Button>
            </Stack>

            <Stack 
              direction="row" 
              spacing={3} 
              sx={{ 
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconButton
                component="a"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.primary',
                  '&:hover': { color: 'primary.main' },
                  p: { xs: 1, sm: 1.5 },
                }}
              >
                <GitHubIcon sx={{ fontSize: { xs: '2rem', sm: '2.25rem' } }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.primary',
                  '&:hover': { color: 'primary.main' },
                  p: { xs: 1, sm: 1.5 },
                }}
              >
                <LinkedInIcon sx={{ fontSize: {xs: '2rem', sm: '2.25rem' } }} />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:hello@example.com"
                sx={{
                  color: 'text.primary',
                  '&:hover': { color: 'primary.main' },
                  p: { xs: 1, sm: 1.5 },
                }}
              >
                <MailIcon sx={{ fontSize: { xs: '2rem', sm: '2.25rem' } }} />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
        </AnimatedContent>
      </Container>


      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          animation: `${bounce} 2s infinite`,
          cursor: 'pointer',
        }}
        onClick={handleScrollToAbout}
      >
        <ChevronDownIcon sx={{ color: 'text.secondary' }} />
      </Box>
    </Box>
  );
}