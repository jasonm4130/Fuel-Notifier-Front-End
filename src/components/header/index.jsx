import React, { Component } from 'react'
import styled from 'styled-components';

const HeaderWrapper = styled.header `
    grid-area: header;
`;

export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <h1>Fuel Finder App</h1>
            </HeaderWrapper>
        )
    }
}
