import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useUser } from './contexts/userContext.js';
import Template from './components/Template/Template';
import TemplateLogIn from './components/TemplateLogIn/TemplateLogIn';
import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import AdminPage from './pages/AdminPage/AdminPage';
import UserPage from './pages/UserPage/UserPage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import OneCoursePage from './pages/OneCoursePage/OneCoursePage';
import AboutMePage from './pages/AboutMePage/AboutMePage'
import Success from './stripe/success'
import Canseled from './stripe/cansel'
import PanierPage from './pages/PanierPage/PanierPage'
import PaiementPage from './pages/PaiementPage/PaiementPage';
import PhotosPage from './pages/PhotosPage/PhotosPages';
import AddCourseForm from './components/AddCourseForm/AddCourseForm'
import DeleteCourse from './components/DeleteCours/DeleteCours'
// import ReservationPage from './pages/ReservationPage/ReservationPage';

function App() {
  const { user } = useUser();

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<TemplateLogIn />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<OneCoursePage />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/propos" element={<AboutMePage />} />
          <Route path="/success" element={<Success />} />
          {/* <Route path="/reservation" element={<ReservationPage />} /> */}
          <Route path="/panier" element={<PanierPage />} />
          <Route path="/paiement" element={<PaiementPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          {user.isAdmin && <Route path="/admin" element={<AdminPage />} />}
          <Route path="/add-course" element={<AddCourseForm />} />
          <Route path="/delete-course" element={<DeleteCourse />} />
        </Route>
      ) : (
        <Route path="/" element={<Template />}>
          <Route index element={<HomePage />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<OneCoursePage />} />
          <Route path="/propos" element={<AboutMePage />} />
          <Route path="/photos" element={<PhotosPage />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
