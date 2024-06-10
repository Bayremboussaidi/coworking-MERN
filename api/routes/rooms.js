import  express  from "express";
import Room from "../models/Room.js";
import {
    createRoom,
    updateRoom,
    deleteRoom,
    getRooms,
    getRoomDetails
  } from "../controllers/room.js";


const router = express.Router();

//CREATE
router.post("/", createRoom);
//UPDATE
router.put("/:id", updateRoom);
//DELETE
router.delete("/:id", deleteRoom);
//getRoomDetails
//GETALL
router.get("/",  getRooms);





export default router