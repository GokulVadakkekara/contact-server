//import json-server
const jsonServer= require('json-server')

//create json server app
const server= jsonServer.create()

//setup the rout for db.json
const router= jsonServer.router("db.json")

//return a middleware
const middleware= jsonServer.defaults()

//setup port number for server app
const port= process.env.PORT || 3000
//process node le oru variable aan ==>runtimeil assign aavuna variablesnde value store cheyuna aalanu enviroment variable (env).env varuna sthalam aanu process ethile PORT il nu data kittum 
//ethil nu port number kitta only in ethelum web server use cheythu host chiyana samayathu mathram allatha samayam full port number 3000 


//use  middleware and router in server app
server.use(middleware)
server.use(router)


//to listen the server app in port
server.listen(port,()=>{
    console.log(`contact server app started at port ${port}`);
})
