import { useState } from 'react';
import { Typography, AppBar, Container, Toolbar } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
// import '../styles/homeStyle.scss'
// import '../../styles/homeStyle.scss'





const Navbar= () => {

  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(0);

  function handleChange(e, newValue) {
    //DELETE THESE E.
    e.preventDefault(); 
    e.stopPropagation();
    setSelectedItem(newValue);
    console.log("navbar onchange", newValue)
    goToHref(newValue)
  }

  function goToHref(newValue) {
    if (newValue == 0) {
       navigate("/")
    }else if (newValue == 1) {
      navigate("/CartSummary")
    }else if (newValue == 2) {
      navigate("/CartSummary")
    }else{
      navigate("/")
    }
  }



    return(
      console.log("navbar", selectedItem),
        <AppBar position='sticky' style={{backgroundColor:"#90caf9", direction:"rtl"}}>
          <Container maxWidth="xl">
            <Toolbar>
              <Typography
                className={ selectedItem == 0 ? 'selected-item': 'not-seleceted-item'}
                onClick={(e) => handleChange(e, 0)}
                variant="h6"
                noWrap
                component="a"
                // href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  textDecoration: 'none',
                }}
              >
                חיפוש
              </Typography>
              <Typography
                className={ selectedItem == 1 ? 'selected-item': 'not-seleceted-item'}
                onClick={(e) => handleChange(e, 1)}
                variant="h6"
                noWrap
                component="a"
                // href="/record"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  textDecoration: 'none',
                }}
              >
                רשומות
              </Typography>
              <Typography
                className={ selectedItem == 2 ? 'selected-item': 'not-seleceted-item'}
                onClick={(e) => handleChange(e, 2)}
                variant="h6"
                noWrap
                component="a"
                // href="/report"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  textDecoration: 'none',
                }}
              >
                טפסים
              </Typography> 
            </Toolbar>
          </Container>
        </AppBar>
  );
}

export default Navbar