import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleEl = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

const Title = ({ children }) => (
  <p>
    Website section: <TitleEl>{children}</TitleEl>
  </p>
);

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
