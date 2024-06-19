import './App.css';

function App() {
  return (
      <div className="App">
          <h1 className={'title'}>Infectious Decease Severity Predictor</h1>

          <h2 className={'sub-title'}>Group Members</h2>
          <div className={'members'}>
              <div className={'member'}>
                  <h2>Member 1</h2>
                  <p>Name: Dimuthu Amaraweera</p>
                  <p>Index: 200035N</p>
              </div>
              <div className={'member'}>
                  <h2>Member 2</h2>
                  <p>Name: Minindu Hansitha</p>
                  <p>Index: 200206P</p>
              </div>
              <div className={'member'}>
                  <h2>Member 3</h2>
                  <p>Name: Kavindu Nilshan</p>
                  <p>Index: 200422A</p>
              </div>
          </div>

          <h2 className={'sub-title'}>Supervisor</h2>
          <div className={'supervisor'}>
              <p>Prof. Indika Perera</p>
          </div>
      </div>
  );
}

export default App;
