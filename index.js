import express from "express";
import customerRoutes from "./routes/customers.route.js";
import connectdB from "./lib/db.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const port = 5001;

//connect DB
connectdB();

app.get("/", (req, res) => res.json({ msg: "Hello from express!!" }));

//CRUD FUNCTIONALITY
//CLIENT -> MIDDLEWARE -> SERVER

app.use("/customers", customerRoutes);

app.listen(port, () =>
  console.log(`Server is listening on port: http://localhost:${port}`)
);
