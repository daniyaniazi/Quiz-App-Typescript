console.log("Registered")

//CHACHE ALL FILES
let cacheData = "appv1"
this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((data) => {
            data.addAll([
                '/static/js/bundle.js',
                '/static/js/vendors~main.chunk.js',
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/favicon.ico',
                '/sockjs-node',
                'index.html',
                '/manifest.json',
                'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple',
                '/',
                '/logo192.png',


            ]).then((succ) => {
                console.log(
                    "Cached All files", succ
                )
            }).catch((err) => {
                console.log('catch Error', err)
            })
        })
    )
})

self.addEventListener('activate', function (event) {
    console.log('[PWA Builder] Claiming clients for current page');
    return self.clients.claim();
});


// //FETCH ALL IN OFFLINE MODE
self.addEventListener('fetch', function (event) {
    console.log(event.request.url);

    //PUSH NOTIFICATION WHEN URL IS BELOW MENTIONED ONE IN OFFLINE MODE
    if (!navigator.onLine) {

        if (event.request.url === 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple') {
            event.waitUntil(
                this.registration.showNotification("You Are Offline", {
                    body: "Make sure that you internet connection is stable to get the latest updates and feature. Thankyou!"
                })
            )
        }


        //FETCHNG IN OFFLINE MODE
        event.respondWith(
            caches.match(event.request).then((response) => {
                if (response) {
                    return response
                }
                let requestUrl = event.request.clone()
                fetch(requestUrl).then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log('RES URL', requestUrl)
                    console.log(err)
                })

            })
        )
    }
});