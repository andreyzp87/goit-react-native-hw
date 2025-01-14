import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIFKFSZFmPD5HNze9PIroH-SGnl1e0r-4",
  authDomain: "goit-react-native-c6d7f.firebaseapp.com",
  projectId: "goit-react-native-c6d7f",
  storageBucket: "gs://goit-react-native-c6d7f.firebasestorage.app",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);
