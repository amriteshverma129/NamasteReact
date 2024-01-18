const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "h1",
    { id: "child", key: "1" },
    "Hello World from Child"
  ),
  React.createElement(
    "h2",
    { id: "child2", key: "2" },
    "Hello World from Child2"
  ),
]);

const heading = React.createElement(
  "h2",
  { id: "heading" },
  "Hello World from React"
);

root.render(parent);
