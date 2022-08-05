import { Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/Layout';

import About from './pages/About';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import NotFioundPage from './pages/NotFoundPage';
import PageEdite from './pages/PageEit';
import SinglePage from './pages/SindglePage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='about-us' element={<Navigate to='/about' replace />} />
          <Route path='posts' element={<BlogPage />} />
          <Route path='posts/:id' element={<SinglePage />} />
          <Route path='posts/:id/edit' element={<PageEdite />} />
          <Route path='*' element={<NotFioundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
