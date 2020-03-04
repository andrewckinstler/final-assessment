import * as actions from './index';

describe('actions', () => {
  it('should have a type of SET_URLS', () => {
    const url = 'www.url.com'
    const expectedAction = {
      type: 'SET_URLS', 
      urls: url
    }

    const result = actions.setUrls(url)

    expect(result).toEqual(expectedAction)
  })
})