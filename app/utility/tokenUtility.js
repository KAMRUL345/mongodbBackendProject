import jwt from "jsonwebtoken";
import { JWT_EXPIRE_TIME, JWT_KEY } from "../config/config.js";
// EncodeToken
export const EncodeToken = (email) => {
  let key = JWT_KEY;
  let expire = JWT_EXPIRE_TIME;
  let payload = { email };

  return jwt.sign(payload, key, { expiresIn: expire });
};
// DecodeToken
export const DecodeToken = (token) => {
  try {
    let key = JWT_KEY;
    let decoded = jwt.verify(token, key);
    return decoded;
  } catch (error) {
    return null;
  }
};
