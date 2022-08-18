import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';

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
import Toast from './components/toast/toast';
import ReduxConfirm from './components/confirm/redux-confirm';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
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
      <Toast />
      <ReduxConfirm />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
