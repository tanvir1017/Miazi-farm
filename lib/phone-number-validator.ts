const validateBDContactRegex: RegExp = /^0\d{10}$/;

export function validateBDPhoneNumber(phoneNumber: string) {
  if (validateBDContactRegex.test(phoneNumber)) return true;
  return false;
}
