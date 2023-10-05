// creating h1 tag to add this inside div tag
const heading= React.createElement(
    'div',
    { id : "heading" },
    [React.createElement("h2",{id: "nested-siblings-1"},"Nested Siblings-1"),
    React.createElement("h2",{id: "nested-siblings-2"}, "Nested Siblings-2")]
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
