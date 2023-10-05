const {chromium} = require("playwright");


const Specialties = async () => {
    const browser = await chromium.launch();
    // const results = [];

    const context = await browser.newContext();
    context.setDefaultTimeout(60_000);
    const page = await context.newPage();

    await page.goto("https://www.apollo.io/");
    const pageHtml = page.locator("#nav-login-button button p").innerText();
    console.log(pageHtml);
    // for (let i = 0; i < carArray.length; i++) {
    //     const stockNumber = carArray[i].stockNumber;
    //
    //     const url = `${dealershipToCheck.url}${stockNumber}`;
    //     console.log("Checking url: ", url)
    //     await page.goto(url);
    //
    //     await console.log(page.locator(dealershipToCheck.elementStructure).innerText())
    //     const vehicleInStockEl = dealershipToCheck.elementGetByText?  await page.locator(dealershipToCheck.elementStructure).getByText(stockNumber).innerText() :
    //         await page.locator(dealershipToCheck.elementStructure).innerText();
    //     const isVehicleInStock = vehicleInStockEl?.toUpperCase() === stockNumber.toUpperCase() || vehicleInStockEl.toUpperCase().includes(stockNumber.toUpperCase());
    //
    //     results.push({stockNumber, inStock: isVehicleInStock})
    // }

    await browser.close();

    return pageHtml;
}









module.exports  = Specialties;