import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './layout/all';
import MainPage from './pages/main';
import NotFoundPage from './pages/not-found';
import './app.scss';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<All />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
