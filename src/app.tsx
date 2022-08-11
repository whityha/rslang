function App() {
  let test: any;

  const tst = (a: number) => {
    const b = a + 2;
    return b;
  };

  test = 5;
  test *= 2;
  return (
    <div className="App">
      Hello Pavels!!!
      {' '}
      {test}
      {' '}
      {`${tst(5)}DSf${3}`}
    </div>
  );
}

export default App;
