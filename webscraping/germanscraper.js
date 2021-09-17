const request = require("request-promise");
const cheerio = require("cheerio");

const presidentURL = "https://en.m.wikipedia.org/wiki/President_of_Germany";
const chancellorURL = "https://en.m.wikipedia.org/wiki/Chancellor_of_Germany";
const statesURL = 'https://en.wikipedia.org/wiki/States_of_Germany';
const partiesURL = 'https://en.wikipedia.org/wiki/List_of_political_parties_in_Germany'

async function main() {
  const chancellor = await scrapLeader(chancellorURL);
  const president = await scrapLeader(presidentURL);
  const states = await scrapStates();
  const parties = await scrapParties();
  return {chancellor, president, states, parties}
}

async function scrapLeader(url) {
  try {
    const htmlResult = await request.get(url);
    const $ = await cheerio.load(htmlResult);
    const leaderResult = $('b:contains("Incumbent")').children("a");
    const name = leaderResult.text();
    const link = "https://en.wikipedia.org" + leaderResult.attr("href");
    const img = $(".infobox-full-data").find('img').attr("src");
    const desc = $('p').eq(1).text();

    incumbantResult = await scrapIncumbant(link, name);

    const party = incumbantResult["party"];
    const incumbant_desc = incumbantResult["incumbant_desc"];

    return { name, link, party, incumbant_desc, img, desc};
  } catch (err) {
    console.log(err);
  }
}

async function scrapIncumbant(url, incumbentName) {
  try {
    const htmlResult = await request.get(url);
    const $ = await cheerio.load(htmlResult);
    const partyResult = $('tr:contains("Political party") > td > a');
    const party = $(partyResult[partyResult.length - 1]).text();

    const lastName = incumbentName.split("")[1];

    const incumbant_desc = $(`p:contains(${lastName})`).first().text();

    return { party, incumbant_desc };
  } catch (err) {
    console.log(err);
  }
}

async function scrapStates() {
  try {
    const htmlResult = await request.get(statesURL);
    const $ = await cheerio.load(htmlResult);

    const states = []
    
    $('table.sortable.wikitable > tbody > tr').each(async (index, element)=> {
        if(index === 0) return true;
        const tds = $(element).find('td');
        const flag = $(tds[1]).find('img').attr('src');
        const link = "https://en.wikipedia.org" + $(tds[2]).find('a').attr('href');
        
        const stateResult = await scrapState(link);

        const name = stateResult['name'];
        const desc = stateResult['desc'];

        const capital = $(tds[4]).text().replace("\n", "");
        const leader = $(tds[6]).text().replace("\n", "");
        const government = $(tds[7]).text().replace("\n", "");
        const iso = $(tds[13]).text().replace("\n", "");

        states.push({iso, name, desc, flag, capital, leader, government})
    })

    return states;


  } catch (err) {
    console.log(err);
  }
}

async function scrapState(url) {
  try {
    const htmlResult = await request.get(url);
    const $ = await cheerio.load(htmlResult);

    const name = $('#firstHeading').text();
    const desc = $(`p:contains(${name})`).first().text();

    return {name, desc};


  } catch (err) {
    console.log(err);
  }
}

async function scrapParties() {
    try {
      const htmlResult = await request.get(partiesURL);
      const $ = await cheerio.load(htmlResult);
  
      const parties = []
      
      const table = $('table.sortable.wikitable')
      $(table[0]).find('tbody > tr').each((index, element) => {
          if(index === 0) return true;
          const tds = $(element).find('td');

          if(parseInt($(tds[5]).text().split(' ')[0]) > 5) {
            const name = $(tds[1]).children('a').text().replace("\n", "");
            const inital = $(tds[2]).text().replace("\n", "");
            const leader = $(tds[3]).text().replace("\n", "");
            const ideology = $(tds[4]).find('a').eq(0).text().replace("\n", "");
            const seats = $(tds[5]).text().split(' ')[0];
            const position = $(tds[7]).text().replace("\n", "");
            const group = $(tds[8]).text().replace("\n", "");

            parties.push({inital, name, leader, ideology, seats, position, group})
          }
      })
  
      return parties
  
  
    } catch (err) {
      console.log(err);
    }
  }

  module.exports = main;

