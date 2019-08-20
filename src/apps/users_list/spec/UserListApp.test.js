import React from 'react';
import { mount } from 'enzyme';
import UsersListApp from '../';

it('renders random people list', () => {
   const wrapper = mount(<UsersListApp />);
   const totalUsers = wrapper.find('.user-item').length;
   expect(totalUsers).toEqual(20);
});
