import Express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = Express();
app.use(
  cors({
    origion: process.env.CORS_ORIGION,
    credentials: true,
  })
);
app.use(Express.json({ limit: "16kb" }));
app.use(Express.urlencoded({ extended: true, limit: "16kb" }));
app.use(Express.static("pulic"));

//cookies parser
app.use(cookieParser());
export { app };
