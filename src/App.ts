require('dotenv').config(); 
import express from 'express'; 
import config from 'config'; 
import connectToDb from './utilities/connectToDb';
import log from './utilities/logger';
import router from './routes/index'

const app = express(); 

app.use(router);

const port = config.get("port"); 

app.listen(port, ()=>{
    log.info(`App started to listen on http://localhost:${port}`); 

    connectToDb();
}); 

