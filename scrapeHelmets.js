const request = require('request');
const cheerio = require('cheerio');
const { fstat } = require('fs');

const url = 'https://escapefromtarkov.fandom.com/wiki/Headwear';

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    
    tags = $('tr > td > a');
    names = []
    for (let i = 0; i < 61; i = i + 2){
        names.push($('tr > th > a','html')[i].attribs.title);
    }
  }

fs = require('fs')
try {
    fs.writeFileSync('helmets.txt', JSON.stringify(names))
    //file written successfully
  } catch (err) {
    console.error(err)
  }
});