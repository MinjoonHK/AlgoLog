import React from "react";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AlgoLog",
  description: "Save your daily algorithm solutions!",
  icons: {
    icon: "/img/algoIcon.png",
  },
};

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <body suppressHydrationWarning={true} className={inter.className}>
        <StyledComponentsRegistry>
          <Navbar />
          <div style={{ backgroundColor: "#E2E2E2", height: "100vh" }}>
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
