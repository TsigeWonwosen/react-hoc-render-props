import React from "react";
import Mouse from "./Mouse";

function withMouse(Component, incrNumber = 1) {
  return class extends React.Component {
    render() {
      return (
        <Mouse
          incrNumber={incrNumber}
          render={(count, handleCount, resetCount) => (
            <Component
              {...this.props}
              count={count}
              handleCount={handleCount}
              resetCount={resetCount}
            />
          )}
        />
      );
    }
  };
}
export default withMouse;
