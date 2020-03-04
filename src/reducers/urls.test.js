import { urls } from './urls';

describe('urls reducer', () => {
  it('should return initial state if no state is provided', () => {
    const initialState = [];

    const result = urls(undefined, {})

    expect(result).toEqual(initialState)
  })

  it('should return an array of urls', () => {
    const mockUrls = ['www.url1.com', 'www.url2.com'];

    const mockAction = {
      type: 'SET_URLS',
      urls: mockUrls
    }

    const result = urls([], mockAction)

    expect(result).toEqual(mockUrls)
  })
})