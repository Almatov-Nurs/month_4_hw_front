import React from "react";
import classes from "./info2Page.module.css";

class Info2Page extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <ul className={classes.infoStyle}>
                    <li>name: {this.props.info.name}</li>
                    <li>age: {this.props.info.age}</li>
                </ul>
            </>
        );
    }
}

export default Info2Page;