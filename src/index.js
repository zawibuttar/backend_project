import dotenv from "dotenv";

import connectDB from "./db/index.js";
dotenv.config({
  Path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is  running  on  port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection FAILED !!! ", err);
  });
// import mongoose from "mongoose";
// import { DB_Name } from "./constants";
// import Express from "express";
// const app = Express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
//     app.on("Error", (error) => {
//       console.log("ERROR", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log("App is listening on port ${process.env.PORT}");
//     });
//   } catch (error) {
//     console.error("ERROR :", error);
//     throw error;
//   }
// })();
