console.log("app.js");
import express from "express";
//import routerV1 from "~/routes/routes";

// Create Express app
const app = express();

//app.use("/api/client-service/v1", routerV1);

//const server = http.createServer(app);
// Serve static files (if needed)
//app.use(express.static("public"));

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
