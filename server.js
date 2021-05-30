'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000 ;
app.get('/', handelHomepage);
function handelHomepage (request , response ){
    response.send("Hello from AWS REEM")
        
}
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))