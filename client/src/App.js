import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import HomePage from './pages/HomePage/HomePage';
import FindJobPage from './pages/FindJobPage/FindJobPage';
import PostJobPage from './pages/PostJobPage/PostJobPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import GigDetailPage from './pages/GigDetailPage/GigDetailPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import AboutPage from './pages/AboutPage/AboutPage'; 
import HowItWorksPage from './pages/HowItWorksPage/HowItWorksPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HelpPage from './pages/HelpPage/HelpPage';
import BlogPage from './pages/BlogPage/BlogPage';
import BlogPostPage from './pages/BlogPostPage/BlogPostPage';
import PrivacyPolicyPage from './pages/PolicyPages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/PolicyPages/TermsOfServicePage';

function App() {
  return (
    // Replaced the outer div with a React Fragment
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-a-job" element={<FindJobPage />} />
          <Route path="/gigs" element={<FindJobPage />} />
          <Route path="/post-a-job" element={<PostJobPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/gigs/:id" element={<GigDetailPage />} />
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/post/:postId" element={<BlogPostPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;