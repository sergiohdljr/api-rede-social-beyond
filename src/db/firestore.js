const admin = require("firebase-admin");
const serviceAccount = require("./projeto-beyond-8c339-firebase-adminsdk-drpgc-ed3497b204.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
