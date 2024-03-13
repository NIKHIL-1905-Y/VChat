import React, { useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";


const Login = () => {

  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev)
 
  return (
    <Container 
    component={"main"}
     maxWidth="xs" 
     sx={{
      height:"100vh",
      width:"100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      
     }}
     >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `url('https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/337/323/datas/original.jpg')`, // Add your background image URL here
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {isLogin ? (
          <>
            <Typography 
            variant="h4"
            sx={{
              color:""
            }}
            >Login</Typography>
            <form action=""
                   style={{
                    width:"100%",
                    marginTop:"1rem",
                   }}
            >
              <TextField
                required
                fullWidth
                label='Username'
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label='Password'
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button sx={{ marginTop: "1rem", }} fullWidth variant="contained" color="primary" type="submit">Login</Button>
              <Typography textAlign={"center"} m={"1rem"}>Or</Typography>
              <Button
             
              variant="text"
              fullWidth
              onClick={toggleLogin}
              >Sign Up Instead</Button>



            </form>
          </>
        ) : (
          <>
            <Typography 
            variant="h4"
            sx={{
              color:""
            }}
            >Sign Up</Typography>
            <form action=""
                   style={{
                    width:"100%",
                    marginTop:"1rem",
                   }}
            >
              <TextField
                required
                fullWidth
                label='Name'
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label='Bio'
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label='Username'
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label='Password'
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button sx={{ marginTop: "1rem", }} fullWidth variant="contained" color="primary" type="submit">Sign Up</Button>
              <Typography textAlign={"center"} m={"1rem"}>Or</Typography>
              <Button
             
              variant="text"
              fullWidth
              onClick={toggleLogin}
              >Login Instead Instead</Button>



            </form>
          </>
        )}

      </Paper>
    </Container>
  );
};

export default Login;


