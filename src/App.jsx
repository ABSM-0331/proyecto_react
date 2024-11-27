import React from 'react';
import './index.css';
import Header from './components/header';
import NavBar from './components/navbar';
import MainContent from './components/maincontent';
import Gallery from './components/gallery';
import Footer from './components/footer';

function App() {
    return (
        <div className="app-container">
            <Header />
            <NavBar />
            <MainContent />
            <Gallery />
            <Footer />
        </div>
    );
}

export default App;
