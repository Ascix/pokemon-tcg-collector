import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <AppBar position="static" sx={{ bgcolor: "#EB8F8F" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" ><Typography
            variant="h5"
            color="#CD0A0A"
            sx= {{
              mr:2
              }}
          >
            Home
          </Typography>
          </Link>
          <Link to="/search" >
          <Typography
            variant="h5"
            color="#CD0A0A"
            sx= {{
                mr:2
                }}
          >
            Search
          </Typography></Link>
                <Typography
                  variant="h5"
                  color="#CD0A0A"
                  sx= {{
                      mr:2
                      }}
                >
                  About
                </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar
