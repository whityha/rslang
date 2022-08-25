import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './app';
import { store } from './redux/store';
import WordListProvider from './context/word-list-context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <WordListProvider>
      <App />
    </WordListProvider>
  </Provider>,
);
