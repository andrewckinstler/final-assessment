import { UrlContainer, mapStateToProps, mapDispatchToProps } from './UrlContainer';
import { setUrls } from '../../actions';

describe('UrlContainer redux', () => {
  describe('mapStateToProps', () => {
    it('should return an array of urls', () => {
      const mockState = {
        urls: ['www.url1.com', 'www.url2.com']
      };

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(mockState)
    })
  })
})