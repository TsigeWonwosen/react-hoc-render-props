import React from "react";
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouse = this.handleMouse.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.state = { count: 0 };
  }

  handleMouse() {
    this.setState((prevCount) => ({
      count:
        prevCount.count + (this.props.incrNumber ? this.props.incrNumber : 1),
    }));
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <>
        {this.props.render(this.state.count, this.handleMouse, this.resetCount)}
      </>
    );
  }
}
export default Count;
