import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './components/Header';
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobSearch from './pages/JobSearch';

function App() {
  return (
    <Router>
      {/* Global Header */}
      <Header />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-search" element={<JobSearch />} />
        
        {/* This is where Outlet renders child components in nested routes */}
        <Route path="/*" element={<Outlet />} />
      </Routes>

      {/* Global Toaster */}
      <Toaster />
    </Router>
  );
}

export default App;
