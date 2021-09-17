import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import Button from './Button';
import Heading from './Heading';
import MainContainer from './MainContainer';

function App() {
  // Define state variables
  const [color, setColor] = useState('');
  const [colorHue, setColorHue] = useState('');
  const [colorLuminosity, setColorLuminosity] = useState('');

  return (
    // Use function components for Heading, Container and Button (imported)
    <div className="App">
      <Heading />
      <div>
        <p>
          <label htmlFor="hue">Pick the hue you want: </label>
          <input
            id="hue"
            onChange={(event) => setColorHue(event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="luminosity">
            Pick the luminosity of your color:{' '}
          </label>
          <input
            id="luminosity"
            onChange={(event) => setColorLuminosity(event.target.value)}
          />
        </p>
        <p>
          <Button
            text="Generate a random color"
            onClick={() => {
              setColor(
                randomColor.randomColor({
                  luminosity: colorLuminosity,
                  hue: colorHue,
                }),
              );
            }}
          />
        </p>
        <MainContainer color={color} />
      </div>
    </div>
  );
}
export default App;
