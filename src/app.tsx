import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/main';
import NotFoundPage from './pages/not-found';
import './app.scss';
import AllLayout from './layout/all';
import GameLayout from './layout/game';
import GameSprintPage from './pages/game-sprint';
import GameCallPage from './pages/game-call';
import StatPage from './pages/stat';
import RegPage from './pages/reg';
import LoginPage from './pages/login';
import TextBookPage from './pages/textbook';
import VocabularyPage from './pages/vocabulary';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllLayout />}>
        <Route index element={<MainPage />} />
        <Route path="stat" element={<StatPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="reg" element={<RegPage />} />
        <Route path="textbook" element={<TextBookPage />} />
        <Route path="vocabulary" element={<VocabularyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/games" element={<GameLayout />}>
        <Route path="sprint" element={<GameSprintPage />} />
        <Route path="call" element={<GameCallPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
