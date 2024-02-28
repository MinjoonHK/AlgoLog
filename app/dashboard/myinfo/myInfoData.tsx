"use client";

import { Card, Form, Input } from "antd";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface UserInfo {
  name: string;
  email: string;
  image?: string;
}

const nullInfo = {
  name: "",
  email: "",
  image: "",
};

export default function MyInfoData() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    Swal.fire({
      icon: "error",
      title: "로그인 필요",
      text: "로그인이 필요한 서비스입니다.",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/auth/login");
      }
    });
  }

  const [userInfo, setUserInfo] = useState<UserInfo>(nullInfo);

  const fetchUserInfo = async () =>
    await axios.get("/api/userinfo").then((response) => {
      setUserInfo(response.data);
    });

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "0 20%",
      }}
    >
      <Form>
        <Form.Item>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}
