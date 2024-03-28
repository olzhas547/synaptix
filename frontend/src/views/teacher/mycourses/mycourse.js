import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './mycourse.css'

const Mycourse = (props) => {
  return (
    <div className="mycourse-container">
      <Helmet>
        <title>mycourse</title>
        <meta property="og:title" content="mycourse" />
      </Helmet>
      <div className="mycourse-createcourse">
        <div className="mycourse-frame-admin-panel-menu1">
          <div className="mycourse-frame-admin-panel-menu11">
            <div className="mycourse-logo">
              <div className="mycourse-logo1">
                <div className="mycourse-frame1000002598">
                  <img
                    alt="ContainerLogo8315"
                    src="/external/containerlogo8315-2it8-200h.png"
                    className="mycourse-container-logo"
                  />
                  <div className="mycourse-book4">
                    <div className="mycourse-group">
                      <img
                        alt="VectorI831"
                        src="/external/vectori831-5eue.svg"
                        className="mycourse-vector"
                      />
                      <img
                        alt="VectorI831"
                        src="/external/vectori831-0q69.svg"
                        className="mycourse-vector1"
                      />
                      <img
                        alt="VectorI831"
                        src="/external/vectori831-ngni.svg"
                        className="mycourse-vector2"
                      />
                      <img
                        alt="VectorI831"
                        src="/external/vectori831-td6e.svg"
                        className="mycourse-vector3"
                      />
                    </div>
                  </div>
                </div>
                <div className="mycourse-frame-title">
                  <span className="mycourse-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mycourse-frame-menu">
              <div className="mycourse-menu-items">
                <div className="mycourse-menu-item-inline-navigation-item">
                  <img
                    alt="IconDashboardOutlinedI831"
                    src="/external/icondashboardoutlinedi831-i0mp.svg"
                    className="mycourse-icon-dashboard-outlined"
                  />
                  <Link
                    to="/dashboard"
                    className="mycourse-text02 LightBaseBaseNormal"
                  >
                    <span>Dashboard</span>
                  </Link>
                </div>
                <div className="mycourse-menu-item-inline-navigation-item1">
                  <img
                    alt="IconDatabaseOutlinedI831"
                    src="/external/icondatabaseoutlinedi831-2hsl.svg"
                    className="mycourse-icon-database-outlined"
                  />
                  <Link
                    to="/mycourse"
                    className="mycourse-text04 LightBaseBaseNormal"
                  >
                    <span>My courses</span>
                  </Link>
                </div>
                <div className="mycourse-menu-item-inline-navigation-item2">
                  <img
                    alt="IconBarChartOutlinedI831"
                    src="/external/iconbarchartoutlinedi831-mdq.svg"
                    className="mycourse-icon-bar-chart-outlined"
                  />
                  <Link to="/statistic" className="mycourse-text06 LightBaseBaseNormal">
                    <span>Statistics</span>
                  </Link>
                </div>
                <div className="mycourse-menu-item-inline-navigation-item3">
                  <img
                    alt="IconCalendarOutlinedI831"
                    src="/external/iconcalendaroutlinedi831-buo5.svg"
                    className="mycourse-icon-calendar-outlined"
                  />
                  <Link
                    to="/calendar"
                    className="mycourse-text08 LightBaseBaseNormal"
                  >
                    <span>Calendar</span>
                  </Link>
                </div>
                <div className="mycourse-menu-item-inline-navigation-item4">
                  <img
                    alt="IconVideoCameraOutlinedI831"
                    src="/external/iconvideocameraoutlinedi831-hxng.svg"
                    className="mycourse-icon-video-camera-outlined"
                  />
                  <Link
                    to="/webinar"
                    className="mycourse-text10 LightBaseBaseNormal"
                  >
                    <span>Webinar</span>
                  </Link>
                </div>
              </div>
              <div className="mycourse-menu-items1">
                <div className="mycourse-menu-item-inline-navigation-item5">
                  <img
                    alt="IconSettingOutlinedI831"
                    src="/external/iconsettingoutlinedi831-95se.svg"
                    className="mycourse-icon-setting-outlined"
                  />
                  <Link
                    to="/settings"
                    className="mycourse-text12 LightBaseBaseNormal"
                  >
                    <span>Settings</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mycourse-content-wrapper">
          <div className="mycourse-frame-header">
            <div className="mycourse-icon-search">
              <button className="mycourse-frame-button">
                <div className="mycourse-content">
                  <img
                    alt="IconMenuFoldOutlinedI478"
                    src="/external/iconmenufoldoutlinedi478-apn8.svg"
                    className="mycourse-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="mycourse-frame-input-search">
                <div className="mycourse-input-wrapper">
                  <div className="mycourse-frame-input-basic">
                    <div className="mycourse-content1">
                      <span className="mycourse-text14 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="mycourse-frame-button1">
                  <div className="mycourse-content2">
                    <img
                      alt="IconSearchOutlinedI478"
                      src="/external/iconsearchoutlinedi478-m2mt.svg"
                      className="mycourse-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="mycourse-avatar-button">
              <button className="mycourse-frame-button2">
                <div className="mycourse-content3">
                  <img
                    alt="IconGlobalOutlinedI478"
                    src="/external/iconglobaloutlinedi478-aer.svg"
                    className="mycourse-icon-global-outlined"
                  />
                  <span className="mycourse-text16 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="mycourse-notifications">
                <img
                  alt="IconBellOutlinedI478"
                  src="/external/iconbelloutlinedi478-iw1s.svg"
                  className="mycourse-icon-bell-outlined"
                />
                <div className="mycourse-content4">
                  <div className="mycourse-frame-badge-basic">
                    <span className="mycourse-text18 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/" className="mycourse-navlink">
                <div className="mycourse-frame-avatar">
                  <img
                    alt="IconUserOutlinedI478"
                    src="/external/iconuseroutlinedi478-lhot.svg"
                    className="mycourse-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="mycourse-frame-card1">
            <button className="mycourse-header-button">
              <div className="mycourse-header-links">
                <div className="mycourse-frame-title1">
                  <span className="mycourse-text20 LightHeadingHeading2">
                    <span>My courses</span>
                  </span>
                  <Link to="/createcourse" className="mycourse-frame-button3">
                    <div className="mycourse-content5">
                      <img
                        alt="IconPlusCircleOutlinedI502"
                        src="/external/iconpluscircleoutlinedi502-1nki.svg"
                        className="mycourse-icon-plus-circle-outlined"
                      />
                      <span className="mycourse-text22 LightBaseBaseNormal">
                        <span>Create new course</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </button>
            <div className="mycourse-frame1000002674">
              <div className="mycourse-tabs">
                <div className="mycourse-tab-item-card">
                  <span className="mycourse-text24 LightBaseBaseStrong">
                    <span>In progress</span>
                  </span>
                </div>
                <div className="mycourse-tab-item-card1">
                  <span className="mycourse-text26 LightBaseBaseNormal">
                    <span>Finished</span>
                  </span>
                </div>
                <div className="mycourse-tab-item-card2">
                  <span className="mycourse-text28 LightBaseBaseNormal">
                    <span>Upcoming</span>
                  </span>
                </div>
              </div>
              <div className="mycourse-content-wrapper1">
                <div className="mycourse-gridwith-search">
                  <button className="mycourse-buttons">
                    <div className="mycourse-frame-input-search1">
                      <div className="mycourse-input-wrapper1">
                        <div className="mycourse-frame-input-basic1">
                          <div className="mycourse-content6">
                            <span className="mycourse-text30 LightBaseBaseNormal">
                              <span>
                                Search
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="mycourse-frame-button4">
                        <div className="mycourse-content7">
                          <img
                            alt="IconSearchOutlinedI502"
                            src="/external/iconsearchoutlinedi502-1kp9.svg"
                            className="mycourse-icon-search-outlined1"
                          />
                        </div>
                      </button>
                    </div>
                    <img
                      alt="SVGDividerHorizontal5021"
                      src="/external/svgdividerhorizontal5021-jpw8.svg"
                      className="mycourse-svg-divider-horizontal"
                    />
                  </button>
                  <div className="mycourse-frame-table">
                    <div className="mycourse-frame-table1">
                      <div className="mycourse-content-wrapper2">
                        <div className="mycourse-frame162">
                          <div className="mycourse-frame1000002616">
                            <div className="mycourse-frame6356489">
                              <div className="mycourse-frame6356483">
                                <div className="mycourse-frame6356475">
                                  <div className="mycourse-frame6356481"></div>
                                </div>
                              </div>
                              <span className="mycourse-text32">
                                Java Programming language
                              </span>
                              <button className="mycourse-button">
                                <span className="mycourse-text33 MenuMenu1Bold">
                                  <span>Enter</span>
                                </span>
                              </button>
                            </div>
                            <div className="mycourse-frame6356491">
                              <div className="mycourse-frame63564831">
                                <div className="mycourse-frame63564751">
                                  <div className="mycourse-frame63564811"></div>
                                </div>
                              </div>
                              <span className="mycourse-text35">
                                UX/UI Design for beginners
                              </span>
                              <Link
                                to="/createcourse"
                                className="mycourse-button1"
                              >
                                <span className="mycourse-text36 MenuMenu1Bold">
                                  <span>Enter</span>
                                </span>
                              </Link>
                            </div>
                            <div className="mycourse-frame6356493">
                              <div className="mycourse-frame63564832">
                                <div className="mycourse-frame63564752">
                                  <div className="mycourse-frame63564812"></div>
                                </div>
                              </div>
                              <span className="mycourse-text38">Cinema 4D</span>
                              <Link
                                to="/createcourse"
                                className="mycourse-button2"
                              >
                                <span className="mycourse-text39 MenuMenu1Bold">
                                  <span>Enter</span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mycourse-content-wrapper3">
                        <div className="mycourse-frame1621">
                          <div className="mycourse-frame10000026161">
                            <div className="mycourse-frame6356492">
                              <div className="mycourse-frame63564833">
                                <div className="mycourse-frame63564753">
                                  <div className="mycourse-frame63564813">
                                    <div className="mycourse-group1000000797">
                                      <img
                                        alt="Ellipse1666011"
                                        src="/external/ellipse1666011-run8-200h.png"
                                        className="mycourse-ellipse166"
                                      />
                                      <div className="mycourse-majesticonsinformationcircle">
                                        <div className="mycourse-group1">
                                          <img
                                            alt="VectorI601"
                                            src="/external/vectori601-xvk8.svg"
                                            className="mycourse-vector4"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span className="mycourse-text41">
                                Python Programming language
                              </span>
                              <button className="mycourse-button3">
                                <span className="mycourse-text42 MenuMenu1Bold">
                                  <span>Enter</span>
                                </span>
                              </button>
                            </div>
                            <div className="mycourse-frame63564911">
                              <div className="mycourse-frame63564834">
                                <div className="mycourse-frame63564754">
                                  <div className="mycourse-frame63564814">
                                    <div className="mycourse-group10000007971">
                                      <img
                                        alt="Ellipse1666011"
                                        src="/external/ellipse1666011-mp5-200h.png"
                                        className="mycourse-ellipse1661"
                                      />
                                      <div className="mycourse-majesticonsinformationcircle1">
                                        <div className="mycourse-group2">
                                          <img
                                            alt="VectorI601"
                                            src="/external/vectori601-jz1q.svg"
                                            className="mycourse-vector5"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span className="mycourse-text44">
                                Business Analysis
                              </span>
                              <button className="mycourse-button4">
                                <span className="mycourse-text45 MenuMenu1Bold">
                                  <span>Enter</span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mycourse-frame-pagination">
                      <div className="mycourse-pagination-item-arrow">
                        <img
                          alt="IconLeftOutlinedI502"
                          src="/external/iconleftoutlinedi502-2m2g.svg"
                          className="mycourse-icon-left-outlined"
                        />
                      </div>
                      <div className="mycourse-pagination-item-number">
                        <span className="mycourse-text47 LightBaseBaseStrong">
                          1
                        </span>
                      </div>
                      <div className="mycourse-pagination-item-number1">
                        <span className="mycourse-text48 LightBaseBaseNormal">
                          2
                        </span>
                      </div>
                      <div className="mycourse-pagination-item-number2">
                        <span className="mycourse-text49 LightBaseBaseNormal">
                          3
                        </span>
                      </div>
                      <div className="mycourse-pagination-item-number3">
                        <span className="mycourse-text50 LightBaseBaseNormal">
                          4
                        </span>
                      </div>
                      <div className="mycourse-pagination-item-number4">
                        <span className="mycourse-text51 LightBaseBaseNormal">
                          5
                        </span>
                      </div>
                      <div className="mycourse-pagination-item-arrow1">
                        <img
                          alt="IconRightOutlinedI502"
                          src="/external/iconrightoutlinedi502-lr2.svg"
                          className="mycourse-icon-right-outlined"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mycourse-frame-footer1">
            <div className="mycourse-content-wrapper4">
              <div className="mycourse-content-wrapper5">
                <span className="mycourse-text52 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="mycourse-text54 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="mycourse-text56 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="mycourse-text58 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="mycourse-text60 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mycourse
