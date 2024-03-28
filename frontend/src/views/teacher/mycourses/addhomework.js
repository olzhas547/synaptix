import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './addhomework.css'

const Addhomework = (props) => {
  return (
    <div className="addhomework-container">
      <Helmet>
        <title>addhomework</title>
        <meta property="og:title" content="addhomework" />
      </Helmet>
      <div className="addhomework-createcourse">
        <div className="addhomework-frame-admin-panel-menu1">
          <div className="addhomework-frame-admin-panel-menu11">
            <div className="addhomework-logo">
              <div className="addhomework-logo1">
                <div className="addhomework-frame1000002598">
                  <img
                    alt="ContainerLogo6814"
                    src="/external/containerlogo6814-ymwu-200h.png"
                    className="addhomework-container-logo"
                  />
                  <div className="addhomework-book4">
                    <div className="addhomework-group">
                      <img
                        alt="VectorI681"
                        src="/external/vectori681-vho.svg"
                        className="addhomework-vector"
                      />
                      <img
                        alt="VectorI681"
                        src="/external/vectori681-yqb4.svg"
                        className="addhomework-vector1"
                      />
                      <img
                        alt="VectorI681"
                        src="/external/vectori681-p85k.svg"
                        className="addhomework-vector2"
                      />
                      <img
                        alt="VectorI681"
                        src="/external/vectori681-eu7g.svg"
                        className="addhomework-vector3"
                      />
                    </div>
                  </div>
                </div>
                <div className="addhomework-frame-title">
                  <span className="addhomework-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="addhomework-frame-menu">
              <div className="addhomework-menu-items">
                <div className="addhomework-menu-item-inline-navigation-item">
                  <img
                    alt="IconDashboardOutlinedI681"
                    src="/external/icondashboardoutlinedi681-8b7p.svg"
                    className="addhomework-icon-dashboard-outlined"
                  />
                  <Link
                    to="/"
                    className="addhomework-text02 LightBaseBaseNormal"
                  >
                    <span>Dashboard</span>
                  </Link>
                </div>
                <div className="addhomework-menu-item-inline-navigation-item1">
                  <img
                    alt="IconDatabaseOutlinedI681"
                    src="/external/icondatabaseoutlinedi681-9497.svg"
                    className="addhomework-icon-database-outlined"
                  />
                  <Link
                    to="/"
                    className="addhomework-text04 LightBaseBaseNormal"
                  >
                    <span>My courses</span>
                  </Link>
                </div>
                <div className="addhomework-menu-item-inline-navigation-item2">
                  <img
                    alt="IconBarChartOutlinedI681"
                    src="/external/iconbarchartoutlinedi681-p74.svg"
                    className="addhomework-icon-bar-chart-outlined"
                  />
                  <Link
                    to="/coursemodules"
                    className="addhomework-text06 LightBaseBaseNormal"
                  >
                    <span>Statistics</span>
                  </Link>
                </div>
                <div className="addhomework-menu-item-inline-navigation-item3">
                  <img
                    alt="IconCalendarOutlinedI681"
                    src="/external/iconcalendaroutlinedi681-9j9.svg"
                    className="addhomework-icon-calendar-outlined"
                  />
                  <Link
                    to="/"
                    className="addhomework-text08 LightBaseBaseNormal"
                  >
                    <span>Calendar</span>
                  </Link>
                </div>
                <div className="addhomework-menu-item-inline-navigation-item4">
                  <img
                    alt="IconVideoCameraOutlinedI831"
                    src="/external/iconvideocameraoutlinedi831-o4qr.svg"
                    className="addhomework-icon-video-camera-outlined"
                  />
                  <Link
                    to="/coursemodules"
                    className="addhomework-text10 LightBaseBaseNormal"
                  >
                    <span>Webinar</span>
                  </Link>
                </div>
              </div>
              <div className="addhomework-menu-items1">
                <div className="addhomework-menu-item-inline-navigation-item5">
                  <img
                    alt="IconSettingOutlinedI681"
                    src="/external/iconsettingoutlinedi681-in6d.svg"
                    className="addhomework-icon-setting-outlined"
                  />
                  <Link
                    to="/createcourse"
                    className="addhomework-text12 LightBaseBaseNormal"
                  >
                    <span>Settings</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addhomework-content-wrapper">
          <div className="addhomework-frame-header">
            <div className="addhomework-icon-search">
              <button className="addhomework-frame-button">
                <div className="addhomework-content">
                  <img
                    alt="IconMenuFoldOutlinedI651"
                    src="/external/iconmenufoldoutlinedi651-yhkl.svg"
                    className="addhomework-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="addhomework-frame-input-search">
                <div className="addhomework-input-wrapper">
                  <div className="addhomework-frame-input-basic">
                    <div className="addhomework-content1">
                      <span className="addhomework-text14 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="addhomework-frame-button1">
                  <div className="addhomework-content2">
                    <img
                      alt="IconSearchOutlinedI651"
                      src="/external/iconsearchoutlinedi651-dex7.svg"
                      className="addhomework-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="addhomework-avatar-button">
              <button className="addhomework-frame-button2">
                <div className="addhomework-content3">
                  <img
                    alt="IconGlobalOutlinedI651"
                    src="/external/iconglobaloutlinedi651-kmr.svg"
                    className="addhomework-icon-global-outlined"
                  />
                  <span className="addhomework-text16 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="addhomework-notifications">
                <img
                  alt="IconBellOutlinedI651"
                  src="/external/iconbelloutlinedi651-2j1.svg"
                  className="addhomework-icon-bell-outlined"
                />
                <div className="addhomework-content4">
                  <div className="addhomework-frame-badge-basic">
                    <span className="addhomework-text18 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/" className="addhomework-navlink">
                <div className="addhomework-frame-avatar">
                  <img
                    alt="IconUserOutlinedI651"
                    src="/external/iconuseroutlinedi651-nqsf.svg"
                    className="addhomework-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="addhomework-frame-card1">
            <button className="addhomework-header-button">
              <div className="addhomework-header-links">
                <div className="addhomework-frame-breadcrumb">
                  <div className="addhomework-breadcrumb-link">
                    <span className="addhomework-text20 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                  <div className="addhomework-breadcrumb-separator">
                    <div className="addhomework-content5">
                      <span className="addhomework-text22 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="addhomework-breadcrumb-link1">
                    <span className="addhomework-text23 LightBaseBaseNormal">
                      <span>Create course</span>
                    </span>
                  </div>
                  <div className="addhomework-breadcrumb-separator1">
                    <div className="addhomework-content6">
                      <span className="addhomework-text25 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="addhomework-breadcrumb-link2">
                    <span className="addhomework-text26 LightBaseBaseNormal">
                      <span>Add Homework</span>
                    </span>
                  </div>
                </div>
                <div className="addhomework-frame-title1">
                  <span className="addhomework-text28 LightHeadingHeading2">
                    <span>Add Homework</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="addhomework-frame1000002673">
              <div className="addhomework-frame6356187">
                <div className="addhomework-frame1000001604">
                  <div className="addhomework-frame6356217">
                    <div className="addhomework-frame6356312">
                      <input
                        type="text"
                        placeholder="Name Homework"
                        className="addhomework-input-dropdown-txt"
                      />
                      <div className="addhomework-input-dropdown"></div>
                    </div>
                    <div className="addhomework-frame6356216">
                      <input
                        type="text"
                        placeholder="Description"
                        className="addhomework-input-dropdown-txt1"
                      />
                      <div className="addhomework-input-dropdown1">
                        <span className="addhomework-text30">
                          <span>There will be....</span>
                        </span>
                      </div>
                    </div>
                    <div className="addhomework-input-dropdown2">
                      <input
                        type="text"
                        placeholder="Full description"
                        className="addhomework-input-dropdown-txt2"
                      />
                      <div className="addhomework-texteditor">
                        <div className="addhomework-menubar">
                          <button className="addhomework-buttongrouphistory">
                            <button className="addhomework-menubarbutton">
                              <button className="addhomework-menubarbuttonbase">
                                <img
                                  alt="icundoI651"
                                  src="/external/icundoi651-gb2.svg"
                                  className="addhomework-icundo"
                                />
                              </button>
                            </button>
                            <button className="addhomework-menubarbutton01">
                              <button className="addhomework-menubarbuttonbase01">
                                <img
                                  alt="icredoI651"
                                  src="/external/icredoi651-rn2k.svg"
                                  className="addhomework-icredo"
                                />
                              </button>
                            </button>
                          </button>
                          <div className="addhomework-menubartextstyledropdown">
                            <button className="addhomework-menubarbuttonbase02">
                              <span className="addhomework-text32">
                                <span>Normal text</span>
                              </span>
                              <img
                                alt="icchevrondownI651"
                                src="/external/icchevrondowni651-rf58.svg"
                                className="addhomework-icchevrondown"
                              />
                            </button>
                          </div>
                          <div className="addhomework-menubartextaligndropdown">
                            <button className="addhomework-menubarbuttonbase03">
                              <img
                                alt="ictextalignleftI651"
                                src="/external/ictextalignlefti651-uwxn.svg"
                                className="addhomework-ictextalignleft"
                              />
                              <img
                                alt="icchevrondownI651"
                                src="/external/icchevrondowni651-k1qg.svg"
                                className="addhomework-icchevrondown1"
                              />
                            </button>
                          </div>
                          <div className="addhomework-menubarcolorpickerdropdown">
                            <button className="addhomework-menubarbuttonbase04">
                              <div className="addhomework-colorpickerlistitem">
                                <img
                                  alt="contextmenucolorpickerchipfillI651"
                                  src="/external/contextmenucolorpickerchipfilli651-p46-200h.png"
                                  className="addhomework-contextmenucolorpickerchipfill"
                                />
                                <img
                                  alt="contextmenucolorpickerchipborderI651"
                                  src="/external/contextmenucolorpickerchipborderi651-z5j-200h.png"
                                  className="addhomework-contextmenucolorpickerchipborder"
                                />
                              </div>
                              <img
                                alt="icchevrondownI651"
                                src="/external/icchevrondowni651-m0rh.svg"
                                className="addhomework-icchevrondown2"
                              />
                            </button>
                          </div>
                          <div className="addhomework-format">
                            <button className="addhomework-menubarbutton02">
                              <button className="addhomework-menubarbuttonbase05">
                                <img
                                  alt="ictextboldI651"
                                  src="/external/ictextboldi651-11j.svg"
                                  className="addhomework-ictextbold"
                                />
                              </button>
                            </button>
                            <button className="addhomework-menubarbutton03">
                              <button className="addhomework-menubarbuttonbase06">
                                <img
                                  alt="ictextitalicI651"
                                  src="/external/ictextitalici651-vhr.svg"
                                  className="addhomework-ictextitalic"
                                />
                              </button>
                            </button>
                            <button className="addhomework-menubarbutton04">
                              <button className="addhomework-menubarbuttonbase07">
                                <img
                                  alt="ictextunderlineI651"
                                  src="/external/ictextunderlinei651-1k5d.svg"
                                  className="addhomework-ictextunderline"
                                />
                              </button>
                            </button>
                            <button className="addhomework-menubarbutton05">
                              <button className="addhomework-menubarbuttonbase08">
                                <img
                                  alt="ictextstrikethroughI651"
                                  src="/external/ictextstrikethroughi651-yrl8.svg"
                                  className="addhomework-ictextstrikethrough"
                                />
                              </button>
                            </button>
                            <button className="addhomework-menubarbutton06">
                              <button className="addhomework-menubarbuttonbase09">
                                <img
                                  alt="icinlinecodeI651"
                                  src="/external/icinlinecodei651-zxf.svg"
                                  className="addhomework-icinlinecode"
                                />
                              </button>
                            </button>
                            <button className="addhomework-menubarbutton07">
                              <button className="addhomework-menubarbuttonbase10">
                                <img
                                  alt="ictextclearformatI651"
                                  src="/external/ictextclearformati651-51z8.svg"
                                  className="addhomework-ictextclearformat"
                                />
                              </button>
                            </button>
                          </div>
                          <div className="addhomework-list">
                            <button className="addhomework-menubarbutton08">
                              <button className="addhomework-menubarbuttonbase11">
                                <img
                                  alt="iclistbulletedI651"
                                  src="/external/iclistbulletedi651-v0mb.svg"
                                  className="addhomework-iclistbulleted"
                                />
                              </button>
                            </button>
                            <button className="addhomework-menubarbutton09">
                              <button className="addhomework-menubarbuttonbase12">
                                <img
                                  alt="iclistnumberedI651"
                                  src="/external/iclistnumberedi651-9z6t.svg"
                                  className="addhomework-iclistnumbered"
                                />
                              </button>
                            </button>
                          </div>
                          <div className="addhomework-etc">
                            <button className="addhomework-menubarbutton10">
                              <button className="addhomework-menubarbuttonbase13">
                                <img
                                  alt="iclinkI651"
                                  src="/external/iclinki651-8s78.svg"
                                  className="addhomework-iclink"
                                />
                              </button>
                            </button>
                            <button className="addhomework-menubarbutton11">
                              <button className="addhomework-menubarbuttonbase14">
                                <img
                                  alt="icimageI651"
                                  src="/external/icimagei651-0dt8.svg"
                                  className="addhomework-icimage"
                                />
                              </button>
                            </button>
                            <button className="addhomework-menubarbutton12">
                              <button className="addhomework-menubarbuttonbase15">
                                <img
                                  alt="iccodeI651"
                                  src="/external/iccodei651-jk76.svg"
                                  className="addhomework-iccode"
                                />
                              </button>
                            </button>
                            <button className="addhomework-menubarbutton13">
                              <button className="addhomework-menubarbuttonbase16">
                                <img
                                  alt="icquotesI651"
                                  src="/external/icquotesi651-1gb5.svg"
                                  className="addhomework-icquotes"
                                />
                              </button>
                            </button>
                            <button className="addhomework-menubarbutton14">
                              <button className="addhomework-menubarbuttonbase17">
                                <div className="addhomework-ichorizontalrule">
                                  <img
                                    alt="Rectangle2486I651"
                                    src="/external/rectangle2486i651-6t3o-200h.png"
                                    className="addhomework-rectangle2486"
                                  />
                                </div>
                              </button>
                            </button>
                          </div>
                        </div>
                        <div className="addhomework-contentsarea"></div>
                        <div className="addhomework-frame1000001547">
                          <div className="addhomework-corner">
                            <div className="addhomework-corner1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="addhomework-frame6356313">
                      <div className="addhomework-frame6356209">
                        <input
                          type="text"
                          placeholder="Video"
                          className="addhomework-input-dropdown-txt3"
                        />
                      </div>
                      <div className="addhomework-draganddrop">
                        <img
                          alt="Rectangle35276518"
                          src="/external/rectangle35276518-f5xs-800w.png"
                          className="addhomework-rectangle3527"
                        />
                        <div className="addhomework-frame2">
                          <img
                            alt="Ellipse16518"
                            src="/external/ellipse16518-nslq-200h.png"
                            className="addhomework-ellipse1"
                          />
                          <img
                            alt="claritycloseline6518"
                            src="/external/claritycloseline6518-drac.svg"
                            className="addhomework-claritycloseline"
                          />
                        </div>
                        <div className="addhomework-frame1000001593">
                          <button className="addhomework-web-buttons">
                            <div className="addhomework-icon-frame">
                              <img
                                alt="PlayI651"
                                src="/external/playi651-94f.svg"
                                className="addhomework-play"
                              />
                            </div>
                          </button>
                          <div className="addhomework-frame1000001595">
                            <span className="addhomework-text34">
                              <span>10:00</span>
                            </span>
                            <div className="addhomework-frame1000001590">
                              <img
                                alt="Rectangle35266518"
                                src="/external/rectangle35266518-dv4-200h.png"
                                className="addhomework-rectangle3526"
                              />
                            </div>
                            <span className="addhomework-text36">
                              <span>20:00</span>
                            </span>
                          </div>
                          <div className="addhomework-frame1000001592">
                            <div className="addhomework-frame1000001594">
                              <button className="addhomework-web-buttons1">
                                <img
                                  alt="IconFrameI651"
                                  src="/external/iconframei651-yuma.svg"
                                  className="addhomework-icon-frame1"
                                />
                              </button>
                              <button className="addhomework-web-buttons2">
                                <img
                                  alt="IconFrameI651"
                                  src="/external/iconframei651-jgom.svg"
                                  className="addhomework-icon-frame2"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="addhomework-frame6356219">
                      <div className="addhomework-checkbox">
                        <div className="addhomework-group109">
                          <img
                            alt="icdoneI651"
                            src="/external/icdonei651-8fyu.svg"
                            className="addhomework-icdone"
                          />
                        </div>
                      </div>
                      <span className="addhomework-text38">
                        <span>
                          Предусмотрено ограничение доступа к теме
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </div>
                    <div className="addhomework-input-dropdown3">
                      <input
                        type="text"
                        placeholder="Date of open "
                        className="addhomework-input-dropdown-txt4"
                      />
                      <div className="addhomework-input">
                        <input
                          type="text"
                          placeholder="Text"
                          className="addhomework-input-dropdown-txt5"
                        />
                        <div className="addhomework-input-icon">
                          <img
                            alt="calendarI651"
                            src="/external/calendari651-nus7.svg"
                            className="addhomework-calendar"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="addhomework-frame6356268">
                  <button className="addhomework-button">
                    <Link to="/mycourse" className="addhomework-navlink1">
                      <div className="addhomework-itemlink">
                        <span className="addhomework-text40">
                          <span>Publish</span>
                        </span>
                      </div>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="addhomework-frame6356411">
                <div className="addhomework-frame63564111">
                  <div className="addhomework-frame6356412">
                    <div className="addhomework-frame6356394">
                      <Link to="/coursemodules" className="addhomework-button1">
                        <div className="addhomework-itemlink1">
                          <span className="addhomework-text42">
                            <span>Add test</span>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="addhomework-frame63564112">
                    <div className="addhomework-frame63563941">
                      <Link to="/" className="addhomework-button2">
                        <div className="addhomework-itemlink2">
                          <span className="addhomework-text44">
                            <span>Add another homework</span>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="addhomework-frame-footer1">
            <div className="addhomework-content-wrapper1">
              <div className="addhomework-content-wrapper2">
                <span className="addhomework-text46 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="addhomework-text48 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="addhomework-text50 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="addhomework-text52 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="addhomework-text54 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addhomework
