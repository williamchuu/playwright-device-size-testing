import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 }
})

test.describe("testing for home tablet", () => {
    test("testing for colors on tablet", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator('#coloring');

        const checkingBackgroundColor = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })

        console.log(checkingBackgroundColor);
        expect(checkingBackgroundColor).toBe("rgb(0, 0, 255)");
    })
})