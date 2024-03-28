import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './dashboard-teacher.css'

const DashboardTeacher = (props) => {
  return (
    <div className="dashboard-teacher-container">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="dashboard-teacher-createcourse">
        <div className="dashboard-teacher-frame-admin-panel-menu1">
          <div className="dashboard-teacher-frame-admin-panel-menu11">
            <div className="dashboard-teacher-logo">
              <div className="dashboard-teacher-logo1">
                <div className="dashboard-teacher-frame1000002598">
                  <img
                    alt="ContainerLogo5113"
                    src="/external/containerlogo5113-sxoy-200h.png"
                    className="dashboard-teacher-container-logo"
                  />
                  <div className="dashboard-teacher-book4">
                    <div className="dashboard-teacher-group">
                      <img
                        alt="VectorI511"
                        src="/external/vectori511-9pvl.svg"
                        className="dashboard-teacher-vector"
                      />
                      <img
                        alt="VectorI511"
                        src="/external/vectori511-sak.svg"
                        className="dashboard-teacher-vector01"
                      />
                      <img
                        alt="VectorI511"
                        src="/external/vectori511-cmgi.svg"
                        className="dashboard-teacher-vector02"
                      />
                      <img
                        alt="VectorI511"
                        src="/external/vectori511-pyxl.svg"
                        className="dashboard-teacher-vector03"
                      />
                    </div>
                  </div>
                </div>
                <div className="dashboard-teacher-frame-title">
                  <span className="dashboard-teacher-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="dashboard-teacher-frame-menu">
              <div className="dashboard-teacher-menu-items">
                <Link
                  to="/dashboard-teacher"
                  className="dashboard-teacher-navlink"
                >
                  <div className="dashboard-teacher-menu-item-inline-navigation-item">
                    <img
                      alt="IconDashboardOutlinedI511"
                      src="/external/icondashboardoutlinedi511-0c1k.svg"
                      className="dashboard-teacher-icon-dashboard-outlined"
                    />
                    <span className="dashboard-teacher-text002 LightBaseBaseNormal">
                      <span>Dashboard</span>
                    </span>
                  </div>
                </Link>
                <Link
                  to="/dashboard-teacher"
                  className="dashboard-teacher-navlink1"
                >
                  <div className="dashboard-teacher-menu-item-inline-navigation-item1">
                    <img
                      alt="IconDatabaseOutlinedI511"
                      src="/external/icondatabaseoutlinedi511-17o.svg"
                      className="dashboard-teacher-icon-database-outlined"
                    />
                    <span className="dashboard-teacher-text004 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="dashboard-teacher-navlink2">
                  <div className="dashboard-teacher-menu-item-inline-navigation-item2">
                    <img
                      alt="IconBarChartOutlinedI511"
                      src="/external/iconbarchartoutlinedi511-b0hj.svg"
                      className="dashboard-teacher-icon-bar-chart-outlined"
                    />
                    <span className="dashboard-teacher-text006 LightBaseBaseNormal">
                      <span>Statistics</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="dashboard-teacher-navlink3">
                  <div className="dashboard-teacher-menu-item-inline-navigation-item3">
                    <img
                      alt="IconCalendarOutlinedI511"
                      src="/external/iconcalendaroutlinedi511-n6nm.svg"
                      className="dashboard-teacher-icon-calendar-outlined"
                    />
                    <span className="dashboard-teacher-text008 LightBaseBaseNormal">
                      <span>Calendar</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="dashboard-teacher-navlink4">
                  <div className="dashboard-teacher-menu-item-inline-navigation-item4">
                    <img
                      alt="IconVideoCameraOutlinedI831"
                      src="/external/iconvideocameraoutlinedi831-vbp1.svg"
                      className="dashboard-teacher-icon-video-camera-outlined"
                    />
                    <span className="dashboard-teacher-text010 LightBaseBaseNormal">
                      <span>Webinar</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="dashboard-teacher-menu-items1">
                <Link to="/" className="dashboard-teacher-navlink5">
                  <div className="dashboard-teacher-menu-item-inline-navigation-item5">
                    <img
                      alt="IconSettingOutlinedI511"
                      src="/external/iconsettingoutlinedi511-dnwc.svg"
                      className="dashboard-teacher-icon-setting-outlined"
                    />
                    <span className="dashboard-teacher-text012 LightBaseBaseNormal">
                      <span>Settings</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-teacher-content-wrapper">
          <div className="dashboard-teacher-frame-header">
            <div className="dashboard-teacher-icon-search">
              <button className="dashboard-teacher-frame-button">
                <div className="dashboard-teacher-content">
                  <img
                    alt="IconMenuFoldOutlinedI511"
                    src="/external/iconmenufoldoutlinedi511-hmxl.svg"
                    className="dashboard-teacher-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="dashboard-teacher-frame-input-search">
                <div className="dashboard-teacher-input-wrapper">
                  <div className="dashboard-teacher-frame-input-basic">
                    <div className="dashboard-teacher-content1">
                      <span className="dashboard-teacher-text014 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="dashboard-teacher-frame-button1">
                  <div className="dashboard-teacher-content2">
                    <img
                      alt="IconSearchOutlinedI511"
                      src="/external/iconsearchoutlinedi511-z2so.svg"
                      className="dashboard-teacher-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="dashboard-teacher-avatar-button">
              <button className="dashboard-teacher-frame-button2">
                <div className="dashboard-teacher-content3">
                  <img
                    alt="IconGlobalOutlinedI511"
                    src="/external/iconglobaloutlinedi511-pnm4.svg"
                    className="dashboard-teacher-icon-global-outlined"
                  />
                  <span className="dashboard-teacher-text016 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="dashboard-teacher-notifications">
                <img
                  alt="IconBellOutlinedI511"
                  src="/external/iconbelloutlinedi511-glhq.svg"
                  className="dashboard-teacher-icon-bell-outlined"
                />
                <div className="dashboard-teacher-content4">
                  <div className="dashboard-teacher-frame-badge-basic">
                    <span className="dashboard-teacher-text018 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link
                to="/dashboard-teacher"
                className="dashboard-teacher-navlink6"
              >
                <div className="dashboard-teacher-frame-avatar">
                  <img
                    alt="IconUserOutlinedI511"
                    src="/external/iconuseroutlinedi511-e5ce.svg"
                    className="dashboard-teacher-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="dashboard-teacher-frame-card1">
            <button className="dashboard-teacher-header-button">
              <div className="dashboard-teacher-header-links">
                <div className="dashboard-teacher-frame-title1">
                  <span className="dashboard-teacher-text020 LightHeadingHeading2">
                    <span>Dashboard</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="dashboard-teacher-frame69">
              <div className="dashboard-teacher-frame16">
                <div className="dashboard-teacher-frame161">
                  <div className="dashboard-teacher-group4">
                    <div className="dashboard-teacher-remixiconslinemedianotification3line">
                      <div className="dashboard-teacher-group1">
                        <img
                          alt="VectorI511"
                          src="/external/vectori511-5dl.svg"
                          className="dashboard-teacher-vector04"
                        />
                      </div>
                    </div>
                    <img
                      alt="Ellipse55114"
                      src="/external/ellipse55114-e1k-200h.png"
                      className="dashboard-teacher-ellipse5"
                    />
                  </div>
                  <div className="dashboard-teacher-remixiconslinesystemcloseline">
                    <div className="dashboard-teacher-group2">
                      <img
                        alt="VectorI511"
                        src="/external/vectori511-89pi.svg"
                        className="dashboard-teacher-vector05"
                      />
                    </div>
                  </div>
                </div>
                <div className="dashboard-teacher-frame40">
                  <span className="dashboard-teacher-text022">
                    <span>Check homework</span>
                  </span>
                  <div className="dashboard-teacher-frame162">
                    <span className="dashboard-teacher-text024">
                      <span>May 18 at 09.00</span>
                    </span>
                    <span className="dashboard-teacher-text026">|</span>
                    <span className="dashboard-teacher-text027">
                      <span>Graphic design</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-teacher-tablecontainer">
              <div className="dashboard-teacher-pagination">
                <button className="dashboard-teacher-button">
                  <div className="dashboard-teacher-container01">
                    <div className="dashboard-teacher-paragraphcontainer">
                      <span className="dashboard-teacher-text029">
                        <span>Students</span>
                      </span>
                      <span className="dashboard-teacher-text031">
                        <span>1 203</span>
                      </span>
                    </div>
                    <div className="dashboard-teacher-switch">
                      <div className="dashboard-teacher-ratingcontainer">
                        <img
                          alt="Rating6312"
                          src="/external/rating6312-3lmx.svg"
                          className="dashboard-teacher-rating"
                        />
                      </div>
                    </div>
                  </div>
                </button>
                <button className="dashboard-teacher-buttoncontainer">
                  <button className="dashboard-teacher-buttoncontainer1">
                    <div className="dashboard-teacher-paragraphcontainer01">
                      <span className="dashboard-teacher-text033">
                        <span>Average rating</span>
                      </span>
                      <span className="dashboard-teacher-text035">
                        <span>4.6</span>
                      </span>
                    </div>
                    <button className="dashboard-teacher-button1">
                      <div className="dashboard-teacher-switchcontainer">
                        <img
                          alt="Switch6312"
                          src="/external/switch6312-plz.svg"
                          className="dashboard-teacher-switch1"
                        />
                      </div>
                    </button>
                  </button>
                </button>
                <button className="dashboard-teacher-buttoncontainer2">
                  <button className="dashboard-teacher-button2">
                    <div className="dashboard-teacher-paragraphcontainer02">
                      <span className="dashboard-teacher-text037">
                        <span>Total Audience</span>
                      </span>
                      <span className="dashboard-teacher-text039">
                        <span>3 542</span>
                      </span>
                    </div>
                    <div className="dashboard-teacher-switchcontainer1">
                      <div className="dashboard-teacher-switchcontainer2">
                        <img
                          alt="Switch6312"
                          src="/external/switch6312-ya7.svg"
                          className="dashboard-teacher-switch2"
                        />
                      </div>
                    </div>
                  </button>
                </button>
                <button className="dashboard-teacher-buttoncontainer3">
                  <button className="dashboard-teacher-buttoncontainer4">
                    <div className="dashboard-teacher-paragraphcontainer03">
                      <span className="dashboard-teacher-text041">
                        <span>Revenue</span>
                      </span>
                      <span className="dashboard-teacher-text043">
                        <span>$505</span>
                      </span>
                    </div>
                    <button className="dashboard-teacher-button3">
                      <div className="dashboard-teacher-switchcontainer3">
                        <img
                          alt="Switch6312"
                          src="/external/switch6312-q4r.svg"
                          className="dashboard-teacher-switch3"
                        />
                      </div>
                    </button>
                  </button>
                </button>
              </div>
              <div className="dashboard-teacher-horizontalcontainer">
                <div className="dashboard-teacher-card">
                  <div className="dashboard-teacher-horizontalcontainer01">
                    <div className="dashboard-teacher-horizontalcontainer02">
                      <span className="dashboard-teacher-text045">
                        <span>Overview</span>
                      </span>
                      <div className="dashboard-teacher-horizontalcontainer03">
                        <div className="dashboard-teacher-horizontalcontainer04">
                          <img
                            alt="Verticalcontainer6312"
                            src="/external/verticalcontainer6312-98z4-200h.png"
                            className="dashboard-teacher-verticalcontainer"
                          />
                          <span className="dashboard-teacher-text047">
                            <span>Teacher</span>
                          </span>
                        </div>
                        <div className="dashboard-teacher-horizontalcontainer05">
                          <img
                            alt="Slider6312"
                            src="/external/slider6312-tkz-200h.png"
                            className="dashboard-teacher-slider"
                          />
                          <span className="dashboard-teacher-text049">
                            <span>Student</span>
                          </span>
                        </div>
                        <div className="dashboard-teacher-container02">
                          <span className="dashboard-teacher-text051"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-teacher-container03">
                    <div className="dashboard-teacher-container04">
                      <div className="dashboard-teacher-textinputcontainer">
                        <div className="dashboard-teacher-container05">
                          <div className="dashboard-teacher-paragraphcontainer04">
                            <span className="dashboard-teacher-text052">
                              <span>Jan</span>
                            </span>
                            <span className="dashboard-teacher-text054">
                              <span>Feb</span>
                            </span>
                            <span className="dashboard-teacher-text056">
                              <span>Mar</span>
                            </span>
                            <span className="dashboard-teacher-text058">
                              <span>Apr</span>
                            </span>
                            <span className="dashboard-teacher-text060">
                              <span>May</span>
                            </span>
                            <span className="dashboard-teacher-text062">
                              <span>Jun</span>
                            </span>
                            <span className="dashboard-teacher-text064">
                              <span>Jul</span>
                            </span>
                          </div>
                          <img
                            alt="SvgjsLine10486312"
                            src="/external/svgjsline10486312-vq1i.svg"
                            className="dashboard-teacher-svgjs-line1048"
                          />
                        </div>
                        <div className="dashboard-teacher-textinputcontainer1">
                          <div className="dashboard-teacher-textinput">
                            <img
                              alt="SvgjsLine10756312"
                              src="/external/svgjsline10756312-zipd.svg"
                              className="dashboard-teacher-svgjs-line1075"
                            />
                            <img
                              alt="SvgjsLine10766312"
                              src="/external/svgjsline10766312-8h2.svg"
                              className="dashboard-teacher-svgjs-line1076"
                            />
                            <img
                              alt="SvgjsLine10776312"
                              src="/external/svgjsline10776312-6erb.svg"
                              className="dashboard-teacher-svgjs-line1077"
                            />
                            <img
                              alt="SvgjsLine10786312"
                              src="/external/svgjsline10786312-ov4.svg"
                              className="dashboard-teacher-svgjs-line1078"
                            />
                            <img
                              alt="SvgjsLine10796312"
                              src="/external/svgjsline10796312-6l49.svg"
                              className="dashboard-teacher-svgjs-line1079"
                            />
                            <img
                              alt="SvgjsLine10806312"
                              src="/external/svgjsline10806312-ag0gh.svg"
                              className="dashboard-teacher-svgjs-line1080"
                            />
                            <img
                              alt="SvgjsLine10816312"
                              src="/external/svgjsline10816312-wt2p.svg"
                              className="dashboard-teacher-svgjs-line1081"
                            />
                          </div>
                          <img
                            alt="SvgjsLine10686312"
                            src="/external/svgjsline10686312-hu4o.svg"
                            className="dashboard-teacher-svgjs-line1068"
                          />
                          <img
                            alt="SvgjsLine10696312"
                            src="/external/svgjsline10696312-uzks.svg"
                            className="dashboard-teacher-svgjs-line1069"
                          />
                          <img
                            alt="SvgjsLine10706312"
                            src="/external/svgjsline10706312-okmq.svg"
                            className="dashboard-teacher-svgjs-line1070"
                          />
                          <img
                            alt="SvgjsLine10716312"
                            src="/external/svgjsline10716312-a3f1.svg"
                            className="dashboard-teacher-svgjs-line1071"
                          />
                          <img
                            alt="SvgjsLine10726312"
                            src="/external/svgjsline10726312-ji4.svg"
                            className="dashboard-teacher-svgjs-line1072"
                          />
                          <img
                            alt="SvgjsLine10736312"
                            src="/external/svgjsline10736312-qjv.svg"
                            className="dashboard-teacher-svgjs-line1073"
                          />
                          <img
                            alt="SvgjsLine10746312"
                            src="/external/svgjsline10746312-7yk.svg"
                            className="dashboard-teacher-svgjs-line1074"
                          />
                        </div>
                        <div className="dashboard-teacher-container06">
                          <div className="dashboard-teacher-slidercontainer">
                            <div className="dashboard-teacher-slider01">
                              <div className="dashboard-teacher-textinput01"></div>
                              <img
                                alt="SvgjsPath10206312"
                                src="/external/svgjspath10206312-ag4e.svg"
                                className="dashboard-teacher-svgjs-path1020"
                              />
                              <img
                                alt="SvgjsPath10246312"
                                src="/external/svgjspath10246312-fipl.svg"
                                className="dashboard-teacher-svgjs-path1024"
                              />
                            </div>
                            <div className="dashboard-teacher-textinputcontainer2">
                              <div className="dashboard-teacher-textinput02"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-teacher-tree">
                        <div className="dashboard-teacher-paragraphcontainer05">
                          <span className="dashboard-teacher-text066">
                            <span>80</span>
                          </span>
                          <span className="dashboard-teacher-text068">
                            <span>70</span>
                          </span>
                          <span className="dashboard-teacher-text070">
                            <span>60</span>
                          </span>
                          <span className="dashboard-teacher-text072">
                            <span>50</span>
                          </span>
                          <span className="dashboard-teacher-text074">
                            <span>40</span>
                          </span>
                          <span className="dashboard-teacher-text076">
                            <span>30</span>
                          </span>
                          <span className="dashboard-teacher-text078">
                            <span>20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="dashboard-teacher-button4">
                  <div className="dashboard-teacher-horizontalcontainer06">
                    <div className="dashboard-teacher-horizontalcontainer07">
                      <span className="dashboard-teacher-text080">
                        <span>Number of Students</span>
                      </span>
                      <div className="dashboard-teacher-horizontalcontainer08">
                        <div className="dashboard-teacher-horizontalcontainer09">
                          <img
                            alt="Verticalcontainer6312"
                            src="/external/verticalcontainer6312-lpg-200h.png"
                            className="dashboard-teacher-verticalcontainer01"
                          />
                          <span className="dashboard-teacher-text082">
                            <span>Girls</span>
                          </span>
                        </div>
                        <div className="dashboard-teacher-horizontalcontainer10">
                          <img
                            alt="Slider6312"
                            src="/external/slider6312-sfxmp-200h.png"
                            className="dashboard-teacher-slider02"
                          />
                          <span className="dashboard-teacher-text084">
                            <span>Boys</span>
                          </span>
                        </div>
                        <div className="dashboard-teacher-container07">
                          <span className="dashboard-teacher-text086"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-teacher-paginationcontainer">
                    <div className="dashboard-teacher-paginationcontainer1">
                      <div className="dashboard-teacher-paginationcontainer2">
                        <div className="dashboard-teacher-textinputcontainer3">
                          <div className="dashboard-teacher-textinput03">
                            <img
                              alt="SvgjsLine11536312"
                              src="/external/svgjsline11536312-xmg.svg"
                              className="dashboard-teacher-svgjs-line1153"
                            />
                            <img
                              alt="SvgjsLine11546312"
                              src="/external/svgjsline11546312-fdlh.svg"
                              className="dashboard-teacher-svgjs-line1154"
                            />
                            <img
                              alt="SvgjsLine11556312"
                              src="/external/svgjsline11556312-jsfc.svg"
                              className="dashboard-teacher-svgjs-line1155"
                            />
                            <img
                              alt="SvgjsLine11566312"
                              src="/external/svgjsline11566312-zo44.svg"
                              className="dashboard-teacher-svgjs-line1156"
                            />
                            <img
                              alt="SvgjsLine11576312"
                              src="/external/svgjsline11576312-5xs9.svg"
                              className="dashboard-teacher-svgjs-line1157"
                            />
                          </div>
                        </div>
                        <div className="dashboard-teacher-paginationcontainer3">
                          <div className="dashboard-teacher-pagination1">
                            <div className="dashboard-teacher-textinputcontainer4">
                              <div className="dashboard-teacher-textinput04"></div>
                              <img
                                alt="SvgjsPath11106312"
                                src="/external/svgjspath11106312-5zitf.svg"
                                className="dashboard-teacher-svgjs-path1110"
                              />
                              <div className="dashboard-teacher-pagination2">
                                <div className="dashboard-teacher-textinputcontainer5">
                                  <img
                                    alt="SvgjsPath11246312"
                                    src="/external/svgjspath11246312-w4xt.svg"
                                    className="dashboard-teacher-svgjs-path1124"
                                  />
                                </div>
                                <div className="dashboard-teacher-slider03">
                                  <img
                                    alt="SvgjsPath11256312"
                                    src="/external/svgjspath11256312-wqgq.svg"
                                    className="dashboard-teacher-svgjs-path1125"
                                  />
                                </div>
                                <div className="dashboard-teacher-container08">
                                  <img
                                    alt="SvgjsPath11266312"
                                    src="/external/svgjspath11266312-siuc.svg"
                                    className="dashboard-teacher-svgjs-path1126"
                                  />
                                </div>
                                <div className="dashboard-teacher-slider04">
                                  <img
                                    alt="SvgjsPath11276312"
                                    src="/external/svgjspath11276312-7hu8.svg"
                                    className="dashboard-teacher-svgjs-path1127"
                                  />
                                </div>
                                <div className="dashboard-teacher-slider05">
                                  <img
                                    alt="SvgjsPath11286312"
                                    src="/external/svgjspath11286312-hgig.svg"
                                    className="dashboard-teacher-svgjs-path1128"
                                  />
                                </div>
                                <div className="dashboard-teacher-slider06">
                                  <img
                                    alt="SvgjsPath11296312"
                                    src="/external/svgjspath11296312-agom.svg"
                                    className="dashboard-teacher-svgjs-path1129"
                                  />
                                </div>
                                <div className="dashboard-teacher-slider07">
                                  <img
                                    alt="SvgjsPath11306312"
                                    src="/external/svgjspath11306312-2tlv.svg"
                                    className="dashboard-teacher-svgjs-path1130"
                                  />
                                </div>
                                <div className="dashboard-teacher-slider08">
                                  <img
                                    alt="SvgjsPath11316312"
                                    src="/external/svgjspath11316312-s38.svg"
                                    className="dashboard-teacher-svgjs-path1131"
                                  />
                                </div>
                                <div className="dashboard-teacher-slider09">
                                  <img
                                    alt="SvgjsPath11326312"
                                    src="/external/svgjspath11326312-iy7t.svg"
                                    className="dashboard-teacher-svgjs-path1132"
                                  />
                                </div>
                                <div className="dashboard-teacher-slider10">
                                  <img
                                    alt="SvgjsPath11346312"
                                    src="/external/svgjspath11346312-d6a7.svg"
                                    className="dashboard-teacher-svgjs-path1134"
                                  />
                                </div>
                                <div className="dashboard-teacher-container09">
                                  <img
                                    alt="SvgjsPath11356312"
                                    src="/external/svgjspath11356312-0k1v.svg"
                                    className="dashboard-teacher-svgjs-path1135"
                                  />
                                </div>
                                <div className="dashboard-teacher-container10">
                                  <img
                                    alt="SvgjsPath11336312"
                                    src="/external/svgjspath11336312-ypr.svg"
                                    className="dashboard-teacher-svgjs-path1133"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="dashboard-teacher-slider11">
                              <img
                                alt="SvgjsPath11116312"
                                src="/external/svgjspath11116312-3y0b.svg"
                                className="dashboard-teacher-svgjs-path1111"
                              />
                            </div>
                            <div className="dashboard-teacher-slider12">
                              <img
                                alt="SvgjsPath11126312"
                                src="/external/svgjspath11126312-z6js.svg"
                                className="dashboard-teacher-svgjs-path1112"
                              />
                            </div>
                            <div className="dashboard-teacher-slider13">
                              <img
                                alt="SvgjsPath11136312"
                                src="/external/svgjspath11136312-l3b9.svg"
                                className="dashboard-teacher-svgjs-path1113"
                              />
                            </div>
                            <div className="dashboard-teacher-slider14">
                              <img
                                alt="SvgjsPath11146312"
                                src="/external/svgjspath11146312-f14.svg"
                                className="dashboard-teacher-svgjs-path1114"
                              />
                            </div>
                            <div className="dashboard-teacher-slider15">
                              <img
                                alt="SvgjsPath11166312"
                                src="/external/svgjspath11166312-fi4.svg"
                                className="dashboard-teacher-svgjs-path1116"
                              />
                            </div>
                            <div className="dashboard-teacher-slider16">
                              <img
                                alt="SvgjsPath11176312"
                                src="/external/svgjspath11176312-5zx.svg"
                                className="dashboard-teacher-svgjs-path1117"
                              />
                            </div>
                            <div className="dashboard-teacher-slider17">
                              <img
                                alt="SvgjsPath11186312"
                                src="/external/svgjspath11186312-gp6.svg"
                                className="dashboard-teacher-svgjs-path1118"
                              />
                            </div>
                            <div className="dashboard-teacher-container11">
                              <img
                                alt="SvgjsPath11196312"
                                src="/external/svgjspath11196312-94t9.svg"
                                className="dashboard-teacher-svgjs-path1119"
                              />
                            </div>
                            <div className="dashboard-teacher-textinputcontainer6">
                              <img
                                alt="SvgjsPath11216312"
                                src="/external/svgjspath11216312-oqi.svg"
                                className="dashboard-teacher-svgjs-path1121"
                              />
                            </div>
                            <div className="dashboard-teacher-container12">
                              <div className="dashboard-teacher-slider18">
                                <img
                                  alt="SvgjsPath11156312"
                                  src="/external/svgjspath11156312-1fj.svg"
                                  className="dashboard-teacher-svgjs-path1115"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="dashboard-teacher-container13"></div>
                          <div className="dashboard-teacher-slider19">
                            <img
                              alt="SvgjsPath11206312"
                              src="/external/svgjspath11206312-e11i.svg"
                              className="dashboard-teacher-svgjs-path1120"
                            />
                          </div>
                        </div>
                      </div>
                      <span className="dashboard-teacher-text087"></span>
                      <div className="dashboard-teacher-card1">
                        <div className="dashboard-teacher-paragraphcontainer06">
                          <span className="dashboard-teacher-text088">
                            <span>800</span>
                          </span>
                          <span className="dashboard-teacher-text090">
                            <span>600</span>
                          </span>
                          <span className="dashboard-teacher-text092">
                            <span>400</span>
                          </span>
                          <span className="dashboard-teacher-text094">
                            <span>200</span>
                          </span>
                          <span className="dashboard-teacher-text096">0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="dashboard-teacher-tablecontainer1">
                <div className="dashboard-teacher-tablecontainer2">
                  <div className="dashboard-teacher-container14">
                    <span className="dashboard-teacher-text097">
                      <span>Star Students</span>
                    </span>
                    <div className="dashboard-teacher-container15">
                      <span className="dashboard-teacher-text099"></span>
                    </div>
                  </div>
                  <div className="dashboard-teacher-tablecontainer3">
                    <div className="dashboard-teacher-tablecontainer4">
                      <div className="dashboard-teacher-horizontalcontainer11">
                        <input
                          type="text"
                          placeholder="ID"
                          className="dashboard-teacher-textinput05"
                        />
                        <input
                          type="text"
                          placeholder="Name"
                          className="dashboard-teacher-textinput06"
                        />
                        <div className="dashboard-teacher-card2">
                          <span className="dashboard-teacher-text100">
                            <span>Marks</span>
                          </span>
                        </div>
                        <div className="dashboard-teacher-card3">
                          <span className="dashboard-teacher-text102">
                            <span>Percentage</span>
                          </span>
                        </div>
                        <div className="dashboard-teacher-card4">
                          <span className="dashboard-teacher-text104">
                            <span>Year</span>
                          </span>
                        </div>
                      </div>
                      <div className="dashboard-teacher-table">
                        <div className="dashboard-teacher-horizontalcontainer12">
                          <span className="dashboard-teacher-text106">
                            <span>PRE2209</span>
                          </span>
                          <div className="dashboard-teacher-verticalcontainer02">
                            <img
                              alt="Image6312"
                              src="/external/image6312-cvy-200h.png"
                              className="dashboard-teacher-image"
                            />
                            <span className="dashboard-teacher-text108">
                              <span>John Smith</span>
                            </span>
                          </div>
                          <span className="dashboard-teacher-text110">
                            <span>1185</span>
                          </span>
                          <span className="dashboard-teacher-text112">
                            <span>98%</span>
                          </span>
                          <span className="dashboard-teacher-text114">
                            <span>2019</span>
                          </span>
                        </div>
                        <div className="dashboard-teacher-horizontalcontainer13">
                          <span className="dashboard-teacher-text116">
                            <span>PRE1245</span>
                          </span>
                          <div className="dashboard-teacher-verticalcontainer03">
                            <img
                              alt="Image6312"
                              src="/external/image6312-skg-200h.png"
                              className="dashboard-teacher-image1"
                            />
                            <span className="dashboard-teacher-text118">
                              <span>Jolie Hoskins</span>
                            </span>
                          </div>
                          <span className="dashboard-teacher-text120">
                            <span>1195</span>
                          </span>
                          <span className="dashboard-teacher-text122">
                            <span>99.5%</span>
                          </span>
                          <span className="dashboard-teacher-text124">
                            <span>2018</span>
                          </span>
                        </div>
                        <div className="dashboard-teacher-horizontalcontainer14">
                          <span className="dashboard-teacher-text126">
                            <span>PRE1625</span>
                          </span>
                          <div className="dashboard-teacher-verticalcontainer04">
                            <img
                              alt="Image6312"
                              src="/external/image6312-c8wa-200h.png"
                              className="dashboard-teacher-image2"
                            />
                            <span className="dashboard-teacher-text128">
                              <span>Pennington Joy</span>
                            </span>
                          </div>
                          <span className="dashboard-teacher-text130">
                            <span>1196</span>
                          </span>
                          <span className="dashboard-teacher-text132">
                            <span>99.6%</span>
                          </span>
                          <span className="dashboard-teacher-text134">
                            <span>2017</span>
                          </span>
                        </div>
                        <div className="dashboard-teacher-horizontalcontainer15">
                          <span className="dashboard-teacher-text136">
                            <span>PRE2516</span>
                          </span>
                          <button className="dashboard-teacher-button5">
                            <img
                              alt="Image6312"
                              src="/external/image6312-qtc8-200h.png"
                              className="dashboard-teacher-image3"
                            />
                            <span className="dashboard-teacher-text138">
                              <span>Millie Marsden</span>
                            </span>
                          </button>
                          <span className="dashboard-teacher-text140">
                            <span>1187</span>
                          </span>
                          <span className="dashboard-teacher-text142">
                            <span>98.2%</span>
                          </span>
                          <span className="dashboard-teacher-text144">
                            <span>2016</span>
                          </span>
                        </div>
                        <div className="dashboard-teacher-horizontalcontainer16">
                          <span className="dashboard-teacher-text146">
                            <span>PRE2209</span>
                          </span>
                          <div className="dashboard-teacher-verticalcontainer05">
                            <img
                              alt="Image6312"
                              src="/external/image6312-djc-200h.png"
                              className="dashboard-teacher-image4"
                            />
                            <span className="dashboard-teacher-text148">
                              <span>John Smith</span>
                            </span>
                          </div>
                          <span className="dashboard-teacher-text150">
                            <span>1185</span>
                          </span>
                          <span className="dashboard-teacher-text152">
                            <span>98%</span>
                          </span>
                          <span className="dashboard-teacher-text154">
                            <span>2015</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-teacher-verticalcontainer06">
                  <div className="dashboard-teacher-horizontalcontainer17">
                    <span className="dashboard-teacher-text156">
                      <span>Student Activity</span>
                    </span>
                    <div className="dashboard-teacher-container16">
                      <span className="dashboard-teacher-text158"></span>
                    </div>
                  </div>
                  <div className="dashboard-teacher-verticalcontainer07">
                    <div className="dashboard-teacher-horizontalcontainer18">
                      <div className="dashboard-teacher-container17">
                        <div className="dashboard-teacher-container18">
                          <div className="dashboard-teacher-container19">
                            <div className="dashboard-teacher-container20">
                              <div className="dashboard-teacher-textinput07">
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-49t.svg"
                                  className="dashboard-teacher-vector06"
                                />
                              </div>
                              <div className="dashboard-teacher-container21">
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-se8.svg"
                                  className="dashboard-teacher-vector07"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-teacher-paragraphcontainer07">
                        <span className="dashboard-teacher-text159">
                          <span>1st place in &quot;Chess”</span>
                        </span>
                        <span className="dashboard-teacher-text161">
                          <span>
                            John Doe won 1st place in &quot;Chess&quot;
                          </span>
                        </span>
                      </div>
                      <div className="dashboard-teacher-card5">
                        <span className="dashboard-teacher-text163">
                          <span>1 Day ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="dashboard-teacher-horizontalcontainer19">
                      <button className="dashboard-teacher-buttoncontainer5">
                        <button className="dashboard-teacher-buttoncontainer6">
                          <button className="dashboard-teacher-buttoncontainer7">
                            <div className="dashboard-teacher-buttoncontainer8">
                              <div className="dashboard-teacher-textinput08">
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-r9t.svg"
                                  className="dashboard-teacher-vector08"
                                />
                              </div>
                              <div className="dashboard-teacher-button6">
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-0vuj.svg"
                                  className="dashboard-teacher-vector09"
                                />
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-qlm9.svg"
                                  className="dashboard-teacher-vector10"
                                />
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-6bfo.svg"
                                  className="dashboard-teacher-vector11"
                                />
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-laja.svg"
                                  className="dashboard-teacher-vector12"
                                />
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-pwli.svg"
                                  className="dashboard-teacher-vector13"
                                />
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-aag.svg"
                                  className="dashboard-teacher-vector14"
                                />
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-bagn.svg"
                                  className="dashboard-teacher-vector15"
                                />
                              </div>
                            </div>
                          </button>
                        </button>
                      </button>
                      <div className="dashboard-teacher-paragraphcontainer08">
                        <span className="dashboard-teacher-text165">
                          <span>Participated in &quot;Carrom&quot;</span>
                        </span>
                        <span className="dashboard-teacher-text167">
                          <span>
                            Justin Lee participated in &quot;Carrom&quot;
                          </span>
                        </span>
                      </div>
                      <div className="dashboard-teacher-card6">
                        <span className="dashboard-teacher-text169">
                          <span>2 hours ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="dashboard-teacher-horizontalcontainer20">
                      <button className="dashboard-teacher-button7">
                        <div className="dashboard-teacher-container22">
                          <img
                            alt="Container6312"
                            src="/external/container6312-5zgd.svg"
                            className="dashboard-teacher-container23"
                          />
                        </div>
                      </button>
                      <div className="dashboard-teacher-paragraphcontainer09">
                        <span className="dashboard-teacher-text171">
                          <span>
                            Internation conference in &quot;St.John School&quot;
                          </span>
                        </span>
                        <span className="dashboard-teacher-text173">
                          <span>
                            Justin Leeattended internation conference in
                            &quot;St.John School&quot;
                          </span>
                        </span>
                      </div>
                      <div className="dashboard-teacher-card7">
                        <span className="dashboard-teacher-text175">
                          <span>2 Week ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="dashboard-teacher-horizontalcontainer21">
                      <button className="dashboard-teacher-button8">
                        <div className="dashboard-teacher-verticalcontainer08">
                          <div className="dashboard-teacher-verticalcontainer09">
                            <div className="dashboard-teacher-verticalcontainer10">
                              <div className="dashboard-teacher-textinput09">
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-8cx.svg"
                                  className="dashboard-teacher-vector16"
                                />
                              </div>
                              <div className="dashboard-teacher-verticalcontainer11">
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-lg3j.svg"
                                  className="dashboard-teacher-vector17"
                                />
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-d2wq.svg"
                                  className="dashboard-teacher-vector18"
                                />
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-9g8r.svg"
                                  className="dashboard-teacher-vector19"
                                />
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-olki.svg"
                                  className="dashboard-teacher-vector20"
                                />
                                <img
                                  alt="Vector6312"
                                  src="/external/vector6312-q43l.svg"
                                  className="dashboard-teacher-vector21"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                      <div className="dashboard-teacher-paragraphcontainer10">
                        <span className="dashboard-teacher-text177">
                          <span>Won 1st place in &quot;Chess&quot;</span>
                        </span>
                        <span className="dashboard-teacher-text179">
                          <span>
                            John Doe won 1st place in &quot;Chess&quot;
                          </span>
                        </span>
                      </div>
                      <div className="dashboard-teacher-card8">
                        <span className="dashboard-teacher-text181">
                          <span>3 Day ago</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-teacher-frame-footer1">
            <div className="dashboard-teacher-content-wrapper1">
              <div className="dashboard-teacher-content-wrapper2">
                <span className="dashboard-teacher-text183 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="dashboard-teacher-text185 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="dashboard-teacher-text187 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="dashboard-teacher-text189 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="dashboard-teacher-text191 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardTeacher
