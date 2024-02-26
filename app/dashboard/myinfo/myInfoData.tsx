"use client";

import axios from "axios";
import { useEffect, useState } from "react";

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
  const [userInfo, setUserInfo] = useState<UserInfo>(nullInfo);

  const fetchUserInfo = async () =>
    await axios.get("/api/userinfo").then((response) => {
      setUserInfo(response.data);
    });

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div>
      <div>{userInfo.name}</div>
      <div>{userInfo.email}</div>
      <div>{userInfo.image && <img src={userInfo.image} />}</div>
    </div>
  );
}
