import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './transcripts.css'

const Transcripts = (props) => {
  return (
    <div className="transcripts-container">
      <Helmet>
        <title>transcripts</title>
      </Helmet>
      <div className="transcripts-mycourses">
        <div className="transcripts-frame-admin-panel-menu1">
          <div className="transcripts-frame-admin-panel-menu11">
            <div className="transcripts-logo">
              <div className="transcripts-logo1">
                <div className="transcripts-frame1000002598">
                  <img
                    src="/external/containerlogo6544-w83-200h.png"
                    alt="ContainerLogo6544"
                    className="transcripts-container-logo"
                  />
                  <div className="transcripts-book4">
                    <div className="transcripts-group">
                      <img
                        src="/external/vectori654-jn7s.svg"
                        alt="VectorI654"
                        className="transcripts-vector"
                      />
                      <img
                        src="/external/vectori654-mq09.svg"
                        alt="VectorI654"
                        className="transcripts-vector01"
                      />
                      <img
                        src="/external/vectori654-8gvp.svg"
                        alt="VectorI654"
                        className="transcripts-vector02"
                      />
                      <img
                        src="/external/vectori654-qduc.svg"
                        alt="VectorI654"
                        className="transcripts-vector03"
                      />
                    </div>
                  </div>
                </div>
                <div className="transcripts-frame-title">
                  <span className="transcripts-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="transcripts-frame-menu">
              <div className="transcripts-menu-items">
                <Link to="/transcripts" className="transcripts-navlink">
                  <div className="transcripts-menu-item-inline-navigation-item">
                    <img
                      src="/external/icondashboardoutlinedi654-20ch.svg"
                      alt="IconDashboardOutlinedI654"
                      className="transcripts-icon-dashboard-outlined"
                    />
                    <span className="transcripts-text002 LightBaseBaseNormal">
                      <span>Dashboard</span>
                    </span>
                  </div>
                </Link>
                <Link to="/transcripts" className="transcripts-navlink1">
                  <div className="transcripts-menu-item-inline-navigation-item1">
                    <img
                      src="/external/icondatabaseoutlinedi654-w1t8.svg"
                      alt="IconDatabaseOutlinedI654"
                      className="transcripts-icon-database-outlined"
                    />
                    <span className="transcripts-text004 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                </Link>
                <Link to="/transcripts" className="transcripts-navlink2">
                  <div className="transcripts-menu-item-inline-navigation-item2">
                    <img
                      src="/external/iconbarchartoutlinedi654-cl2h.svg"
                      alt="IconBarChartOutlinedI654"
                      className="transcripts-icon-bar-chart-outlined"
                    />
                    <span className="transcripts-text006 LightBaseBaseNormal">
                      <span>Statistics</span>
                    </span>
                  </div>
                </Link>
                <Link to="/transcripts" className="transcripts-navlink3">
                  <div className="transcripts-menu-item-inline-navigation-item3">
                    <img
                      src="/external/iconcalendaroutlinedi654-9do.svg"
                      alt="IconCalendarOutlinedI654"
                      className="transcripts-icon-calendar-outlined"
                    />
                    <span className="transcripts-text008 LightBaseBaseNormal">
                      <span>Calendar</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="transcripts-menu-submenu">
                <Link to="/transcripts" className="transcripts-navlink4">
                  <div className="transcripts-menu-item-inline-submenu-title">
                    <img
                      src="/external/iconfiletextoutlinedi654-sd8.svg"
                      alt="IconFileTextOutlinedI654"
                      className="transcripts-icon-file-text-outlined"
                    />
                    <span className="transcripts-text010 LightBaseBaseNormal">
                      <span>Invoice</span>
                    </span>
                    <img
                      src="/external/icondownoutlinedi654-t8in.svg"
                      alt="IconDownOutlinedI654"
                      className="transcripts-icon-down-outlined"
                    />
                  </div>
                </Link>
              </div>
              <div className="transcripts-menu-items1">
                <Link to="/transcripts" className="transcripts-navlink5">
                  <div className="transcripts-menu-item-inline-navigation-item4">
                    <img
                      src="/external/iconsettingoutlinedi654-90uu.svg"
                      alt="IconSettingOutlinedI654"
                      className="transcripts-icon-setting-outlined"
                    />
                    <span className="transcripts-text012 LightBaseBaseNormal">
                      <span>Settings</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="transcripts-content-wrapper">
          <div className="transcripts-frame-header">
            <div className="transcripts-icon-search">
              <button className="transcripts-frame-button">
                <div className="transcripts-content">
                  <img
                    src="/external/iconmenufoldoutlinedi654-0zz2.svg"
                    alt="IconMenuFoldOutlinedI654"
                    className="transcripts-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="transcripts-frame-input-search">
                <div className="transcripts-input-wrapper">
                  <div className="transcripts-frame-input-basic">
                    <div className="transcripts-content1">
                      <span className="transcripts-text014 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="transcripts-frame-button1">
                  <div className="transcripts-content2">
                    <img
                      src="/external/iconsearchoutlinedi654-bz4f.svg"
                      alt="IconSearchOutlinedI654"
                      className="transcripts-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="transcripts-avatar-button">
              <button className="transcripts-frame-button2">
                <div className="transcripts-content3">
                  <img
                    src="/external/iconglobaloutlinedi654-4z1l.svg"
                    alt="IconGlobalOutlinedI654"
                    className="transcripts-icon-global-outlined"
                  />
                  <span className="transcripts-text016 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="transcripts-notifications">
                <img
                  src="/external/iconbelloutlinedi654-npq.svg"
                  alt="IconBellOutlinedI654"
                  className="transcripts-icon-bell-outlined"
                />
                <div className="transcripts-content4">
                  <div className="transcripts-frame-badge-basic">
                    <span className="transcripts-text018 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/transcripts" className="transcripts-navlink6">
                <div className="transcripts-frame-avatar">
                  <img
                    src="/external/iconuseroutlinedi654-2qgc.svg"
                    alt="IconUserOutlinedI654"
                    className="transcripts-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="transcripts-frame-card1">
            <button className="transcripts-header-button">
              <div className="transcripts-header-links">
                <div className="transcripts-frame-breadcrumb">
                  <div className="transcripts-breadcrumb-link">
                    <span className="transcripts-text020 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                  <div className="transcripts-breadcrumb-separator">
                    <div className="transcripts-content5">
                      <span className="transcripts-text022 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="transcripts-breadcrumb-link1">
                    <span className="transcripts-text023 LightBaseBaseNormal">
                      <span>Cinema 4d</span>
                    </span>
                  </div>
                </div>
                <div className="transcripts-frame-title1">
                  <span className="transcripts-text025 LightHeadingHeading2">
                    <span>Cinema 4d</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="transcripts-frame295">
              <div className="transcripts-frame1">
                <div className="transcripts-remixiconslinesystemapps2line">
                  <div className="transcripts-group01"></div>
                </div>
                <img
                  src="/external/rectangle356544-wdks.svg"
                  alt="Rectangle356544"
                  className="transcripts-rectangle35"
                />
                <span className="transcripts-text027">
                  <span className="transcripts-text028">
                    Courses /
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="transcripts-text029">
                    Cinema 4D /
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Module 6</span>
                </span>
                <div className="transcripts-frame107">
                  <div className="transcripts-remixiconslinesystemapps2line1">
                    <div className="transcripts-group02"></div>
                  </div>
                  <div className="transcripts-frame80"></div>
                  <img
                    src="/external/rectangle356544-pfuw-300w.png"
                    alt="Rectangle356544"
                    className="transcripts-rectangle351"
                  />
                  <img
                    src="/external/rectangle366544-8jx-400h.png"
                    alt="Rectangle366544"
                    className="transcripts-rectangle36"
                  />
                  <div className="transcripts-group85">
                    <span className="transcripts-text031">
                      <span>Module 6 Completion</span>
                    </span>
                    <div className="transcripts-group80">
                      <div className="transcripts-frame29">
                        <span className="transcripts-text033">
                          <span className="transcripts-text034">02/</span>
                          <span>07</span>
                        </span>
                        <span className="transcripts-text036">
                          <span>35% Completed</span>
                        </span>
                      </div>
                      <div className="transcripts-group7">
                        <img
                          src="/external/rectangle246544-ohnk-200h.png"
                          alt="Rectangle246544"
                          className="transcripts-rectangle24"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="transcripts-remixiconslinesystemcheckline">
                    <div className="transcripts-group03"></div>
                  </div>
                  <div className="transcripts-frame82">
                    <span className="transcripts-text038">
                      <span>Lesson 3. Creation project</span>
                    </span>
                    <div className="transcripts-frame11">
                      <div className="transcripts-remixiconslinesystemlock2line">
                        <div className="transcripts-group04">
                          <img
                            src="/external/vectori654-usjq.svg"
                            alt="VectorI654"
                            className="transcripts-vector04"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transcripts-frame83">
                    <span className="transcripts-text040">
                      <span>
                        Lesson 4. Elaboration of textures and contour adjustment
                      </span>
                    </span>
                    <div className="transcripts-frame111">
                      <div className="transcripts-remixiconslinesystemlock2line1">
                        <div className="transcripts-group05">
                          <img
                            src="/external/vectori654-72i.svg"
                            alt="VectorI654"
                            className="transcripts-vector05"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transcripts-frame84">
                    <span className="transcripts-text042">
                      <span>
                        Lesson 5. Development of detailed objects and
                        high-quality study of structures
                      </span>
                    </span>
                    <div className="transcripts-frame112">
                      <div className="transcripts-remixiconslinesystemlock2line2">
                        <div className="transcripts-group06">
                          <img
                            src="/external/vectori654-358.svg"
                            alt="VectorI654"
                            className="transcripts-vector06"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src="/external/line56544-p8n5h.svg"
                    alt="Line56544"
                    className="transcripts-line5"
                  />
                  <img
                    src="/external/line66544-i0az.svg"
                    alt="Line66544"
                    className="transcripts-line6"
                  />
                  <div className="transcripts-remixiconslinesystemcheckline1">
                    <div className="transcripts-group07">
                      <img
                        src="/external/vectori654-g1b.svg"
                        alt="VectorI654"
                        className="transcripts-vector07"
                      />
                    </div>
                  </div>
                  <div className="transcripts-remixiconslinesystemcheckline2">
                    <div className="transcripts-group08">
                      <img
                        src="/external/vectori654-wxo5.svg"
                        alt="VectorI654"
                        className="transcripts-vector08"
                      />
                    </div>
                  </div>
                </div>
                <span className="transcripts-text044">
                  <span>View my notes</span>
                </span>
                <img
                  src="/external/rectangle196544-bunq-200w.png"
                  alt="Rectangle196544"
                  className="transcripts-rectangle19"
                />
                <div className="transcripts-frame134">
                  <img
                    src="/external/rectangle246544-9pgi-200h.png"
                    alt="Rectangle246544"
                    className="transcripts-rectangle241"
                  />
                  <img
                    src="/external/rectangle486544-i7f7-200h.png"
                    alt="Rectangle486544"
                    className="transcripts-rectangle48"
                  />
                  <img
                    src="/external/rectangle496544-x45c-200h.png"
                    alt="Rectangle496544"
                    className="transcripts-rectangle49"
                  />
                  <img
                    src="/external/rectangle506544-rwwdj-200h.png"
                    alt="Rectangle506544"
                    className="transcripts-rectangle50"
                  />
                  <img
                    src="/external/rectangle526544-kan-200h.png"
                    alt="Rectangle526544"
                    className="transcripts-rectangle52"
                  />
                </div>
                <div className="transcripts-frame124"></div>
                <img
                  src="/external/line56544-zgt.svg"
                  alt="Line56544"
                  className="transcripts-line51"
                />
                <div className="transcripts-frame3">
                  <div className="transcripts-frame31">
                    <div className="transcripts-remixiconslinesystemloginboxline">
                      <div className="transcripts-group09"></div>
                    </div>
                  </div>
                  <div className="transcripts-frame32">
                    <div className="transcripts-remixiconslinesystemquestionline">
                      <div className="transcripts-group10"></div>
                    </div>
                  </div>
                </div>
                <div className="transcripts-frame135">
                  <div className="transcripts-frame81">
                    <span className="transcripts-text046">
                      <span>About</span>
                    </span>
                    <span className="transcripts-text048">
                      <span>Additional materials</span>
                    </span>
                    <span className="transcripts-text050">
                      <span>Resources</span>
                    </span>
                    <span className="transcripts-text052">
                      <span>Discussions</span>
                    </span>
                    <span className="transcripts-text054">
                      <span>Transcripts</span>
                    </span>
                  </div>
                  <div className="transcripts-group84">
                    <div className="transcripts-component1">
                      <img
                        src="/external/rectangle276545-6nejs-200h.png"
                        alt="Rectangle276545"
                        className="transcripts-rectangle27"
                      />
                      <span className="transcripts-text056">
                        <span>Next Step</span>
                      </span>
                    </div>
                  </div>
                  <img
                    src="/external/rectangle256545-hcus-200h.png"
                    alt="Rectangle256545"
                    className="transcripts-rectangle25"
                  />
                </div>
                <img
                  src="/external/line46544-1jz.svg"
                  alt="Line46544"
                  className="transcripts-line4"
                />
                <div className="transcripts-frame841">
                  <div className="transcripts-frame133">
                    <div className="transcripts-group83">
                      <img
                        src="/external/line56544-514l.svg"
                        alt="Line56544"
                        className="transcripts-line52"
                      />
                      <div className="transcripts-frame821">
                        <span className="transcripts-text058">
                          <span>Lesson 1. Introduction</span>
                        </span>
                        <div className="transcripts-frame113">
                          <div className="transcripts-remixiconslinesystemarrowrightsline">
                            <div className="transcripts-group11">
                              <img
                                src="/external/vectori654-prp.svg"
                                alt="VectorI654"
                                className="transcripts-vector09"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="transcripts-frame132">
                        <div className="transcripts-frame822">
                          <div className="transcripts-frame823">
                            <span className="transcripts-text060">
                              <span>
                                1.1. Basic tools and built-in animation
                                capabilities
                              </span>
                            </span>
                            <div className="transcripts-frame130">
                              <span className="transcripts-text062">
                                <span>1.2. Work with lighting</span>
                              </span>
                            </div>
                            <span className="transcripts-text064">
                              <span>
                                1.3. Adding volume to an image through
                                chiaroscuro adjustment
                              </span>
                            </span>
                            <span className="transcripts-text066">
                              <span>1.4. Test №1</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transcripts-group831">
                    <img
                      src="/external/line56544-fxn3.svg"
                      alt="Line56544"
                      className="transcripts-line53"
                    />
                    <div className="transcripts-frame824">
                      <span className="transcripts-text068">
                        <span>
                          Lesson 2. Fundamentals of animation and rendering
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                      <div className="transcripts-frame114">
                        <div className="transcripts-remixiconslinesystemarrowrightsline1">
                          <div className="transcripts-group12">
                            <img
                              src="/external/vectori654-p6pv.svg"
                              alt="VectorI654"
                              className="transcripts-vector10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transcripts-frame1321">
                      <div className="transcripts-frame825">
                        <div className="transcripts-frame826">
                          <span className="transcripts-text070">
                            <span>
                              1.1. Basic tools and built-in animation
                              capabilities
                            </span>
                          </span>
                          <div className="transcripts-frame1301">
                            <span className="transcripts-text072">
                              <span>1.2. Work with lighting</span>
                            </span>
                          </div>
                          <span className="transcripts-text074">
                            <span>
                              1.3. Adding volume to an image through chiaroscuro
                              adjustment
                            </span>
                          </span>
                          <span className="transcripts-text076">
                            <span>1.4. Test №1</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="transcripts-text078 h3Lms">
                  <span>Video transcript</span>
                </span>
                <span className="transcripts-text080">
                  <span>00:05</span>
                </span>
                <span className="transcripts-text082">
                  <span>00:55</span>
                </span>
                <span className="transcripts-text084">
                  <span>01:35</span>
                </span>
                <span className="transcripts-text086 body-14">
                  <span>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                    et. Sunt qui esse pariatur duis deserunt mollit dolore
                    cillum minim tempor enim. Elit aute irure tempor cupidatat
                    incididunt sint deserunt ut voluptate aute id deserunt nisi.
                  </span>
                </span>
                <span className="transcripts-text088 body-14">
                  <span>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                    et. Sunt qui esse pariatur duis deserunt mollit dolore
                    cillum minim tempor enim.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="transcripts-text090 body-14">
                  <span>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                    et. Sunt qui esse pariatur duis deserunt mollit dolore
                    cillum minim tempor enim. Elit aute irure tempor cupidatat
                    incididunt sint deserunt ut voluptate aute id deserunt nisi.
                  </span>
                </span>
              </div>
              <div className="transcripts-group86">
                <span className="transcripts-text092">
                  <span>1.2. Work with lighting</span>
                </span>
                <div className="transcripts-group79">
                  <img
                    src="/external/rectangle466544-5amy-400h.png"
                    alt="Rectangle466544"
                    className="transcripts-rectangle46"
                  />
                  <div className="transcripts-group78"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="transcripts-frame-footer1">
            <div className="transcripts-content-wrapper1">
              <div className="transcripts-content-wrapper2">
                <span className="transcripts-text094 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="transcripts-text096 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="transcripts-text098 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="transcripts-text100 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="transcripts-text102 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transcripts
