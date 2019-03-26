//REGEX FROM https://emailregex.com/
const reEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  const invalidEmailsArray = emails
    .split(",")
    .map(email => email.trim())
    .filter(email => reEmail.test(email) === false && email);

  if (invalidEmailsArray.length) {
    return `Those emails are invalid: ${invalidEmailsArray}`;
  }
};
