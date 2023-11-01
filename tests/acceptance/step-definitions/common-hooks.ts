import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  Given,
  When
} from '@cucumber/cucumber'
import { chromium, ChromiumBrowser } from '@playwright/test'

import { ICustomWorld } from './custom-world'

let browser: ChromiumBrowser

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false })
})

Before(async function (this: ICustomWorld) {
  this.context = await browser.newContext()
  this.page = await this.context.newPage()
})

After(async function (this: ICustomWorld) {
  await this.page?.close()
  await this.context?.close()
})

AfterAll(async function () {
  await browser.close()
})

Given('User visits homepage', async function (this: ICustomWorld) {
  const page = this.page!

  await page.goto(this.parameters.baseUrl)
})

When('User logs into the system', async function (this: ICustomWorld) {
  const page = this.page!

  await page.getByPlaceholder('Email').fill('user@example.com')
  await page.getByPlaceholder('Password').fill('123')
  await page.getByRole('button', { name: 'Log in/Register' }).click()
})
