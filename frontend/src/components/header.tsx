import AppBar from '@mui/material/AppBar';
import GroupsIcon from '@mui/icons-material/Groups';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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

export default Header;