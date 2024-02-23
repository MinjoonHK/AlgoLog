import connectDB from "@/database/db";
import { Button, Card } from "antd";
import { ObjectId } from "mongodb";

async function Detail(props: any) {
  const db = (await connectDB).db("algolog");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <>
      <Card
        style={{
          border: "transparent",
          margin: "0 20%",
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>hi</span>
          <span>hi</span>
        </div>
        <pre>
          <code>
            {`fucntion hello(){
              console.log('hello');
            }`}
          </code>
        </pre>
      </Card>
    </>
  );
}

export default Detail;
