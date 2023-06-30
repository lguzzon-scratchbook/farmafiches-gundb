```javascript
import Gun from 'gun';

const gun = Gun();

export const ficheService = {
  loadFiches: async () => {
    return new Promise((resolve, reject) => {
      gun.get('fiches').on((data, key) => {
        if (data) {
          resolve(data);
        } else {
          reject('No fiches found');
        }
      });
    });
  },

  viewFiche: async (ficheId) => {
    return new Promise((resolve, reject) => {
      gun.get('fiches').get(ficheId).on((data, key) => {
        if (data) {
          resolve(data);
        } else {
          reject('Fiche not found');
        }
      });
    });
  },
};
```