```javascript
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { authService } from './services/authService.js';
import { ficheService } from './services/ficheService.js';
import { analyticsService } from './services/analyticsService.js';
import routes from './routes.js';

// Initialize app
const app = new Framework7({
  root: '#app',
  theme: 'auto',
  routes: routes,
});

// Check if user is authenticated
authService.checkAuth().then(isAuthenticated => {
  if (isAuthenticated) {
    // Load fiches
    ficheService.loadFiches().then(fiches => {
      // Show fiches
      app.views.current.router.navigate('/home', {
        context: {
          fiches: fiches
        }
      });
    }).catch(error => {
      console.error('Fiche load failure:', error);
    });
  } else {
    // Navigate to login
    app.views.current.router.navigate('/login');
  }
}).catch(error => {
  console.error('Login failure:', error);
});

// Save analytics data
analyticsService.saveAnalytics();

export { app };
```