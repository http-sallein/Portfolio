import styled from 'styled-components';

import PropTypes from 'prop-types'; 

const Container = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    gap: 1rem;
    max-width: ${props => props.width } !important;
    padding: 2rem; 
    flex-direction: ${props => props.flexDirection};
    min-height: 100vh;
    background-color: ${props => props.backgroundColor};

`;

export const Fragment = ({ children, width, justifyContent, alignItems, flexDirection, backgroundColor }) => 
    <Container 
        width = {width}  
        justifyContent = {justifyContent} 
        alignItems = {alignItems}
        flexDirection = {flexDirection}
        backgroundColor = {backgroundColor}
    > {children} </Container>
 
Fragment.propTypes = {

    children: PropTypes.node.isRequired,
    width: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    flexDirection: PropTypes.string,
    backgroundColor: PropTypes.string
};
