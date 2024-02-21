"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface BaekjoonData {
  handle: string;
  bio: string;
  badgeId: string;
  backgroundId: string;
  profileImageUrl: string;
  solvedCount: number;
  voteCount: number;
  tier: number;
  rating: number;
  ratingByProblemsSum: number;
  ratingByClass: number;
  ratingBySolvedCount: number;
  ratingByVoteCount: number;
  class: number;
  classDecoration: string;
  rivalCount: number;
  reverseRivalCount: number;
  maxStreak: number;
  coins: number;
  stardusts: number;
  joinedAt: string;
  bannedUntil: string;
  proUntil: string;
  rank: number;
  isRival: boolean;
  isReverseRival: boolean;
}

export default function MyInfoData() {
  const [baekjoonData, setBaekjoonData] = useState<BaekjoonData>();

  const fetchBaekjoonData = async () => {
    await axios
      .get("https://solved.ac/api/v3/user/show?handle=minjunchinajava")
      .then((res) => {
        setBaekjoonData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err, "fetchBaekjoonData error");
      });
  };

  const fetchExample = async () => {
    await axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err, "fetchExample error");
      });
  };

  useEffect(() => {
    fetchBaekjoonData();
  }, []);
  return <div>{baekjoonData && baekjoonData.handle}</div>;
}
