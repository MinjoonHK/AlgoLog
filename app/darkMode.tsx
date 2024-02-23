"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DarkMode() {
  let router = useRouter();
  const [mode, setMode] = useState<string>("");
  useEffect(() => {
    if (document.cookie) {
      let cookieValue = ("; " + document.cookie)
        .split(`; mode=`)
        .pop()
        ?.split(";")[0];
      setMode(cookieValue || "");
      if (cookieValue == "") {
        document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
      }
    } else {
    }
  }, []);
  return (
    <div
      onClick={() => {
        let cookieValue = ("; " + document.cookie)
          .split(`; mode=`)
          .pop()
          ?.split(";")[0];
        if (cookieValue == "light") {
          document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
          router.refresh();
        } else if (cookieValue == "dark") {
          document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
          router.refresh();
        }
      }}
      style={{ position: "absolute", right: "7%", cursor: "pointer" }}
    >
      {mode == "light" ? "🌙" : "🌞"}
    </div>
  );
}
