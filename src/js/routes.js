import { loginUser, logoutUser, loadFiches, viewFiche } from './services/authService.js';
import { saveAnalytics } from './services/analyticsService.js';

const routes = [
  {
    path: '/',
    async: async function (routeTo, routeFrom, resolve, reject) {
      if (!authService.isAuthenticated()) {
        resolve({ componentUrl: './views/login.js' });
      } else {
        const fiches = await ficheService.loadFiches();
        resolve({ componentUrl: './views/home.js', context: { fiches } });
      }
    },
  },
  {
    path: '/login/',
    componentUrl: './views/login.js',
    beforeEnter: function (routeTo, routeFrom, resolve, reject) {
      if (authService.isAuthenticated()) {
        resolve({ redirect: '/' });
      } else {
        resolve();
      }
    },
  },
  {
    path: '/fiche/:id/',
    async: async function (routeTo, routeFrom, resolve, reject) {
      const fiche = await ficheService.viewFiche(routeTo.params.id);
      if (fiche) {
        resolve({ componentUrl: './views/fiche.js', context: { fiche } });
      } else {
        reject();
      }
    },
  },
  {
    path: '/logout/',
    beforeEnter: function (routeTo, routeFrom, resolve, reject) {
      authService.logoutUser();
      resolve({ redirect: '/login/' });
    },
  },
];

export default routes;