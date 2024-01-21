import { useState } from 'react';

function App() {
  const [result, setResult] = useState('-');

  function getTime() {
    let apiUrl = 'https://worldtimeapi.org/api/timezone/Asia/Jakarta';
    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        // Work with JSON data here
        setResult(data.datetime);
        // console.log(data);
    }).catch(err => {
        // Do something for an error here
    });
  }

  // function getCodespace() {
  //   let apiUrl = 'https://special-spork-x5wjpwjgxjx9f9p4-8080.app.github.dev/greeting';
  //   fetch(apiUrl).then(response => {
  //       return response.json();
  //   }).then(data => {
  //       // Work with JSON data here
  //       document.getElementById("datetime").innerText = "Datetime: " + data.content;
  //       // console.log(data);
  //   }).catch(err => {
  //       // Do something for an error here
  //   });
  // }

  function reset() {
    setResult('-');
  }

  return (
    <>
      <p>Test Pages</p>
      <p>Result: {result}</p>

      <button onClick={getTime}>
          Hit API
      </button>

      <button onClick={reset}>
          Reset
      </button>
    </>
  );
}

export default App;
