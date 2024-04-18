const fs=require('fs')
const app= require("./app").app
const https=require('https')

const server= https.createServer({
    key:fs.readFileSync('key.pem'),
    cert:fs.readFileSync('cert.pem'),
},app)
server.listen(3000,()=>{
    console.log("Running on PORT 3000...")
})