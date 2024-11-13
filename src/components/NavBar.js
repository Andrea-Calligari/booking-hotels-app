import React from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
//  import HomeIcon from  '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        backgroundColor: 'whitesmoke',
        borderRadius: '24px',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: '500px',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        color: 'black',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'black',
        '& .MuiInputBase-input': {
            padding: '8px',
            transition: theme.transitions.create('width'),
            width: '100%',
            margin: '0 auto',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    return (

        <div className="container-nav">
            <nav className="row-nav ">
                <div className="logo"><Link to="/">STAYSYNC</Link></div>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <ul className='row-list'>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to="/summary">SUMMARY</Link></li>
                    <li><Link to='/about-us'>ABOUT</Link></li>
                    <li><Link to="/log-in">LOGIN</Link></li>
                </ul>
            </nav>
        </div>

    );
}

export default NavBar;
