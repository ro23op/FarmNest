import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAKud-xmAuH2KXN4Ml5f1r2SiQl1oZHjQ0",
  authDomain: "farmnest-6f026.firebaseapp.com",
  projectId: "farmnest-6f026",
  storageBucket: "farmnest-6f026.firebasestorage.app",
  messagingSenderId: "748902725486",
  appId: "1:748902725486:web:96cfbbefe6e29be603737f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();