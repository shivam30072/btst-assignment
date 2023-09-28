require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const taskRouter = require("./routes/taskRoutes");
const userRouter = require("./routes/userRoutes");
const authMiddleware = require("./middleware/authentication");
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/task", authMiddleware, taskRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
