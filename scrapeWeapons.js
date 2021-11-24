const request = require('request');
const cheerio = require('cheerio');
const { fstat } = require('fs');

const url = 'https://escapefromtarkov.fandom.com/wiki/Weapons';

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    
    tags = $('tr > td > a');
    names = []
    for (let i = 0; i < 182; i = i + 2){
        names.push($('tr > td > a','html')[i].attribs.title);
    }
  }

fs = require('fs')
try {
    fs.writeFileSync('weapons.txt', JSON.stringify(names))
    //file written successfully
  } catch (err) {
    console.error(err)
  }
});
