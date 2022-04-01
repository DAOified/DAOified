import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Header from '../components/header';
import Footer from '../components/footer';

function Hero() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          DAOified
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Tokenized open source projects.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" component={Link} to="/app">Launch App</Button>
          <Button variant="outlined" component={Link} to="/docs">Documentation</Button>
        </Stack>
      </Container>
    </Box>
  );
}

function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default Landing;