import { useRecoilState } from "recoil";

import { testAtom } from "../state/test";

function BasicAtom() {
  const [test, setTest] = useRecoilState(testAtom);
  console.log(test);
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-2xl font-sans">{test === "" ? "Enter The Text Here " : test}</h1>
      <input
        type="text"
        className="text-black p-4 rounded-xl"
        onChange={(e) => setTest(e.target.value)}
      />
    </div>
  );
}

export default BasicAtom;
