class App extends React.Component {
  render() {
    return (
      <div className = "app">
        <div className = "nav">
          <Nav />
        </div>
        <div className = "display">
          <Display />
        </div>
      </div>
    );
  }
}