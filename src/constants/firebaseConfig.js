import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import 'firebase/firestore';
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";

// ТОДО
// add methods for delete of lecture
// add methods for update of lecture

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

const firebaseConfig = {
  apiKey: "AIzaSyByauk3ccdiS7I5n_Ma_lFhEp6WwRdclA0",
  authDomain: "diploma-project-v1.firebaseapp.com",
  projectId: "diploma-project-v1",
  storageBucket: "diploma-project-v1.appspot.com",
  messagingSenderId: "23148589709",
  appId: "1:23148589709:web:d1626c3fa6c4a5462668c4",
  measurementId: "G-K6MS3KGF59"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        userAccess: "student"
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      userAccess: "student"
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
  localStorage.removeItem("uid")
};

const saveLecture = async (data) => {
  console.log(data)
  await addDoc(collection(db, data.subject), {
    heading: data.heading,
    subHeading: data.subHeading,
    abstract: data.abstract,
    razdel: data.razdel,
    fullText: data.fullText,
    uid: uuidv4()
  }).then((results) => {
    console.log(results)
  });
};

const getLectures = async () => {
  const q = query(collection(db, "lectures"));
  const docs = await getDocs(q);
  return docs;
}

const checkUserRights = async () => {
  const uid = localStorage.getItem("uid");
  if(uid){
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const docs = await getDocs(q);
    return docs;
  }
}

const getLecture = async (lectureId) => {
  const q = query(collection(db, "lectures"), where("uid", "==", lectureId));
  const docs = await getDocs(q);
  return docs;
}

export { auth, db, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, logout, saveLecture, getLectures, checkUserRights, getLecture };