import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement(
//     "h1",
//     { id: "child", key: "1" },
//     "Hello World from Child"
//   ),
//   React.createElement(
//     "h2",
//     { id: "child2", key: "2" },
//     "Hello World from Child2"
//   ),
// ]);

// const heading = React.createElement(
//   "h2",
//   { id: "heading" },
//   "Hello World from React"
// );
// const heading = <h1>This is heading using JSX</h1>;

// const HeadingComponent = () => {
//   return (
//     <div id="heading">this is heading using functional Component{heading}</div>
//   );
// };

root.render(<RouterProvider router={appRouter} />);
