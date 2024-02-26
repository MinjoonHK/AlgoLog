import connectDB from "@/database/db";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

interface session {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: string;
}

export default async (req, res) => {
  let session = await getServerSession(req, res, authOptions);

  const db = (await connectDB).db("algolog");
  if (req.method == "GET") {
    try {
      if (session && session.user != undefined) {
        const result = await db
          .collection("post")
          .find({ author: session.user.email })
          .toArray();
        if (result) {
          return res.status(200).json(result);
        }
      }
    } catch (err) {
      res.status(500).json({
        error: "Internal Server Error",
        message: "DB에서 정보를 불러오는데 실패하였습니다",
      });
    }
  }

  if (req.method == "POST") {
    try {
      const result = await db.collection("post").insertOne(req.body);
      if (result) {
        return res
          .status(200)
          .json({ message: "DB에 POST 정보를 저장하는데 성공하였습니다" });
      }
    } catch (err) {
      res.status(500).json({
        error: "Internal Server Error",
        message: "DB에 정보를 저장하는데 실패하였습니다",
      });
    }
  }
};
