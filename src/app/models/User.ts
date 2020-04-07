export interface User {
  userPK: number;
  name: String;
  lastName: String;
  document: number;
  pass: String;
  rolesFK: number;
}
