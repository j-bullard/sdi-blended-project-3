const express = require('express');
const { getAllRooms, getRoomById, createRoom, editRoom, minorEditedRoom, deleteRoom } = require('../services/rooms');

const router = express.Router();

router.get('/', async (req, res) => {
  const orgs = await getAllRooms();
  return res.status(200).json(rooms)
})

router.get('/id', async(req, res) => {
  const { id } = req.params;
  const room = await getRoomById(id);
  if (room) {
    return res.status(200).json(room);
  }
})

router.post('/', async (req, res) => {
  const newRoom = await createRoom(req.body);
  return res.status(200).json(newRoom);
})

router.put('/id', async (req, res) => {
  const { id } = req.params;
  const reviseRoom = await editRoom(req.body);
  return res.status(200).json(reviseRoom);
})


router.patch('/id', async (req, res) => {
  const { id } = req.params;
  const minorEditRoom = await minorEditedRoom(req.body);
  return res.status(200).json(minorEditRoom)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await deleteRoom(id);
  return res.status(200).json(deleteRoom);
})


module.exports = router;