import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Dashboard, CourseDetail, CreateCourse, ContactUs, Login, ForgotPassword, NotFound, CreateQuiz, CreateVideo, Profile, CodePlayground } from "./pages/index";

import Protect from './components/Protect';
import Admin from './components/Admin';
import Loader from './components/loader/Loader';

const LazyAbout = React.lazy(() => import("./pages/about/About"));
const LazyCourses = React.lazy(() => import("./pages/courses/Courses"));
const LazySignup = React.lazy(() => import("./pages/signup/SignUp"));

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* Default route */}
        <Route path='/' element={<Dashboard />} />

        {/* Protected route */}
        <Route path='/auth' element={<Protect />}>
          <Route path='courses' element={
            <Suspense fallback={
              <div className='min-h-screen flex justify-center items-center'>
                <Loader />
              </div>}>
              <LazyCourses />
            </Suspense>
          } >
          </Route>
          <Route path='course/:id' element={<CourseDetail />} />
          <Route path='profile' element={<Profile />} />
          <Route path='code-playground' element={<CodePlayground />} />
        </Route>

        {/* Admin access */}
        <Route path='/admin' element={<Admin />}>
          <Route path='create-course' element={<CreateCourse />} />
          <Route path='add-quiz' element={<CreateQuiz />} />
          <Route path='add-video' element={<CreateVideo />} />
        </Route>


        {/* public accessible */}
        <Route path='about' element={
          <Suspense fallback={
            <div className='min-h-screen flex justify-center items-center'>
              <Loader />
            </div>}>
            <LazyAbout />
          </Suspense>
        } />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='register' element={
          <Suspense fallback={
            <div className='min-h-screen flex justify-center items-center'>
              <Loader />
            </div>}>
            <LazySignup />
          </Suspense>
        } />
        <Route path='login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />

        {/* Un-handled route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;