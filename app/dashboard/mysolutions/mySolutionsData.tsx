"use client";

import { Button, Card, Spin } from "antd";
import { EditOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import Search, { SearchProps } from "antd/es/input/Search";
import Link from "next/link";

interface dataType {
  _id: String;
  title: String;
  content: String;
}

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(value);

const MySolutionsData = () => {
  const [postItems, setPostItems] = useState<dataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteButton, setDeleteButton] = useState(-1);

  const fetchData = async () => {
    axios.get("/api/posts").then((response) => {
      setPostItems(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);
  return (
    <div>
      <div style={{ padding: "2% 15%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 50px",
          }}
        >
          <Search
            size="large"
            style={{ width: "50%", color: "#1677ff" }}
            placeholder="문제 검색하기"
            onSearch={onSearch}
          />
          <div>
            <span style={{ fontWeight: "bold" }}>
              작성한 풀이수: {postItems.length}
            </span>
            <Button style={{ marginLeft: "20px" }}>
              <Link href={`/details/`}>
                <EditOutlined /> 새 풀이
              </Link>
            </Button>
          </div>
        </div>
        {loading ? (
          <div style={{ marginTop: "20%" }}>
            <Spin tip="Loading Data..." size="large">
              <div className="content" />
            </Spin>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
          >
            {postItems.map((item, idx) => {
              return (
                <div key={idx} style={{ margin: "50px", textAlign: "center" }}>
                  <Link href={`/details/${item._id}`}>
                    <Card
                      onMouseEnter={() => {
                        setDeleteButton(idx);
                      }}
                      onMouseLeave={() => {
                        setDeleteButton(-1);
                      }}
                      style={{ border: "2px solid rgb(226,226,226)" }}
                      size="small"
                      title={item.title}
                      // extra={
                      //   <div
                      //     style={{
                      //       position: "absolute",
                      //       top: "0",
                      //       right: "0",
                      //       width: "20px",
                      //     }}
                      //   >
                      //     {deleteButton == idx ? <UnorderedListOutlined /> : null}
                      //   </div>
                      // }
                    >
                      {item.content}
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MySolutionsData;
