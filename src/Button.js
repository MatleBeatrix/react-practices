/*
const handleClickEvent = () => {
    console.log('Button clicked');
    document.getElementById("text").insertAdjacentHTML('afterbegin', '<p>Thank you :)</p>');
    //document.body.insertAdjacentHTML('afterend', '<p>Hi2</p>');
};

function Button(text) {
    return <button onClick={handleClickEvent}>{text}</button>
}
*/
const buttonClick = () => {
    document.querySelector(".App").insertAdjacentHTML('beforeend', '<div>Thank you!</div>');
}

//const Button = (props) => <button onClick={buttonClick}>{props.text}</button>;

const Button = (props) => <button onClick={buttonClick}>Click here to vote for {props.userName}</button>;

export default Button;