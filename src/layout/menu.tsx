import { FC } from 'react';
import { Link } from 'react-router-dom';

const Menu: FC = () => (
  <>
    <Link to="/games/call">Game Audio Call Example Link</Link>
    <Link to="/stat">Link to stat</Link>
    <Link to="/dsafasdfsadf">Any 404 page</Link>
  </>
);
export default Menu;
