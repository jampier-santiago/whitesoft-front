import { Suspense } from "react";
import "./App.scss";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main>
        <h1>Project</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          voluptatem quod laboriosam saepe laborum fuga quidem labore laudantium
          vero? Dolorum temporibus harum facere quaerat, officia quam porro eum
          soluta aliquid!
        </p>
      </main>
    </Suspense>
  );
}

export default App;
