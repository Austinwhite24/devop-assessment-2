
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    await driver.sleep(2000)
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})



test('displays the div choices when I click drawButton', async () => {
    await driver.sleep(2000)
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    // const displayed = await drawButton.isDisplayed()

    const choices = await driver.findElement(By.id('choices'))

    const displayed = await choices.isDisplayed()
    // const answer = await drawButton.click()
    await driver.sleep(2000)
    // const choices = await driver.findElement(By.id('choices.container'))

    expect(displayed).toBe(true)
    // expect(answer).toBe(choices)
})




test('clicking add to duo button displays div with id = player-duo', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    await driver.sleep(2000)
    const displayed = await drawButton.isDisplayed()
    const answer = await drawButton.click()
    await driver.sleep(2000)

    const addtoDuo = await driver.findElement(By.id('.bot-btn'))
    await driver.sleep(2000)
    await addtoDuo.click()
    await driver.sleep(2000)
    // expect(answer).toBe(true)
})