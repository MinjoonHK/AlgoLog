"use client";

import { Button, Card, Spin } from "antd";
import { EditOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import Search, { SearchProps } from "antd/es/input/Search";
import Link from "next/link";
import Meta from "antd/es/card/Meta";

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

  const fetchData = async () => {
    axios.get("/api/posts").then((response) => {
      setPostItems(response.data);
    });
  };

  useEffect(() => {
    setLoading(true);
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
              <Link href={"/write"}>
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
                <div key={idx} style={{ margin: "25px", textAlign: "center" }}>
                  <Link
                    style={{ textDecoration: "none" }}
                    href={`/details/${item._id}`}
                  >
                    <Card
                      hoverable
                      style={{ width: 300 }}
                      cover={
                        <img
                          style={{ width: 300 }}
                          alt="example"
                          src="https://file.newswire.co.kr/data/datafile2/thumb_640/2021/06/1993996598_20210610150326_5364622170.jpg"
                        />
                      }
                    >
                      <Meta
                        style={{ height: 30, textAlign: "left" }}
                        title={item.title}
                      />
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
