import PropTypes from 'prop-types'; 

import styled from "styled-components";

const Modal = styled.section`
    background-color: rgba(0, 0, 0, 0.7);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    max-width: 80%;
    max-height: 80%;

    img {
        width: 100px;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 24px;

    background-color: pink;
    cursor: pointer;
`;

export const ModalProject = ({ imageSrc, onClose }) => {
    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <Modal onClick={handleOutsideClick}>
            <ModalContent>
                <CloseButton onClick={onClose}>×</CloseButton>
                <img src={imageSrc} alt="Projeto" style={{ maxWidth: '100%' }} />
            </ModalContent>
        </Modal>
    );
};

ModalProject.propTypes = {

    imageSrc: PropTypes.string,
    onClose: PropTypes.bool
}