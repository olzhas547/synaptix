import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import AppComponent from '../../components/component'
import Component1 from '../../components/component1'
import Component2 from '../../components/component2'
import './dashboard.css'

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>dashboard</title>
      </Helmet>
      <div className="dashboard-createcourse">
        <div className="dashboard-frame-admin-panel-menu1">
          <div className="dashboard-frame-admin-panel-menu11">
            <div className="dashboard-logo">
              <div className="dashboard-logo1">
                <div className="dashboard-frame1000002598">
                  <img
                    alt="ContainerLogo5298"
                    src="/external/containerlogo5298-4bmm-200h.png"
                    className="dashboard-container-logo"
                  />
                  <div className="dashboard-book4">
                    <div className="dashboard-group">
                      <img
                        alt="VectorI529"
                        src="/external/vectori529-1ji.svg"
                        className="dashboard-vector"
                      />
                      <img
                        alt="VectorI529"
                        src="/external/vectori529-jxd.svg"
                        className="dashboard-vector01"
                      />
                      <img
                        alt="VectorI529"
                        src="/external/vectori529-wlli.svg"
                        className="dashboard-vector02"
                      />
                      <img
                        alt="VectorI529"
                        src="/external/vectori529-jzqm.svg"
                        className="dashboard-vector03"
                      />
                    </div>
                  </div>
                </div>
                <div className="dashboard-frame-title">
                  <span className="dashboard-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="dashboard-frame-menu">
              <div className="dashboard-menu-items">
                <Link to="/dashboard" className="dashboard-navlink">
                  <div className="dashboard-menu-item-inline-navigation-item">
                    <img
                      alt="IconDashboardOutlinedI529"
                      src="/external/icondashboardoutlinedi529-rhwr.svg"
                      className="dashboard-icon-dashboard-outlined"
                    />
                    <span className="dashboard-text002 LightBaseBaseNormal">
                      <span>Dashboard</span>
                    </span>
                  </div>
                </Link>
                <Link to="/mycourses" className="dashboard-navlink1">
                  <div className="dashboard-menu-item-inline-navigation-item1">
                    <img
                      alt="IconDatabaseOutlinedI529"
                      src="/external/icondatabaseoutlinedi529-wih9e.svg"
                      className="dashboard-icon-database-outlined"
                    />
                    <span className="dashboard-text004 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="dashboard-navlink2">
                  <div className="dashboard-menu-item-inline-navigation-item2">
                    <img
                      alt="IconBarChartOutlinedI529"
                      src="/external/iconbarchartoutlinedi529-yn.svg"
                      className="dashboard-icon-bar-chart-outlined"
                    />
                    <span className="dashboard-text006 LightBaseBaseNormal">
                      <span>Statistics</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="dashboard-navlink3">
                  <div className="dashboard-menu-item-inline-navigation-item3">
                    <img
                      alt="IconSearchOutlinedI681"
                      src="/external/iconsearchoutlinedi681-9d.svg"
                      className="dashboard-icon-search-outlined"
                    />
                    <span className="dashboard-text008 LightBaseBaseNormal">
                      <span>Explore</span>
                    </span>
                  </div>
                </Link>
                <Link to="/Calendar" className="dashboard-navlink4">
                  <div className="dashboard-menu-item-inline-navigation-item4">
                    <img
                      alt="IconCalendarOutlinedI529"
                      src="/external/iconcalendaroutlinedi529-6wp.svg"
                      className="dashboard-icon-calendar-outlined"
                    />
                    <span className="dashboard-text010 LightBaseBaseNormal">
                      <span>Calendar</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="dashboard-menu-items1">
                <Link to="/" className="dashboard-navlink5">
                  <div className="dashboard-menu-item-inline-navigation-item5">
                    <img
                      alt="IconSettingOutlinedI529"
                      src="/external/iconsettingoutlinedi529-ltjn.svg"
                      className="dashboard-icon-setting-outlined"
                    />
                    <span className="dashboard-text012 LightBaseBaseNormal">
                      <span>Settings</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-content-wrapper">
          <div className="dashboard-frame-header">
            <div className="dashboard-icon-search">
              <button className="dashboard-frame-button">
                <div className="dashboard-content">
                  <img
                    alt="IconMenuFoldOutlinedI529"
                    src="/external/iconmenufoldoutlinedi529-is4.svg"
                    className="dashboard-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="dashboard-frame-input-search">
                <div className="dashboard-input-wrapper">
                  <div className="dashboard-frame-input-basic">
                    <div className="dashboard-content1">
                      <span className="dashboard-text014 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="dashboard-frame-button1">
                  <div className="dashboard-content2">
                    <img
                      alt="IconSearchOutlinedI529"
                      src="/external/iconsearchoutlinedi529-m4ho.svg"
                      className="dashboard-icon-search-outlined1"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="dashboard-avatar-button">
              <button className="dashboard-frame-button2">
                <div className="dashboard-content3">
                  <img
                    alt="IconGlobalOutlinedI529"
                    src="/external/iconglobaloutlinedi529-5k6.svg"
                    className="dashboard-icon-global-outlined"
                  />
                  <span className="dashboard-text016 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="dashboard-notifications">
                <img
                  alt="IconBellOutlinedI529"
                  src="/external/iconbelloutlinedi529-tyub.svg"
                  className="dashboard-icon-bell-outlined"
                />
                <div className="dashboard-content4">
                  <div className="dashboard-frame-badge-basic">
                    <span className="dashboard-text018 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/" className="dashboard-navlink6">
                <div className="dashboard-frame-avatar">
                  <img
                    alt="IconUserOutlinedI529"
                    src="/external/iconuseroutlinedi529-8hc9.svg"
                    className="dashboard-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="dashboard-frame-card1">
            <button className="dashboard-header-button">
              <div className="dashboard-header-links">
                <div className="dashboard-frame-title1">
                  <span className="dashboard-text020 LightHeadingHeading2">
                    <span>Dashboard</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="dashboard-content-wrapper1">
              <div className="dashboard-frame294">
                <div className="dashboard-container1">
                  <div className="dashboard-frame44">
                    <div className="dashboard-frame42">
                      <div className="dashboard-frame31">
                        <span className="dashboard-text022">
                          <span>Homeworks</span>
                        </span>
                      </div>
                      <div className="dashboard-frame41">
                        <span className="dashboard-text024">
                          <span>Tasks</span>
                        </span>
                        <div className="dashboard-frame11">
                          <span className="dashboard-text026">
                            <span>Start</span>
                          </span>
                          <span className="dashboard-text028">
                            <span>End</span>
                          </span>
                          <span className="dashboard-text030">
                            <span>Level</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-frame43">
                      <div className="dashboard-component2">
                        <span className="dashboard-text032 body-14">
                          <span>May 10</span>
                        </span>
                        <span className="dashboard-text034">
                          <span>May 18</span>
                        </span>
                        <div className="dashboard-frame40">
                          <span className="dashboard-text036 bodyBig-16">
                            <span>8. Design a brochure for a restaurant</span>
                          </span>
                          <span className="dashboard-text038 body-14">
                            <span>Graphic design</span>
                          </span>
                        </div>
                        <div className="dashboard-component3">
                          <div className="dashboard-group9">
                            <img
                              alt="Rectangle30I531"
                              src="/external/rectangle30i531-nfmo-200h.png"
                              className="dashboard-rectangle30"
                            />
                            <img
                              alt="Rectangle26I531"
                              src="/external/rectangle26i531-e4tu-200h.png"
                              className="dashboard-rectangle26"
                            />
                            <img
                              alt="Rectangle27I531"
                              src="/external/rectangle27i531-r5x-200h.png"
                              className="dashboard-rectangle27"
                            />
                            <img
                              alt="Rectangle28I531"
                              src="/external/rectangle28i531-oust-200h.png"
                              className="dashboard-rectangle28"
                            />
                            <img
                              alt="Rectangle29I531"
                              src="/external/rectangle29i531-q3n-200h.png"
                              className="dashboard-rectangle29"
                            />
                          </div>
                        </div>
                        <div className="dashboard-group30">
                          <div className="dashboard-frame98">
                            <img
                              alt="Rectangle37I531"
                              src="/external/rectangle37i531-sjdo-200h.png"
                              className="dashboard-rectangle37"
                            />
                            <img
                              alt="Rectangle38I531"
                              src="/external/rectangle38i531-h4gc-200h.png"
                              className="dashboard-rectangle38"
                            />
                            <img
                              alt="Rectangle39I531"
                              src="/external/rectangle39i531-0ztb-200h.png"
                              className="dashboard-rectangle39"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-component7">
                        <span className="dashboard-text040 body-14">
                          <span>May 10</span>
                        </span>
                        <span className="dashboard-text042">
                          <span>May 18</span>
                        </span>
                        <div className="dashboard-frame401">
                          <span className="dashboard-text044 bodyBig-16">
                            <span>8. Design a brochure for a restaurant</span>
                          </span>
                          <span className="dashboard-text046 body-14">
                            <span>Graphic design</span>
                          </span>
                        </div>
                        <div className="dashboard-component31">
                          <div className="dashboard-group91">
                            <img
                              alt="Rectangle30I541"
                              src="/external/rectangle30i541-adbd-200h.png"
                              className="dashboard-rectangle301"
                            />
                            <img
                              alt="Rectangle26I541"
                              src="/external/rectangle26i541-my9-200h.png"
                              className="dashboard-rectangle261"
                            />
                            <img
                              alt="Rectangle27I541"
                              src="/external/rectangle27i541-9f5c-200h.png"
                              className="dashboard-rectangle271"
                            />
                            <img
                              alt="Rectangle28I541"
                              src="/external/rectangle28i541-qiil-200h.png"
                              className="dashboard-rectangle281"
                            />
                            <img
                              alt="Rectangle29I541"
                              src="/external/rectangle29i541-2p2-200h.png"
                              className="dashboard-rectangle291"
                            />
                          </div>
                        </div>
                        <div className="dashboard-group301">
                          <div className="dashboard-frame981">
                            <img
                              alt="Rectangle37I541"
                              src="/external/rectangle37i541-c2k-200h.png"
                              className="dashboard-rectangle371"
                            />
                            <img
                              alt="Rectangle38I541"
                              src="/external/rectangle38i541-yw9m-200h.png"
                              className="dashboard-rectangle381"
                            />
                            <img
                              alt="Rectangle39I541"
                              src="/external/rectangle39i541-e29g-200h.png"
                              className="dashboard-rectangle391"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-component32">
                        <span className="dashboard-text048 body-14">
                          <span>May 12</span>
                        </span>
                        <span className="dashboard-text050">
                          <span>Anytime</span>
                        </span>
                        <div className="dashboard-frame402">
                          <span className="dashboard-text052 bodyBig-16">
                            <span>3. Explore Methods and Libraries</span>
                          </span>
                          <span className="dashboard-text054 body-14">
                            <span>Front-End</span>
                          </span>
                        </div>
                        <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
                        <div className="dashboard-group302">
                          <div className="dashboard-frame982">
                            <img
                              alt="Rectangle37I531"
                              src="/external/rectangle37i531-qpb-200h.png"
                              className="dashboard-rectangle372"
                            />
                            <img
                              alt="Rectangle38I531"
                              src="/external/rectangle38i531-hf4l-200h.png"
                              className="dashboard-rectangle382"
                            />
                            <img
                              alt="Rectangle39I531"
                              src="/external/rectangle39i531-v1ix-200h.png"
                              className="dashboard-rectangle392"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-component5">
                        <span className="dashboard-text056 body-14">
                          <span>May 12</span>
                        </span>
                        <span className="dashboard-text058">
                          <span>Anytime</span>
                        </span>
                        <div className="dashboard-frame403">
                          <span className="dashboard-text060 bodyBig-16">
                            <span>3. Explore Methods and Libraries</span>
                          </span>
                          <span className="dashboard-text062 body-14">
                            <span>Front-End</span>
                          </span>
                        </div>
                        <Component1 rootClassName="component1-root-class-name"></Component1>
                        <div className="dashboard-group303">
                          <div className="dashboard-frame983">
                            <img
                              alt="Rectangle37I541"
                              src="/external/rectangle37i541-9b5y-200h.png"
                              className="dashboard-rectangle373"
                            />
                            <img
                              alt="Rectangle38I541"
                              src="/external/rectangle38i541-f11t-200h.png"
                              className="dashboard-rectangle383"
                            />
                            <img
                              alt="Rectangle39I541"
                              src="/external/rectangle39i541-6j3u-200h.png"
                              className="dashboard-rectangle393"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-component4">
                        <span className="dashboard-text064 body-14">
                          <span>May 17</span>
                        </span>
                        <span className="dashboard-text066">
                          <span>May 26</span>
                        </span>
                        <div className="dashboard-frame404">
                          <span className="dashboard-text068 bodyBig-16">
                            <span>9. Make a skeleton animation</span>
                          </span>
                          <span className="dashboard-text070 body-14">
                            <span>Cinema 4D</span>
                          </span>
                        </div>
                        <div className="dashboard-component33">
                          <span className="dashboard-text072">
                            <span>4D</span>
                          </span>
                        </div>
                        <div className="dashboard-group304">
                          <div className="dashboard-frame984">
                            <img
                              alt="Rectangle37I531"
                              src="/external/rectangle37i531-hsyt-200h.png"
                              className="dashboard-rectangle374"
                            />
                            <img
                              alt="Rectangle38I531"
                              src="/external/rectangle38i531-3gle-200h.png"
                              className="dashboard-rectangle384"
                            />
                            <img
                              alt="Rectangle39I531"
                              src="/external/rectangle39i531-uro-200h.png"
                              className="dashboard-rectangle394"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-component8">
                        <span className="dashboard-text074 body-14">
                          <span>May 17</span>
                        </span>
                        <span className="dashboard-text076">
                          <span>May 26</span>
                        </span>
                        <div className="dashboard-frame405">
                          <span className="dashboard-text078 bodyBig-16">
                            <span>9. Make a skeleton animation</span>
                          </span>
                          <span className="dashboard-text080 body-14">
                            <span>Cinema 4D</span>
                          </span>
                        </div>
                        <div className="dashboard-component34">
                          <span className="dashboard-text082">
                            <span>4D</span>
                          </span>
                        </div>
                        <div className="dashboard-group305">
                          <div className="dashboard-frame985">
                            <img
                              alt="Rectangle37I541"
                              src="/external/rectangle37i541-7st-200h.png"
                              className="dashboard-rectangle375"
                            />
                            <img
                              alt="Rectangle38I541"
                              src="/external/rectangle38i541-kqv2-200h.png"
                              className="dashboard-rectangle385"
                            />
                            <img
                              alt="Rectangle39I541"
                              src="/external/rectangle39i541-m9as-200h.png"
                              className="dashboard-rectangle395"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-group27">
                  <div className="dashboard-group25">
                    <div className="dashboard-group26">
                      <div className="dashboard-lines">
                        <img
                          alt="Frame825311"
                          src="/external/frame825311-rkl9.svg"
                          className="dashboard-frame82"
                        />
                        <img
                          alt="Frame815311"
                          src="/external/frame815311-rkeu.svg"
                          className="dashboard-frame81"
                        />
                      </div>
                      <div className="dashboard-score">
                        <span className="dashboard-text084">0</span>
                        <span className="dashboard-text085">
                          <span>20</span>
                        </span>
                        <span className="dashboard-text087">
                          <span>40</span>
                        </span>
                        <span className="dashboard-text089">
                          <span>60</span>
                        </span>
                        <span className="dashboard-text091">
                          <span>80</span>
                        </span>
                        <span className="dashboard-text093">
                          <span>100</span>
                        </span>
                      </div>
                      <div className="dashboard-hw">
                        <div className="dashboard-frame83">
                          <span className="dashboard-text095">
                            <span>HW1</span>
                          </span>
                          <span className="dashboard-text097">
                            <span>HW2</span>
                          </span>
                          <span className="dashboard-text099">
                            <span>HW3</span>
                          </span>
                          <span className="dashboard-text101">
                            <span>HW4</span>
                          </span>
                          <span className="dashboard-text103">
                            <span>HW5</span>
                          </span>
                          <span className="dashboard-text105">
                            <span>HW6</span>
                          </span>
                          <span className="dashboard-text107">
                            <span>HW7</span>
                          </span>
                        </div>
                      </div>
                      <div className="dashboard-group18">
                        <img
                          alt="Vector145311"
                          src="/external/vector145311-vp8h.svg"
                          className="dashboard-vector14"
                        />
                        <img
                          alt="Vector155311"
                          src="/external/vector155311-vls8.svg"
                          className="dashboard-vector15"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-frame26">
                    <span className="dashboard-text109">
                      <span>My scores</span>
                    </span>
                    <div className="dashboard-frame261">
                      <span className="dashboard-text111">
                        <span>Graphic design</span>
                      </span>
                      <div className="dashboard-remixiconslinesystemarrowrightsline">
                        <div className="dashboard-group01">
                          <img
                            alt="VectorI531"
                            src="/external/vectori531-sfr.svg"
                            className="dashboard-vector04"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-frame79">
                  <div className="dashboard-frame89">
                    <div className="dashboard-frame88">
                      <span className="dashboard-text113">
                        <span>Rating</span>
                      </span>
                      <div className="dashboard-frame27">
                        <span className="dashboard-text115">
                          <span>Front-End</span>
                        </span>
                        <div className="dashboard-remixiconslinesystemarrowrightsline1">
                          <div className="dashboard-group02">
                            <img
                              alt="VectorI531"
                              src="/external/vectori531-dl67.svg"
                              className="dashboard-vector05"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-frame77">
                    <div className="dashboard-frame76">
                      <div className="dashboard-remixiconslinebusinessbarchartline">
                        <div className="dashboard-group03">
                          <img
                            alt="VectorI531"
                            src="/external/vectori531-eva.svg"
                            className="dashboard-vector06"
                          />
                        </div>
                      </div>
                      <span className="dashboard-text117">
                        <span>Student</span>
                      </span>
                    </div>
                    <span className="dashboard-text119">
                      <span>Score</span>
                    </span>
                  </div>
                  <div className="dashboard-frame75">
                    <div className="dashboard-frame74">
                      <div className="dashboard-group21">
                        <div className="dashboard-frame73">
                          <div className="dashboard-frame72">
                            <span className="dashboard-text121">
                              <span>13</span>
                            </span>
                            <div className="dashboard-frame16">
                              <img
                                alt="Ellipse25311"
                                src="/external/ellipse25311-922e-200h.png"
                                className="dashboard-ellipse2"
                              />
                              <span className="dashboard-text123">
                                <span>Azamat Qani</span>
                              </span>
                            </div>
                          </div>
                          <span className="dashboard-text125">
                            <span>1001</span>
                          </span>
                        </div>
                      </div>
                      <div className="dashboard-group22">
                        <div className="dashboard-frame731">
                          <div className="dashboard-frame721">
                            <span className="dashboard-text127">
                              <span>14</span>
                            </span>
                            <div className="dashboard-frame161">
                              <img
                                alt="Ellipse35311"
                                src="/external/ellipse35311-noru-200h.png"
                                className="dashboard-ellipse3"
                              />
                              <span className="dashboard-text129">
                                <span>Sabina Omirzak</span>
                              </span>
                            </div>
                          </div>
                          <span className="dashboard-text131">
                            <span>987</span>
                          </span>
                        </div>
                      </div>
                      <div className="dashboard-group23">
                        <div className="dashboard-frame732">
                          <div className="dashboard-frame722">
                            <span className="dashboard-text133">
                              <span>15</span>
                            </span>
                            <div className="dashboard-frame162">
                              <img
                                alt="Ellipse25311"
                                src="/external/ellipse25311-xb5n-200h.png"
                                className="dashboard-ellipse21"
                              />
                              <span className="dashboard-text135">
                                <span>Yerassyl Sharip</span>
                              </span>
                            </div>
                          </div>
                          <span className="dashboard-text137">
                            <span>967</span>
                          </span>
                        </div>
                      </div>
                      <div className="dashboard-group24">
                        <div className="dashboard-frame733">
                          <div className="dashboard-frame723">
                            <span className="dashboard-text139">
                              <span>16</span>
                            </span>
                            <div className="dashboard-frame163">
                              <img
                                alt="Ellipse25311"
                                src="/external/ellipse25311-ksyc-200h.png"
                                className="dashboard-ellipse22"
                              />
                              <span className="dashboard-text141">
                                <span>Aidos Askar</span>
                              </span>
                            </div>
                          </div>
                          <span className="dashboard-text143">
                            <span>966</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-frame25">
                  <div className="dashboard-group35"></div>
                  <div className="dashboard-calendar">
                    <div className="dashboard-remixiconslinesystemarrowrightsline2">
                      <div className="dashboard-group04"></div>
                    </div>
                    <div className="dashboard-remixiconslinesystemarrowrightsline3">
                      <div className="dashboard-group05"></div>
                    </div>
                  </div>
                  <div className="dashboard-group41">
                    <div className="dashboard-frame99">
                      <div className="dashboard-group29">
                        <div className="dashboard-group11">
                          <img
                            alt="Rectangle34I531"
                            src="/external/rectangle34i531-p8ua-200h.png"
                            className="dashboard-rectangle34"
                          />
                          <div className="dashboard-frame65">
                            <div className="dashboard-frame64">
                              <div className="dashboard-component41">
                                <div className="dashboard-group92">
                                  <img
                                    alt="Rectangle30I531"
                                    src="/external/rectangle30i531-zv3cj-200h.png"
                                    className="dashboard-rectangle302"
                                  />
                                  <img
                                    alt="Rectangle26I531"
                                    src="/external/rectangle26i531-w4xl-200w.png"
                                    className="dashboard-rectangle262"
                                  />
                                  <img
                                    alt="Rectangle27I531"
                                    src="/external/rectangle27i531-pon-200h.png"
                                    className="dashboard-rectangle272"
                                  />
                                  <img
                                    alt="Rectangle28I531"
                                    src="/external/rectangle28i531-fq8s-200h.png"
                                    className="dashboard-rectangle282"
                                  />
                                  <img
                                    alt="Rectangle29I531"
                                    src="/external/rectangle29i531-eupf-200w.png"
                                    className="dashboard-rectangle292"
                                  />
                                </div>
                              </div>
                              <div className="dashboard-frame63">
                                <span className="dashboard-text145">
                                  <span>Vebinar</span>
                                </span>
                                <div className="dashboard-frame14">
                                  <span className="dashboard-text147">
                                    <span>
                                      09.00 - 16.00
                                      <span
                                        dangerouslySetInnerHTML={{
                                          __html: ' ',
                                        }}
                                      />
                                    </span>
                                  </span>
                                  <span className="dashboard-text149">|</span>
                                  <span className="dashboard-text150">
                                    <span>Graphic design</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="dashboard-remixiconslinesystemarrowrightsline4">
                              <div className="dashboard-group06">
                                <img
                                  alt="VectorI531"
                                  src="/external/vectori531-ltlg.svg"
                                  className="dashboard-vector07"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dashboard-group12">
                          <img
                            alt="Rectangle34I531"
                            src="/external/rectangle34i531-z1jn2-200h.png"
                            className="dashboard-rectangle341"
                          />
                          <div className="dashboard-frame651">
                            <div className="dashboard-frame641">
                              <div className="dashboard-component42">
                                <span className="dashboard-text152">
                                  <span>4D</span>
                                </span>
                              </div>
                              <div className="dashboard-frame631">
                                <span className="dashboard-text154">
                                  <span>
                                    Homework 9
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: ' ',
                                      }}
                                    />
                                  </span>
                                </span>
                                <div className="dashboard-frame141">
                                  <span className="dashboard-text156">
                                    <span>23.00</span>
                                  </span>
                                  <span className="dashboard-text158">|</span>
                                  <span className="dashboard-text159">
                                    <span>Cinema 4D</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="dashboard-remixiconslinesystemarrowrightsline5">
                              <div className="dashboard-group07">
                                <img
                                  alt="VectorI531"
                                  src="/external/vectori531-txn7.svg"
                                  className="dashboard-vector08"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dashboard-group13">
                          <img
                            alt="Rectangle34I531"
                            src="/external/rectangle34i531-56vs-200h.png"
                            className="dashboard-rectangle342"
                          />
                          <div className="dashboard-frame652">
                            <div className="dashboard-frame642">
                              <Component2></Component2>
                              <div className="dashboard-frame632">
                                <span className="dashboard-text161">
                                  <span>
                                    Homework 2
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: ' ',
                                      }}
                                    />
                                  </span>
                                </span>
                                <div className="dashboard-frame142">
                                  <span className="dashboard-text163">
                                    <span>23.00</span>
                                  </span>
                                  <span className="dashboard-text165">|</span>
                                  <span className="dashboard-text166">
                                    <span>Front-End</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="dashboard-remixiconslinesystemarrowrightsline6">
                              <div className="dashboard-group08">
                                <img
                                  alt="VectorI531"
                                  src="/external/vectori531-lje.svg"
                                  className="dashboard-vector09"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dashboard-frame111">
                          <span className="dashboard-text168">
                            <span>Schedule</span>
                          </span>
                          <span className="dashboard-text170">
                            <span>See all</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-group40">
                      <div className="dashboard-frame61">
                        <div className="dashboard-remixiconslinesystemarrowrightsline7">
                          <div className="dashboard-group09">
                            <img
                              alt="VectorI531"
                              src="/external/vectori531-d84.svg"
                              className="dashboard-vector10"
                            />
                          </div>
                        </div>
                        <span className="dashboard-text172">
                          <span>May 2022</span>
                        </span>
                        <div className="dashboard-remixiconslinesystemarrowrightsline8">
                          <div className="dashboard-group10">
                            <img
                              alt="VectorI531"
                              src="/external/vectori531-r0li.svg"
                              className="dashboard-vector11"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-frame62">
                        <div className="dashboard-frame60">
                          <div className="dashboard-frame58">
                            <div className="dashboard-frame52">
                              <span className="dashboard-text174">
                                <span>Mon</span>
                              </span>
                              <span className="dashboard-text176">
                                <span>16</span>
                              </span>
                            </div>
                          </div>
                          <div className="dashboard-frame57">
                            <div className="dashboard-frame521">
                              <span className="dashboard-text178">
                                <span>Mon</span>
                              </span>
                              <span className="dashboard-text180">
                                <span>16</span>
                              </span>
                            </div>
                          </div>
                          <div className="dashboard-frame56">
                            <div className="dashboard-frame522">
                              <span className="dashboard-text182">
                                <span>Tue</span>
                              </span>
                              <span className="dashboard-text184">
                                <span>17</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="dashboard-frame112">
                          <div className="dashboard-frame523">
                            <span className="dashboard-text186">
                              <span>Wed</span>
                            </span>
                            <span className="dashboard-text188">
                              <span>18</span>
                            </span>
                          </div>
                        </div>
                        <div className="dashboard-frame524">
                          <div className="dashboard-frame525">
                            <span className="dashboard-text190">
                              <span>Thu</span>
                            </span>
                            <span className="dashboard-text192">
                              <span>19</span>
                            </span>
                          </div>
                        </div>
                        <div className="dashboard-frame53">
                          <div className="dashboard-frame526">
                            <span className="dashboard-text194">
                              <span>Fri</span>
                            </span>
                            <span className="dashboard-text196">
                              <span>20</span>
                            </span>
                          </div>
                        </div>
                        <div className="dashboard-frame54">
                          <div className="dashboard-frame527">
                            <span className="dashboard-text198">
                              <span>Sat</span>
                            </span>
                            <span className="dashboard-text200">
                              <span>21</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-frame103">
                    <div className="dashboard-group42">
                      <div className="dashboard-frame70">
                        <div className="dashboard-frame68">
                          <div className="dashboard-frame67">
                            <img
                              alt="Rectangle205311"
                              src="/external/rectangle205311-resp-200w.png"
                              className="dashboard-rectangle20"
                            />
                            <div className="dashboard-frame66">
                              <span className="dashboard-text202">
                                <span className="dashboard-text203">75</span>
                                <span>/110</span>
                              </span>
                              <span className="dashboard-text205">
                                <span>Visited lectures</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="dashboard-frame69">
                          <div className="dashboard-frame671">
                            <img
                              alt="Rectangle205311"
                              src="/external/rectangle205311-zdsm-200w.png"
                              className="dashboard-rectangle201"
                            />
                            <div className="dashboard-frame661">
                              <span className="dashboard-text207">
                                <span className="dashboard-text208">15</span>
                                <span>/25</span>
                              </span>
                              <span className="dashboard-text210">
                                <span>Completed HW</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-frame71">
                      <div className="dashboard-frame681">
                        <div className="dashboard-frame672">
                          <img
                            alt="Rectangle205311"
                            src="/external/rectangle205311-sa9-200w.png"
                            className="dashboard-rectangle202"
                          />
                          <div className="dashboard-frame662">
                            <span className="dashboard-text212">
                              <span className="dashboard-text213">300</span>
                              <span>/1000</span>
                            </span>
                            <span className="dashboard-text215">
                              <span>Bonuses</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-frame691">
                        <div className="dashboard-frame673">
                          <img
                            alt="Rectangle205311"
                            src="/external/rectangle205311-1jq6-200w.png"
                            className="dashboard-rectangle203"
                          />
                          <div className="dashboard-frame663">
                            <span className="dashboard-text217">
                              <span className="dashboard-text218">8</span>
                              <span>/10</span>
                            </span>
                            <span className="dashboard-text220">
                              <span>Сertificates</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-frame102">
                    <div className="dashboard-frame100">
                      <img
                        alt="Ellipse145311"
                        src="/external/ellipse145311-prsd.svg"
                        className="dashboard-ellipse14"
                      />
                      <span className="dashboard-text222">
                        <span>Sabina Omirzak</span>
                      </span>
                    </div>
                    <span className="dashboard-text224">
                      <span>sabina23@gmail.com</span>
                    </span>
                  </div>
                </div>
                <div className="dashboard-group39">
                  <span className="dashboard-text226">
                    <span>of continuous study</span>
                  </span>
                  <div className="dashboard-group38">
                    <img
                      alt="Ellipse105311"
                      src="/external/ellipse105311-iejd-200h.png"
                      className="dashboard-ellipse10"
                    />
                  </div>
                  <div className="dashboard-group37">
                    <div className="dashboard-group34">
                      <img
                        alt="Vector185311"
                        src="/external/vector185311-vwfg.svg"
                        className="dashboard-vector18"
                      />
                      <img
                        alt="Vector195311"
                        src="/external/vector195311-69sp.svg"
                        className="dashboard-vector19"
                      />
                      <img
                        alt="Vector205311"
                        src="/external/vector205311-fi.svg"
                        className="dashboard-vector20"
                      />
                    </div>
                    <img
                      alt="Rectangle425311"
                      src="/external/rectangle425311-plo-400w.png"
                      className="dashboard-rectangle42"
                    />
                    <img
                      alt="Ellipse115311"
                      src="/external/ellipse115311-x5ho-200h.png"
                      className="dashboard-ellipse11"
                    />
                  </div>
                  <span className="dashboard-text228">
                    <span>4 days</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-frame-footer1">
            <div className="dashboard-content-wrapper2">
              <div className="dashboard-content-wrapper3">
                <span className="dashboard-text230 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="dashboard-text232 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="dashboard-text234 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="dashboard-text236 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="dashboard-text238 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
