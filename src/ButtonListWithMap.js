import Button from './Button';


//const ButtonList = () => <button>Hi</button>;
//const ButtonList = () => <div><Button text={"buttonText"}/></div>;

const ButtonListWithMap = _ => {

    const users = ['Richard', 'Flora', 'Aron', 'Betti', 'Johnny'];

    return <div>{users.map((userName,i) => <Button key={i} userName={userName}/>)}</div>
}

export default ButtonListWithMap;