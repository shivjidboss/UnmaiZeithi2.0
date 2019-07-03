const request = require('request');
const cheerio = require('cheerio');

const getContent = async (url) => {

    return new Promise(resolve => {
        request(url, (err, resp, html) => {
            if (!err && resp.statusCode == 200) {
                const $ = cheerio.load(html);
                //console.log($.html().toString());

                resolve(content = {
                    head: $('head').html(),
                    body: $('article').html() // if else block here
                });
            }
        });
    })

}



module.exports = getContent;
