//Functional Component
const container = document.getElementById("react-container")
const Container = ()=>{
    return React.createElement(`div`, null , `Hey Kalvians, Welcome to React Learning`,
    React.createElement(`div`,null,`Lets rock and roll`))
};

ReactDOM.render(React.createElement (Container),container);

//Class Component
// class ReactContainer extends React.Component{

//     render(){
//         return React.createElement(`div`,null,`Hey Kalvians, Welcome to React Learning`,
//         React.createElement(`div`,null,`Lets rock and roll with classes`));
//     }
// }

// const container = document.getElementById("react-container")
// ReactDOM.render(React.createElement(ReactContainer),container);

