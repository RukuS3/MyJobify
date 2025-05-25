import {Request, Response} from "express";
import {getFirestore} from "firebase-admin/firestore";

const db = getFirestore();

export const obtenerPublicaciones = async (req: Request, res: Response) => {
  try {
    const snapshot = await db.collection("publicaciones").orderBy("fecha_creacion", "desc").get();
    const publicaciones: any[] = [];

    snapshot.forEach((doc) => {
      publicaciones.push({id: doc.id, ...doc.data()});
    });

    res.status(200).json(publicaciones);
  } catch (error) {
    console.error("Error al obtener publicaciones:", error);
    res.status(500).json({error: "Error al obtener publicaciones"});
  }
};
