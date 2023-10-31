import { act, renderHook } from '@testing-library/react'

import useLocalStorage from '@/src/_hooks/useLocalStorage/useLocalStorage'

describe(useLocalStorage.name, () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should return a correct value when one is present', () => {
    const obj = { a: 1 }

    jest
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValue(JSON.stringify(obj))

    const { result } = renderHook(() => useLocalStorage('test'))

    expect(JSON.stringify(result.current)).toEqual(
      JSON.stringify([obj, function setValue() {}])
    )
  })

  it('should return null when there is no value', () => {
    const { result } = renderHook(() => useLocalStorage('test'))

    expect(result.current[0]).toEqual(null)
  })

  it('should execute the setValue function correctly', () => {
    const obj = { a: 1 }

    const { result } = renderHook(() => useLocalStorage('test'))

    act(() => {
      result.current[1](obj)
    })

    expect(result.current[0]).toMatchObject(obj)
  })
})
