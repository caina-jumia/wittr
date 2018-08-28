self.addEventListener('fetch', function (event) {
  // TODO: only respond to requests with a
  // url ending in ".jpg"
  let fileExtension = event.request.url.substr(event.request.url.length - 4)
  if (fileExtension === '.jpg')
    event.respondWith(
      fetch('/imgs/dr-evil.gif')
    );
});