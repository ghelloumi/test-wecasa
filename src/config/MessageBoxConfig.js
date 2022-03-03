import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { selectMessages } from '../redux/main/mainSelectors';
import MessageBox from '../UI/Molecules/MessageBox';

const MessageBoxConfig = ({ children }) => {
  const messages = selectMessages();

  return (
    <Fragment>
      {!!messages.length &&
        messages.map((message, index) => (
          <MessageBox
            key={message.id}
            id={message.id}
            type={message.type}
            message={message.message}
            delay={message.delay}
            index={index}
            withProgress={message.withProgress}
          />
        ))}
      {children}
    </Fragment>
  );
};

MessageBoxConfig.propTypes = {
  children: PropTypes.node.isRequired
};

export default MessageBoxConfig;
