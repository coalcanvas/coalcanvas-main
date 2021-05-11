function validateEmail(email) {
  //regular expression
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
