"use client";
import SolutionBoard from "./dashboard/solutionboard/page";
import { Provider } from "react-redux";
import { store } from "../lib/store.ts";
import Login from "./auth/login/page.tsx";

export default async function Home() {
  return (
    <div>
      <Provider store={store}>
        <Login />
      </Provider>
    </div>
  );
}
