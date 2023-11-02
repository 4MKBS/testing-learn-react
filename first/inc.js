// console.log(React);
// console.log(ReactDOM);
const container = document.querySelector("#root");

const Increment = () => {
    const [count, setCounter] = React.useState(0);

    const handleIncrement = () => {
        setCounter(count + 1);
    };

    return (
        <div>
            {/* <h1>ok</h1> */}
            <h1 id="display">{count}</h1>
            <div>
                <button id="button" onClick={handleIncrement}>
                    Increment +
                </button>
            </div>
        </div>
    );
};
const Ok = () => {
    const done = React.useState(4245);
    const me = React.useState(1911192);
    // const ag = React.useState(20);

    // const handleIncrement = () => {
    //     setCounter(count + 1);
    // };

    return (
        <div>
            {/* <h1>ok</h1> */}
            <h1 id="display">{done}</h1>
            <h1 id="display">{me}</h1>
            {/* <h1 id="display">{ag}</h1> */}
        </div>
    );
};

ReactDOM.render(
<div className="container">
    <Increment />
    <Increment />
    <Increment />
    <Increment />
    {/* <Br/> */}
    {/* <Ok/> */}
</div>
, container);


// const display = document.querySelector("#display");
// const button = document.querySelector("#button");
// let number=0;
// button.addEventListener("click", () => {
//   number++;
//   display.textContent = number;
// });