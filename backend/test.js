import mongoose from "mongoose";

const uri = "mongodb://sneha:sneha123456@ac-qdwqpt5-shard-00-00.0s3ecny.mongodb.net:27017,ac-qdwqpt5-shard-00-01.0s3ecny.mongodb.net:27017,ac-qdwqpt5-shard-00-02.0s3ecny.mongodb.net:27017/?ssl=true&replicaSet=atlas-5mvfeh-shard-0&authSource=admin&appName=Cluster0";

try {
  await mongoose.connect(uri);
  console.log("Connected!");
} catch (err) {
  console.error(err);
}

process.exit();