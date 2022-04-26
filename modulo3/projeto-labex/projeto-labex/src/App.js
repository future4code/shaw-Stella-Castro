
import './App.css';
import { HomePage } from './pages/HomePage';
import { TripDetailsPage } from './pages/TripDetailsPage';
import { LoginPage } from './pages/LoginPage';
import { ListTripsPage } from './pages/ListTripsPage';
import {CreateTripPage } from './pages/CreateTripPage';
import { ApplicationFormPage } from './pages/ApplicationFormPage';
import { AdminHomePage } from './pages/AdminHomePage';


const App = () => {
  return (
    <div>
    <HomePage/>
    <TripDetailsPage/>
    <LoginPage/>
    <ListTripsPage/>
    <CreateTripPage/>
    <ApplicationFormPage/>
    <AdminHomePage/>

    </div>
  );
}

export default App;
