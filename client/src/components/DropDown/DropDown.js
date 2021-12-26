import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        width: "340px",
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white'
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function CustomizedMenus(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const closeTheMenu = () => {
        setAnchorEl(false)
    }

    return (
        <div>
            <i className="fas fa-bars"
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
            </i>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClick={closeTheMenu}
                onClose={handleClose}
            >
                <Link to="/article">
                    <StyledMenuItem>Pesho</StyledMenuItem>
                </Link>
                <StyledMenuItem onClick={props.onClosinSearchInput}>Търси...</StyledMenuItem>
                <Link to="/article">
                    <StyledMenuItem>Pesho</StyledMenuItem>
                </Link>
                <Link to="/article">
                    <StyledMenuItem>Pesho</StyledMenuItem>
                </Link>
                <Link to="/article">
                    <StyledMenuItem>Pesho</StyledMenuItem>
                </Link>
                <Link to="/article">
                    <StyledMenuItem>Pesho</StyledMenuItem>
                </Link>
            </StyledMenu>
        </div>
    );
}