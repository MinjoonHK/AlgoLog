"use client";
import SolutionBoard from "./dashboard/solutionboard/page";
import { Provider } from "react-redux";
import { store } from "../lib/store.ts";

export default async function Home() {
  return (
    <div>
      <Provider store={store}>
        <SolutionBoard />
      </Provider>
    </div>
  );
}
