import React from 'react';
import { mount } from 'enzyme';
import UsersListApp from '../';
import moxios from 'moxios';
import * as Responses from '../mock';
import { act } from 'react-dom/test-utils';

describe('UsersListApp', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const mock = () => {
    moxios.stubRequest('https://randomuser.me/api?results=20', { status: 200, response: Responses.users });
  };

  it('displays random people list', async () => {
     mock();
     let wrapper;
     await act(async () => {
       wrapper = mount(<UsersListApp />);
     });
     wrapper.update();
     const totalUsers = wrapper.find('.user-item').length;

     expect(totalUsers).toEqual(20);
  });

  it('displays user information when list item is clicked', async () => {
     mock();
     let wrapper;
     await act(async () => {
       wrapper = mount(<UsersListApp />);
     })
     wrapper.update();
     wrapper.find('.user-item').first().simulate('click');
     const userInfo = wrapper.find('.user-info').text();

     expect(userInfo).toEqual('mr leander wenz');
  });
});
