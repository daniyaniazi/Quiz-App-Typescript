export default function swDev() {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((res) => {
        console.warn('reg function', res)
    }).catch((err) => {
        console.error(err)
    })
}