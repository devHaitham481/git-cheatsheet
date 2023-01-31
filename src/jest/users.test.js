import * as axios from 'axios';
import Users from './users';

// here we mocked the entire module of axios
// why? because we want to customize its inner functions workings

jest.mock('axios');

test('should fetch users', () => {
  const users = [
    {
      id: 1,
      first_name: 'Robert',
      last_name: 'Schwartz',
      email: 'rob23@gmail.com',
    },
    {
      id: 2,
      first_name: 'Lucy',
      last_name: 'Ballmer',
      email: 'lucyb56@gmail.com',
    },
  ];

  const resp = { data: users };
  // here we're customizing the get request for it to not return the full response from Users.getAll or from whatever get request we're going to use in this test case. it will always return what we mock it to.

  // hence, mockImplementation();

  axios.get.mockImplementation(() => Promise.resolve(resp));

  Users.getAll().then((resp) => {
    console.log('resp', resp);
    expect(resp.data).toEqual(users);
  });
});
