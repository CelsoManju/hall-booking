const express = require('express');
const app = express();
const port = 3000;

 let rooms = {
    room :[],
 };
 let bookings ={
  booking : [],
 };
 let customers ={
  customer : [],
  };
app.use(express.json());

app.get('/listallRooms',(req,res)=>{
    res.json(rooms);
});

app.post('/createRoom', (req, res) => {

    const newRoom = req.body;
    rooms.room.push(newRoom);
res.json(rooms);
});

app.post('/createBooking', (req, res) => {

  const newBooking = req.body;
  bookings.booking.push(newBooking);
res.json(bookings);
});

app.post('/createCustomer', (req, res) => {

  const newCustomer = req.body;
  customers.customer.push(newCustomer);
res.json(customers);
});

app.get('/getRoomBookedStatus',(req,res)=>{
  const bookedStatusDetails = [];
  for (const booking of bookings.booking) {
    const room = rooms.room.find((r) => r.room_id === booking.room_id);
    const customer = customers.customer.find((c) => c.customer_id === booking.customer_id);
    if (room && customer) {
      const statusDetail = {
        room_name: room.room_name,
        customer_name: `${customer.first_name} ${customer.last_name}`,
        booking_status: room.booked_status,
        booking_date: booking.booking_date,
        start_date: booking.checkin_date,
        end_date: booking.checkout_date,
      };
      bookedStatusDetails.push(statusDetail);
    }
  }

  res.json(bookedStatusDetails);

  
});

app.get('/getCustomerBookedStatus',(req,res)=>{
  const bookedStatusDetails = [];
  for (const booking of bookings.booking) {
    const room = rooms.room.find((r) => r.room_id === booking.room_id);
    const customer = customers.customer.find((c) => c.customer_id === booking.customer_id);
    if (room && customer) {
      const statusDetail = {
        room_name: room.room_name,
        customer_name: `${customer.first_name} ${customer.last_name}`,
        booking_date: booking.booking_date,
        start_date: booking.checkin_date,
        end_date: booking.checkout_date,
      };
      bookedStatusDetails.push(statusDetail);
    }
  }

  res.json(bookedStatusDetails);

  
});

app.get('/getBookedStatus',(req,res)=>{
  const bookedStatusDetails = [];
  for (const booking of bookings.booking) {
    const room = rooms.room.find((r) => r.room_id === booking.room_id);
    const customer = customers.customer.find((c) => c.customer_id === booking.customer_id);
    if (room && customer) {
      const statusDetail = {
        room_name: room.room_name,
        customer_name: `${customer.first_name} ${customer.last_name}`,
        booking_date: booking.booking_date,
        start_date: booking.checkin_date,
        end_date: booking.checkout_date,
        booking_id : booking.booking_id,
        booking_status : booking.booking_status
      };
      bookedStatusDetails.push(statusDetail);
    }
  }

  res.json(bookedStatusDetails);

  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


