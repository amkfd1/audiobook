const contentful = require('contentful');
const { contentType } = require('express/lib/response');

const client = contentful.createClient({
    space: '1lvhj4hknrz1',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'bGhccRpWXAK58kCskknyoobdgL-wnGdcJpoduc1pt3k',
    });
  

// exports.getAudio = async function (req, res) {
//   const entry = client.getEntry('34lUmxZYZTdkQGpOTXhAvs')
    // .then((entry) => {
    // const title = entry.fields.title;
    // const year = entry.fields.year;
    // const description = entry.fields.description;
    // const genre = entry.fields.genre;
    // const audioFile = entry.fields.audioFile.fields.file
    // {
    //   title: title,
    //   year: year,
    //   description: description,
    //   genre: genre,
    //   audioFile: audioFile
    // }, console.log(JSON.stringify(entry.fields.companyName));
    // let ct = entry.json()
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>title<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",JSON.stringify(entry.fields.title));
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>year<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<", entry.fields.year);
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>description<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<", entry.fields.description);
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>genre<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<", entry.fields.genre);
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>audioFile<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<", entry.fields.audioFile.fields.file);
    // res.render('single-audio', {
    //           title: "Title shows here",
    //           pageTitle: "entry.entry.fields.title"
    //       });
  //   return JSON.stringify(entry);
  // })
    
    // console.log(entry.fields.audioFile.fields.file.url); 
  
  // .catch(console.error)
  // };
  
