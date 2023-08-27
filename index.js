import express from "express";
import { db_Connect } from "./db-connect.js";
import userRoutes from "./user/user.route.js";

const app = express();

app.use(express.json());

// Database Connection
db_Connect();

//Register Routes
app.use(userRoutes);

const port = 8080;

app.listen(port, () => {
  console.log(`Server is started at ${port}`);
});
