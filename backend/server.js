import express from "express";
import cors from "cors";
import openPaymentsRoutes from "./routes/paymentsRoute.js"; // ajusta tu ruta

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // frontend permitido
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use("/api/openPayments", openPaymentsRoutes);

app.listen(5000, () => console.log("Servidor corriendo en puerto 5000"));
