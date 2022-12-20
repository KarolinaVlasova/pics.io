function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const username = `Hogwarts_${randomNumber}`;
  const password = 'Patronus1!';

  return { username, password }
}

module.exports = { generateUser };