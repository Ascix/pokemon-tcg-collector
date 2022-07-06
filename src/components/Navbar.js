import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <AppBar sx={{ bgcolor: "#EB8F8F" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" ><Typography
            variant="h5"
            color="#EC0101"
            sx= {{
              mr:2,
              fontWeight: 'bold'
              }}
          >
            Home
          </Typography>
          </Link>
          <Link to="/search" >
          <Typography
            variant="h5"
            color="#EC0101"
            sx= {{
                mr:2,
                fontWeight: 'bold'
                }}
          >
            Search
          </Typography></Link>
          <Link to="/set" >
          <Typography
            variant="h5"
            color="#EC0101"
            sx= {{
                mr:2,
                fontWeight: 'bold'
                }}
          >
            Sets
          </Typography></Link>
          <Link to="/collection" >
          <Typography
              variant="h5"
              color="#EC0101"
              sx= {{
                  mr:2,
                  fontWeight: 'bold'                   
                  }}
          >
            Collection
          </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar
