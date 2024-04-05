import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-component3 ${props.rootClassName} `}>
      <div className="component1-group10">
        <img
          alt={props.vector3Alt}
          src={props.vector3Src}
          className="component1-vector3"
        />
        <img
          alt={props.vector1Alt}
          src={props.vector1Src}
          className="component1-vector1"
        />
        <img
          alt={props.vector4Alt}
          src={props.vector4Src}
          className="component1-vector4"
        />
      </div>
    </div>
  )
}

Component1.defaultProps = {
  vector3Src: '/external/vector3i541-inqf.svg',
  vector3Alt: 'Vector3I541',
  vector1Src: '/external/vector1i541-luqm.svg',
  vector1Alt: 'Vector1I541',
  vector4Src: '/external/vector4i541-9vzr.svg',
  vector4Alt: 'Vector4I541',
  rootClassName: '',
}

Component1.propTypes = {
  vector3Src: PropTypes.string,
  vector3Alt: PropTypes.string,
  vector1Src: PropTypes.string,
  vector1Alt: PropTypes.string,
  vector4Src: PropTypes.string,
  vector4Alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component1
