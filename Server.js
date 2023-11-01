// Create a POST route for handling booking submissions
app.post('/booking', async (req, res) => {
    try {
      const data = req.body;
      const booking = new Booking(data);
      await booking.save();
      res.status(201).json({ message: 'Booking successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Booking failed' });
    }
  });
  