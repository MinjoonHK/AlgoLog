"use client";

import { Button } from "antd";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function SignOut() {
  let router = useRouter();
  const { data: session, status } = useSession();

  return (
    <div style={{ marginLeft: "10%" }}>
      <Button
        style={{ display: status === "authenticated" ? "block" : "none" }}
        onClick={() => {
          signOut({ callbackUrl: "/auth/login" });
          router.push("/auth/login");
          console.log("signOut");
        }}
      >
        LOGOUT
      </Button>
    </div>
  );
}
