```javascript
import Gun from 'gun';

const gun = Gun();

const authService = {
  currentUser: null,

  login: function(username, password) {
    return new Promise((resolve, reject) => {
      gun.get('users').get(username).once((data) => {
        if (data && data.password === password) {
          this.currentUser = data;
          resolve({ message: 'loginSuccess', user: data });
        } else {
          reject({ message: 'loginFailure' });
        }
      });
    });
  },

  logout: function() {
    this.currentUser = null;
    return Promise.resolve({ message: 'logoutSuccess' });
  },

  isAuthenticated: function() {
    return this.currentUser !== null;
  }
};

export default authService;
```