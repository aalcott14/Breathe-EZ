class Display extends React.Component {
  render() {
    return (
      <div>
        <div className = "location">
          <Location />
        </div>
        <div className = "entryList">
          <EntryList />
        </div>
      </div>
    );
  }
}