import React from 'react';
import FaceSignInterface from './FaceSignInterface';

function App() {
  // Replace with the URL you received from the API
  const facesignUrl = 'https://identity.facefile.co?cs=cse45429da30be47ce87ce1933fa435a2d';

  return (
    <div className="App">
      <FaceSignInterface url={facesignUrl} />
    </div>
  );
}

export default App;