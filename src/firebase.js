import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAI9EmIh7A0eXrCe8ce-xsDj4WxflK1gGM',
	authDomain: 'clone-b2519.firebaseapp.com',
	projectId: 'clone-b2519',
	storageBucket: 'clone-b2519.appspot.com',
	messagingSenderId: '162384451890',
	appId: '1:162384451890:web:5ddc372a6ed77342f79f2b',
	measurementId: 'G-LZ14QE98J1',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
