/* eslint-disable no-console */
import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { Server } from 'http';

process.on('uncaughtException', error => {
  console.log('UnCaught Exception Is Detected', error);
  process.exit(1);
});

let server: Server;
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database connected successfully');
    server = app.listen(config.port, () => {
      console.log(
        `Practice Management And Admin listening on port ${config.port}`
      );
    });
  } catch (error) {
    console.log('Database Error', error);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

process.on('SIGTERM', () => {
  if (server) {
    server.close();
  }
});
