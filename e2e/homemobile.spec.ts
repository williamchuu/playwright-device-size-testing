import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: "chromium",
    ...devices['iPhone XR']
})

test.describe("the mobile viewport for iPhone XR", () => {
    test('testing for colors on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000');

        const mainContainer = page.locator('#coloring');

        const checkingBackgroundColor = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })
        console.log(checkingBackgroundColor);
        expect(checkingBackgroundColor).toBe("rgb(255, 0, 0)");
    })
})