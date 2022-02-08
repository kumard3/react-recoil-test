import { useRecoilState } from "recoil";

import { testAtom } from "../state/test";

function BasicAtom() {
  const [test, setTest] = useRecoilState(testAtom);
  console.log(test);
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <span>{test}</span>
      <input
        type="text"
        className="text-black p-4 rounded-xl"
        onChange={(e) => setTest(e.target.value)}
      />
    </div>
  );
}

export default BasicAtom;
