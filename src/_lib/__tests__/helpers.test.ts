import { fetcher } from '@/src/_lib/helpers'
import RequestError from '@/src/_models/request-error'

describe(fetcher.name, () => {
  const fetch = global.fetch

  beforeEach(() => {
    global.fetch = jest.fn()
  })

  afterAll(() => {
    global.fetch = fetch
  })

  it('should return a JSON when the request is successful', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ a: 1 })
    })

    const data = await fetcher('/')

    expect(data).toMatchObject({ a: 1 })
  })

  it.skip('should thrown an error when the request fails', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({})
    })

    expect(() => fetcher('/')).toThrowError(
      new RequestError(
        'RequestError: An error occurred while fetching the data.'
      )
    )
  })
})
