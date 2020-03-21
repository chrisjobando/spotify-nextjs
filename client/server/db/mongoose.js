import mongoose from 'mongoose';

export default async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch(e => {
      console.error('Error connecting to database.');
      throw e;
    });
};
