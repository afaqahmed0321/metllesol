import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import Blog from "./Pages/Blogs/Blog";
import ClutchBlog from "./Pages/Blogs/ClutchBlog"
import CompanyBlog from "./Pages/Blogs/CompanyBlog";

import DedicatedTeams from "./Pages/ServicesPage/DedicatedTeams";
import ArticalePage from "./Pages/articlePage/Index";

import Career from "./Pages/Career";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import JobDashboard from "./Pages/JobDashboard";

import CourseDashboard from "./Pages/CourseDashboard";
import BlogDashboard from "./Pages/BlogDashboard";

import Courses from "./Pages/courses/Courses";
import ContactUS from "./Pages/ContactUS";
import WebDevelopment from "./Pages/WebDevelopment";
import DedicatedTeam from "./Pages/DedicatedTeam";
import Projects from "./Pages/Projects/Projects";
import MainTestimoniol from "./Pages/Testimoniol/MainTestimoniol";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/companyblog" element={<CompanyBlog />} />
        <Route path="/clutchblog" element={<ClutchBlog />} />

        <Route path="/dedicatedTeams" element={<DedicatedTeams />} />
        <Route path="/articles" element={<ArticalePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/job-dashboard" element={<JobDashboard />} />

        <Route path="/course-dashboard" element={<CourseDashboard />} />
        <Route path="/blog-dashboard" element={<BlogDashboard />} />

        <Route path="courses" element={<Courses />} />
        <Route path="/web" element={<WebDevelopment />} />
        <Route path="/team" element={<DedicatedTeam />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<MainTestimoniol />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
