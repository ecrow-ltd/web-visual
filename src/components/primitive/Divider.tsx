import React, { Component } from "react";

export interface IProps {
    color: string;
}

class Divider extends Component<IProps, {}> {
    public render() {
        return <hr style={{borderColor: this.props.color}}/>;
    }
}
export default Divider;