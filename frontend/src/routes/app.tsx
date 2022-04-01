import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Header from '../components/header';
import Footer from '../components/footer';

const features = [
    {
        title: 'Receive Rewards',
        description: [
            'Want to earn tokens?',
            'Set up your account and start contributing.',
        ],
        buttonText: 'Connect GitHub account',
        buttonVariant: 'contained',
    },
    {
        title: 'Delegate Tokens',
        description: [
            'Have received tokens?',
            'Delegate them and start voting on pull requests.'
        ],
        buttonText: 'Delegate Tokens',
        buttonVariant: 'contained',
    },
    {
        title: 'Create Project',
        description: [
            'Want to start a project?',
            'Create a tokenized open source repository.',
        ],
        buttonText: 'Create Project',
        buttonVariant: 'contained',
    },
    {
        title: 'Browse Projects',
        description: [
            'First time here?',
            'Get inspired by existing projects.',
        ],
        buttonText: 'Browse Projects',
        buttonVariant: 'outlined',
    },
    {
        title: 'Read Documentation',
        description: [
            'Want to learn more?',
            'Find out how things work by reading the documentation.',
        ],
        buttonText: 'Read Documentation',
        buttonVariant: 'outlined',
    },
];

function Features() {
    return (
        <Container maxWidth="md" sx={{ mt: 2.5, mb: 2.5 }} >
            <Grid container spacing={5} justifyContent="center" alignItems="flex-end">
                {features.map((feature) => (
                    <Grid
                        item
                        key={feature.title}
                        xs={12}
                        sm={6}
                        md={4}
                    >
                        <Card>
                            <CardHeader
                                title={feature.title}
                                titleTypographyProps={{ align: 'center' }}
                                sx={{
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[200]
                                            : theme.palette.grey[700],
                                }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2,
                                    }}
                                >
                                    <Typography component="h2" variant="h6" color="text.primary">
                                        {feature.description[0]}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2,
                                    }}
                                >
                                    <Typography
                                        component="p"
                                        variant="subtitle1"
                                        align="center"
                                        key={feature.description[1]}
                                    >
                                        {feature.description[1]}
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button
                                    fullWidth
                                    variant={feature.buttonVariant as 'outlined' | 'contained'}
                                >
                                    {feature.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
}

function App() {
    return (
        <>
            <Header />
            <main>
                <Features />
            </main>
            <Footer />
        </>
    );
}

export default App;