import React from 'react';
import ReactDOM from 'react-dom';

// Error 1: sdkjfhgkdfjg name should start with a capital letter
function helloWorld() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

// Error 2: Typo in the component sdfgsdfg
ReactDOM.render(<Helloworld />, hello.getElementById('root'));
