import React, { Component } from 'react';
import { shortenUrl } from '../../apiCalls';
import { addUrl } from '../../actions/index';
import { connect } from 'react-redux';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: "",
      urlToShorten: ""
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const urlObj = { "long_url": this.state.urlToShorten, "title": this.state.title }
    shortenUrl(urlObj)
    this.props.addUrl(urlObj)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addUrl: urls => dispatch( addUrl(urls) )
})

export default connect(null, mapDispatchToProps)(UrlForm);
