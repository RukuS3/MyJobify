/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

export const getPublicaciones = functions.https.onRequest(async (req, res) => {
  try {
    const snapshot = await db.collection("publicaciones").get();
    const publicaciones: any[] = [];
    snapshot.forEach((doc) => {
      publicaciones.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(publicaciones);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener publicaciones" });
  }
});



// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
