class EntryList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="entries">
        Overview: {this.props.pollutantInfo.breezometer_description}
        <br/>
        <br/>
        Dominant Pollutant: {this.props.pollutantInfo.dominant_pollutant_description}  ({this.props.pollutantInfo.dominant_pollutant_canonical_name})
        <br/>
        <br/>
        Causes and Effects: {this.props.pollutantText}

      </div>
    );
  }
}