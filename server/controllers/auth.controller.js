import admin from "../admin";
import User from "../models/user.model";

export const login = async (req, res) => {
  const { idToken } = req.body;

  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    const { uid, email, username, provider_id } = decoded;

    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 1 hour
    const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });

    let user = await User.findOne({ uid });

    if(!user) {
      user = new User({
        uid,
        email,
        username: username || "",
        authProvider: decoded.firebase.sign_in_provider,
      });
      await user.save();
    }
     res.cookie('session', sessionCookie, {
      httpOnly: true,
      secure: true,
      maxAge: expiresIn,
      sameSite: 'strict'
    });
     res.status(200).send({ message: 'Logged in and session created' });

  } catch (error) {
    console.error(err);
    res.status(401).send({ message: 'Unauthorized', error: err.message });
  }
}