const express = require("express");
const connectDB = require("./config/db");
const app = express();
connectDB();

//init middleware

app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.json({ msg: "Welcom to the Contact" }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
