import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-component4">
      <div className="component2-group10">
        <img
          alt={props.vector3Alt}
          src={props.vector3Src}
          className="component2-vector3"
        />
        <img
          alt={props.vector1Alt}
          src={props.vector1Src}
          className="component2-vector1"
        />
        <img
          alt={props.vector4Alt}
          src={props.vector4Src}
          className="component2-vector4"
        />
      </div>
    </div>
  )
}

Component2.defaultProps = {
  vector3Src: '/external/vector3i531-h09l.svg',
  vector3Alt: 'Vector3I531',
  vector1Src: '/external/vector1i531-yc5.svg',
  vector1Alt: 'Vector1I531',
  vector4Src: '/external/vector4i531-u0l.svg',
  vector4Alt: 'Vector4I531',
}

Component2.propTypes = {
  vector3Src: PropTypes.string,
  vector3Alt: PropTypes.string,
  vector1Src: PropTypes.string,
  vector1Alt: PropTypes.string,
  vector4Src: PropTypes.string,
  vector4Alt: PropTypes.string,
}

export default Component2
