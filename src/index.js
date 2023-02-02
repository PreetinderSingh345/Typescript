const express = require('express');

const app =express();
const port = (process.env.port || 3000);

const userRouter = require('./routers/user');

app.use(express.json());
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('We have a request at the root route');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});