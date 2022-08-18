import { FC } from 'react';

import TestComponent from '../forms/test-component';
import OurTeam from '../out-team/our-team';

const Main: FC = () => (
  <>
    <h1>Main Page</h1>
    <TestComponent head="Test Component" />
    <OurTeam />
  </>
);
export default Main;
