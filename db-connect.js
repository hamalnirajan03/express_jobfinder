import mongoose from "mongoose";

export const db_Connect = async () => {
  try {
    await mongoose.connect(
      encodeURI(
        "mongodb+srv://hamalnirajan03:hamalnirajan03@cluster0.aamwgrn.mongodb.net/jobfinder?retryWrites=true&w=majority"
      )
    );
    console.log("Database is successfully Connected");
  } catch (error) {
    console.log("Database Connection Failed");
    console.log(error.message);
  }
};
