import { Then, When } from '@cucumber/cucumber'

import { ICustomWorld } from '@/tests/acceptance/step-definitions/custom-world'

Then(
  'User clicks the Share a movie button',
  async function (this: ICustomWorld) {
    const page = this.page!

    await page.getByRole('button', { name: 'Share a movie' }).click()
  }
)

Then(
  'User is redirected to the movie sharing page',
  async function (this: ICustomWorld) {
    const page = this.page!

    await page.getByText('Share a YouTube movie').isVisible()
  }
)

When('User fills a YouTube video URL', async function (this: ICustomWorld) {
  const page = this.page!

  await page
    .getByRole('textbox', { name: 'YouTube URL:' })
    .fill('https://youtu.be/ocu9qECN8Os')
})

Then('User clicks the Share button', async function (this: ICustomWorld) {
  const page = this.page!

  await page.getByRole('button', { name: 'Share', exact: true }).click()
})

Then(
  'User sees the video is shared on the homepage',
  async function (this: ICustomWorld) {
    const page = this.page!

    await page
      .getByText('Start your Bitcoin life now with Remitano')
      .isVisible()
  }
)
