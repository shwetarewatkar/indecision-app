const app = {
    title: "Indecision App",
    subtitle: "Indecision web application",
    options: []
}

const onFormSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;
    console.log(e.target.elements.option.value);
    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
        renderTemplate();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderTemplate();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    // console.log(randomNum);
    alert(option);
}
var appRoot = document.getElementById("app");
const numbers = [55, 101, 1000];
const renderTemplate = () =>{
    const template = (<div>
        <h1>{app.title} App</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove all</button>
        <ol>
            {
                app.options.map((option)=>{
                    return <li key = {option}>{option}</li>
                })
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>
    </div>
    );
    ReactDOM.render(template,appRoot);
}
renderTemplate();