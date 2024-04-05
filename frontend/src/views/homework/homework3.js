import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Frame163 from '../../components/frame163'
import AppComponent from '../../components/component'
import './homework3.css'

const Homework3 = (props) => {
  return (
    <div className="homework3-container">
      <Helmet>
        <title>Homework</title>
      </Helmet>
      <div className="homework3-mycourses">
        <div className="homework3-frame-admin-panel-menu1">
          <div className="homework3-frame-admin-panel-menu11">
            <div className="homework3-logo">
              <div className="homework3-logo1">
                <div className="homework3-frame1000002598">
                  <img
                    alt="ContainerLogo6545"
                    src="/external/containerlogo6545-4m3-200h.png"
                    className="homework3-container-logo"
                  />
                  <div className="homework3-book4">
                    <div className="homework3-group">
                      <img
                        alt="VectorI654"
                        src="/external/vectori654-455.svg"
                        className="homework3-vector"
                      />
                      <img
                        alt="VectorI654"
                        src="/external/vectori654-2qc.svg"
                        className="homework3-vector01"
                      />
                      <img
                        alt="VectorI654"
                        src="/external/vectori654-fwt.svg"
                        className="homework3-vector02"
                      />
                      <img
                        alt="VectorI654"
                        src="/external/vectori654-qvy.svg"
                        className="homework3-vector03"
                      />
                    </div>
                  </div>
                </div>
                <div className="homework3-frame-title">
                  <span className="homework3-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="homework3-frame-menu">
              <div className="homework3-menu-items">
                <div className="homework3-menu-item-inline-navigation-item">
                  <img
                    alt="IconDashboardOutlinedI654"
                    src="/external/icondashboardoutlinedi654-rkj.svg"
                    className="homework3-icon-dashboard-outlined"
                  />
                  <Link
                    to="/"
                    className="homework3-text002 LightBaseBaseNormal"
                  >
                    <span>Dashboard</span>
                  </Link>
                </div>
                <Link to="/homework3" className="homework3-navlink">
                  <div className="homework3-menu-item-inline-navigation-item1">
                    <img
                      alt="IconDatabaseOutlinedI654"
                      src="/external/icondatabaseoutlinedi654-h0qi.svg"
                      className="homework3-icon-database-outlined"
                    />
                    <span className="homework3-text004 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                </Link>
                <div className="homework3-menu-item-inline-navigation-item2">
                  <img
                    alt="IconBarChartOutlinedI654"
                    src="/external/iconbarchartoutlinedi654-fzeo.svg"
                    className="homework3-icon-bar-chart-outlined"
                  />
                  <Link
                    to="/homework3"
                    className="homework3-text006 LightBaseBaseNormal"
                  >
                    <span>Statistics</span>
                  </Link>
                </div>
                <div className="homework3-menu-item-inline-navigation-item3">
                  <img
                    alt="IconCalendarOutlinedI654"
                    src="/external/iconcalendaroutlinedi654-xcx.svg"
                    className="homework3-icon-calendar-outlined"
                  />
                  <Link
                    to="/"
                    className="homework3-text008 LightBaseBaseNormal"
                  >
                    <span>Calendar</span>
                  </Link>
                </div>
              </div>
              <div className="homework3-menu-submenu">
                <div className="homework3-menu-item-inline-submenu-title">
                  <img
                    alt="IconFileTextOutlinedI654"
                    src="/external/iconfiletextoutlinedi654-wsrf.svg"
                    className="homework3-icon-file-text-outlined"
                  />
                  <Link
                    to="/homework3"
                    className="homework3-text010 LightBaseBaseNormal"
                  >
                    <span>Invoice</span>
                  </Link>
                  <img
                    alt="IconDownOutlinedI654"
                    src="/external/icondownoutlinedi654-xayv.svg"
                    className="homework3-icon-down-outlined"
                  />
                </div>
              </div>
              <div className="homework3-menu-items1">
                <div className="homework3-menu-item-inline-navigation-item4">
                  <img
                    alt="IconSettingOutlinedI654"
                    src="/external/iconsettingoutlinedi654-o1z.svg"
                    className="homework3-icon-setting-outlined"
                  />
                  <Link
                    to="/"
                    className="homework3-text012 LightBaseBaseNormal"
                  >
                    <span>Settings</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homework3-content-wrapper">
          <div className="homework3-frame-header">
            <div className="homework3-icon-search">
              <button className="homework3-frame-button">
                <div className="homework3-content">
                  <img
                    alt="IconMenuFoldOutlinedI654"
                    src="/external/iconmenufoldoutlinedi654-ehopu.svg"
                    className="homework3-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="homework3-frame-input-search">
                <div className="homework3-input-wrapper">
                  <div className="homework3-frame-input-basic">
                    <div className="homework3-content1">
                      <span className="homework3-text014 LightBaseBaseNormal">
                        Search
                      </span>
                    </div>
                  </div>
                </div>
                <button className="homework3-frame-button1">
                  <div className="homework3-content2">
                    <img
                      alt="IconSearchOutlinedI654"
                      src="/external/iconsearchoutlinedi654-tzo4.svg"
                      className="homework3-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="homework3-avatar-button">
              <button className="homework3-frame-button2">
                <div className="homework3-content3">
                  <img
                    alt="IconGlobalOutlinedI654"
                    src="/external/iconglobaloutlinedi654-i2al.svg"
                    className="homework3-icon-global-outlined"
                  />
                  <span className="homework3-text015 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="homework3-notifications">
                <img
                  alt="IconBellOutlinedI654"
                  src="/external/iconbelloutlinedi654-kh9g.svg"
                  className="homework3-icon-bell-outlined"
                />
                <div className="homework3-content4">
                  <div className="homework3-frame-badge-basic">
                    <span className="homework3-text017 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="homework3-frame-avatar">
                <Link to="/homework3" className="homework3-navlink1">
                  <img
                    alt="IconUserOutlinedI654"
                    src="/external/iconuseroutlinedi654-doc.svg"
                    className="homework3-icon-user-outlined"
                  />
                </Link>
              </div>
            </button>
          </div>
          <div className="homework3-frame-card1">
            <button className="homework3-header-button">
              <div className="homework3-header-links">
                <div className="homework3-frame-breadcrumb">
                  <div className="homework3-breadcrumb-link">
                    <span className="homework3-text019 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                  <div className="homework3-breadcrumb-separator">
                    <div className="homework3-content5">
                      <span className="homework3-text021 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="homework3-breadcrumb-link1">
                    <span className="homework3-text022 LightBaseBaseNormal">
                      <span>UX/UI Design Pro</span>
                    </span>
                  </div>
                  <div className="homework3-breadcrumb-separator1">
                    <div className="homework3-content6">
                      <span className="homework3-text024 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="homework3-breadcrumb-link2">
                    <span className="homework3-text025 LightBaseBaseNormal">
                      <span>Webinar</span>
                    </span>
                  </div>
                </div>
                <div className="homework3-frame-title1">
                  <span className="homework3-text027 LightHeadingHeading2">
                    <span>Homework 3</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="homework3-frame1000002676">
              <div className="homework3-frame1">
                <div className="homework3-remixiconslinesystemapps2line">
                  <div className="homework3-group01"></div>
                </div>
                <img
                  alt="Rectangle356546"
                  src="/external/rectangle356546-4id.svg"
                  className="homework3-rectangle35"
                />
                <div className="homework3-frame332">
                  <div className="homework3-frame331">
                    <div className="homework3-frame151">
                      <div className="homework3-frame103">
                        <span className="homework3-text029">
                          <span>Not submitted</span>
                        </span>
                      </div>
                    </div>
                    <div className="homework3-frame152">
                      <div className="homework3-frame1031">
                        <span className="homework3-text031">
                          <span>No retakes</span>
                        </span>
                      </div>
                    </div>
                    <div className="homework3-frame187">
                      <div className="homework3-frame1032">
                        <span className="homework3-text033">
                          <span>Deadline 24.01.2022</span>
                        </span>
                      </div>
                    </div>
                    <div className="homework3-frame188">
                      <div className="homework3-frame1033">
                        <span className="homework3-text035">
                          <span>Difficulty</span>
                        </span>
                      </div>
                      <div className="homework3-group345">
                        <img
                          alt="Star66546"
                          src="/external/star66546-crs.svg"
                          className="homework3-star6"
                        />
                        <img
                          alt="Star76546"
                          src="/external/star76546-jbyn.svg"
                          className="homework3-star7"
                        />
                        <img
                          alt="Star86546"
                          src="/external/star86546-uk0c.svg"
                          className="homework3-star8"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="homework3-frame87">
                    <div className="homework3-remixiconslinebusinesscalendar2line">
                      <div className="homework3-group02">
                        <img
                          alt="VectorI654"
                          src="/external/vectori654-as5o.svg"
                          className="homework3-vector04"
                        />
                      </div>
                    </div>
                    <div className="homework3-remixiconslinesystemshareline">
                      <div className="homework3-group03">
                        <img
                          alt="VectorI654"
                          src="/external/vectori654-bkvz.svg"
                          className="homework3-vector05"
                        />
                      </div>
                    </div>
                    <div className="homework3-remixiconsfillbusinessbookmarkfill">
                      <div className="homework3-group04">
                        <img
                          alt="VectorI654"
                          src="/external/vectori654-w8x.svg"
                          className="homework3-vector06"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="homework3-frame190">
                  <div className="homework3-remixiconslinesystemapps2line1">
                    <div className="homework3-group05"></div>
                  </div>
                  <div className="homework3-frame80"></div>
                  <img
                    alt="Rectangle356546"
                    src="/external/rectangle356546-suqk-300w.png"
                    className="homework3-rectangle351"
                  />
                  <img
                    alt="Rectangle366546"
                    src="/external/rectangle366546-7dkx-400h.png"
                    className="homework3-rectangle36"
                  />
                  <div className="homework3-frame16">
                    <div className="homework3-frame97">
                      <div className="homework3-frame96"></div>
                    </div>
                  </div>
                  <Frame163 rootClassName="frame163-root-class-name"></Frame163>
                  <div className="homework3-frame11">
                    <div className="homework3-remixiconslinesystemarrowrightsline">
                      <div className="homework3-group06">
                        <img
                          alt="VectorI654"
                          src="/external/vectori654-9jg.svg"
                          className="homework3-vector07"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="homework3-frame256">
                    <div className="homework3-group80">
                      <div className="homework3-frame29">
                        <span className="homework3-text037">
                          <span className="homework3-text038">03</span>
                          <span>/07 Modules</span>
                        </span>
                        <span className="homework3-text040">
                          <span>
                            35%
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="homework3-group7">
                        <img
                          alt="Rectangle196546"
                          src="/external/rectangle196546-roma-200h.png"
                          className="homework3-rectangle19"
                        />
                        <img
                          alt="Rectangle246546"
                          src="/external/rectangle246546-go9k-200h.png"
                          className="homework3-rectangle24"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="homework3-hw">
                  <div className="homework3-container1">
                    <div className="homework3-group79"></div>
                    <Link to="/test" className="homework3-navlink2">
                      <div className="homework3-frame1511 button">
                        <div className="homework3-frame1034">
                          <span className="homework3-text042">
                            <span>Submit homework</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <img
                    alt="Rectangle946546"
                    src="/external/rectangle946546-l91c-200h.png"
                    className="homework3-rectangle94"
                  />
                  <div className="homework3-group347">
                    <div className="homework3-frame111">
                      <div className="homework3-remixiconslinesystemarrowrightsline1">
                        <div className="homework3-group07">
                          <img
                            alt="VectorI654"
                            src="/external/vectori654-skh9.svg"
                            className="homework3-vector08"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="homework3-text044">
                      <span>
                        Go to Module 3. Conduct research on the Kano Model
                      </span>
                    </span>
                  </div>
                  <div className="homework3-group346">
                    <div className="homework3-frame1512">
                      <div className="homework3-frame1035">
                        <span className="homework3-text046">
                          <span>? / 100</span>
                        </span>
                      </div>
                    </div>
                    <div className="homework3-frame154">
                      <div className="homework3-frame147">
                        <span className="homework3-text048">
                          <span>Task description</span>
                        </span>
                      </div>
                      <div className="homework3-frame148">
                        <div className="homework3-frame1036">
                          <span className="homework3-text050">
                            <span>Your answer</span>
                          </span>
                        </div>
                      </div>
                      <div className="homework3-frame150">
                        <div className="homework3-frame1037">
                          <span className="homework3-text052">
                            <span>Teacher&apos;s comments</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="homework3-group348">
                    <div className="homework3-group262">
                      <div className="homework3-chat">
                        <img
                          alt="Icon6546"
                          src="/external/icon6546-omul.svg"
                          className="homework3-icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="homework3-frame335">
                    <div className="homework3-frame333">
                      <span className="homework3-text054">
                        Task description
                      </span>
                    </div>
                    <span className="homework3-text055">
                      <span className="homework3-text056">
                        Using
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="homework3-text057">this</span>
                      <span className="homework3-text058"> template</span>
                      <span>
                        {' '}
                        (we also copy it to ourselves), we isolate the
                        significance of all functions. Thus, we already
                        understand priority not as &quot;hypothetically&quot; we
                        understood it before, but as people really see it. And
                        we can place design accents accordingly and plan
                        iterations of functional development - what is a
                        priority, and what can be done later.
                      </span>
                      <span>
                        {' '}
                        template to survey people, we collect data. To do this,
                        write down the key functions of your product for
                        yourself, determine the list of respondents (at least 2
                        people), then make copies of these tables (for each
                        person in a table, it’s better to write his name in the
                        title right away so that it’s clear), and in each table
                        we make copies of the tabs (pages) per function. It
                        turns out that you will have a table &quot;Functional
                        research First name Last name of the respondent&quot;,
                        and inside the tab (page) &quot;Function 1&quot;,
                        &quot;Function 2&quot;, &quot;Function 3&quot; and so
                        on.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Then, using
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="homework3-text064">this template</span>
                      <span>
                        {' '}
                        (we also copy it to ourselves), we isolate the
                        significance of all functions. Thus, we already
                        understand priority not as &quot;hypothetically&quot; we
                        understood it before, but as people really see it. And
                        we can place design accents accordingly and plan
                        iterations of functional development - what is a
                        priority, and what can be done later.
                      </span>
                      <br></br>
                    </span>
                    <div className="homework3-frame334">
                      <span className="homework3-text067">
                        Teachers checking homework
                      </span>
                      <div className="homework3-frame330">
                        <div className="homework3-frame329">
                          <div className="homework3-frame328">
                            <div className="homework3-frame1481">
                              <div className="homework3-group107">
                                <div className="homework3-group104">
                                  <img
                                    alt="Union6546"
                                    src="/external/union6546-2g6g.svg"
                                    className="homework3-union"
                                  />
                                </div>
                                <div className="homework3-group103">
                                  <img
                                    alt="image1376546"
                                    src="/external/image1376546-imsf-200h.png"
                                    className="homework3-image137"
                                  />
                                </div>
                              </div>
                              <div className="homework3-frame146">
                                <span className="homework3-text068">
                                  <span>Nata Josten</span>
                                </span>
                                <span className="homework3-text070">
                                  <span>Senior Ui/Ux designer</span>
                                </span>
                              </div>
                            </div>
                            <div className="homework3-frame155">
                              <div className="homework3-group108">
                                <div className="homework3-group1041">
                                  <img
                                    alt="Union6546"
                                    src="/external/union6546-riul.svg"
                                    className="homework3-union1"
                                  />
                                </div>
                                <div className="homework3-maskgroup">
                                  <div className="homework3-maskgroup1">
                                    <img
                                      alt="Rectangle696546"
                                      src="/external/rectangle696546-v64e-200w.png"
                                      className="homework3-rectangle69"
                                    />
                                  </div>
                                </div>
                                <div className="homework3-group1031">
                                  <img
                                    alt="Union6546"
                                    src="/external/union6546-vibl.svg"
                                    className="homework3-union2"
                                  />
                                </div>
                              </div>
                              <div className="homework3-frame1461">
                                <span className="homework3-text072">
                                  <span>Sam Smith</span>
                                </span>
                                <span className="homework3-text074">
                                  <span>Middle Ui/Ux designer</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="homework3-text076">
                <span>
                  Homework 3. Animating simples shapes
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <div className="homework3-frame123"></div>
              <div className="homework3-group791"></div>
              <span className="homework3-text078">
                <span>Resources</span>
              </span>
              <div className="homework3-group269">
                <div className="homework3-group349">
                  <div className="homework3-group25">
                    <div className="homework3-group24">
                      <img
                        alt="Vector6546"
                        src="/external/vector6546-x30j.svg"
                        className="homework3-vector09"
                      />
                      <img
                        alt="Vector6546"
                        src="/external/vector6546-8bb4.svg"
                        className="homework3-vector10"
                      />
                    </div>
                  </div>
                  <span className="homework3-text080">
                    <span>.DOC</span>
                  </span>
                </div>
                <div className="homework3-group350">
                  <span className="homework3-text082">
                    <span>Instruction. doc</span>
                  </span>
                  <span className="homework3-text084">
                    <span>255KB</span>
                  </span>
                </div>
                <img
                  alt="morevertical6546"
                  src="/external/morevertical6546-xgc.svg"
                  className="homework3-morevertical"
                />
              </div>
              <div className="homework3-group2691">
                <div className="homework3-group3491">
                  <div className="homework3-group251">
                    <div className="homework3-group241">
                      <img
                        alt="Vector6546"
                        src="/external/vector6546-t0pv.svg"
                        className="homework3-vector11"
                      />
                      <img
                        alt="Vector6546"
                        src="/external/vector6546-egtg.svg"
                        className="homework3-vector12"
                      />
                    </div>
                  </div>
                  <span className="homework3-text086">
                    <span>.DOC</span>
                  </span>
                </div>
                <div className="homework3-group3501">
                  <span className="homework3-text088">
                    <span>Instruction. doc</span>
                  </span>
                  <span className="homework3-text090">
                    <span>255KB</span>
                  </span>
                </div>
                <img
                  alt="morevertical6546"
                  src="/external/morevertical6546-m2wd.svg"
                  className="homework3-morevertical1"
                />
              </div>
              <div className="homework3-group270">
                <div className="homework3-group3492">
                  <div className="homework3-group252">
                    <div className="homework3-group242">
                      <img
                        alt="Vector6546"
                        src="/external/vector6546-t6ae.svg"
                        className="homework3-vector13"
                      />
                      <img
                        alt="Vector6546"
                        src="/external/vector6546-jrnr.svg"
                        className="homework3-vector14"
                      />
                    </div>
                  </div>
                  <span className="homework3-text092">
                    <span>.DOC</span>
                  </span>
                </div>
                <div className="homework3-group3502">
                  <span className="homework3-text094">
                    <span>Instruction 2. doc</span>
                  </span>
                  <span className="homework3-text096">
                    <span>255KB</span>
                  </span>
                </div>
                <img
                  alt="morevertical6546"
                  src="/external/morevertical6546-0z6h.svg"
                  className="homework3-morevertical2"
                />
              </div>
              <div className="homework3-group271">
                <div className="homework3-group3493">
                  <div className="homework3-group253">
                    <div className="homework3-group243">
                      <img
                        alt="Vector6546"
                        src="/external/vector6546-1jag.svg"
                        className="homework3-vector15"
                      />
                      <img
                        alt="Vector6546"
                        src="/external/vector6546-2pfs.svg"
                        className="homework3-vector16"
                      />
                    </div>
                  </div>
                  <span className="homework3-text098">
                    <span>.PNG</span>
                  </span>
                </div>
                <div className="homework3-group3503">
                  <span className="homework3-text100">
                    <span>Kano model 1. doc</span>
                  </span>
                  <span className="homework3-text102">
                    <span>255KB</span>
                  </span>
                </div>
                <img
                  alt="morevertical6546"
                  src="/external/morevertical6546-09a.svg"
                  className="homework3-morevertical3"
                />
              </div>
              <div className="homework3-group272">
                <div className="homework3-group3494">
                  <div className="homework3-group254">
                    <div className="homework3-group244">
                      <img
                        alt="Vector6546"
                        src="/external/vector6546-hw8.svg"
                        className="homework3-vector17"
                      />
                      <img
                        alt="Vector6546"
                        src="/external/vector6546-eeho.svg"
                        className="homework3-vector18"
                      />
                    </div>
                  </div>
                  <span className="homework3-text104">
                    <span>.PNG</span>
                  </span>
                </div>
                <div className="homework3-group3504">
                  <span className="homework3-text106">
                    <span>Kano model 2. doc</span>
                  </span>
                  <span className="homework3-text108">
                    <span>255KB</span>
                  </span>
                </div>
                <img
                  alt="morevertical6546"
                  src="/external/morevertical6546-3fi7.svg"
                  className="homework3-morevertical4"
                />
              </div>
              <div className="homework3-group273">
                <div className="homework3-group3495">
                  <div className="homework3-group255">
                    <div className="homework3-group245">
                      <img
                        alt="Vector6546"
                        src="/external/vector6546-stnb.svg"
                        className="homework3-vector19"
                      />
                      <img
                        alt="Vector6546"
                        src="/external/vector6546-a2mo.svg"
                        className="homework3-vector20"
                      />
                    </div>
                  </div>
                  <span className="homework3-text110">
                    <span>.PNG</span>
                  </span>
                </div>
                <div className="homework3-group3505">
                  <span className="homework3-text112">
                    <span>Kano model 3. doc</span>
                  </span>
                  <span className="homework3-text114">
                    <span>255KB</span>
                  </span>
                </div>
                <img
                  alt="morevertical6546"
                  src="/external/morevertical6546-yk41.svg"
                  className="homework3-morevertical5"
                />
              </div>
              <div className="homework3-group370">
                <div className="homework3-frame77">
                  <div className="homework3-frame76">
                    <div className="homework3-remixiconslinebusinessbarchartline">
                      <div className="homework3-group08">
                        <img
                          alt="VectorI654"
                          src="/external/vectori654-mox.svg"
                          className="homework3-vector21"
                        />
                      </div>
                    </div>
                    <span className="homework3-text116">
                      <span>Student</span>
                    </span>
                  </div>
                  <span className="homework3-text118">
                    <span>HW/Score</span>
                  </span>
                </div>
                <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
                <div className="homework3-group351">
                  <span className="homework3-text120">
                    <span>Rating</span>
                  </span>
                  <div className="homework3-group138">
                    <div className="homework3-frame173">
                      <span className="homework3-text122">
                        <span>See all</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="homework3-group358">
                  <img
                    alt="Ellipse106546"
                    src="/external/ellipse106546-lkyc-200h.png"
                    className="homework3-ellipse10"
                  />
                  <div className="homework3-group357">
                    <span className="homework3-text124">
                      <span>Score</span>
                    </span>
                    <span className="homework3-text126">
                      <span>200</span>
                    </span>
                  </div>
                  <img
                    alt="Ellipse116546"
                    src="/external/ellipse116546-lckb-200w.png"
                    className="homework3-ellipse11"
                  />
                </div>
                <span className="homework3-text128">
                  <span>Place</span>
                </span>
                <div className="homework3-group355">
                  <span className="homework3-text130">
                    <span>Homeworks</span>
                  </span>
                  <span className="homework3-text132">
                    <span className="homework3-text133">02</span>
                    <span>/07</span>
                  </span>
                </div>
                <div className="homework3-group359">
                  <span className="homework3-text135">
                    <span>14</span>
                  </span>
                  <div className="homework3-remixiconslinesystemarrowupline">
                    <div className="homework3-group09">
                      <img
                        alt="VectorI654"
                        src="/external/vectori654-wbi.svg"
                        className="homework3-vector22"
                      />
                    </div>
                  </div>
                </div>
                <img
                  alt="Rectangle906546"
                  src="/external/rectangle906546-a6vs-200w.png"
                  className="homework3-rectangle90"
                />
              </div>
            </div>
          </div>
          <div className="homework3-frame-footer1">
            <div className="homework3-content-wrapper1">
              <div className="homework3-content-wrapper2">
                <span className="homework3-text137 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="homework3-text139 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="homework3-text141 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="homework3-text143 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="homework3-text145 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homework3
