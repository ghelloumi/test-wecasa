import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Fragment, useEffect, useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.secondary};
  background: ${({ theme }) => theme.palette.primary};
  z-index: 2;
  position: fixed;
  right: 50%;
  bottom: 50%;
  transform: translate3d(50%, 50%, 0);
  border-radius: ${({ theme }) => theme.sizes.xs}px;
  min-width: 50%;
  min-height: 50%;
`;

const ModalBack = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.palette.secondary};
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.5;
`;

const ModalHeader = styled.div`
  padding: ${({ theme }) => theme.sizes.m}px;
  border-bottom: 1px solid;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.sizes.m}px;
  top: ${({ theme }) => theme.sizes.m}px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  padding: ${({ theme }) => theme.sizes.m}px;
  height: ${({ theme }) => theme.sizes.xl * 5}px;
  overflow: auto;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.sizes.m}px;
  border-top: 1px solid;
`;

const Modal = ({ title, children, closeModal, leftFooter, rightFooter }) => {
  const wrapperRef = useRef(null);
  const clickedOutside = useClickOutside(wrapperRef);

  useEffect(() => {
    if (clickedOutside) {
      closeModal();
    }
  }, [clickedOutside]);

  return (
    <Fragment>
      <ModalBack />
      <Container ref={wrapperRef}>
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
        <ModalHeader>{title}</ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>
          <p>{leftFooter}</p>
          <p>{rightFooter}</p>
        </ModalFooter>
      </Container>
    </Fragment>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  leftFooter: PropTypes.string.isRequired,
  rightFooter: PropTypes.string.isRequired
};

export default Modal;
