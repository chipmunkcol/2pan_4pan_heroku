import React, { Component } from "react";
import styled from "styled-components";


class Button extends Component {

    render() {
        return (
            <>
                <Btn htmlFor={this.props.label}>
                    {this.props.btn}
                </Btn>
            </>
        );
    }
}

const Btn = styled.label`
    padding: 3px 16px;
    background: linear-gradient(180deg, #FFFFFF 0%, #E3E3E3 100%);
    border: 1px solid #D7D7D7;
    border-radius: 4px;
    cursor: pointer;
`;

export default Button;