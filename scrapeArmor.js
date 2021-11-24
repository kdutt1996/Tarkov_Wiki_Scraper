const request = require('request');
const cheerio = require('cheerio');
const { fstat } = require('fs');

const url = 'https://escapefromtarkov.fandom.com/wiki/Armor_vests';

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    names = []
    for (let i = 0; i < 52; i = i + 2){
        names.push($('tr > th > a','html')[i].attribs.title);
    }
  }

fs = require('fs')
try {
    fs.writeFileSync('armor.txt', JSON.stringify(names))
    //file written successfully
  } catch (err) {
    console.error(err)
  }
});
