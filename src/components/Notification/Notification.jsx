import Proptypes from 'prop-types';

export const Notification = ({ message }) => {
  return <h3>{message}</h3>;
};

Notification.propTypes = {
  message: Proptypes.string.isRequired,
};
