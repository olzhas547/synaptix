import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`app-component-component3 ${props.rootClassName} `}>
      <div className="app-component-group10">
        <img
          alt={props.vector3Alt}
          src={props.vector3Src}
          className="app-component-vector3"
        />
        <img
          alt={props.vector1Alt}
          src={props.vector1Src}
          className="app-component-vector1"
        />
        <img
          alt={props.vector4Alt}
          src={props.vector4Src}
          className="app-component-vector4"
        />
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  vector3Src: '/external/vector3i531-yw4.svg',
  vector3Alt: 'Vector3I531',
  vector1Src: '/external/vector1i531-qrye.svg',
  vector1Alt: 'Vector1I531',
  vector4Src: '/external/vector4i531-aoq.svg',
  vector4Alt: 'Vector4I531',
  rootClassName: '',
}

AppComponent.propTypes = {
  vector3Src: PropTypes.string,
  vector3Alt: PropTypes.string,
  vector1Src: PropTypes.string,
  vector1Alt: PropTypes.string,
  vector4Src: PropTypes.string,
  vector4Alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
