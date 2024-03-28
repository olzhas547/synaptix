import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './previewtest.css'

const Previewtest = (props) => {
  return (
    <div className="previewtest-container">
      <Helmet>
        <title>preview test</title>
        <meta property="og:title" content="preview test" />
      </Helmet>
      <div className="previewtest-addtest">
        <div className="previewtest-frame-admin-panel-menu1">
          <div className="previewtest-frame-admin-panel-menu11">
            <div className="previewtest-logo">
              <div className="previewtest-logo1">
                <div className="previewtest-frame1000002598">
                  <img
                    alt="ContainerLogo8315"
                    src="/external/containerlogo8315-3nj-200h.png"
                    className="previewtest-container-logo"
                  />
                  <div className="previewtest-book4">
                    <div className="previewtest-group">
                      <img
                        alt="VectorI831"
                        src="/external/vectori831-6yq8.svg"
                        className="previewtest-vector"
                      />
                      <img
                        alt="VectorI831"
                        src="/external/vectori831-qwg.svg"
                        className="previewtest-vector1"
                      />
                      <img
                        alt="VectorI831"
                        src="/external/vectori831-y5eo.svg"
                        className="previewtest-vector2"
                      />
                      <img
                        alt="VectorI831"
                        src="/external/vectori831-wkzs.svg"
                        className="previewtest-vector3"
                      />
                    </div>
                  </div>
                </div>
                <div className="previewtest-frame-title">
                  <span className="previewtest-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="previewtest-frame-menu">
              <div className="previewtest-menu-items">
                <div className="previewtest-menu-item-inline-navigation-item">
                  <img
                    alt="IconDashboardOutlinedI831"
                    src="/external/icondashboardoutlinedi831-co2c.svg"
                    className="previewtest-icon-dashboard-outlined"
                  />
                  <span className="previewtest-text02 LightBaseBaseNormal">
                    <span>Dashboard</span>
                  </span>
                </div>
                <div className="previewtest-menu-item-inline-navigation-item1">
                  <img
                    alt="IconDatabaseOutlinedI831"
                    src="/external/icondatabaseoutlinedi831-tawa.svg"
                    className="previewtest-icon-database-outlined"
                  />
                  <Link
                    to="/addtest"
                    className="previewtest-text04 LightBaseBaseNormal"
                  >
                    <span>My courses</span>
                  </Link>
                </div>
                <div className="previewtest-menu-item-inline-navigation-item2">
                  <img
                    alt="IconBarChartOutlinedI831"
                    src="/external/iconbarchartoutlinedi831-g5bd.svg"
                    className="previewtest-icon-bar-chart-outlined"
                  />
                  <Link
                    to="/"
                    className="previewtest-text06 LightBaseBaseNormal"
                  >
                    <span>Statistics</span>
                  </Link>
                </div>
                <div className="previewtest-menu-item-inline-navigation-item3">
                  <img
                    alt="IconCalendarOutlinedI831"
                    src="/external/iconcalendaroutlinedi831-ausq.svg"
                    className="previewtest-icon-calendar-outlined"
                  />
                  <Link
                    to="/"
                    className="previewtest-text08 LightBaseBaseNormal"
                  >
                    <span>Calendar</span>
                  </Link>
                </div>
                <div className="previewtest-menu-item-inline-navigation-item4">
                  <img
                    alt="IconVideoCameraOutlinedI831"
                    src="/external/iconvideocameraoutlinedi831-xrin.svg"
                    className="previewtest-icon-video-camera-outlined"
                  />
                  <Link
                    to="/"
                    className="previewtest-text10 LightBaseBaseNormal"
                  >
                    <span>Webinar</span>
                  </Link>
                </div>
              </div>
              <div className="previewtest-menu-items1">
                <div className="previewtest-menu-item-inline-navigation-item5">
                  <img
                    alt="IconSettingOutlinedI831"
                    src="/external/iconsettingoutlinedi831-wv7s.svg"
                    className="previewtest-icon-setting-outlined"
                  />
                  <Link
                    to="/addtest"
                    className="previewtest-text12 LightBaseBaseNormal"
                  >
                    <span>Settings</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="previewtest-content-wrapper">
          <div className="previewtest-frame-header">
            <div className="previewtest-icon-search">
              <button className="previewtest-frame-button">
                <div className="previewtest-content">
                  <img
                    alt="IconMenuFoldOutlinedI511"
                    src="/external/iconmenufoldoutlinedi511-1mls.svg"
                    className="previewtest-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="previewtest-frame-input-search">
                <div className="previewtest-input-wrapper">
                  <div className="previewtest-frame-input-basic">
                    <div className="previewtest-content1">
                      <span className="previewtest-text14 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="previewtest-frame-button1">
                  <div className="previewtest-content2">
                    <img
                      alt="IconSearchOutlinedI511"
                      src="/external/iconsearchoutlinedi511-9j1.svg"
                      className="previewtest-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="previewtest-avatar-button">
              <button className="previewtest-frame-button2">
                <div className="previewtest-content3">
                  <img
                    alt="IconGlobalOutlinedI511"
                    src="/external/iconglobaloutlinedi511-v9x.svg"
                    className="previewtest-icon-global-outlined"
                  />
                  <span className="previewtest-text16 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="previewtest-notifications">
                <img
                  alt="IconBellOutlinedI511"
                  src="/external/iconbelloutlinedi511-lcc.svg"
                  className="previewtest-icon-bell-outlined"
                />
                <div className="previewtest-content4">
                  <div className="previewtest-frame-badge-basic">
                    <span className="previewtest-text18 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/addtest" className="previewtest-navlink">
                <div className="previewtest-frame-avatar">
                  <img
                    alt="IconUserOutlinedI511"
                    src="/external/iconuseroutlinedi511-i73w.svg"
                    className="previewtest-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="previewtest-frame-card1">
            <button className="previewtest-header-button">
              <div className="previewtest-header-links">
                <div className="previewtest-frame-breadcrumb">
                  <div className="previewtest-breadcrumb-link">
                    <span className="previewtest-text20 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                  <div className="previewtest-breadcrumb-separator">
                    <div className="previewtest-content5">
                      <span className="previewtest-text22 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="previewtest-breadcrumb-link1">
                    <span className="previewtest-text23 LightBaseBaseNormal">
                      <span>Create course</span>
                    </span>
                  </div>
                  <div className="previewtest-breadcrumb-separator1">
                    <div className="previewtest-content6">
                      <span className="previewtest-text25 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="previewtest-breadcrumb-link2">
                    <span className="previewtest-text26 LightBaseBaseNormal">
                      <span>Homework</span>
                    </span>
                  </div>
                  <div className="previewtest-breadcrumb-separator2">
                    <div className="previewtest-content7">
                      <span className="previewtest-text28 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="previewtest-breadcrumb-link3">
                    <span className="previewtest-text29 LightBaseBaseNormal">
                      <span>Add test</span>
                    </span>
                  </div>
                </div>
                <div className="previewtest-frame-title1">
                  <span className="previewtest-text31 LightHeadingHeading2">
                    <span>Preview test</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="previewtest-form">
              <div className="previewtest-content-wrapper1">
                <div className="previewtest-frame1000002607">
                  <div className="previewtest-frame101">
                    <div className="previewtest-group126">
                      <img
                        alt="Rectangle245112"
                        src="/external/rectangle245112-o4sl-200h.png"
                        className="previewtest-rectangle24"
                      />
                      <span className="previewtest-text33">
                        <span>01</span>
                      </span>
                    </div>
                    <div className="previewtest-group127">
                      <img
                        alt="Rectangle485112"
                        src="/external/rectangle485112-kpuw-200h.png"
                        className="previewtest-rectangle48"
                      />
                      <span className="previewtest-text35">
                        <span>02</span>
                      </span>
                    </div>
                    <div className="previewtest-group128">
                      <img
                        alt="Rectangle495112"
                        src="/external/rectangle495112-8uei-200h.png"
                        className="previewtest-rectangle49"
                      />
                      <span className="previewtest-text37">
                        <span>03</span>
                      </span>
                    </div>
                    <div className="previewtest-group129">
                      <img
                        alt="Rectangle505112"
                        src="/external/rectangle505112-ke39-200h.png"
                        className="previewtest-rectangle50"
                      />
                      <span className="previewtest-text39">
                        <span>04</span>
                      </span>
                    </div>
                    <div className="previewtest-group130">
                      <img
                        alt="Rectangle525112"
                        src="/external/rectangle525112-hj5g-200h.png"
                        className="previewtest-rectangle52"
                      />
                      <span className="previewtest-text41">
                        <span>05</span>
                      </span>
                    </div>
                    <div className="previewtest-group131">
                      <img
                        alt="Rectangle525112"
                        src="/external/rectangle525112-80q5-200h.png"
                        className="previewtest-rectangle521"
                      />
                      <span className="previewtest-text43">
                        <span>06</span>
                      </span>
                    </div>
                    <div className="previewtest-group132">
                      <img
                        alt="Rectangle525112"
                        src="/external/rectangle525112-x8grd-200h.png"
                        className="previewtest-rectangle522"
                      />
                      <span className="previewtest-text45">
                        <span>07</span>
                      </span>
                    </div>
                    <div className="previewtest-group133">
                      <img
                        alt="Rectangle525112"
                        src="/external/rectangle525112-a9o-200h.png"
                        className="previewtest-rectangle523"
                      />
                      <span className="previewtest-text47">
                        <span>08</span>
                      </span>
                    </div>
                    <div className="previewtest-group134">
                      <img
                        alt="Rectangle525112"
                        src="/external/rectangle525112-vbdq-200h.png"
                        className="previewtest-rectangle524"
                      />
                      <span className="previewtest-text49">
                        <span>09</span>
                      </span>
                    </div>
                    <div className="previewtest-group135">
                      <img
                        alt="Rectangle525112"
                        src="/external/rectangle525112-mwr-200h.png"
                        className="previewtest-rectangle525"
                      />
                      <span className="previewtest-text51">
                        <span>10</span>
                      </span>
                    </div>
                    <div className="previewtest-group136">
                      <img
                        alt="Rectangle525112"
                        src="/external/rectangle525112-gfyi-200h.png"
                        className="previewtest-rectangle526"
                      />
                      <span className="previewtest-text53">
                        <span>11</span>
                      </span>
                    </div>
                    <div className="previewtest-group137">
                      <img
                        alt="Rectangle525112"
                        src="/external/rectangle525112-nvur-200h.png"
                        className="previewtest-rectangle527"
                      />
                      <span className="previewtest-text55">
                        <span>12</span>
                      </span>
                    </div>
                  </div>
                  <img
                    alt="Rectangle955112"
                    src="/external/rectangle955112-871s-800h.png"
                    className="previewtest-rectangle95"
                  />
                  <span className="previewtest-text57 LightXLXLStrong">
                    <span>
                      Test 2. Fundamentals of animation and rendering
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="previewtest-text59 LightLGLGStrong">
                    <span>Choose the correct answer</span>
                  </span>
                  <span className="previewtest-text61 LightBaseBaseNormal1">
                    <span>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet. Aliqua id fugiat nostrud irure ex duis ea quis?
                    </span>
                  </span>
                  <div className="previewtest-group86">
                    <div className="previewtest-group79">
                      <img
                        alt="Rectangle465112"
                        src="/external/rectangle465112-5jqy9-700w.png"
                        className="previewtest-rectangle46"
                      />
                      <div className="previewtest-group78">
                        <img
                          alt="Miniplayer5112"
                          src="/external/miniplayer5112-gki.svg"
                          className="previewtest-miniplayer"
                        />
                        <div className="previewtest-group77">
                          <div className="previewtest-group76">
                            <div className="previewtest-group75">
                              <img
                                alt="Rectangle205112"
                                src="/external/rectangle205112-v939-700h.png"
                                className="previewtest-rectangle20"
                              />
                              <img
                                alt="Rectangle495112"
                                src="/external/rectangle495112-v8zh-300h.png"
                                className="previewtest-rectangle491"
                              />
                            </div>
                            <div className="previewtest-group74">
                              <img
                                alt="Frame715112"
                                src="/external/frame715112-a2ar.svg"
                                className="previewtest-frame71"
                              />
                              <div className="previewtest-frame73">
                                <div className="previewtest-frame72">
                                  <div className="previewtest-remixiconsfillmediaplayminifill">
                                    <div className="previewtest-group1">
                                      <img
                                        alt="VectorI511"
                                        src="/external/vectori511-1is.svg"
                                        className="previewtest-vector4"
                                      />
                                    </div>
                                  </div>
                                  <span className="previewtest-text63">
                                    <span>1x</span>
                                  </span>
                                  <div className="previewtest-group71">
                                    <img
                                      alt="Vector5112"
                                      src="/external/vector5112-a7v.svg"
                                      className="previewtest-vector5"
                                    />
                                    <span className="previewtest-text65">
                                      <span>15</span>
                                    </span>
                                  </div>
                                  <div className="previewtest-group72">
                                    <img
                                      alt="Vector5112"
                                      src="/external/vector5112-hrgn.svg"
                                      className="previewtest-vector6"
                                    />
                                    <span className="previewtest-text67">
                                      <span>15</span>
                                    </span>
                                  </div>
                                </div>
                                <span className="previewtest-text69">
                                  <span>00:20 / 05:15</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="previewtest-frame149">
                    <div className="previewtest-group361">
                      <img
                        alt="Ellipse335112"
                        src="/external/ellipse335112-rn0m-200h.png"
                        className="previewtest-ellipse33"
                      />
                      <img
                        alt="Ellipse345112"
                        src="/external/ellipse345112-e2ir-200h.png"
                        className="previewtest-ellipse34"
                      />
                    </div>
                    <div className="previewtest-frame103">
                      <span className="previewtest-text71 body-14">
                        <span>Not at all</span>
                      </span>
                    </div>
                  </div>
                  <div className="previewtest-frame263">
                    <div className="previewtest-frame362">
                      <div className="previewtest-group3611">
                        <img
                          alt="Ellipse335112"
                          src="/external/ellipse335112-38y9-200h.png"
                          className="previewtest-ellipse331"
                        />
                      </div>
                      <div className="previewtest-frame1031">
                        <span className="previewtest-text73 body-14">
                          <span>Rarely</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="previewtest-frame264">
                    <div className="previewtest-frame3621">
                      <div className="previewtest-group3612">
                        <img
                          alt="Ellipse335112"
                          src="/external/ellipse335112-neio-200h.png"
                          className="previewtest-ellipse332"
                        />
                      </div>
                      <div className="previewtest-frame1032">
                        <span className="previewtest-text75 body-14">
                          <span>Very often</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="previewtest-group1271">
                    <div className="previewtest-group364">
                      <span className="previewtest-text77 LightLGLGStrong">
                        <span>Question 02</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  alt="SVGDividerHorizontal5112"
                  src="/external/svgdividerhorizontal5112-0ahn.svg"
                  className="previewtest-svg-divider-horizontal"
                />
              </div>
            </div>
          </div>
          <div className="previewtest-frame-footer1">
            <div className="previewtest-content-wrapper2">
              <div className="previewtest-content-wrapper3">
                <span className="previewtest-text79 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="previewtest-text81 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="previewtest-text83 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="previewtest-text85 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="previewtest-text87 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Previewtest
