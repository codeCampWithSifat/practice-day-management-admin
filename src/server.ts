import mongoose from "mongoose";
import app from "./app";
import config from "./config";

const port: number = 5000;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Database connected successfully");
    app.listen(config.port, () => {
      console.log(
        `Practice Management And Admin listening on port ${config.port}`
      );
    });
  } catch (error) {
    console.log("Database Error", error);
  }
}

main();
