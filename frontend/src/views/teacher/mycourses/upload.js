import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './upload.css'

const Upload = (props) => {
  return (
    <div className="upload-container">
      <Helmet>
        <title>upload</title>
        <meta property="og:title" content="upload" />
      </Helmet>
      <div className="upload-createcourse">
        <div className="upload-frame-admin-panel-menu1">
          <div className="upload-frame-admin-panel-menu11">
            <div className="upload-logo">
              <div className="upload-logo1">
                <div className="upload-frame1000002598">
                  <img
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a7e9ae96-4bf9-4142-b3c6-b6498b258648/34e7356f-3c01-4262-ba7f-eb4c9ccb28a6?org_if_sml=1273&amp;force_format=original"
                    alt="ContainerLogo8315"
                    className="upload-container-logo"
                  />
                  <div className="upload-book4">
                    <div className="upload-group">
                      <img
                        src="/external/vectori831-863a.svg"
                        alt="VectorI831"
                        className="upload-vector"
                      />
                      <img
                        src="/external/vectori831-m0ws.svg"
                        alt="VectorI831"
                        className="upload-vector1"
                      />
                      <img
                        src="/external/vectori831-qdym.svg"
                        alt="VectorI831"
                        className="upload-vector2"
                      />
                      <img
                        src="/external/vectori831-k1cw.svg"
                        alt="VectorI831"
                        className="upload-vector3"
                      />
                    </div>
                  </div>
                </div>
                <div className="upload-frame-title">
                  <span className="upload-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="upload-frame-menu">
              <div className="upload-menu-items">
                <div className="upload-menu-item-inline-navigation-item">
                  <img
                    src="/external/icondashboardoutlinedi831-78ok.svg"
                    alt="IconDashboardOutlinedI831"
                    className="upload-icon-dashboard-outlined"
                  />
                  <Link
                    to="/mycourse"
                    className="upload-text02 LightBaseBaseNormal"
                  >
                    <span>Dashboard</span>
                  </Link>
                </div>
                <div className="upload-menu-item-inline-navigation-item1">
                  <img
                    src="/external/icondatabaseoutlinedi831-35er.svg"
                    alt="IconDatabaseOutlinedI831"
                    className="upload-icon-database-outlined"
                  />
                  <Link
                    to="/createcourse"
                    className="upload-text04 LightBaseBaseNormal"
                  >
                    <span>My courses</span>
                  </Link>
                </div>
                <div className="upload-menu-item-inline-navigation-item2">
                  <img
                    src="/external/iconbarchartoutlinedi831-g8n.svg"
                    alt="IconBarChartOutlinedI831"
                    className="upload-icon-bar-chart-outlined"
                  />
                  <Link
                    to="/coursemodules"
                    className="upload-text06 LightBaseBaseNormal"
                  >
                    <span>Statistics</span>
                  </Link>
                </div>
                <div className="upload-menu-item-inline-navigation-item3">
                  <img
                    src="/external/iconcalendaroutlinedi831-wtrdi.svg"
                    alt="IconCalendarOutlinedI831"
                    className="upload-icon-calendar-outlined"
                  />
                  <Link to="/" className="upload-text08 LightBaseBaseNormal">
                    <span>Calendar</span>
                  </Link>
                </div>
                <div className="upload-menu-item-inline-navigation-item4">
                  <img
                    src="/external/iconvideocameraoutlinedi831-vmu5.svg"
                    alt="IconVideoCameraOutlinedI831"
                    className="upload-icon-video-camera-outlined"
                  />
                  <Link
                    to="/upload"
                    className="upload-text10 LightBaseBaseNormal"
                  >
                    <span>Webinar</span>
                  </Link>
                </div>
              </div>
              <div className="upload-menu-items1">
                <Link to="/mycourse" className="upload-navlink">
                  <div className="upload-menu-item-inline-navigation-item5">
                    <img
                      src="/external/iconsettingoutlinedi831-y0kq.svg"
                      alt="IconSettingOutlinedI831"
                      className="upload-icon-setting-outlined"
                    />
                    <span className="upload-text12 LightBaseBaseNormal">
                      Settings
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="upload-content-wrapper">
          <div className="upload-frame-header">
            <div className="upload-icon-search">
              <button className="upload-frame-button">
                <div className="upload-content">
                  <img
                    src="/external/iconmenufoldoutlinedi518-1s7o.svg"
                    alt="IconMenuFoldOutlinedI518"
                    className="upload-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="upload-frame-input-search">
                <div className="upload-input-wrapper">
                  <div className="upload-frame-input-basic">
                    <div className="upload-content1">
                      <span className="upload-text13 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="upload-frame-button1">
                  <div className="upload-content2">
                    <img
                      src="/external/iconsearchoutlinedi518-e78k.svg"
                      alt="IconSearchOutlinedI518"
                      className="upload-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="upload-avatar-button">
              <button className="upload-frame-button2">
                <div className="upload-content3">
                  <img
                    src="/external/iconglobaloutlinedi518-em38.svg"
                    alt="IconGlobalOutlinedI518"
                    className="upload-icon-global-outlined"
                  />
                  <span className="upload-text15 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="upload-notifications">
                <img
                  src="/external/iconbelloutlinedi518-ix0n.svg"
                  alt="IconBellOutlinedI518"
                  className="upload-icon-bell-outlined"
                />
                <div className="upload-content4">
                  <div className="upload-frame-badge-basic">
                    <span className="upload-text17 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/mycourse" className="upload-navlink1">
                <div className="upload-frame-avatar">
                  <img
                    src="/external/iconuseroutlinedi518-vz23.svg"
                    alt="IconUserOutlinedI518"
                    className="upload-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="upload-frame-card1">
            <button className="upload-header-button">
              <div className="upload-header-links">
                <div className="upload-frame-breadcrumb">
                  <div className="upload-breadcrumb-link">
                    <span className="upload-text19 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                  <div className="upload-breadcrumb-separator">
                    <div className="upload-content5">
                      <span className="upload-text21 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="upload-breadcrumb-link1">
                    <span className="upload-text22 LightBaseBaseNormal">
                      <span>Create course</span>
                    </span>
                  </div>
                </div>
                <div className="upload-frame-title1">
                  <span className="upload-text24 LightHeadingHeading2">
                    <span>Course modules</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="upload-frame-steps">
              <div className="upload-steps-item-horizontal">
                <div className="upload-step-header">
                  <div className="upload-steps-item-progress-icon">
                    <img
                      src="/external/iconcheckoutlinedi518-ulv7.svg"
                      alt="IconCheckOutlinedI518"
                      className="upload-icon-check-outlined"
                    />
                  </div>
                  <span className="upload-text26 LightLGLGNormal">
                    <span>Course name</span>
                  </span>
                  <div className="upload-tail-wrapper">
                    <img
                      src="/external/stepsitemtaili518-n6n.svg"
                      alt="StepsItemTailI518"
                      className="upload-steps-item-tail"
                    />
                  </div>
                </div>
                <div className="upload-description-wrapper"></div>
              </div>
              <div className="upload-steps-item-horizontal1">
                <div className="upload-step-header1">
                  <div className="upload-steps-item-progress-icon1">
                    <img
                      src="/external/iconcheckoutlinedi518-pm3.svg"
                      alt="IconCheckOutlinedI518"
                      className="upload-icon-check-outlined1"
                    />
                  </div>
                  <span className="upload-text28 LightLGLGNormal">
                    <span>Course module</span>
                  </span>
                  <div className="upload-tail-wrapper1">
                    <img
                      src="/external/stepsitemtaili518-ea3.svg"
                      alt="StepsItemTailI518"
                      className="upload-steps-item-tail1"
                    />
                  </div>
                </div>
                <div className="upload-description-wrapper1"></div>
              </div>
              <div className="upload-steps-item-horizontal2">
                <div className="upload-step-header2">
                  <div className="upload-steps-item-progress-icon2">
                    <img
                      src="/external/iconcheckoutlinedi518-khy.svg"
                      alt="IconCheckOutlinedI518"
                      className="upload-icon-check-outlined2"
                    />
                  </div>
                  <span className="upload-text30 LightLGLGNormal">
                    <span>Upload</span>
                  </span>
                </div>
                <div className="upload-description-wrapper2"></div>
              </div>
            </div>
            <div className="upload-form">
              <div className="upload-content-wrapper1">
                <div className="upload-frame-result">
                  <img
                    src="/external/iconcheckcirclefilledi519-rvst.svg"
                    alt="IconCheckCircleFilledI519"
                    className="upload-icon-check-circle-filled"
                  />
                  <div className="upload-text-wrapper">
                    <span className="upload-text32 LightHeadingHeading3">
                      <span>You just created the course!</span>
                    </span>
                    <span className="upload-text34 LightBaseBaseNormal">
                      <span>
                        Objectively scale orthogonal collaboration and
                        idea-sharing after enterprise-wide manufactured
                        products. Compellingly strategize high-quality niche
                        markets through sustainable.
                      </span>
                    </span>
                  </div>
                  <button className="upload-buttons">
                    <Link to="/upload" className="upload-frame-button3">
                      <div className="upload-content6">
                        <span className="upload-text36 LightBaseBaseNormal">
                          <span>To the Dashboard</span>
                        </span>
                      </div>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="upload-frame-footer1">
            <div className="upload-content-wrapper2">
              <div className="upload-content-wrapper3">
                <span className="upload-text38 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="upload-text40 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="upload-text42 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="upload-text44 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="upload-text46 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
