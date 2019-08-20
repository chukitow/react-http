import React from 'react';
import { mount } from 'enzyme';
import UsersListApp from '../';

describe('UsersListApp', () => {
  it('displays random people list', () => {
     const wrapper = mount(<UsersListApp />);
     const totalUsers = wrapper.find('.user-item').length;

     expect(totalUsers).toEqual(20);
  });

  it('displays user information when list item is clicked', () => {
     const wrapper = mount(<UsersListApp />);
     wrapper.find('.user-item').first().simulate('click');
     const userInfo = wrapper.find('.user-info').text();

     expect(userInfo).toEqual('mr leander wenz');
  });
});
