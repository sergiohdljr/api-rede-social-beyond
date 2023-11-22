import * as admin from "firebase-admin";
import * as serviceAccount from "./projeto-beyond-8c339-firebase-adminsdk-drpgc-ed3497b204.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export default db;
