import styled from 'styled-components';

import PropTypes from 'prop-types'; 

const Container = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    gap: 1rem;
    margin: 0 auto;
    margin-bottom: 20rem;
    padding: 2rem; 
    flex-direction: ${props => props.flexDirection};
    background-color: ${props => props.backgroundColor};

`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
`;

export const Fragment = ({ children, width, justifyContent, alignItems, flexDirection, backgroundColor, isWithDiv = 1 }) => 
    <Container 
        width = {width}  
        justifyContent = {justifyContent} 
        alignItems = {alignItems}
        flexDirection = {flexDirection}
        backgroundColor = {backgroundColor}
    > 
        { isWithDiv ? <Div>{children}</Div> : children }
    </Container>
 
Fragment.propTypes = {

    children: PropTypes.node.isRequired,
    width: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    flexDirection: PropTypes.string,
    backgroundColor: PropTypes.string,
    isWithDiv: PropTypes.bool
};
