import NavComponent from "./components/NavComponent";
import { Route, Routes } from "react-router-dom";
import { selector, useRecoilState, useRecoilValueLoadable } from "recoil";
import AxiosTest from "./pages/AxiosTest";
import { axiosTestAtom } from "./state/test";
import BasicAtom from "./pages/BasicAtom";
const todos = `https://jsonplaceholder.typicode.com/todos`;

type Posts = {
  id: number;
  title: string;
  body: string;
  completed: boolean;
};

const fetchTodos = selector({
  key: "todosSelector",
  get: async ({ get }) => {
    try {
      const response = await fetch(todos);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
});

const TodoWithSuspense = () => {
  const todos: any = useRecoilValueLoadable(fetchTodos);
  const { state } = todos;
  const [todo, setTodos] = useRecoilState(axiosTestAtom);
  if (todos.state === "hasError") {
    return <h1>TodoWithSuspense</h1>;
  }
  if (state === "loading") {
    return <h1>Loading</h1>;
  }
  if (state === "hasValue") {
    const { contents } = todos;
    setTodos(contents);
    console.log(todo);
    return (
      <div>
        <h1>Todos</h1>
        <div className="p-2 my-3">
          {contents.map((n: Posts) => {
            return (
              <div
                className="bg-slate-800 rounded-xl flex p-2 my-3 justify-between items-center"
                key={n.id}
              >
                <span className="pr-3">{n.id}</span>
                <div className="">
                  <p>{n.title}</p>
                  <p>{n.completed}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return <div>Loading</div>;
};

function App() {
  return (
    <div className="bg-black text-white text-xl min-h-screen ">
      <NavComponent />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<BasicAtom />} />
          <Route path="/datafetch" element={<TodoWithSuspense />} />
          <Route path="/axios" element={<AxiosTest />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
