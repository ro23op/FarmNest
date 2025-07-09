import admin from '../admin';

const checkAuth = async (req, res, next) => {
  const sessionCookie = req.cookies.session || '';

  try {
    const decodedClaims = await admin.auth().verifySessionCookie(sessionCookie, true);
    req.user = decodedClaims; // Add decoded user to req
    next();
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
};

export default checkAuth;
