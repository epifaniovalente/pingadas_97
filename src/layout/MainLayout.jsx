import { Outlet } from 'react-router-dom';
import Header from '../ui/Header';
import Footer from '../components/footer/Footer';

export const MainLayout = () => {
  return (
    <>
      <header className="w-full border-b border-gray-200">
        <Header />
      </header>
      <main className="relative">
        {/* Serve com espeça reservado - de acordo a rota */}
        <Outlet />
      </main>

      <footer className="relative max-w-5xl w-full bg-slate-900">
        <Footer/>
      </footer>
    </>
  );
};
