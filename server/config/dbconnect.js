
var mongoose=require('mongoose')

const ConnectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.mongodb_url);
    console.log(
      `Connected to Mongodb database ${connect.connection.host}`
    );
  } catch (error) {
    console.log(`Error in Mongodb ${'error'}`);
  }
};
module.exports=ConnectDb;