import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {useAuthContext} from "./hooks/useAuthContext"
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import BookingsPage from './pages/BookingsPage';
import BookNowPage from "./pages/BookNowPage";
import AboutUsPage from "./pages/AboutUsPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={!user?<LoginPage />:<Navigate to="/"/>} />
          <Route path="/register" element={!user?<SignupPage />:<Navigate to="/"/>} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/booknow" element={user?<BookNowPage />:<LoginPage/>} />
          <Route path="/booking" element={user?<BookingsPage />:<LoginPage/>} />
          <Route path="/verify/:email/:token" element={<VerifyEmailPage/>} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
