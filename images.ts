const axios = require('axios')
const fs = require('fs')

async function fn() {
    try {
        const res = await axios.get(
            'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png',
            { responseType: 'stream' }
        )
        const data = fs.createWriteStream('./test.png')
        res.data.pipe(data)
        console.log(res.data)
    } catch (err) {
        console.log(err)
    }
}
fn()
