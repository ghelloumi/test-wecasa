import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeMessageBoxAction } from '../../redux/main/mainActions';
import Button from '../Atoms/Button';

const MessageBoxContainer = styled.div`
  width: ${({ theme }) => theme.sizes.xl * 6}px;
  background: ${({ theme }) => theme.palette.primary};
  border: 1px solid ${({ theme, color }) => theme.palette[color]};
  border-radius: ${({ theme }) => theme.sizes.xs / 2}px;
  display: flex;
  align-items: center;
  text-align: left;
  position: fixed;
  z-index: 1000;
  ${({ theme, translate, destruct, index }) => {
    const distance = `${theme.sizes.s}px`;
    const translateY = `calc(-${index} * (100% + 8px))`;
    let translateX = `calc(100% + ${distance})`;
    let opacity = 0;
    if (translate) {
      translateX = 0;
      opacity = 1;
    }

    if (destruct) {
      translateX = `calc(-10% + ${distance})`;
      opacity = 0;
    }

    return `
			bottom: ${distance};
			right: ${distance};
			opacity: ${opacity};
			transform: translate3d(${translateX},${translateY}, 0);
			transition: transform 500ms ease-in-out 25ms, opacity 500ms ease-in-out 25ms;
		`;
  }}
`;

const Message = styled.div`
  display: flex;
  width: 100%;

  & > p {
    padding: 0 ${({ theme }) => theme.sizes.m}px;
  }
`;

const CloseIconContainer = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.sizes.s}px;
`;

export const MESSAGE_BOX_TYPES = ['success', 'error'];

const MessageBox = ({ id, type, message, delay, index }) => {
  const [translate, setTranslate] = useState(false);
  const [destruct, setDestruct] = useState(false);
  const dispatch = useDispatch();

  let timeout;
  let color;

  if (type === 'success') {
    color = 'info';
  } else {
    color = 'danger';
  }

  // Functions
  const removeMessageHandler = () => {
    setDestruct(true);
    setTimeout(() => dispatch(removeMessageBoxAction(id)), 500);
  };

  const handleClose = () => {
    removeMessageHandler();
    clearTimeout(timeout);
  };

  // Effects
  useEffect(() => {
    setTimeout(() => {
      setTranslate(true);
    }, 1);
    if (delay) {
      timeout = setTimeout(() => removeMessageHandler(), delay);
    }
  }, [delay]);

  return (
    <MessageBoxContainer color={color} translate={translate} destruct={destruct} index={index}>
      <Message>
        <p>{message}</p>
      </Message>
      <CloseIconContainer>
        <Button handleClick={handleClose}>X</Button>
      </CloseIconContainer>
    </MessageBoxContainer>
  );
};

MessageBox.defaultProps = {
  delay: 2000
};

MessageBox.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(MESSAGE_BOX_TYPES).isRequired,
  message: PropTypes.string.isRequired,
  delay: PropTypes.number,
  index: PropTypes.number.isRequired
};

export default MessageBox;
