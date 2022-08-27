const express = require("express")
const app = express()

require("dotenv").config()
const InstagramPublisher = require('instagram-publisher'); // commonJS

const PORT = process.env.PORT || 4000

const { username, password } = process.env
;(async () => {
    const client = new InstagramPublisher({
        email: username,
        password: password,
        
      });
    
      const image_data = {
        image_path: './a.jpg',
        caption: 'Image caption',
      };
      console.log('trying to post')
      const created = await client.createSingleImage(image_data);
      console.log('posted')
      console.log({created})
})()

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}...`)
})