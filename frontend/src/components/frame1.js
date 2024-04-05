import React from 'react'

import PropTypes from 'prop-types'

import './frame1.css'

const Frame1 = (props) => {
  return (
    <div className={`frame1-frame1 ${props.rootClassName} `}>
      <div className="frame1-group1">
        <img
          alt={props.ellipse9Alt}
          src={props.ellipse9Src}
          className="frame1-ellipse9"
        />
        <img
          alt={props.ellipse8Alt1}
          src={props.ellipse8Src1}
          className="frame1-ellipse8"
        />
        <div className="frame1-maskgroup"></div>
        <img
          alt={props.happyyoungwomanholdinglaptopgraywalltransformed2Alt}
          src={props.happyyoungwomanholdinglaptopgraywalltransformed2Src}
          className="frame1-happyyoungwomanholdinglaptopgraywalltransformed2"
        />
      </div>
      <img
        alt={props.iMAGE5143537removebgpreview1Alt}
        src={props.iMAGE5143537removebgpreview1Src}
        className="frame1-image5143537removebgpreview1"
      />
      <img
        alt={props.iMAGE5143494removebgpreview1Alt}
        src={props.iMAGE5143494removebgpreview1Src}
        className="frame1-image5143494removebgpreview1"
      />
      <img
        alt={props.ellipse4Alt}
        src={props.ellipse4Src}
        className="frame1-ellipse4"
      />
      <img
        alt={props.ellipse8Alt}
        src={props.ellipse8Src}
        className="frame1-ellipse81"
      />
      <img
        alt={props.ellipse10Alt}
        src={props.ellipse10Src}
        className="frame1-ellipse10"
      />
      <img
        alt={props.ellipse11Alt}
        src={props.ellipse11Src}
        className="frame1-ellipse11"
      />
    </div>
  )
}

Frame1.defaultProps = {
  happyyoungwomanholdinglaptopgraywalltransformed2Src:
    '/external/happyyoungwomanholdinglaptopgraywalltransformed20209-3wr-500w.png',
  ellipse4Alt: 'Ellipse40209',
  ellipse9Src: '/external/ellipse90209-id3-500h.png',
  ellipse9Alt: 'Ellipse90209',
  ellipse11Alt: 'Ellipse110209',
  rootClassName: '',
  iMAGE5143537removebgpreview1Src:
    '/external/image5143537removebgpreview10209-15a4-400h.png',
  ellipse8Src: '/external/ellipse80209-7krj.svg',
  iMAGE5143494removebgpreview1Src:
    '/external/image5143494removebgpreview10209-52fn-300h.png',
  happyyoungwomanholdinglaptopgraywalltransformed2Alt:
    'happyyoungwomanholdinglaptopgraywalltransformed20209',
  ellipse11Src: '/external/ellipse110209-y37d.svg',
  ellipse4Src: '/external/ellipse40209-bpz.svg',
  ellipse10Alt: 'Ellipse100209',
  iMAGE5143537removebgpreview1Alt: 'IMAGE5143537removebgpreview10209',
  ellipse8Src1: '/external/ellipse80209-g2x8-400h.png',
  iMAGE5143494removebgpreview1Alt: 'IMAGE5143494removebgpreview10209',
  ellipse8Alt1: 'Ellipse80209',
  ellipse10Src: '/external/ellipse100209-5tcu.svg',
  ellipse8Alt: 'Ellipse80209',
}

Frame1.propTypes = {
  happyyoungwomanholdinglaptopgraywalltransformed2Src: PropTypes.string,
  ellipse4Alt: PropTypes.string,
  ellipse9Src: PropTypes.string,
  ellipse9Alt: PropTypes.string,
  ellipse11Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  iMAGE5143537removebgpreview1Src: PropTypes.string,
  ellipse8Src: PropTypes.string,
  iMAGE5143494removebgpreview1Src: PropTypes.string,
  happyyoungwomanholdinglaptopgraywalltransformed2Alt: PropTypes.string,
  ellipse11Src: PropTypes.string,
  ellipse4Src: PropTypes.string,
  ellipse10Alt: PropTypes.string,
  iMAGE5143537removebgpreview1Alt: PropTypes.string,
  ellipse8Src1: PropTypes.string,
  iMAGE5143494removebgpreview1Alt: PropTypes.string,
  ellipse8Alt1: PropTypes.string,
  ellipse10Src: PropTypes.string,
  ellipse8Alt: PropTypes.string,
}

export default Frame1
