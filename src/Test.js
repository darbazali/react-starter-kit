const Cat2 = () => {
    return React.createElement(
        "h1", {},
        "My name is Micky"
    )
}


const Cat = () => {
    return React.createElement(
        "div", {}, [
            React.createElement(Cat2),
            React.createElement(Cat2)
        ]
    )
}



//ReactDOM.render(
//    React.createElement(Cat),
//    document.getElementById("root")
//)
