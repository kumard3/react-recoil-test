import React from "react";
import { selector, useRecoilState, useRecoilValueLoadable } from "recoil";
import AxiosTest from "./AxiosTest";
import { testAtom } from "./state/test";
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
  const [todo, setTodos] = useRecoilState(testAtom);
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
        {contents.map((n: Posts) => {
          return <div key={n.id}>{n.id}</div>;
        })}
      </div>
    );
  }
  return <div>Loading</div>;
};

function App() {
  return (
    <div>
      with Suspense
      {/* <React.Suspense fallback={<div>Loading...</div>}> */}
      <TodoWithSuspense />
      {/* </React.Suspense> */}
      <AxiosTest />
    </div>
  );
}

export default App;
