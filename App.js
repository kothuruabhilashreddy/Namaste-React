// creating h1 tag to add this inside div tag
const heading= React.createElement(
    'div',
    { id : "heading" },
    React.createElement("h2",{id: "nested-element-1"},"Nested Elements - 1")
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
