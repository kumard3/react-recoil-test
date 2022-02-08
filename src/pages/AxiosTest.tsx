import React from "react";
import { axiosTestAtom } from "../state/test";
import { useRecoilValue } from "recoil";
export default function AxiosTest() {
  const state = useRecoilValue(axiosTestAtom);
  console.log("Test", state);
  return <div>yoolo</div>;
}
