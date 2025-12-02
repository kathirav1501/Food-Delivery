    const heading = [React.createElement
    ("div",{id:"hedx"},
        [React.createElement("h1",{id:"hedxc"},"Hello this is h1 tag"), 
        React.createElement("h2",{id:"hesdx"},"Hello this is h2 tag")]
    ),React.createElement
    ("div",{id:"hedx2"},
        [React.createElement("h1",{id:"hedxc"},"Hello this is h1 heading 2 tag"), 
        React.createElement("h2",{id:"hesdx"},"Hello this is h2 heading 2 tag")]
    )];
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);