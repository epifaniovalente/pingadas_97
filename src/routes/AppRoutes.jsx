import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Route>

      <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
