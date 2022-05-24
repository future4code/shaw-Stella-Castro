import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Screens/LoginPage/LoginPage";
import RegisterPage from "../Screens/RegisterPage/RegisterPage";
import FeedPage from "../Screens/FeedPage/FeedPage";
import PostPage from "../Screens/PostPage/PostPage";
import ErrorPage from "../Screens/ErrorPage/ErrorPage";

const Router = () =>{
    return (

   <BrowserRouter>
    <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="/feed" element={<FeedPage/>}/>
        <Route path="/post/:id" element={<PostPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>

    </Routes>
    </BrowserRouter>
    )
   
}

export default Router