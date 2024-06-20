
import './App.css';
import AlertApp from './projects/Alerts/AlertApp';

import LikePhoto from './projects/like-my-photo/LikePhoto';
import RandomizeColors from './projects/randomize-colors/RandomizeColors';
import Signature from './projects/signature/Signature';
import Temperature from './projects/tempeture-controller/Temperature';
import Testimonials from './projects/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      {/* <Signature /> */}
      {/* <RandomizeColors /> */}
      {/* <LikePhoto /> */}
      {/* <Testimonials /> */}
      {/* < AlertApp /> */}
      <Temperature />
    </div>
  );
}

export default App;
