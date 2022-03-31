import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';

function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <GroupsIcon fontSize="large" sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          DAOified
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

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
          Tokenize your GitHub projects.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained">Launch App</Button>
          <Button variant="outlined">Documentation</Button>
        </Stack>
      </Container>
    </Box>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://DAOified.github.io/">
        DAOified
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return (
    <Box sx={{
      bgcolor: "background.paper",
      p: 2,
      mt: "auto",
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800]
    }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Tokenize your GitHub projects.
      </Typography>
      <Copyright />
    </Box>
  );
}

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Header />
        <main>
          <Hero />
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;