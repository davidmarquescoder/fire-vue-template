import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/BootAuthService";

export default {
  async register(payload) {
    return await createUserWithEmailAndPassword(auth, payload.email, payload.password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, { displayName: payload.name })
    })
  },
  async login(payload) {
    return await signInWithEmailAndPassword(auth, payload.email, payload.password);
  },
  async logout() {
    return await signOut(auth);
  }
}
