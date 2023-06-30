```javascript
import Gun from 'gun';

const gun = Gun();

const analyticsService = {
  saveAnalytics: function(analyticsData) {
    return new Promise((resolve, reject) => {
      gun.get('analytics').put(analyticsData, (ack) => {
        if (ack.err) {
          reject('analyticsSaveFailure');
        } else {
          resolve('analyticsSaveSuccess');
        }
      });
    });
  },
};

export default analyticsService;
```