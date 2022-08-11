import React, { Component } from "react";
import styled from "styled-components";

class ButtonDisabled extends Component {
    render() {
        return (
            <>
                <BtnDisabled>
                    {this.props.btn}
                </BtnDisabled>
            </>
        );
    }
}

const BtnDisabled = styled.span`
    padding: 6px 16px;
    background: linear-gradient(180deg, #FFFFFF 0%, #E3E3E3 100%);
    border: 1px solid #E1E1E1;
    border-radius: 4px;
    color:#E1E1E1;
    cursor: pointer;
`;

export default ButtonDisabled;