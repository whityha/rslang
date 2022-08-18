import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import TestComponent from '../forms/test-component';

const Main: FC = () => (
  <div>
    <h1>Main Page !!!!</h1>
    <TestComponent head="Test Component Head String" />
    <Link to="/textbook">Textbook. Пример работы с редакс</Link>
    <Button>Test</Button>
  </div>
);
export default Main;
