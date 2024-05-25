const jsonServer = require('json-server')
const employeePortalServer = jsonServer.create()
const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()
const PORT = 3000 || process.env.PORT

employeePortalServer.use(middleware)
employeePortalServer.use(router)

employeePortalServer.listen(PORT,()=>{
    console.log(`Employee Portal is Running Successfully at Port Number:${PORT}`);
})