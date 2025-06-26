import React from 'react'; // <--- Thêm dòng này
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MemberProvider } from './context/MemberContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MemberDetail from './pages/MemberDetail';
import './styles.css';

const App = () => {
    return (
        <MemberProvider>
            <Router basename="/digital-cv-portfolio">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/member/:id" element={<MemberDetail />} />
                </Routes>
                <Footer />
            </Router>
        </MemberProvider>
    );
};

export default App;