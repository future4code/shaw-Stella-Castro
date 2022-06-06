import { HomePage } from '../pages/HomePage';
import { TripDetailsPage } from '../pages/TripDetailsPage';
import { LoginPage } from '../pages/LoginPage';
import { ListTripsPage } from '../pages/ListTripsPage';
import {CreateTripPage } from '../pages/CreateTripPage';
import { ApplicationFormPage } from '../pages/ApplicationFormPage';
import { AdminHomePage } from '../pages/AdminHomePage';
import {BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () =>{
    return(
        <BrowserRouter>

        <Routes>
          <Route index element={<HomePage/>} />
          <Route path='List' element={<ListTripsPage/>}/>
          <Route path='Application' element={<ApplicationFormPage/>}/>
          <Route path='Login' element={<LoginPage/>}/>
          <Route path='Admin' element={<AdminHomePage/>}/>
          <Route path='Trip' element={<TripDetailsPage/>}/>
          <Route path='Create' element={<CreateTripPage/>}/>
  
        </Routes>
        
        </BrowserRouter>
    )
}