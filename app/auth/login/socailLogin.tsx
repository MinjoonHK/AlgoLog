"use client";

import { Avatar, Button } from "antd";
import { signIn } from "next-auth/react";

export default function SocialLogin() {
  return (
    <div>
      <div>
        <Button style={{ height: "40px", width: "364.4px" }}>
          <span style={{ marginRight: "10%", fontWeight: "bold" }}>
            카카오톡으로 로그인 하기{" "}
          </span>
          <Avatar size={30} src={"/img/kakao_icon4.png"} />
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            signIn();
          }}
          style={{ height: "40px", width: "364.4px" }}
        >
          <span style={{ marginRight: "10%", fontWeight: "bold" }}>
            깃헙계정으로 로그인 하기{" "}
          </span>
          <Avatar
            style={{ cursor: "pointer" }}
            size={30}
            src={"/img/github_icon.png"}
          />
        </Button>
      </div>
      <div>
        <Button style={{ height: "40px", width: "364.4px" }}>
          <span style={{ marginRight: "10%", fontWeight: "bold" }}>
            구글계정으로 로그인 하기{" "}
          </span>
          <Avatar size={30} src={"/img/google_icon3.png"} />
        </Button>
      </div>
    </div>
  );
}
