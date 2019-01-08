import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Message from './Message';

const setup = () => {
  const props = {
    message: 'some message',
    author: 'Me',
  };
  Enzyme.configure({ adapter: new Adapter() });
  const enzymeWrapper = mount(<Message {...props} />);
  return { props, enzymeWrapper };
};

describe('Message', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('p').html()).toBe(
      '<p><i>Me</i>: some message</p>'
    );
  });
});
