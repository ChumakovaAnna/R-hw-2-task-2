import React from 'react';
import PropTypes from 'prop-types';

IconSwitch.propTypes = {
  props: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired,
  })
};

function IconSwitch(props) {
  const {icon} = props;
  const onSwitch = () => {
    props.onSwitch();
  }

  return (
    <div className="iconSwitch">
      <div className="material-icons" onClick={onSwitch}>{icon}</div>
    </div>
  );
}

export default IconSwitch;