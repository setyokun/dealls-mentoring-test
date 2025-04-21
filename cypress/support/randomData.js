const faker = require('faker');
const dayjs = require('dayjs');

function generateRandomData() {
  let name = faker.name.firstName();
  while (name.length < 5) {
    name = faker.name.firstName();
  }
  const username = name.toLowerCase();
  const phone = `62${faker.phone.phoneNumber('##########')}`;
  const rawDate = faker.date.past(30, dayjs().subtract(18, 'year').toDate());
  const dateOfBirth = dayjs(rawDate).format('DD/MM/YYYY');
  const password = `${username}123`;

  return {
    name: name,
    email: `${username}@example.com`,
    phone: phone,
    dateOfBirth: dateOfBirth,
    portfolioLink: `github.com/${username}`,
    password: password,
  };
}

module.exports = { generateRandomData };
