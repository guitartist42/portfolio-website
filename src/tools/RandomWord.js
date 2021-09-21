const puppeteer = require('puppeteer');

{/* <>
<div src = "" id = "adjectiveOne" />
<div src = "" id = "nounOne" />
<div src = "" id = "adverb" />
<div src = "" id = "verb" />
<div src = "" id = "adjectiveTwo" />
<div src = "" id = "nounTwo" />
</> */}
 
async function adjective(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="result"]/li/div/span');
    const src = await el.getProperty('src');

    console.log({el});

    browser.close();
}
adjective('https://randomwordgenerator.com/adjective.php');

// console.log("about to fectch first noun");
// console.log("about to fetch adverb");
// console.log("about to fetch verb");
// console.log("about to fetch second adjective");
// console.log("about to fetch second noun");
