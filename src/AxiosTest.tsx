import React from "react";
import { testAtom } from "./state/test";
import { useRecoilValue } from "recoil";
export default function AxiosTest() {
  const state = useRecoilValue(testAtom);
  console.log("Test", state);
  return <div>yoolo</div>;
}
