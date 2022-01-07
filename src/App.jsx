import './App.css';
import Button from './Button';
//import ButtonList from './ButtonList';
import ButtonListWithMap from './ButtonListWithMap';
import Profile from './Profile';
import Profile2 from './Profile2';
import Profile3 from './Profile3';
import Profile4 from './Profile4';
const buttonText = "Click Me, please!";

function App() {
  return (
    <div className="App">
      <Button text={buttonText}/>
      {/*<ButtonList/>*/}
      <ButtonListWithMap/>
      <Profile/>
      <Profile2/>
      <Profile3/>
      <Profile4/>
    </div>
  );
}

/*
function App() {
  return (
    <div className="App">
      {Button(buttonText)}
      <div id="text"></div>
    </div>
  );
}
*/

export default App;
