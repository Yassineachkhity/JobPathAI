import { Outlet } from 'react-router-dom'; // Keep Outlet for nested routes
import { Toaster } from 'sonner';
import Header from './components/Header';
import './styles/index.css';

function App() {
  return (
    <>
      {/* Global Header */}
      <Header />

      {/* Define nested routes using Outlet */}
      <Outlet />

      {/* Global Toaster */}
      <Toaster />
    </>
  );
}

export default App;
