import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics'

const config = {
    apiKey: process.env.NEXT_PUBLIC_FB_KEY,
    authDomain: process.env.NEXT_PUBLIC_FB_AUTH,
    projectId: process.env.NEXT_PUBLIC_FB_PROJECT,
    storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE,
}

export default function initializeFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }
}