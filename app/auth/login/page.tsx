"use client";

import { Button, Checkbox, Form, Input, Card, Divider, Avatar } from "antd";
import axios from "axios";
import { CopyrightOutlined } from "@ant-design/icons";
import Link from "next/link";

interface LoginForm {
  email: any;
  password: any;
}
function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "calc(100% - 16px)",
        minHeight: "100vh",
        flexWrap: "wrap",
      }}
    >
      <Card
        style={{
          width: "500px",
          textAlign: "center",
          paddingTop: "35px",
          border: "transparent",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",

            fontSize: "45px",
            fontWeight: "bold",
          }}
        >
          A L G O L O G
        </div>
        <Form
          //   form={form}
          name="Login"
          layout="vertical"
          style={{
            maxWidth: 600,
            margin: "30px 500px",
          }}
          // initialValues={{ email: email, remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[
              { type: "email", message: "올바른 이메일 형식이 아닙니다" },
              { required: true, message: "이메일을 입력해 주세요" },
            ]}
            style={{ width: "364.4px", height: "46.4px" }}
          >
            <Input
              type="email"
              placeholder="이메일"
              size="large"
              autoComplete={"email"}
              className="inputValue"
              height="46.4px"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "비밀번호를 입력해 주세요" }]}
            style={{ width: "364.4px", height: "46.4px" }}
          >
            <Input.Password
              type="password"
              size="large"
              placeholder="비밀번호"
              className="inputValue"
            />
          </Form.Item>
          <Form.Item style={{ width: "364.4px" }}>
            <Button
              htmlType="submit"
              style={{
                width: "100%",
                height: "46.4px",
                backgroundColor: "rgb(213,215,217)",
                color: "white",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                로그인
              </div>
            </Button>
          </Form.Item>

          <Form.Item style={{ width: "364.4px", height: "46.4px" }}>
            <Link href="/auth/signup">
              <Button
                style={{
                  width: "100%",
                  height: "46.4px",
                  color: "black",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  회원가입
                </div>
              </Button>
            </Link>
            <Divider style={{ width: "364.4px" }}>SNS 계정으로 로그인</Divider>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "75%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Avatar size={55} src={"/img/kakao_icon4.png"} />
                <Avatar size={55} src={"/img/naver_icon.png"} />
                <Avatar size={55} src={"/img/google_icon3.png"} />
              </div>
            </div>
            <div style={{ marginTop: "50px", fontWeight: "bold" }}>
              <div>
                <CopyrightOutlined />
                Park Min Joon
              </div>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;