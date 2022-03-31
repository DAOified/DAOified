import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://DAOified.github.io/">
                DAOified
            </Link>
            {' '}{new Date().getFullYear()}{'.'}
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

export default Footer;