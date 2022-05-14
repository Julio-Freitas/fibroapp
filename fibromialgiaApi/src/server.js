import app from "./app";
app.listen(9090, () => console.log(`process id ${process.geteuid()}`));
