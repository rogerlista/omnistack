import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/login';
import List from './pages/list';
import Book from './pages/book';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    List,
    Book,
  }),
);

export default Routes;
