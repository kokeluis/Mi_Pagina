import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button } from '@mui/material';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button color="inherit" style={{ color: '#FF4500' }} onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </Button>
  );
};
