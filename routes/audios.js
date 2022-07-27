const express = require("express");
const router = express.Router();
const AudioController = require('../controllers/audios');
const contentful = require('contentful');
const { contentType } = require('express/lib/response');

const client = contentful.createClient({
    space: '1lvhj4hknrz1',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'bGhccRpWXAK58kCskknyoobdgL-wnGdcJpoduc1pt3k',
    });
  

router.get("/", async function (req, res) {
    const entry = await client.getEntry('34lUmxZYZTdkQGpOTXhAvs');
    const result = entry.fields;
    let title = result.audioFile.fields.title;
    console.log("Entry title...................................", title);

    let assetLink = result.audioFile.fields.file.url;
    // res.render('single-audio')
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>> audioFile <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<", result);
    // res.send(result);
    res.render('single-audio', {
        entry: result,
        pageTitle: title,
        link: assetLink
    });
    return console.log(result);
});








router.get("/audios", async function (req, res) {
        const entry = await client.getEntries();
        // .getEntry('');
        // '34lUmxZYZTdkQGpOTXhAvs'
        // 1ymjPCOgxR0QteBqpRO9mK
        // const response = JSON.stringify(entry);
        const result = entry.items;
        var arOb = [];
        arOb = result;
        // let multi = result.fields.audioFile;
        // instead fetch all assets within the contentType.
        console.log("Contains More than One Media >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",arOb[1].audioFile);
        for(var a in arOb){
            
            console.log(a+": "+arOb[a].fields.title);
            // console.log("audio Files>>>>>>>>>>>>>>>>>>>>>>",arOb[a].fields.audioFile.fields.file);
            console.log("audio Files>>>>>>>>>>>>>>>>>>>>>>",arOb[a].fields.audioFile);

        }
        console.log("Entry response...................................", (arOb));
        // console.log("Entry insite...................................", map(response));

        // let assetLink = result.audioFile.fields.file.url;
        // res.render('single-audio')
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>> audioFile <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<", result);
        // res.send(result);
        res.render('pod', {
            entry: arOb,
            pageTitle: "All Audios",
            link: "assetLink"
        });
        return console.log(result);
    });



module.exports = router;