"use client";

import { Button, Form, Input, Select } from "antd";
import { useCallback, useState } from "react";
import { Editor } from "./richTextEditor";
import axios from "axios";
import Swal from "sweetalert2";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export default function WriteForm() {
  const router = useRouter();
  const [content, setContent] = useState("");

  const handleChangeContent = useCallback((value) => {
    setContent(value);
  }, []);

  const onFinish = async ({ title, sitename }) => {
    try {
      const res = await axios.post("/api/posts", {
        title,
        sitename,
        content,
      });
      if (res.data.status === "success") {
        Swal.fire({
          icon: "success",
          title: "성공적으로 포스트 하였습니다!",
        });
        router.push("/dashboard/mysolutions");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "포스팅에 실패하였습니다 관리자에게 문의하세요",
      });
      console.log(err);
    }
  };
  return (
    <div
      style={{
        paddingTop: "5%",
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingBottom: "5%",
      }}
    >
      <Form name="basic" onFinish={onFinish} autoComplete="off">
        <Form.Item>
          <Form.Item
            style={{ display: "inline-block", width: "calc(80% - 8px)" }}
            name="title"
            rules={[{ required: true, message: "제목을 입력해 주세요!" }]}
          >
            <Input size="large" placeholder="1000번 A+B" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "문제 출처를 선택해 주세요!" }]}
            name="sitename"
            style={{
              display: "inline-block",
              width: "calc(20% - 8px)",
              marginLeft: "8px",
            }}
          >
            <Select
              size="large"
              placeholder="문제 출처"
              options={[
                { value: "baekjoon", label: "백준" },
                { value: "programmers", label: "프로그래머스" },
                { value: "samsung", label: "SWEA" },
                { value: "leetcode", label: "LEETCODE" },
                { value: "softeer", label: "SOFTEER" },
              ]}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Editor
            textareaProps={{
              placeholder:
                "마크다운 형식으로 작성해주세요. 오른쪽 상단의 아이콘들을 이용해 미리보기를 활성화 할수 있어요!",
            }}
            height={400}
            preview="edit"
            value={content}
            onChange={handleChangeContent}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 18 }} labelCol={{ span: 8 }}>
          <Button style={{ width: "50%" }} htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
