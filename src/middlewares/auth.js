import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase/BootAuthService";

export default function guard(to, from, next) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      next();
    } else {
      next("/login");
    }
  });
};
