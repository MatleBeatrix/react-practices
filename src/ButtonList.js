import Button from './Button';


//const ButtonList = () => <button>Hi</button>;
//const ButtonList = () => <div><Button text={"buttonText"}/></div>;

const ButtonList = () => {

    //let a = <div className='container'><Button text={"Click Me!"}/></div>;
    //console.log(a);
    let listArray = [];
    for (let i = 0; i < 10; i++){
        //listArray[i] = a;
        listArray.push(<Button key={i} text={"Click Me!"}/>);
    }
    return <div>{listArray}</div>;
}

export default ButtonList;