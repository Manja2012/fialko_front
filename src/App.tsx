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
import CoursesPage from './pages/CoursesPage/CoursesPage.js';
import OneCoursePage from './pages/OneCoursePage/OneCoursePage.js';
import AboutMePage from './pages/AboutMePage/AboutMePage.js'
// import ReservationPage from './pages/ReservationPage/ReservationPage.js';

function App() {
  const { user } = useUser();

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<TemplateLogIn />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<OneCoursePage />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/propos" element={<AboutMePage />} />
          {/* <Route path="/reservation" element={<ReservationPage />} /> */}
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
        </Route>
      )}
    </Routes>
  );
}

export default App;
