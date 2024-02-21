"use client";

import Link from "next/link";

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "grey",
  fontWeight: "bold",
};

const NavBar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#E2E2E2",
          height: "10vh",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
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
      </div>
    </div>
  );
};

export default NavBar;
