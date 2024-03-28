import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './resources.css'

const Resources = (props) => {
  return (
    <div className="resources-container">
      <Helmet>
        <title>resources</title>
      </Helmet>
      <div className="resources-mycourses">
        <div className="resources-frame-admin-panel-menu1">
          <div className="resources-frame-admin-panel-menu11">
            <div className="resources-logo">
              <div className="resources-logo1">
                <div className="resources-frame1000002598">
                  <img
                    src="/external/containerlogo6544-wbd-200h.png"
                    alt="ContainerLogo6544"
                    className="resources-container-logo"
                  />
                  <div className="resources-book4">
                    <div className="resources-group">
                      <img
                        src="/external/vectori654-jsgm.svg"
                        alt="VectorI654"
                        className="resources-vector"
                      />
                      <img
                        src="/external/vectori654-i65o.svg"
                        alt="VectorI654"
                        className="resources-vector01"
                      />
                      <img
                        src="/external/vectori654-qakf.svg"
                        alt="VectorI654"
                        className="resources-vector02"
                      />
                      <img
                        src="/external/vectori654-uvo.svg"
                        alt="VectorI654"
                        className="resources-vector03"
                      />
                    </div>
                  </div>
                </div>
                <div className="resources-frame-title">
                  <span className="resources-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="resources-frame-menu">
              <div className="resources-menu-items">
                <Link to="/resources" className="resources-navlink">
                  <div className="resources-menu-item-inline-navigation-item">
                    <img
                      src="/external/icondashboardoutlinedi654-yrxf.svg"
                      alt="IconDashboardOutlinedI654"
                      className="resources-icon-dashboard-outlined"
                    />
                    <span className="resources-text002 LightBaseBaseNormal">
                      <span>Dashboard</span>
                    </span>
                  </div>
                </Link>
                <Link to="/resources" className="resources-navlink1">
                  <div className="resources-menu-item-inline-navigation-item1">
                    <img
                      src="/external/icondatabaseoutlinedi654-p9f.svg"
                      alt="IconDatabaseOutlinedI654"
                      className="resources-icon-database-outlined"
                    />
                    <span className="resources-text004 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                </Link>
                <Link to="/resources" className="resources-navlink2">
                  <div className="resources-menu-item-inline-navigation-item2">
                    <img
                      src="/external/iconbarchartoutlinedi654-w14z.svg"
                      alt="IconBarChartOutlinedI654"
                      className="resources-icon-bar-chart-outlined"
                    />
                    <span className="resources-text006 LightBaseBaseNormal">
                      <span>Statistics</span>
                    </span>
                  </div>
                </Link>
                <Link to="/resources" className="resources-navlink3">
                  <div className="resources-menu-item-inline-navigation-item3">
                    <img
                      src="/external/iconcalendaroutlinedi654-aexi.svg"
                      alt="IconCalendarOutlinedI654"
                      className="resources-icon-calendar-outlined"
                    />
                    <span className="resources-text008 LightBaseBaseNormal">
                      <span>Calendar</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="resources-menu-submenu">
                <Link to="/resources" className="resources-navlink4">
                  <div className="resources-menu-item-inline-submenu-title">
                    <img
                      src="/external/iconfiletextoutlinedi654-2hsg.svg"
                      alt="IconFileTextOutlinedI654"
                      className="resources-icon-file-text-outlined"
                    />
                    <span className="resources-text010 LightBaseBaseNormal">
                      <span>Invoice</span>
                    </span>
                    <img
                      src="/external/icondownoutlinedi654-fw1.svg"
                      alt="IconDownOutlinedI654"
                      className="resources-icon-down-outlined"
                    />
                  </div>
                </Link>
              </div>
              <div className="resources-menu-items1">
                <Link to="/resources" className="resources-navlink5">
                  <div className="resources-menu-item-inline-navigation-item4">
                    <img
                      src="/external/iconsettingoutlinedi654-ksqc.svg"
                      alt="IconSettingOutlinedI654"
                      className="resources-icon-setting-outlined"
                    />
                    <span className="resources-text012 LightBaseBaseNormal">
                      <span>Settings</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="resources-content-wrapper">
          <div className="resources-frame-header">
            <div className="resources-icon-search">
              <button className="resources-frame-button">
                <div className="resources-content">
                  <img
                    src="/external/iconmenufoldoutlinedi654-oaga.svg"
                    alt="IconMenuFoldOutlinedI654"
                    className="resources-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="resources-frame-input-search">
                <div className="resources-input-wrapper">
                  <div className="resources-frame-input-basic">
                    <div className="resources-content1">
                      <span className="resources-text014 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="resources-frame-button1">
                  <div className="resources-content2">
                    <img
                      src="/external/iconsearchoutlinedi654-0gl5.svg"
                      alt="IconSearchOutlinedI654"
                      className="resources-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="resources-avatar-button">
              <button className="resources-frame-button2">
                <div className="resources-content3">
                  <img
                    src="/external/iconglobaloutlinedi654-hm4.svg"
                    alt="IconGlobalOutlinedI654"
                    className="resources-icon-global-outlined"
                  />
                  <span className="resources-text016 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="resources-notifications">
                <img
                  src="/external/iconbelloutlinedi654-y8jr.svg"
                  alt="IconBellOutlinedI654"
                  className="resources-icon-bell-outlined"
                />
                <div className="resources-content4">
                  <div className="resources-frame-badge-basic">
                    <span className="resources-text018 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/resources" className="resources-navlink6">
                <div className="resources-frame-avatar">
                  <img
                    src="/external/iconuseroutlinedi654-l0fa.svg"
                    alt="IconUserOutlinedI654"
                    className="resources-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="resources-frame-card1">
            <button className="resources-header-button">
              <div className="resources-header-links">
                <div className="resources-frame-breadcrumb">
                  <div className="resources-breadcrumb-link">
                    <span className="resources-text020 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                  <div className="resources-breadcrumb-separator">
                    <div className="resources-content5">
                      <span className="resources-text022 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="resources-breadcrumb-link1">
                    <span className="resources-text023 LightBaseBaseNormal">
                      <span>Cinema 4d</span>
                    </span>
                  </div>
                </div>
                <div className="resources-frame-title1">
                  <span className="resources-text025 LightHeadingHeading2">
                    <span>Cinema 4d</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="resources-frame295">
              <div className="resources-frame1">
                <div className="resources-remixiconslinesystemapps2line">
                  <div className="resources-group01"></div>
                </div>
                <img
                  src="/external/rectangle356544-jjcn.svg"
                  alt="Rectangle356544"
                  className="resources-rectangle35"
                />
                <span className="resources-text027">
                  <span className="resources-text028">
                    Courses /
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="resources-text029">
                    Cinema 4D /
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Module 6</span>
                </span>
                <div className="resources-frame107">
                  <div className="resources-remixiconslinesystemapps2line1">
                    <div className="resources-group02"></div>
                  </div>
                  <div className="resources-frame80"></div>
                  <img
                    src="/external/rectangle356544-h7ws-300w.png"
                    alt="Rectangle356544"
                    className="resources-rectangle351"
                  />
                  <img
                    src="/external/rectangle366544-h8m-400h.png"
                    alt="Rectangle366544"
                    className="resources-rectangle36"
                  />
                  <div className="resources-group85">
                    <span className="resources-text031">
                      <span>Module 6 Completion</span>
                    </span>
                    <div className="resources-group80">
                      <div className="resources-frame29">
                        <span className="resources-text033">
                          <span className="resources-text034">02/</span>
                          <span>07</span>
                        </span>
                        <span className="resources-text036">
                          <span>35% Completed</span>
                        </span>
                      </div>
                      <div className="resources-group7">
                        <img
                          src="/external/rectangle246544-b4fm-200h.png"
                          alt="Rectangle246544"
                          className="resources-rectangle24"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="resources-remixiconslinesystemcheckline">
                    <div className="resources-group03"></div>
                  </div>
                  <div className="resources-frame82">
                    <span className="resources-text038">
                      <span>Lesson 3. Creation project</span>
                    </span>
                    <div className="resources-frame11">
                      <div className="resources-remixiconslinesystemlock2line">
                        <div className="resources-group04">
                          <img
                            src="/external/vectori654-6uip.svg"
                            alt="VectorI654"
                            className="resources-vector04"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resources-frame83">
                    <span className="resources-text040">
                      <span>
                        Lesson 4. Elaboration of textures and contour adjustment
                      </span>
                    </span>
                    <div className="resources-frame111">
                      <div className="resources-remixiconslinesystemlock2line1">
                        <div className="resources-group05">
                          <img
                            src="/external/vectori654-8gx.svg"
                            alt="VectorI654"
                            className="resources-vector05"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resources-frame84">
                    <span className="resources-text042">
                      <span>
                        Lesson 5. Development of detailed objects and
                        high-quality study of structures
                      </span>
                    </span>
                    <div className="resources-frame112">
                      <div className="resources-remixiconslinesystemlock2line2">
                        <div className="resources-group06">
                          <img
                            src="/external/vectori654-qp3.svg"
                            alt="VectorI654"
                            className="resources-vector06"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src="/external/line56544-pf4p.svg"
                    alt="Line56544"
                    className="resources-line5"
                  />
                  <img
                    src="/external/line66544-naai.svg"
                    alt="Line66544"
                    className="resources-line6"
                  />
                  <div className="resources-remixiconslinesystemcheckline1">
                    <div className="resources-group07">
                      <img
                        src="/external/vectori654-y6ih.svg"
                        alt="VectorI654"
                        className="resources-vector07"
                      />
                    </div>
                  </div>
                  <div className="resources-remixiconslinesystemcheckline2">
                    <div className="resources-group08">
                      <img
                        src="/external/vectori654-v57.svg"
                        alt="VectorI654"
                        className="resources-vector08"
                      />
                    </div>
                  </div>
                </div>
                <span className="resources-text044">
                  <span>View my notes</span>
                </span>
                <img
                  src="/external/rectangle196544-ud02-200w.png"
                  alt="Rectangle196544"
                  className="resources-rectangle19"
                />
                <div className="resources-frame134">
                  <img
                    src="/external/rectangle246544-nojd-200h.png"
                    alt="Rectangle246544"
                    className="resources-rectangle241"
                  />
                  <img
                    src="/external/rectangle486544-ahtq-200h.png"
                    alt="Rectangle486544"
                    className="resources-rectangle48"
                  />
                  <img
                    src="/external/rectangle496544-60id-200h.png"
                    alt="Rectangle496544"
                    className="resources-rectangle49"
                  />
                  <img
                    src="/external/rectangle506544-62yd-200h.png"
                    alt="Rectangle506544"
                    className="resources-rectangle50"
                  />
                  <img
                    src="/external/rectangle526544-k10o-200h.png"
                    alt="Rectangle526544"
                    className="resources-rectangle52"
                  />
                </div>
                <div className="resources-frame124"></div>
                <img
                  src="/external/line56544-2nrnc.svg"
                  alt="Line56544"
                  className="resources-line51"
                />
                <div className="resources-frame3">
                  <div className="resources-frame31">
                    <div className="resources-remixiconslinesystemloginboxline">
                      <div className="resources-group09"></div>
                    </div>
                  </div>
                  <div className="resources-frame32">
                    <div className="resources-remixiconslinesystemquestionline">
                      <div className="resources-group10"></div>
                    </div>
                  </div>
                </div>
                <div className="resources-frame87">
                  <div className="resources-frame81">
                    <span className="resources-text046">
                      <span>About</span>
                    </span>
                    <span className="resources-text048">
                      <span>Additional materials</span>
                    </span>
                    <span className="resources-text050">
                      <span>Resources</span>
                    </span>
                    <span className="resources-text052">
                      <span>Discussion</span>
                    </span>
                    <span className="resources-text054">
                      <span>Transcripts</span>
                    </span>
                  </div>
                  <div className="resources-group851">
                    <div className="resources-component1">
                      <img
                        src="/external/rectangle276544-alp-200h.png"
                        alt="Rectangle276544"
                        className="resources-rectangle27"
                      />
                      <span className="resources-text056">
                        <span>Next Step</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  src="/external/rectangle256544-j45f-200h.png"
                  alt="Rectangle256544"
                  className="resources-rectangle25"
                />
                <img
                  src="/external/line46544-n5p.svg"
                  alt="Line46544"
                  className="resources-line4"
                />
                <div className="resources-frame841">
                  <div className="resources-frame133">
                    <div className="resources-group83">
                      <img
                        src="/external/line56544-hlql.svg"
                        alt="Line56544"
                        className="resources-line52"
                      />
                      <div className="resources-frame821">
                        <span className="resources-text058">
                          <span>Lesson 1. Introduction</span>
                        </span>
                        <div className="resources-frame113">
                          <div className="resources-remixiconslinesystemarrowrightsline">
                            <div className="resources-group11">
                              <img
                                src="/external/vectori654-hvgi.svg"
                                alt="VectorI654"
                                className="resources-vector09"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="resources-frame132">
                        <div className="resources-frame822">
                          <div className="resources-frame823">
                            <span className="resources-text060">
                              <span>
                                1.1. Basic tools and built-in animation
                                capabilities
                              </span>
                            </span>
                            <div className="resources-frame130">
                              <span className="resources-text062">
                                <span>1.2. Work with lighting</span>
                              </span>
                            </div>
                            <span className="resources-text064">
                              <span>
                                1.3. Adding volume to an image through
                                chiaroscuro adjustment
                              </span>
                            </span>
                            <span className="resources-text066">
                              <span>1.4. Test №1</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resources-group831">
                    <img
                      src="/external/line56544-6pg.svg"
                      alt="Line56544"
                      className="resources-line53"
                    />
                    <div className="resources-frame824">
                      <span className="resources-text068">
                        <span>
                          Lesson 2. Fundamentals of animation and rendering
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                      <div className="resources-frame114">
                        <div className="resources-remixiconslinesystemarrowrightsline1">
                          <div className="resources-group12">
                            <img
                              src="/external/vectori654-kdte.svg"
                              alt="VectorI654"
                              className="resources-vector10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="resources-frame1321">
                      <div className="resources-frame825">
                        <div className="resources-frame826">
                          <span className="resources-text070">
                            <span>
                              1.1. Basic tools and built-in animation
                              capabilities
                            </span>
                          </span>
                          <div className="resources-frame1301">
                            <span className="resources-text072">
                              <span>1.2. Work with lighting</span>
                            </span>
                          </div>
                          <span className="resources-text074">
                            <span>
                              1.3. Adding volume to an image through chiaroscuro
                              adjustment
                            </span>
                          </span>
                          <span className="resources-text076">
                            <span>1.4. Test №1</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="resources-frame392">
                  <span className="resources-text078 h3Lms">
                    <span>Files</span>
                  </span>
                  <div className="resources-frame273">
                    <div className="resources-group269">
                      <div className="resources-file3line11">
                        <div className="resources-group25">
                          <div className="resources-group24">
                            <img
                              src="/external/vector6544-a8ml.svg"
                              alt="Vector6544"
                              className="resources-vector11"
                            />
                            <img
                              src="/external/vector6544-3c1t.svg"
                              alt="Vector6544"
                              className="resources-vector12"
                            />
                          </div>
                        </div>
                        <span className="resources-text080">
                          <span>.DOC</span>
                        </span>
                      </div>
                      <div className="resources-frame2731">
                        <span className="resources-text082 bodyBold-14">
                          <span>Instruction. doc</span>
                        </span>
                        <span className="resources-text084 body-14">
                          <span>255KB</span>
                        </span>
                      </div>
                      <img
                        src="/external/morevertical6544-fzta.svg"
                        alt="morevertical6544"
                        className="resources-morevertical"
                      />
                    </div>
                    <div className="resources-group270">
                      <div className="resources-file3line111">
                        <div className="resources-group251">
                          <div className="resources-group241">
                            <img
                              src="/external/vector6544-0pyk.svg"
                              alt="Vector6544"
                              className="resources-vector13"
                            />
                            <img
                              src="/external/vector6544-orjl.svg"
                              alt="Vector6544"
                              className="resources-vector14"
                            />
                          </div>
                        </div>
                        <span className="resources-text086">
                          <span>.PNG</span>
                        </span>
                      </div>
                      <div className="resources-frame2732">
                        <span className="resources-text088 bodyBold-14">
                          <span>Cube. png</span>
                        </span>
                        <span className="resources-text090 body-14">
                          <span>885KB</span>
                        </span>
                      </div>
                      <img
                        src="/external/morevertical6544-pfha.svg"
                        alt="morevertical6544"
                        className="resources-morevertical1"
                      />
                    </div>
                    <div className="resources-group272">
                      <div className="resources-file3line112">
                        <div className="resources-group252">
                          <div className="resources-group242">
                            <img
                              src="/external/vector6544-qvl.svg"
                              alt="Vector6544"
                              className="resources-vector15"
                            />
                            <img
                              src="/external/vector6544-jdlm.svg"
                              alt="Vector6544"
                              className="resources-vector16"
                            />
                          </div>
                        </div>
                        <span className="resources-text092">
                          <span>.EPS</span>
                        </span>
                      </div>
                      <div className="resources-frame2733">
                        <span className="resources-text094 bodyBold-14">
                          <span>Vector-pattern.eps</span>
                        </span>
                        <span className="resources-text096 body-14">
                          <span>40MB</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="resources-group86">
                <span className="resources-text098">
                  <span>1.2. Work with lighting</span>
                </span>
                <div className="resources-group79">
                  <img
                    src="/external/rectangle466544-er7i-400h.png"
                    alt="Rectangle466544"
                    className="resources-rectangle46"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="resources-frame-footer1">
            <div className="resources-content-wrapper1">
              <div className="resources-content-wrapper2">
                <span className="resources-text100 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="resources-text102 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="resources-text104 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="resources-text106 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="resources-text108 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
