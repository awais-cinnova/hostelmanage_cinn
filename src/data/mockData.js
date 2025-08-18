// mockData.js

const mockData = {
  owners: [
    {
      id: "1",name: "Emilsy Johnson",email: "emily.johnson@cityhostels.com", password: "ej1234", role: "owner",
      phoneNumber: "+1 (415) 555-0198", age: 32,dob: "1992-06-14", gender: "Female", passportNumber: "X1234567",
      nationality: "American", maritalStatus: "Single"
    },
    {
      id: "2",name: "Michael Smith", email: "michael.smith@coasthostel.com", password: "ms1234", role: "owner",
      phoneNumber: "+1 (212) 555-2345", age: 40, dob: "1985-03-02", gender: "Male", passportNumber: "Y9876543",
      nationality: "American", maritalStatus: "Married"
    },
    {
      id: "3",name: "Samantha Lee",email: "samantha.lee@urbanstay.com", password: "sl1234", role: "owner",
      phoneNumber: "+1 (310) 555-8721",age: 29, dob: "1996-08-22", gender: "Female", passportNumber: "Z5432198",
      nationality: "Canadian",maritalStatus: "Single"
    },
 {
    id: "4",name: "David Thompson",email: "david.thompson@midwesthostel.com",password: "dt1234",role: "owner",
    phoneNumber: "+1 (619) 555-0147",age: 35,dob: "1988-04-15",gender: "Male",passportNumber: "W4567890",
    nationality: "American",maritalStatus: "Married"
  },
  {
    id: "5",name: "Natalie Rivera", email: "natalie.rivera@sunhostel.com",password: "nr1234",role: "owner",
    phoneNumber: "+1 (718) 555-0269",age: 27,dob: "1996-10-30",gender: "Female",passportNumber: "V2345678",
    nationality: "American",maritalStatus: "Single"
  },
  {
    id: "6",name: "Chris Brown",email: "chris.brown@mountainlodge.com",password: "cb1234",role: "owner",
    phoneNumber: "+1 (503) 555-0392",age: 42,dob: "1981-01-20",gender: "Male",passportNumber: "U3456789",
    nationality: "American",maritalStatus: "Married"
  },
  {
    id: "7",name: "Charles Dan",email: "charles.dan@mountaintravelling.com",password: "cd1234",role: "owner",
    phoneNumber: "+1 (212) 555-0765",age: 38,dob: "1985-11-05",gender: "Male",passportNumber: "T8765432",
    nationality: "American",maritalStatus: "Married"
  },
  {
    id: "8",name: "Harry Smith",email: "harry.smith@motel.com",password: "hs1234",role: "owner",
    phoneNumber: "+1 (312) 555-0890",age: 31,dob: "1992-07-18",gender: "Male", passportNumber: "S0987654",
    nationality: "American",maritalStatus: "Single"
  },
  ],

  admin:[
    {
      id: "0398", name: "Awais Arif", email: "awais.arif@gmail.com", password: "aa1234", role: "admin"
    }
  ],

  hostels: [
    { id: "h1", ownerId: "1", name: "Downtown City Hostel", location: "New York", totalRooms: 6 },
    { id: "h2", ownerId: "1", name: "City View Flat", location: "New York", totalRooms: 3 },
    { id: "h3", ownerId: "2", name: "Coastline Backpackers", location: "California Beach", totalRooms: 5 },
    { id: "h4", ownerId: "1", name: "Burj al byt", location: "Dubai", totalRooms: 13 },
    { id: "h5", ownerId: "3", name: "UrbanStay Hostel", location: "Los Angeles", totalRooms: 4 }
  ],

};

export default mockData;
