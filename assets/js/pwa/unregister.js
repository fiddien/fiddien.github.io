---
layout: compress
permalink: '/unregister.js'
---

if ('serviceWorker' in navigator) {
<<<<<<< HEAD
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (let reg of registrations) {
      reg.unregister();
    }
  });
=======
    navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let reg of registrations) {
            reg.unregister();
        }
    });
>>>>>>> parent of 6a5ac1f (Merge branch 'main' of https://github.com/fiddien/fiddien.github.io)
}
