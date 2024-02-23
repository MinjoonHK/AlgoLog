"use client";

import { Button } from "antd";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <div style={{ marginLeft: "10%" }}>
      <Button
        onClick={() => {
          signOut();
        }}
      >
        LOGOUT
      </Button>
    </div>
  );
}
