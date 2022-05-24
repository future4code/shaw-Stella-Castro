import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToLoginPage, goToRegisterPage } from "../../Router/coordinator";

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


 const RegisterPage = () => {
   const navigate = useNavigate()
   const [email, setEmail] = useState ("")
   const [password, setPassword] = useState ("")
   const [userName, setUserName] = useState("")

   const onChangeName = (event) =>{
    setUserName(event.target.value)
  }
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
   const Registro = async (event) =>{
    event.preventDefault()
    
    const body = {
      username: userName,
      email: email,
      password: password
    }
    try{
      const response = await axios.post(`${baseURL}/users/signup`, body)
      localStorage.setItem("token", response.data.token)
      console.log(response)
      goToFeedPage(navigate)
      
    }
    catch(error){
      alert("Falha no login :(")
    }
  }
  
return(
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
          <Box component="form" onSubmit={Registro} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Nome"
              name="Name"
              autoComplete="Name"
              autoFocus
              onChange = {onChangeName}
              value = {userName}
            />
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
                <Link onClick={ ()=> goToLoginPage(navigate)} href="" variant="body2">
                  {"Não tem conta? Cadastre-se!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
)
        }

// import react from "react";
// import { useNavigate } from "react-router-dom";
// import { goBack } from "../../Router/coordinator";
// import { goToFeedPage } from "../../Router/coordinator";

// const RegisterPage = () => {
//   const navigate = useNavigate()
//     return (
      
//       
//         RegisterPage
        
//         <hr/>
//         <br/>
//         <br/>
//         <input type="text" name="Nome" placeholder="Nome de usuário"/>
//         <br/>
//         <input type="text" name="Email" placeholder="E-mail"/>
//         <br/>
//         <input type="text" name="Nome" placeholder="Senha"/>
//         <br/>
//         <button onClick={()=> goToFeedPage(navigate)}>Cadastrar</button>
//        
//     )
//   }
  
 export default RegisterPage;