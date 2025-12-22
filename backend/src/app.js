import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// ROUTES
import contactRouter from "./routes/contact.routes.js";
import authRouter from "./routes/auth.routes.js";

// ROUTE DECLARATION
app.use("/api/v1", contactRouter);
app.use("/api/v1/auth", authRouter);

export { app };
