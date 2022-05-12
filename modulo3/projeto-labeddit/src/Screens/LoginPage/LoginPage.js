import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToRegisterPage } from "../../Router/coordinator";

//IMPORT DO MUI 
import Container from '@mui/material/Container'
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import axios from "axios";
import { baseURL } from "../../constants/url";


 const LoginPage = () => {
   const [email, setEmail] = useState ("")
   const [password, setPassword] = useState ("")

   const onChangeEmail = (event) =>{
     setEmail(event.target.value)
   }
   const onChangePassword = (event) =>{
     setPassword(event.target.value)
   }

   useEffect (()=>{
     if(localStorage.getItem("token")!==null){
      goToFeedPage(navigate)
     }
   },[])

   

   const Login = async (event) =>{
     event.preventDefault()
     const body = {
       email: email,
       password: password
     }
     try{
       const response = await axios.post(`${baseURL}/users/login`, body)
       localStorage.setItem("token", response.data.token)
       console.log(response)
       goToFeedPage(navigate)
       
     }
     catch(error){
       alert("Falha no login :(")
     }
   }
   
   
  const navigate = useNavigate()
    return (
      <div >

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={Login} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail "
              name="email"
              autoComplete="email"
              autoFocus
              onChange = {onChangeEmail}
              value = {email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Senha"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange = {onChangePassword}
              value = {password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link onClick={ ()=> goToRegisterPage(navigate)} href="" variant="body2">
                  {"Não tem conta? Cadastre-se!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

        <button onClick={ ()=> goToFeedPage(navigate)}>Feed</button>
      </div>
    )
  }
  
  export default LoginPage;