import styled from 'styled-components';

import PropTypes from 'prop-types'; 

const Container = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    gap: 1rem;
    margin: 0 auto;
    margin-bottom: 20rem;
    padding: 2rem; 
    flex-direction: ${props => props.flexDirection};
    background-color: ${props => props.backgroundColor};
    max-width: ${props => props.width};
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;

`;

export const Fragment = ({ children, width = 'auto', justifyContent, alignItems, flexDirection, backgroundColor, isWithDiv = 1, id }) => 
    <Container 
        width = {width}  
        justifyContent = {justifyContent} 
        alignItems = {alignItems}
        flexDirection = {flexDirection}
        backgroundColor = {backgroundColor}
        id={id}
        className='section'
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
    isWithDiv: PropTypes.bool,
    id: PropTypes.string
};
