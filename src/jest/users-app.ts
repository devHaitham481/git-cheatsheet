import Users from './users';

async function showData() {
  let res = await Users.getAll();
  console.log(res.data);
}

showData();
console.log('finished');
