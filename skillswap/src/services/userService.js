import { setDoc, doc, getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

export async function saveUserProfile(userId, profileData) {
  const userDocRef = doc(db, 'users', userId);
  await setDoc(userDocRef, profileData);
}

export async function getAllUsers() {
  const usersCollectionRef = collection(db, 'users');
  const querySnapshot = await getDocs(usersCollectionRef);
  const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return users;
}