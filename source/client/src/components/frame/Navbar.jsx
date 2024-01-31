import { useState } from 'react';
import { Typography, AppBar, Container, Toolbar } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
// import '../styles/homeStyle.scss'
// import '../../styles/homeStyle.scss'





export default function Navbar(){

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
      navigate("/")
    }else if (newValue == 2) {
      navigate("/")
    }else if (newValue == 3) {
      navigate("/")
    }else if (newValue == 4) {
      navigate("/")
    // } else if (newValue == 5) {
    //   navigate("/CartSummary")
    // }else{
    //   navigate("/")
    }
  }



    return(
      console.log("navbar", selectedItem),
        <AppBar position='static' style={{backgroundColor:"#90caf9", direction:"rtl"}}>
          <Container maxWidth="xl">
            <Toolbar style={{justifyContent:"center"}}>
            <Typography
                className={ selectedItem == 0 ? 'selected-item': 'not-seleceted-item'}
                onClick={(e) => handleChange(e, 0)}
                variant="h6"
                // nowrap
                component="a"
                // href="/"
                sx={{
                  mr: 5,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  textDecoration: 'none',
                }}
              >
                אנא הזן בשורת החיפוש את הפריט שברצונך לרכוש, בחר את קטגוריית הפריט, והוסף לסל.
              </Typography>
              {/* <Typography
                className={ selectedItem == 0 ? 'selected-item': 'not-seleceted-item'}
                onClick={(e) => handleChange(e, 0)}
                variant="h6"
                nowrap
                component="a"
                // href="/"
                sx={{
                  mr: 5,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  textDecoration: 'none',
                }}
              >
                מוצרי ניקיון
              </Typography>
              <Typography
                className={ selectedItem == 1 ? 'selected-item': 'not-seleceted-item'}
                onClick={(e) => handleChange(e, 1)}
                variant="h6"
                nowrap
                component="a"
                // href="/record"
                sx={{
                  mr: 5,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  textDecoration: 'none',
                }}
              >
                גבינות
              </Typography>
              <Typography
                className={ selectedItem == 2 ? 'selected-item': 'not-seleceted-item'}
                onClick={(e) => handleChange(e, 2)}
                variant="h6"
                nowrap
                component="a"
                // href="/report"
                sx={{
                  mr: 5,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  textDecoration: 'none',
                }}
              >
                ירקות ופירות
              </Typography> 
              <Typography
                className={ selectedItem == 3 ? 'selected-item': 'not-seleceted-item'}
                onClick={(e) => handleChange(e, 2)}
                variant="h6"
                nowrap
                component="a"
                // href="/report"
                sx={{
                  mr: 5,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  textDecoration: 'none',
                }}
              >
                בשר ודגים
              </Typography> 
              <Typography
                className={ selectedItem == 4 ? 'selected-item': 'not-seleceted-item'}
                onClick={(e) => handleChange(e, 2)}
                variant="h6"
                nowrap
                component="a"
                // href="/report"
                sx={{
                  mr: 5,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  textDecoration: 'none',
                }}
              >
                מאפים 
              </Typography>  */}
            </Toolbar>
          </Container>
        </AppBar>
  );
}