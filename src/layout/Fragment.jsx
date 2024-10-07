import styled from 'styled-components';

import PropTypes from 'prop-types'; 

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-width: ${props => props.width };
    padding: 2rem;

`;

export const Fragment = ({ children, width }) => <Container width={width}> {children} </Container>

Fragment.propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.string,
};
