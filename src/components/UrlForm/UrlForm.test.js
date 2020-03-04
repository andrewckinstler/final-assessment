import React from 'react';
import { shallow } from 'enzyme';
import { UrlForm } from './UrlForm';

describe('UrlForm', () => {
  it('should match a snapshot test', () => {
    const wrapper = shallow(<UrlForm />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should start with a default state', () => {
    const wrapper = shallow(<UrlForm />); 
    const expected = { title: "", urlToShorten: "" }

    expect(wrapper.state()).toEqual(expected)
  })

  it('should change the state when handleChange is called', () => {
    const wrapper = shallow(<UrlForm />);
    const mockEvent = { target: { name: 'title', value: 'a cool title' } }
    const expected = { title: "a cool title", urlToShorten: "" }

    wrapper.instance().handleNameChange(mockEvent);

    expect(wrapper.state()).toEqual(expected)
  })
})