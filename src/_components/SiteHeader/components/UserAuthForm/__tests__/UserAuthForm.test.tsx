import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import UserAuthForm from '@/src/_components/SiteHeader/components/UserAuthForm/UserAuthForm'
import { fetcher } from '@/src/_lib/helpers'
import { digest } from '@/src/_lib/utils'
import RequestError from '@/src/_models/request-error'

jest.mock('@/src/_lib/helpers').mock('@/src/_lib/utils')

describe(UserAuthForm.name, () => {
  const windowLocation = window.location
  const consoleError = console.error

  beforeEach(() => {
    console.error = jest.fn()
  })

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { reload: jest.fn() }
    })
  })

  afterAll(() => {
    window.location = windowLocation
    console.error = consoleError
  })

  it('should submit successfully when the values are valid', async () => {
    ;(fetcher as jest.Mock).mockResolvedValue({})

    const setUser = jest.fn()
    const user = userEvent.setup()

    render(<UserAuthForm setUser={setUser} />)

    const [emailInput, passwordInput] = screen.getAllByRole('textbox')

    await user.type(emailInput, 'a@b.c')
    await user.type(passwordInput, '1')
    await user.click(screen.getByRole('button', { name: 'Log in/Register' }))

    expect(digest).toHaveBeenCalledWith('1')
    expect(setUser).toHaveBeenCalled()
  })

  it('should fail to submit when the request fails', async () => {
    ;(fetcher as jest.Mock).mockRejectedValue(new RequestError('test error'))

    const user = userEvent.setup()

    render(<UserAuthForm setUser={() => {}} />)

    const [emailInput, passwordInput] = screen.getAllByRole('textbox')

    await user.type(emailInput, 'a@b.c')
    await user.type(passwordInput, '1')
    await user.click(screen.getByRole('button', { name: 'Log in/Register' }))

    expect(console.error).toHaveBeenCalled()
  })

  it('should handle form error correctly', async () => {
    const user = userEvent.setup()

    render(<UserAuthForm setUser={() => {}} />)

    const [emailInput] = screen.getAllByRole('textbox')
    const loginButton = screen.getByRole('button', { name: 'Log in/Register' })

    await user.click(loginButton)
    expect(screen.getByText('Email is required.'))
    expect(screen.getByText('Password is required.'))

    await user.type(emailInput, 'a')
    expect(screen.getByText('This must be an email.'))
  })
})
