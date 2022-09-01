import mongoose from "mongoose";

export const connectToDb = async () => {
  let MONGODB_URI = "";
  if (process.env.NODE_ENV !== "production") {
    const { MONGODB_HOST_PASSWORD, MONGODB_DATABASE } = process.env;
    MONGODB_URI = `mongodb+srv://baltazar:${MONGODB_HOST_PASSWORD}@hyu.ubgxo.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`;
  } else {
    console.log("Estas en produccion");
    MONGODB_URI = process.env.MONGODB_URL;
  }
  return await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
