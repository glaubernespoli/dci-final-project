import jwt from 'express-jwt';
// import { auth as openIDAuth } from 'express-openid-connect';
import { expressJwtSecret } from 'jwks-rsa';

// export const auth = openIDAuth({
//   authRequired: false,
//   auth0Logout: true,
//   issuerBaseURL: process.env.ISSUER_BASE_URL,
//   baseURL: process.env.BASE_URL,
//   clientID: process.env.CLIENT_ID,
//   secret: process.env.SECRET
// });

export const jwtCheck = jwt({
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.ISSUER_BASE_URL}.well-known/jwks.json`
  }),
  audience: process.env.BASE_URL,
  issuer: process.env.ISSUER_BASE_URL,
  algorithms: ['RS256']
});
