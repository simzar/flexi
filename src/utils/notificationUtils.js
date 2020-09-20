export function showNotification(message) {
  Notification.requestPermission(function (result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification('Flexitis has some good news!', {
          body: message,
          icon: './flexitis_logo_64.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'toast-sample',
        });
      });
    }
  });
}
