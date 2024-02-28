import connectDB from "@/database/db";
import { Card } from "antd";
import { ObjectId } from "mongodb";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkDown from "./markDownContent";

async function Detail(props: any) {
  const db = (await connectDB).db("algolog");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div style={{ marginLeft: "20%", marginRight: "20%", paddingTop: "5%" }}>
      <Card
        style={{
          border: "transparent",
        }}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1>{result.title}</h1>
          </div>
        }
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}></div>
        <MarkDown result={result.content} />
      </Card>
    </div>
  );
}

export default Detail;
