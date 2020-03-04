import React, { Component } from 'react';
import './UrlContainer.css';
import { setUrls } from '../../actions';
import { getUrls, deleteUrl } from '../../apiCalls';
import { connect } from 'react-redux';

export class UrlContainer extends Component {
  constructor() {
    super() 
  }

  componentDidMount() {
    getUrls()
      .then(data => this.props.setUrls(data.urls))
      .catch(err => console.error('Error fetching:', err));
  };

  deleteCard = id => {
    deleteUrl(id)
    const urls = this.props.urls.filter(url => url.id !== id)
    this.props.setUrls(urls)
  }

  render() {
    const urlEls = this.props.urls.map(url => {
      return (
        <div className="url">
          <h3>{url.title}</h3>
          <a href={url.short_url} target="blank">{url.short_url}</a>
          <p>{url.long_url}</p>
          <button onClick={() => this.deleteCard(url.id)}>delete</button>
        </div>
      )
    })
    
    return (
      <section>
        { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
      </section>
    )
  }
}

export const mapStateToProps = ({ urls }) => ({
  urls
});

export const mapDispatchToProps = dispatch => {
  return {
    setUrls: urls => dispatch(setUrls(urls))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UrlContainer);
