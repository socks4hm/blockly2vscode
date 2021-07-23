import { WelcomePage } from './';
import BlocklyTest from './BlocklyTest';

export default {
  path: '',
  childRoutes: [
    {
      path: 'welcome-page',
      component: WelcomePage,
      isIndex: true,
    },
    {
      path: 'blockly',
      component: BlocklyTest,
    },
  ],
};
