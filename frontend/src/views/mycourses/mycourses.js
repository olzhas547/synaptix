import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './mycourses.css'

const Mycourses = (props) => {
  return (
    <div className="mycourses-container">
      <Helmet>
        <title>Mycourses</title>
      </Helmet>
      <div className="mycourses-mycourses">
        <div className="mycourses-frame-admin-panel-menu1">
          <div className="mycourses-frame-admin-panel-menu11">
            <div className="mycourses-logo">
              <div className="mycourses-logo1">
                <div className="mycourses-frame1000002598">
                  <img
                    src="/external/containerlogo5311-dyqh-200h.png"
                    alt="ContainerLogo5311"
                    className="mycourses-container-logo"
                  />
                  <div className="mycourses-book4">
                    <div className="mycourses-group">
                      <img
                        src="/external/vectori531-96y.svg"
                        alt="VectorI531"
                        className="mycourses-vector"
                      />
                      <img
                        src="/external/vectori531-ube2.svg"
                        alt="VectorI531"
                        className="mycourses-vector1"
                      />
                      <img
                        src="/external/vectori531-gar9.svg"
                        alt="VectorI531"
                        className="mycourses-vector2"
                      />
                      <img
                        src="/external/vectori531-qtk8.svg"
                        alt="VectorI531"
                        className="mycourses-vector3"
                      />
                    </div>
                  </div>
                </div>
                <div className="mycourses-frame-title">
                  <span className="mycourses-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mycourses-frame-menu">
              <div className="mycourses-menu-items">
                <Link to="/" className="mycourses-navlink">
                  <div className="mycourses-menu-item-inline-navigation-item">
                    <img
                      src="/external/icondashboardoutlinedi531-aa3r.svg"
                      alt="IconDashboardOutlinedI531"
                      className="mycourses-icon-dashboard-outlined"
                    />
                    <span className="mycourses-text02 LightBaseBaseNormal">
                      <span>Dashboard</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="mycourses-navlink1">
                  <div className="mycourses-menu-item-inline-navigation-item1">
                    <img
                      src="/external/icondatabaseoutlinedi531-opx.svg"
                      alt="IconDatabaseOutlinedI531"
                      className="mycourses-icon-database-outlined"
                    />
                    <span className="mycourses-text04 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="mycourses-navlink2">
                  <div className="mycourses-menu-item-inline-navigation-item2">
                    <img
                      src="/external/iconbarchartoutlinedi531-onja.svg"
                      alt="IconBarChartOutlinedI531"
                      className="mycourses-icon-bar-chart-outlined"
                    />
                    <span className="mycourses-text06 LightBaseBaseNormal">
                      <span>Statistics</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="mycourses-navlink3">
                  <div className="mycourses-menu-item-inline-navigation-item3">
                    <img
                      src="/external/iconcalendaroutlinedi531-lpa8.svg"
                      alt="IconCalendarOutlinedI531"
                      className="mycourses-icon-calendar-outlined"
                    />
                    <span className="mycourses-text08 LightBaseBaseNormal">
                      <span>Calendar</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mycourses-menu-submenu">
                <Link to="/" className="mycourses-navlink4">
                  <div className="mycourses-menu-item-inline-submenu-title">
                    <img
                      src="/external/iconfiletextoutlinedi531-ym59.svg"
                      alt="IconFileTextOutlinedI531"
                      className="mycourses-icon-file-text-outlined"
                    />
                    <span className="mycourses-text10 LightBaseBaseNormal">
                      <span>Invoice</span>
                    </span>
                    <img
                      src="/external/icondownoutlinedi531-ezga.svg"
                      alt="IconDownOutlinedI531"
                      className="mycourses-icon-down-outlined"
                    />
                  </div>
                </Link>
              </div>
              <div className="mycourses-menu-items1">
                <Link to="/" className="mycourses-navlink5">
                  <div className="mycourses-menu-item-inline-navigation-item4">
                    <img
                      src="/external/iconsettingoutlinedi531-p66.svg"
                      alt="IconSettingOutlinedI531"
                      className="mycourses-icon-setting-outlined"
                    />
                    <span className="mycourses-text12 LightBaseBaseNormal">
                      <span>Settings</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mycourses-content-wrapper">
          <div className="mycourses-frame-header">
            <div className="mycourses-icon-search">
              <button className="mycourses-frame-button">
                <div className="mycourses-content">
                  <img
                    src="/external/iconmenufoldoutlinedi531-tfar.svg"
                    alt="IconMenuFoldOutlinedI531"
                    className="mycourses-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="mycourses-frame-input-search">
                <div className="mycourses-input-wrapper">
                  <div className="mycourses-frame-input-basic">
                    <div className="mycourses-content1">
                      <span className="mycourses-text14 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="mycourses-frame-button1">
                  <div className="mycourses-content2">
                    <img
                      src="/external/iconsearchoutlinedi531-3i8.svg"
                      alt="IconSearchOutlinedI531"
                      className="mycourses-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="mycourses-avatar-button">
              <button className="mycourses-frame-button2">
                <div className="mycourses-content3">
                  <img
                    src="/external/iconglobaloutlinedi531-ee8p.svg"
                    alt="IconGlobalOutlinedI531"
                    className="mycourses-icon-global-outlined"
                  />
                  <span className="mycourses-text16 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="mycourses-notifications">
                <img
                  src="/external/iconbelloutlinedi531-z0b.svg"
                  alt="IconBellOutlinedI531"
                  className="mycourses-icon-bell-outlined"
                />
                <div className="mycourses-content4">
                  <div className="mycourses-frame-badge-basic">
                    <span className="mycourses-text18 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/" className="mycourses-navlink6">
                <div className="mycourses-frame-avatar">
                  <img
                    src="/external/iconuseroutlinedi531-u56u.svg"
                    alt="IconUserOutlinedI531"
                    className="mycourses-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="mycourses-frame-card1">
            <button className="mycourses-header-button">
              <div className="mycourses-header-links">
                <div className="mycourses-frame-title1">
                  <span className="mycourses-text20 LightHeadingHeading2">
                    <span>My courses</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="mycourses-content-wrapper1">
              <div className="mycourses-gridwith-search">
                <button className="mycourses-buttons">
                  <div className="mycourses-frame-input-search1">
                    <div className="mycourses-input-wrapper1">
                      <div className="mycourses-frame-input-basic1">
                        <div className="mycourses-content5">
                          <span className="mycourses-text22 LightBaseBaseNormal">
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
                    <button className="mycourses-frame-button3">
                      <div className="mycourses-content6">
                        <img
                          src="/external/iconsearchoutlinedi531-7xaqj.svg"
                          alt="IconSearchOutlinedI531"
                          className="mycourses-icon-search-outlined1"
                        />
                      </div>
                    </button>
                  </div>
                  <img
                    src="/external/svgdividerhorizontal5312-w9mw.svg"
                    alt="SVGDividerHorizontal5312"
                    className="mycourses-svg-divider-horizontal"
                  />
                </button>
                <div className="mycourses-frame-table">
                  <div className="mycourses-content-wrapper2">
                    <div className="mycourses-frame162">
                      <div className="mycourses-frame1000002616">
                        <div className="mycourses-frame6356489">
                          <div className="mycourses-frame6356483">
                            <div className="mycourses-frame6356475">
                              <div className="mycourses-frame6356481"></div>
                            </div>
                          </div>
                          <span className="mycourses-text24 LightLGLGStrong1">
                            <span>Java Programming language</span>
                          </span>
                          <div className="mycourses-progress">
                            <span className="mycourses-text26">
                              <span>20/40 Lessons</span>
                            </span>
                            <div className="mycourses-progressbar">
                              <img
                                src="/external/progressbarcontaineri531-i7me-200h.png"
                                alt="ProgressbarcontainerI531"
                                className="mycourses-progressbarcontainer"
                              />
                            </div>
                            <div className="mycourses-progressbar01">
                              <img
                                src="/external/rectangle10i531-synj-200h.png"
                                alt="Rectangle10I531"
                                className="mycourses-rectangle10"
                              />
                            </div>
                          </div>
                          <button className="mycourses-button">
                            <span className="mycourses-text28 MenuMenu1Bold">
                              <span>Resume</span>
                            </span>
                          </button>
                        </div>
                        <div className="mycourses-frame6356491">
                          <div className="mycourses-frame63564831">
                            <div className="mycourses-frame63564751">
                              <div className="mycourses-frame63564811"></div>
                            </div>
                          </div>
                          <span className="mycourses-text30">
                            <span>UX/UI Design for beginners</span>
                          </span>
                          <div className="mycourses-progress1">
                            <span className="mycourses-text32">
                              <span>10/50 Lessons</span>
                            </span>
                            <div className="mycourses-progressbar02">
                              <img
                                src="/external/progressbarcontaineri531-48iw-200h.png"
                                alt="ProgressbarcontainerI531"
                                className="mycourses-progressbarcontainer1"
                              />
                            </div>
                            <div className="mycourses-progressbar03">
                              <img
                                src="/external/rectangle10i531-3abr-200h.png"
                                alt="Rectangle10I531"
                                className="mycourses-rectangle101"
                              />
                            </div>
                          </div>
                          <button className="mycourses-button1">
                            <span className="mycourses-text34">
                              <span>Resume</span>
                            </span>
                          </button>
                        </div>
                        <div className="mycourses-frame6356493">
                          <div className="mycourses-frame63564832">
                            <div className="mycourses-frame63564752">
                              <div className="mycourses-frame63564812"></div>
                            </div>
                          </div>
                          <span className="mycourses-text36 LightLGLGStrong1">
                            <span>Cinema 4D</span>
                          </span>
                          <div className="mycourses-progress2">
                            <span className="mycourses-text38">
                              <span>20/40 Lessons</span>
                            </span>
                            <div className="mycourses-progressbar04">
                              <img
                                src="/external/progressbarcontaineri531-zl64-200h.png"
                                alt="ProgressbarcontainerI531"
                                className="mycourses-progressbarcontainer2"
                              />
                            </div>
                            <div className="mycourses-progressbar05">
                              <img
                                src="/external/rectangle10i531-es9-200h.png"
                                alt="Rectangle10I531"
                                className="mycourses-rectangle102"
                              />
                            </div>
                          </div>
                          <Link to="/cinema4d" className="mycourses-button2">
                            <span className="mycourses-text40 MenuMenu1Bold">
                              <span>Resume</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mycourses-content-wrapper3">
                    <div className="mycourses-frame1621">
                      <div className="mycourses-frame10000026161">
                        <div className="mycourses-frame6356492">
                          <div className="mycourses-frame63564833">
                            <div className="mycourses-frame63564753">
                              <div className="mycourses-frame63564813">
                                <div className="mycourses-group1000000797">
                                  <img
                                    src="/external/ellipse1665815-3yxg-200h.png"
                                    alt="Ellipse1665815"
                                    className="mycourses-ellipse166"
                                  />
                                  <div className="mycourses-majesticonsinformationcircle">
                                    <div className="mycourses-group1">
                                      <img
                                        src="/external/vectori581-88v.svg"
                                        alt="VectorI581"
                                        className="mycourses-vector4"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className="mycourses-text42 LightLGLGStrong1">
                            <span>Python Programming language</span>
                          </span>
                          <div className="mycourses-progress3">
                            <span className="mycourses-text44">
                              <span>20/40 Lessons</span>
                            </span>
                            <div className="mycourses-progressbar06">
                              <img
                                src="/external/progressbarcontaineri581-ayjn-200h.png"
                                alt="ProgressbarcontainerI581"
                                className="mycourses-progressbarcontainer3"
                              />
                            </div>
                            <div className="mycourses-progressbar07">
                              <img
                                src="/external/rectangle10i581-chkc-200h.png"
                                alt="Rectangle10I581"
                                className="mycourses-rectangle103"
                              />
                            </div>
                          </div>
                          <button className="mycourses-button3">
                            <span className="mycourses-text46 MenuMenu1Bold">
                              <span>Resume</span>
                            </span>
                          </button>
                        </div>
                        <div className="mycourses-frame63564911">
                          <div className="mycourses-frame63564834">
                            <div className="mycourses-frame63564754">
                              <div className="mycourses-frame63564814">
                                <div className="mycourses-group10000007971">
                                  <img
                                    src="/external/ellipse1665317-aqvo-200h.png"
                                    alt="Ellipse1665317"
                                    className="mycourses-ellipse1661"
                                  />
                                  <div className="mycourses-majesticonsinformationcircle1">
                                    <div className="mycourses-group2">
                                      <img
                                        src="/external/vectori531-4kt.svg"
                                        alt="VectorI531"
                                        className="mycourses-vector5"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className="mycourses-text48 LightLGLGStrong1">
                            <span>Business Analysis</span>
                          </span>
                          <div className="mycourses-progress4">
                            <span className="mycourses-text50">
                              <span>20/40 Lessons</span>
                            </span>
                            <div className="mycourses-progressbar08">
                              <img
                                src="/external/progressbarcontaineri531-vxgf-200h.png"
                                alt="ProgressbarcontainerI531"
                                className="mycourses-progressbarcontainer4"
                              />
                            </div>
                            <div className="mycourses-progressbar09">
                              <img
                                src="/external/rectangle10i531-ykb-200h.png"
                                alt="Rectangle10I531"
                                className="mycourses-rectangle104"
                              />
                            </div>
                          </div>
                          <button className="mycourses-button4">
                            <span className="mycourses-text52 MenuMenu1Bold">
                              <span>Resume</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mycourses-frame-footer1">
            <div className="mycourses-content-wrapper4">
              <div className="mycourses-content-wrapper5">
                <span className="mycourses-text54 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="mycourses-text56 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="mycourses-text58 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="mycourses-text60 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="mycourses-text62 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mycourses
