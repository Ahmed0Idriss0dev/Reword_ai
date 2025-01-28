import mongoose from "mongoose";
async function db_connection (){
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION as string)
    console.log('mongodb has been connect to database')

  } catch (error) {
    console.log('mongodb , not connect .....')
  }
}
export default db_connection