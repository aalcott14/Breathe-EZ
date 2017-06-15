class EntryList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="entries">
        <p className="overview">Overview: {this.props.pollutantInfo.breezometer_description}</p>
        <br/><br/>
        <p className="pollutant">Dominant Pollutant: {this.props.pollutantInfo.dominant_pollutant_description}  ({this.props.pollutantInfo.dominant_pollutant_canonical_name})</p>
        <br/><br/>
        <p className="cause">Causes and Effects: {this.props.pollutantText}</p>
      </div>
    );
  }
}
