import React from 'react';

const FaceSignInterface = ({ url }) => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={url}
        title="FaceSign Verification"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allow="camera; microphone"
      />
    </div>
  );
};

export default FaceSignInterface;