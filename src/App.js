const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.age)
    ])
}



const App = () => {
    return React.createElement("div", {}, [
        React.createElement(Pet, {name: "Max"}),
        React.createElement(Pet, {age: "2"}),
    ])
}



ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
)

