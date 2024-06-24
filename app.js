import express from "express";
import routerV1 from "./routes/routes";
import dotenv from "dotenv";

dotenv.config();
// Create Express app
const app = express();


// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use("/api/client-service/v1", routerV1);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
