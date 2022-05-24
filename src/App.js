import './App.css';

function App() {
  const dynamicValue = 'Welcome to the new blog';
  const likes = 50;
  // const person = {name: 'Umar', age: 26}
  const link = "https://google.com";
  return (
    <div className="App">
      <h1>{dynamicValue}</h1>
      <p>Liked {likes} Times</p>
      {/* <p>{person}</p> */}
      <p>{10}</p>
      <p>{"Hello, Folks."}</p>
      <p>{[1,2,3,4,5]}</p>
      <p>{Math.random()*10}</p> 
      <a href={link}>Google it, now!</a>
    </div>
  );
}

export default App;
