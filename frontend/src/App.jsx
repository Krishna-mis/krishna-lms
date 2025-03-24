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
import Campus from "./components/Campus";
import PlacementManagement from "./components/PlacementManagement";
import AdminPlacement from "./components/Admin/AdminPlacement";
import CircularAdmin from "./components/Admin/CircularAdmin";
import Circular from "./components/Circular";
import AdminAdmission from "./components/Admin/adminAdmission";

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
      <Route
        path="/campus"
        element={
          <MainLayout>
            <Campus />
          </MainLayout>
        }
      />
      <Route
        path="/placements"
        element={
          <MainLayout>
            <PlacementManagement />
          </MainLayout>
        }
      />
      <Route
        path="/circulars"
        element={
          <MainLayout>
            <Circular />
          </MainLayout>
        }
      />

      {/* Students Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/placements" element={<AdminPlacement />} />
      <Route path="/admin/circulars" element={<CircularAdmin />} />
      <Route path="/admin/admissions" element={<AdminAdmission />} />
    </Routes>
  );
}

export default App;
