import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import React from 'react';
import { Container, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MyIcon from './img/logo2.png'; 

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div style={{ backgroundColor: '#FFD700' }}>
      <AppBar color="default" position="static">
        <Container>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <img src={MyIcon} alt="Mi Icono" style={{ width: '50px', height: '50px' }} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <span style={{ verticalAlign: 'middle' }}></span>
            </Typography>
            <Button color="inherit" style={{ color: '#FF4500' }}>
              Inicio
            </Button>  
            {isAuthenticated ? (
          <>
            <LogoutButton />
            <Profile/>
          </>
        ) : (
          <LoginButton />
        )}
          </Toolbar>
        </Container>
      </AppBar>

      <Carousel autoPlay interval={3000}> 
        <div>
          <img src="https://images.unsplash.com/photo-1668119065849-d8a7e9d73a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Imagen 1" />
          <p className="legend">Descripción de la imagen 1</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1668119064861-c6a30746f056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1183&q=80" alt="Imagen 2" />
          <p className="legend">Descripción de la imagen 2</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1665762389848-8a6acfe934c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1133&q=80" alt="Imagen 2" />
          <p className="legend">Descripción de la imagen 2</p>
        </div>
        
      </Carousel>
      <div
        style={{
          backgroundColor: '#FFC0CB',
          padding: '20px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#00BFFF',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Derechos de autor &copy; 2023. Todos los derechos reservados.
        </Typography>
      </div>
    </div>
  );
}

export default Home;

