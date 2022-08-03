const express = require('express')
const app = express()
const port = 3000

// add logging
// add http response codes 

require('dotenv').config();

app.get('/', (req, res) => {
    res.json({
        "pod_name": process.env.POD_NAME,
        "pod_namespace": process.env.POD_NAMESPACE,
        "pod_ip": process.env.POD_IP
    })
})

app.get('/health', (req, res) => {
    res.send('ok')
})

app.get('/cute', (req, res) => {
    res.send('Cute pic eventually here')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log(process.env.USER_ID)