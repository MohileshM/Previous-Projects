const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const PORT=3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const rooms=[];
const bookings=[];


function generateBookingId(){
  return bookings.length+1;
}


app.get('/rooms',(req,res)=>{
  res.json(rooms);
});


app.post('/create-room',(req,res)=>{
  const{ roomNumber,seatsAvailable,amenities,pricePerHour}=req.body;
  
  
  if(!roomNumber||!seatsAvailable||!pricePerHour){
    return res.status(400).json({message:'Room number , seats Available , pricePer hour are required'})
  }
  
  const isRoomExist=rooms.some((room)=>room.roomNumber===roomNumber);

  if(isRoomExist){
    return res.status(409).json({message:'Room number already exists'});
  }

  rooms.push({
    roomNumber,
    seatsAvailable,
    amenities,
    pricePerHour,
  });
  res.json({message:'Room created successfully'});
});


app.post('/book-room',(req,res)=>{
  const{roomId,customerName,date,startTime,endTime}=req.body;


  if (!roomId || !customerName ||!date||!startTime ||!endTime ) {
    return  res.status(400).json({ message:"RoomId,customerName,date,startTime,endTime are required" }) ;
  }


  const room=rooms.find((room)=>room.roomNumber===roomId);
  if(!room){
    return res.status(404).json({message:'Room not Found'})
  }

  const isRoomAvailable=true;
  if(!isRoomAvailable){
    return res.status(409).json({message:'Room is not available for specified time'});
  }

const bookingId=generateBookingId();
 
  bookings.push({
    bookingId,
    roomId,
    customerName,
    date,
    startTime,
    endTime,
    bookingDate:new Date(),
    bookingStatus:'Confirmed',
  });
  res.json({message:'Room booked successfully'});
});


app.get('/rooms-with-bookings',(req,res)=>{
  const roomsWithBookings=rooms.map((room)=>{
  const roomBookings=bookings.filter((booking)=>booking.roomId===room.roomNumber);
    return{
      roomNumber:room.roomNumber,
      bookings:roomBookings.map((booking)=>({
        customerName:booking.customerName,
        date:booking.date,
        startTime:booking.startTime,
        endTime:booking.endTime,
        bookingStatus:booking.bookingStatus,
      })),
    };
  });
  res.json(roomsWithBookings);
});


app.get('/customers-with-bookings',(req,res)=>{
  const customersWithBookings= bookings.map((booking)=>({
    customerName:booking.customerName,
    roomId:booking.roomId,
    date:booking.date,
    startTime:booking.startTime,
    endTime:booking.endTime,
    bookingStatus:booking.bookingStatus,
  }));
  res.json(customersWithBookings);
});


app.get('/customer-booking-history/:customerName',(req,res)=>{
  const customerName=req.params.customerName;
  const customerBookingHistory=
    bookings.filter((booking)=>booking.customerName===customerName );
    res.json(customerBookingHistory);
});
app.listen(PORT,()=>{
  console.log(`Hall Booking Api listening a http://locahost:${PORT}`);
  
});