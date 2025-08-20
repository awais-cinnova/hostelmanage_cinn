 const rooms = [
  // Hostel h1 – bed-based booking
  { id: "r1", hostelId: "h1", typeId: "t1", rooms: 10, bedsAvailable: 6, bedsOccupied: 4, roomsAvailable: 6, roomsOccupied: 4 },
  { id: "r2", hostelId: "h1", typeId: "t2", rooms: 5, bedsAvailable: 4, bedsOccupied: 6, roomsAvailable: 2, roomsOccupied: 3 },
  { id: "r3", hostelId: "h1", typeId: "t3", rooms: 6, bedsAvailable: 5, bedsOccupied: 13, roomsAvailable: 1, roomsOccupied: 5 },
  { id: "r4", hostelId: "h1", typeId: "t4", rooms: 4, bedsAvailable: 4, bedsOccupied: 12, roomsAvailable: 1, roomsOccupied: 3 },

  // Hostel h2 – room-based booking
  { id: "r5", hostelId: "h2", typeId: "t1", rooms: 6, bedsAvailable: 4, bedsOccupied: 2, roomsAvailable: 4, roomsOccupied: 2 },
  { id: "r6", hostelId: "h2", typeId: "t2", rooms: 3, bedsAvailable: 4, bedsOccupied: 2, roomsAvailable: 2, roomsOccupied: 1 },
  { id: "r7", hostelId: "h2", typeId: "t3", rooms: 2, bedsAvailable: 3, bedsOccupied: 3, roomsAvailable: 1, roomsOccupied: 1 },
  { id: "r8", hostelId: "h2", typeId: "t4", rooms: 4, bedsAvailable: 12, bedsOccupied: 4, roomsAvailable: 3, roomsOccupied: 1 },

  // Hostel h3 – both booking types
  { id: "r9",  hostelId: "h3", typeId: "t1", rooms: 5, bedsAvailable: 2, bedsOccupied: 3, roomsAvailable: 2, roomsOccupied: 3 },
  { id: "r10", hostelId: "h3", typeId: "t2", rooms: 4, bedsAvailable: 2, bedsOccupied: 6, roomsAvailable: 1, roomsOccupied: 3 },
  { id: "r11", hostelId: "h3", typeId: "t3", rooms: 3, bedsAvailable: 3, bedsOccupied: 6, roomsAvailable: 1, roomsOccupied: 2 },
  { id: "r12", hostelId: "h3", typeId: "t4", rooms: 2, bedsAvailable: 2, bedsOccupied: 6, roomsAvailable: 0, roomsOccupied: 2 },

  // Hostel h4 – room-based only
  { id: "r13", hostelId: "h4", typeId: "t1", rooms: 3, bedsAvailable: 2, bedsOccupied: 1, roomsAvailable: 2, roomsOccupied: 1 },
  { id: "r14", hostelId: "h4", typeId: "t2", rooms: 4, bedsAvailable: 2, bedsOccupied: 6, roomsAvailable: 1, roomsOccupied: 3 },
  { id: "r15", hostelId: "h4", typeId: "t3", rooms: 7, bedsAvailable: 9, bedsOccupied: 12, roomsAvailable: 3, roomsOccupied: 4 },
  { id: "r16", hostelId: "h4", typeId: "t4", rooms: 8, bedsAvailable: 24, bedsOccupied: 8, roomsAvailable: 6, roomsOccupied: 2 },

  // Hostel h5 – both booking types
  { id: "r17", hostelId: "h5", typeId: "t1", rooms: 3, bedsAvailable: 1, bedsOccupied: 2, roomsAvailable: 1, roomsOccupied: 2 },
  { id: "r18", hostelId: "h5", typeId: "t2", rooms: 2, bedsAvailable: 1, bedsOccupied: 3, roomsAvailable: 0, roomsOccupied: 2 },
  { id: "r19", hostelId: "h5", typeId: "t3", rooms: 3, bedsAvailable: 3, bedsOccupied: 6, roomsAvailable: 1, roomsOccupied: 2 },
  { id: "r20", hostelId: "h5", typeId: "t4", rooms: 2, bedsAvailable: 3, bedsOccupied: 5, roomsAvailable: 0, roomsOccupied: 2 }
];
export default rooms;