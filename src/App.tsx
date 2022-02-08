import NavComponent from "./components/NavComponent";
import { useRecoilState } from "recoil";

import { testAtom } from "./state/test";

export const HomePage = () => {
  return (
    <div className="bg-[#0F182B] ">
      <h1>tailwind css starter </h1>
    </div>
  );
};

function App() {
  const [test, setTest] = useRecoilState(testAtom);
  console.log(test);
  return (
    <div className="bg-[#0F182B] text-white min-h-screen ">
      <NavComponent />
      <div className="flex flex-col w-full justify-center items-center">
        <span>{test}</span>
        <input
          type="text"
          className="text-black p-4 rounded-xl"
          onChange={(e) => setTest(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
