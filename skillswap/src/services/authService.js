import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export async function signup(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential;
}

export async function login(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential;
}

export async function getCurrentUser() {
  return auth.currentUser;
}