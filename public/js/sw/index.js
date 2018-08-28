self.addEventListener('fetch', function(event) {
  event.respondWith(
      new Response('<h1>Hello world </h1> <br/>haha',{
          headers: {'content-type': 'html'}
        })
  )
});