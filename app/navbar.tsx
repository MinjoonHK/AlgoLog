import { cookies } from "next/headers";
import Link from "next/link";
import "./darkMode.css";

import DarkMode from "./darkMode";
import SignOut from "./signOut";

let mode = cookies().get("mode");
console.log(mode);
const NavBar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "grey",
    fontWeight: "bold",
  };

  let navBarClassName = "";

  if (mode && mode.value == "light") {
    navBarClassName = "navBarLight";
  } else {
    navBarClassName = "navBarDark";
  }
  return (
    <div>
      <div className={navBarClassName}>
        <div style={{ marginLeft: "5%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: "25px",
              backgroundColor: "rgb(135,97,225)",
              width: "160px",
              height: "40px",
              color: "white",
            }}
          >
            <img
              style={{ width: "24px", height: "24px" }}
              src="/img/algoIcon.png"
              alt=""
            />
            <span
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                marginLeft: "5px",
              }}
            >
              ALGOLOG
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            marginLeft: "9%",
          }}
        >
          <div>
            <Link href="/dashboard/mysolutions" style={linkStyle}>
              내 풀이들
            </Link>
          </div>
          <div>
            <Link href="/dashboard/solutionboard" style={linkStyle}>
              다른풀이 둘러보기
            </Link>
          </div>
          <div>
            <Link href="/dashboard/ranking" style={linkStyle}>
              랭킹 보드
            </Link>
          </div>
          <div>
            <Link href="/dashboard/myinfo" style={linkStyle}>
              내 정보
            </Link>
          </div>
        </div>
        <SignOut />
        <DarkMode />
      </div>
    </div>
  );
};

export default NavBar;
