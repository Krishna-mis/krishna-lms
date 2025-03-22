import { Routes, Route } from "react-router-dom";
import Login from "./components/student/Login";
import Dashboard from "./components/student/Dashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";
import About from "./components/About";

// Layout Wrapper for Home & Courses
function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Home & Courses will use the MainLayout */}
      <Route path="/" element={<Home />} />
      <Route
        path="/courses"
        element={
          <MainLayout>
            <Courses />
          </MainLayout>
        }
      />
      <Route
        path="/apply"
        element={
          <MainLayout>
            <ApplicationForm />
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />

      {/* Students Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
