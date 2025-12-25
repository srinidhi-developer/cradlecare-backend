import express from "express";
import cors from "cors";

// routes
import contactRouter from "./routes/contact.routes.js";
import authRouter from "./routes/auth.routes.js";
import blynkRoutes from "./routes/blynk.routes.js";

const app = express();

app.use(cors({
  origin: "*",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1", contactRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/blynk", blynkRoutes);

// health check
app.get("/", (req, res) => {
  res.send("CradleCare Backend Running ✅");
});

export default app;
