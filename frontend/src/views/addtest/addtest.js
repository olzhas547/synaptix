import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './addtest.css'

const Addtest = (props) => {
  return (
    <div className="addtest-container">
      <Helmet>
        <title>add-test</title>
        <meta property="og:title" content="address" />
      </Helmet>
      <div className="addtest-createcourse">
        <div className="addtest-frame-admin-panel-menu1">
          <div className="addtest-frame-admin-panel-menu11">
            <div className="addtest-logo">
              <div className="addtest-logo1">
                <div className="addtest-frame1000002598">
                  <img
                    alt="ContainerLogo8416"
                    src="/external/containerlogo8416-dy4-200h.png"
                    className="addtest-container-logo"
                  />
                  <div className="addtest-book4">
                    <div className="addtest-group">
                      <img
                        alt="VectorI841"
                        src="/external/vectori841-iskk.svg"
                        className="addtest-vector"
                      />
                      <img
                        alt="VectorI841"
                        src="/external/vectori841-ufj.svg"
                        className="addtest-vector1"
                      />
                      <img
                        alt="VectorI841"
                        src="/external/vectori841-2qns.svg"
                        className="addtest-vector2"
                      />
                      <img
                        alt="VectorI841"
                        src="/external/vectori841-3ktsn.svg"
                        className="addtest-vector3"
                      />
                    </div>
                  </div>
                </div>
                <div className="addtest-frame-title">
                  <span className="addtest-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="addtest-frame-menu">
              <div className="addtest-menu-items">
                <div className="addtest-menu-item-inline-navigation-item">
                  <img
                    alt="IconDashboardOutlinedI841"
                    src="/external/icondashboardoutlinedi841-bg5d.svg"
                    className="addtest-icon-dashboard-outlined"
                  />
                  <Link
                    to="/addtest"
                    className="addtest-text02 LightBaseBaseNormal"
                  >
                    <span>Dashboard</span>
                  </Link>
                </div>
                <div className="addtest-menu-item-inline-navigation-item1">
                  <img
                    alt="IconDatabaseOutlinedI841"
                    src="/external/icondatabaseoutlinedi841-tqxm.svg"
                    className="addtest-icon-database-outlined"
                  />
                  <Link to="/" className="addtest-text04 LightBaseBaseNormal">
                    <span>My courses</span>
                  </Link>
                </div>
                <div className="addtest-menu-item-inline-navigation-item2">
                  <img
                    alt="IconBarChartOutlinedI841"
                    src="/external/iconbarchartoutlinedi841-tlcu.svg"
                    className="addtest-icon-bar-chart-outlined"
                  />
                  <Link to="/" className="addtest-text06 LightBaseBaseNormal">
                    <span>Statistics</span>
                  </Link>
                </div>
                <div className="addtest-menu-item-inline-navigation-item3">
                  <img
                    alt="IconCalendarOutlinedI841"
                    src="/external/iconcalendaroutlinedi841-lzz8.svg"
                    className="addtest-icon-calendar-outlined"
                  />
                  <Link to="/" className="addtest-text08 LightBaseBaseNormal">
                    <span>Calendar</span>
                  </Link>
                </div>
                <div className="addtest-menu-item-inline-navigation-item4">
                  <img
                    alt="IconVideoCameraOutlinedI841"
                    src="/external/iconvideocameraoutlinedi841-398a.svg"
                    className="addtest-icon-video-camera-outlined"
                  />
                  <Link to="/" className="addtest-text10 LightBaseBaseNormal">
                    <span>Webinar</span>
                  </Link>
                </div>
              </div>
              <div className="addtest-menu-items1">
                <div className="addtest-menu-item-inline-navigation-item5">
                  <img
                    alt="IconSettingOutlinedI841"
                    src="/external/iconsettingoutlinedi841-ly7b.svg"
                    className="addtest-icon-setting-outlined"
                  />
                  <Link
                    to="/addtest"
                    className="addtest-text12 LightBaseBaseNormal"
                  >
                    <span>Settings</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addtest-content-wrapper">
          <div className="addtest-frame-header">
            <div className="addtest-icon-search">
              <button className="addtest-frame-button">
                <div className="addtest-content">
                  <img
                    alt="IconMenuFoldOutlinedI841"
                    src="/external/iconmenufoldoutlinedi841-hhj.svg"
                    className="addtest-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="addtest-frame-input-search">
                <div className="addtest-input-wrapper">
                  <div className="addtest-frame-input-basic">
                    <div className="addtest-content1">
                      <span className="addtest-text14 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="addtest-frame-button1">
                  <div className="addtest-content2">
                    <img
                      alt="IconSearchOutlinedI841"
                      src="/external/iconsearchoutlinedi841-9se5a.svg"
                      className="addtest-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="addtest-avatar-button">
              <button className="addtest-frame-button2">
                <div className="addtest-content3">
                  <img
                    alt="IconGlobalOutlinedI841"
                    src="/external/iconglobaloutlinedi841-gi9e.svg"
                    className="addtest-icon-global-outlined"
                  />
                  <span className="addtest-text16 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="addtest-notifications">
                <img
                  alt="IconBellOutlinedI841"
                  src="/external/iconbelloutlinedi841-odq8v.svg"
                  className="addtest-icon-bell-outlined"
                />
                <div className="addtest-content4">
                  <div className="addtest-frame-badge-basic">
                    <span className="addtest-text18 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/" className="addtest-navlink">
                <div className="addtest-frame-avatar">
                  <img
                    alt="IconUserOutlinedI841"
                    src="/external/iconuseroutlinedi841-zip.svg"
                    className="addtest-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="addtest-frame-card1">
            <button className="addtest-header-button">
              <div className="addtest-header-links">
                <div className="addtest-frame-breadcrumb">
                  <div className="addtest-breadcrumb-link">
                    <span className="addtest-text20 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                  <div className="addtest-breadcrumb-separator">
                    <div className="addtest-content5">
                      <span className="addtest-text22 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="addtest-breadcrumb-link1">
                    <span className="addtest-text23 LightBaseBaseNormal">
                      <span>Create course</span>
                    </span>
                  </div>
                  <div className="addtest-breadcrumb-separator1">
                    <div className="addtest-content6">
                      <span className="addtest-text25 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="addtest-breadcrumb-link2">
                    <span className="addtest-text26 LightBaseBaseNormal">
                      <span>Add test</span>
                    </span>
                  </div>
                </div>
                <div className="addtest-frame-title1">
                  <span className="addtest-text28 LightHeadingHeading2">
                    <span>Add test</span>
                  </span>
                  <Link to="/" className="addtest-frame-button3">
                    <div className="addtest-content7">
                      <span className="addtest-text30 LightBaseBaseNormal">
                        <span>Preview test</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </button>
            <div className="addtest-frame1000000901">
              <div className="addtest-frame6356453">
                <div className="addtest-frame1000000900">
                  <div className="addtest-frame6356447">
                    <div className="addtest-frame6356350">
                      <div className="addtest-frame6356307">
                        <div className="addtest-input-dropdown">
                          <input
                            type="text"
                            placeholder="Type question"
                            className="addtest-input-dropdown-txt"
                          />
                          <div className="addtest-input">
                            <input
                              type="text"
                              placeholder="With one right answer"
                              className="addtest-input-dropdown-txt1"
                            />
                            <div className="addtest-input-icon">
                              <div className="addtest-downarrow"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="addtest-input-dropdown1">
                        <input
                          type="text"
                          placeholder="1 question "
                          className="addtest-input-dropdown-txt2"
                        />
                        <div className="addtest-texteditor">
                          <div className="addtest-menubar">
                            <button className="addtest-buttongrouphistory">
                              <button className="addtest-menubarbutton">
                                <button className="addtest-menubarbuttonbase">
                                  <img
                                    alt="icundoI842"
                                    src="/external/icundoi842-5xca.svg"
                                    className="addtest-icundo"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton001">
                                <button className="addtest-menubarbuttonbase001">
                                  <img
                                    alt="icredoI842"
                                    src="/external/icredoi842-wdpb.svg"
                                    className="addtest-icredo"
                                  />
                                </button>
                              </button>
                            </button>
                            <div className="addtest-menubartextstyledropdown">
                              <button className="addtest-menubarbuttonbase002">
                                <span className="addtest-text32 button">
                                  <span>Normal text</span>
                                </span>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-t6oj.svg"
                                  className="addtest-icchevrondown"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubartextaligndropdown">
                              <button className="addtest-menubarbuttonbase003">
                                <img
                                  alt="ictextalignleftI842"
                                  src="/external/ictextalignlefti842-sx7o.svg"
                                  className="addtest-ictextalignleft"
                                />
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-evym.svg"
                                  className="addtest-icchevrondown01"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubarcolorpickerdropdown">
                              <button className="addtest-menubarbuttonbase004">
                                <div className="addtest-colorpickerlistitem">
                                  <img
                                    alt="contextmenucolorpickerchipfillI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-contextmenucolorpickerchipfill"
                                  />
                                  <img
                                    alt="contextmenucolorpickerchipborderI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-contextmenucolorpickerchipborder"
                                  />
                                </div>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-xz76.svg"
                                  className="addtest-icchevrondown02"
                                />
                              </button>
                            </div>
                            <div className="addtest-format">
                              <button className="addtest-menubarbutton002">
                                <button className="addtest-menubarbuttonbase005">
                                  <img
                                    alt="ictextboldI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-ictextbold"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton003">
                                <button className="addtest-menubarbuttonbase006">
                                  <img
                                    alt="ictextitalicI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-ictextitalic"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton004">
                                <button className="addtest-menubarbuttonbase007">
                                  <img
                                    alt="ictextunderlineI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-ictextunderline"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton005">
                                <button className="addtest-menubarbuttonbase008">
                                  <img
                                    alt="ictextstrikethroughI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-ictextstrikethrough"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton006">
                                <button className="addtest-menubarbuttonbase009">
                                  <img
                                    alt="icinlinecodeI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-icinlinecode"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton007">
                                <button className="addtest-menubarbuttonbase010">
                                  <img
                                    alt="ictextclearformatI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-ictextclearformat"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-list">
                              <button className="addtest-menubarbutton008">
                                <button className="addtest-menubarbuttonbase011">
                                  <img
                                    alt="iclistbulletedI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-iclistbulleted"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton009">
                                <button className="addtest-menubarbuttonbase012">
                                  <img
                                    alt="iclistnumberedI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-iclistnumbered"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-etc">
                              <button className="addtest-menubarbutton010">
                                <button className="addtest-menubarbuttonbase013">
                                  <img
                                    alt="iclinkI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-iclink"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton011">
                                <button className="addtest-menubarbuttonbase014">
                                  <img
                                    alt="icimageI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-icimage"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton012">
                                <button className="addtest-menubarbuttonbase015">
                                  <img
                                    alt="iccodeI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-iccode"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton013">
                                <button className="addtest-menubarbuttonbase016">
                                  <img
                                    alt="icquotesI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-icquotes"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton014">
                                <button className="addtest-menubarbuttonbase017">
                                  <div className="addtest-ichorizontalrule">
                                    <img
                                      alt="Rectangle2486I842"
                                      src="/external/rectangle2486i842-smr-200h.png"
                                      className="addtest-rectangle2486"
                                    />
                                  </div>
                                </button>
                              </button>
                            </div>
                          </div>
                          <div className="addtest-contentsarea"></div>
                          <div className="addtest-frame1000001547">
                            <div className="addtest-corner">
                              <div className="addtest-corner01">
                                <img
                                  alt="Line20I842"
                                  src="/external/line20i842-do6.svg"
                                  className="addtest-line20"
                                />
                                <img
                                  alt="Line21I842"
                                  src="/external/line21i842-xzwl.svg"
                                  className="addtest-line21"
                                />
                                <img
                                  alt="Line22I842"
                                  src="/external/line22i842-tmup.svg"
                                  className="addtest-line22"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="addtest-frame6356336">
                      <div className="addtest-frame6356334">
                        <div className="addtest-checkbox">
                          <img
                            alt="Ellipse59I842"
                            src="/external/ellipse59i842-gco9-200h.png"
                            className="addtest-ellipse59"
                          />
                        </div>
                        <div className="addtest-texteditor01">
                          <div className="addtest-menubar01">
                            <button className="addtest-buttongrouphistory01">
                              <button className="addtest-menubarbutton015">
                                <button className="addtest-menubarbuttonbase018">
                                  <img
                                    alt="icundoI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-icundo01"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton016">
                                <button className="addtest-menubarbuttonbase019">
                                  <img
                                    alt="icredoI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-icredo01"
                                  />
                                </button>
                              </button>
                            </button>
                            <div className="addtest-menubartextstyledropdown01">
                              <button className="addtest-menubarbuttonbase020">
                                <span className="addtest-text34 button">
                                  <span>Normal text</span>
                                </span>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-j60e.svg"
                                  className="addtest-icchevrondown03"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubartextaligndropdown01">
                              <button className="addtest-menubarbuttonbase021">
                                <img
                                  alt="ictextalignleftI842"
                                  src="/external/ictextalignlefti842-a6n.svg"
                                  className="addtest-ictextalignleft01"
                                />
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-mdl1i.svg"
                                  className="addtest-icchevrondown04"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubarcolorpickerdropdown01">
                              <button className="addtest-menubarbuttonbase022">
                                <div className="addtest-colorpickerlistitem01">
                                  <img
                                    alt="contextmenucolorpickerchipfillI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-contextmenucolorpickerchipfill01"
                                  />
                                  <img
                                    alt="contextmenucolorpickerchipborderI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-contextmenucolorpickerchipborder01"
                                  />
                                </div>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-dpa.svg"
                                  className="addtest-icchevrondown05"
                                />
                              </button>
                            </div>
                            <div className="addtest-format01">
                              <button className="addtest-menubarbutton017">
                                <button className="addtest-menubarbuttonbase023">
                                  <img
                                    alt="ictextboldI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-ictextbold01"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton018">
                                <button className="addtest-menubarbuttonbase024">
                                  <img
                                    alt="ictextitalicI842"
                                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                                    className="addtest-ictextitalic01"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton019">
                                <button className="addtest-menubarbuttonbase025">
                                  <img
                                    alt="ictextunderlineI842"
                                    src="/external/ictextunderlinei842-j3yu.svg"
                                    className="addtest-ictextunderline01"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton020">
                                <button className="addtest-menubarbuttonbase026">
                                  <img
                                    alt="ictextstrikethroughI842"
                                    src="/external/ictextstrikethroughi842-aimd.svg"
                                    className="addtest-ictextstrikethrough01"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton021">
                                <button className="addtest-menubarbuttonbase027">
                                  <img
                                    alt="icinlinecodeI842"
                                    src="/external/icinlinecodei842-r7q9.svg"
                                    className="addtest-icinlinecode01"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton022">
                                <button className="addtest-menubarbuttonbase028">
                                  <img
                                    alt="ictextclearformatI842"
                                    src="/external/ictextclearformati842-e94e.svg"
                                    className="addtest-ictextclearformat01"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-list01">
                              <button className="addtest-menubarbutton023">
                                <button className="addtest-menubarbuttonbase029">
                                  <img
                                    alt="iclistbulletedI842"
                                    src="/external/iclistbulletedi842-ycc.svg"
                                    className="addtest-iclistbulleted01"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton024">
                                <button className="addtest-menubarbuttonbase030">
                                  <img
                                    alt="iclistnumberedI842"
                                    src="/external/iclistnumberedi842-a3f.svg"
                                    className="addtest-iclistnumbered01"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-etc01">
                              <button className="addtest-menubarbutton025">
                                <button className="addtest-menubarbuttonbase031">
                                  <img
                                    alt="iclinkI842"
                                    src="/external/iclinki842-fa4l.svg"
                                    className="addtest-iclink01"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton026">
                                <button className="addtest-menubarbuttonbase032">
                                  <img
                                    alt="icimageI842"
                                    src="/external/icimagei842-6jq8.svg"
                                    className="addtest-icimage01"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton027">
                                <button className="addtest-menubarbuttonbase033">
                                  <img
                                    alt="iccodeI842"
                                    src="/external/iccodei842-v1t9.svg"
                                    className="addtest-iccode01"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton028">
                                <button className="addtest-menubarbuttonbase034">
                                  <img
                                    alt="icquotesI842"
                                    src="/external/icquotesi842-x2w.svg"
                                    className="addtest-icquotes01"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton029">
                                <button className="addtest-menubarbuttonbase035">
                                  <div className="addtest-ichorizontalrule01">
                                    <img
                                      alt="Rectangle2486I842"
                                      src="/external/rectangle2486i842-xsg9-200h.png"
                                      className="addtest-rectangle248601"
                                    />
                                  </div>
                                </button>
                              </button>
                            </div>
                          </div>
                          <div className="addtest-contentsarea01"></div>
                          <div className="addtest-frame100000154701">
                            <div className="addtest-corner02">
                              <div className="addtest-corner03">
                                <img
                                  alt="Line20I842"
                                  src="/external/line20i842-4uqg.svg"
                                  className="addtest-line2001"
                                />
                                <img
                                  alt="Line21I842"
                                  src="/external/line21i842-veqd.svg"
                                  className="addtest-line2101"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="addtest-input-icon01">
                          <img
                            alt="claritycloselineI842"
                            src="/external/claritycloselinei842-or5.svg"
                            className="addtest-claritycloseline"
                          />
                        </div>
                      </div>
                      <div className="addtest-frame6356335">
                        <div className="addtest-checkbox1">
                          <div className="addtest-group863">
                            <img
                              alt="Ellipse59I842"
                              src="/external/ellipse59i842-br7e-200h.png"
                              className="addtest-ellipse591"
                            />
                            <img
                              alt="Ellipse60I842"
                              src="/external/ellipse60i842-v5md-200h.png"
                              className="addtest-ellipse60"
                            />
                          </div>
                        </div>
                        <div className="addtest-texteditor02">
                          <div className="addtest-menubar02">
                            <button className="addtest-buttongrouphistory02">
                              <button className="addtest-menubarbutton030">
                                <button className="addtest-menubarbuttonbase036">
                                  <img
                                    alt="icundoI842"
                                    src="/external/icundoi842-shcc.svg"
                                    className="addtest-icundo02"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton031">
                                <button className="addtest-menubarbuttonbase037">
                                  <img
                                    alt="icredoI842"
                                    src="/external/icredoi842-ylz9.svg"
                                    className="addtest-icredo02"
                                  />
                                </button>
                              </button>
                            </button>
                            <div className="addtest-menubartextstyledropdown02">
                              <button className="addtest-menubarbuttonbase038">
                                <span className="addtest-text36 button">
                                  <span>Normal text</span>
                                </span>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-smz9.svg"
                                  className="addtest-icchevrondown06"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubartextaligndropdown02">
                              <button className="addtest-menubarbuttonbase039">
                                <img
                                  alt="ictextalignleftI842"
                                  src="/external/ictextalignlefti842-n98.svg"
                                  className="addtest-ictextalignleft02"
                                />
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-a2yl.svg"
                                  className="addtest-icchevrondown07"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubarcolorpickerdropdown02">
                              <button className="addtest-menubarbuttonbase040">
                                <div className="addtest-colorpickerlistitem02">
                                  <img
                                    alt="contextmenucolorpickerchipfillI842"
                                    src="/external/contextmenucolorpickerchipfilli842-9k9i-200h.png"
                                    className="addtest-contextmenucolorpickerchipfill02"
                                  />
                                  <img
                                    alt="contextmenucolorpickerchipborderI842"
                                    src="/external/contextmenucolorpickerchipborderi842-7dun-200h.png"
                                    className="addtest-contextmenucolorpickerchipborder02"
                                  />
                                </div>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-h62n.svg"
                                  className="addtest-icchevrondown08"
                                />
                              </button>
                            </div>
                            <div className="addtest-format02">
                              <button className="addtest-menubarbutton032">
                                <button className="addtest-menubarbuttonbase041">
                                  <img
                                    alt="ictextboldI842"
                                    src="/external/ictextboldi842-9tkc.svg"
                                    className="addtest-ictextbold02"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton033">
                                <button className="addtest-menubarbuttonbase042">
                                  <img
                                    alt="ictextitalicI842"
                                    src="/external/ictextitalici842-bpj3.svg"
                                    className="addtest-ictextitalic02"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton034">
                                <button className="addtest-menubarbuttonbase043">
                                  <img
                                    alt="ictextunderlineI842"
                                    src="/external/ictextunderlinei842-gi34.svg"
                                    className="addtest-ictextunderline02"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton035">
                                <button className="addtest-menubarbuttonbase044">
                                  <img
                                    alt="ictextstrikethroughI842"
                                    src="/external/ictextstrikethroughi842-spj.svg"
                                    className="addtest-ictextstrikethrough02"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton036">
                                <button className="addtest-menubarbuttonbase045">
                                  <img
                                    alt="icinlinecodeI842"
                                    src="/external/icinlinecodei842-6lo8.svg"
                                    className="addtest-icinlinecode02"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton037">
                                <button className="addtest-menubarbuttonbase046">
                                  <img
                                    alt="ictextclearformatI842"
                                    src="/external/ictextclearformati842-8dde.svg"
                                    className="addtest-ictextclearformat02"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-list02">
                              <button className="addtest-menubarbutton038">
                                <button className="addtest-menubarbuttonbase047">
                                  <img
                                    alt="iclistbulletedI842"
                                    src="/external/iclistbulletedi842-n0tn.svg"
                                    className="addtest-iclistbulleted02"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton039">
                                <button className="addtest-menubarbuttonbase048">
                                  <img
                                    alt="iclistnumberedI842"
                                    src="/external/iclistnumberedi842-u1uo.svg"
                                    className="addtest-iclistnumbered02"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-etc02">
                              <button className="addtest-menubarbutton040">
                                <button className="addtest-menubarbuttonbase049">
                                  <img
                                    alt="iclinkI842"
                                    src="/external/iclinki842-8opo.svg"
                                    className="addtest-iclink02"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton041">
                                <button className="addtest-menubarbuttonbase050">
                                  <img
                                    alt="icimageI842"
                                    src="/external/icimagei842-6gkr.svg"
                                    className="addtest-icimage02"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton042">
                                <button className="addtest-menubarbuttonbase051">
                                  <img
                                    alt="iccodeI842"
                                    src="/external/iccodei842-4ljm.svg"
                                    className="addtest-iccode02"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton043">
                                <button className="addtest-menubarbuttonbase052">
                                  <img
                                    alt="icquotesI842"
                                    src="/external/icquotesi842-rr0x.svg"
                                    className="addtest-icquotes02"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton044">
                                <button className="addtest-menubarbuttonbase053">
                                  <div className="addtest-ichorizontalrule02">
                                    <img
                                      alt="Rectangle2486I842"
                                      src="/external/rectangle2486i842-nn6-200h.png"
                                      className="addtest-rectangle248602"
                                    />
                                  </div>
                                </button>
                              </button>
                            </div>
                          </div>
                          <div className="addtest-contentsarea02"></div>
                          <div className="addtest-frame100000154702">
                            <div className="addtest-corner04">
                              <div className="addtest-corner05">
                                <img
                                  alt="Line20I842"
                                  src="/external/line20i842-vueb.svg"
                                  className="addtest-line2002"
                                />
                                <img
                                  alt="Line21I842"
                                  src="/external/line21i842-kcsp.svg"
                                  className="addtest-line2102"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="addtest-input-icon02">
                          <img
                            alt="claritycloselineI842"
                            src="/external/claritycloselinei842-470r.svg"
                            className="addtest-claritycloseline1"
                          />
                        </div>
                      </div>
                      <div className="addtest-frame63563361">
                        <div className="addtest-checkbox2">
                          <img
                            alt="Ellipse59I842"
                            src="/external/ellipse59i842-33fd-200h.png"
                            className="addtest-ellipse592"
                          />
                        </div>
                        <div className="addtest-texteditor03">
                          <div className="addtest-menubar03">
                            <button className="addtest-buttongrouphistory03">
                              <button className="addtest-menubarbutton045">
                                <button className="addtest-menubarbuttonbase054">
                                  <img
                                    alt="icundoI842"
                                    src="/external/icundoi842-kzbj.svg"
                                    className="addtest-icundo03"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton046">
                                <button className="addtest-menubarbuttonbase055">
                                  <img
                                    alt="icredoI842"
                                    src="/external/icredoi842-jdwb.svg"
                                    className="addtest-icredo03"
                                  />
                                </button>
                              </button>
                            </button>
                            <div className="addtest-menubartextstyledropdown03">
                              <button className="addtest-menubarbuttonbase056">
                                <span className="addtest-text38 button">
                                  <span>Normal text</span>
                                </span>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-za5.svg"
                                  className="addtest-icchevrondown09"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubartextaligndropdown03">
                              <button className="addtest-menubarbuttonbase057">
                                <img
                                  alt="ictextalignleftI842"
                                  src="/external/ictextalignlefti842-5lm.svg"
                                  className="addtest-ictextalignleft03"
                                />
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-77vr.svg"
                                  className="addtest-icchevrondown10"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubarcolorpickerdropdown03">
                              <button className="addtest-menubarbuttonbase058">
                                <div className="addtest-colorpickerlistitem03">
                                  <img
                                    alt="contextmenucolorpickerchipfillI842"
                                    src="/external/contextmenucolorpickerchipfilli842-05is-200h.png"
                                    className="addtest-contextmenucolorpickerchipfill03"
                                  />
                                  <img
                                    alt="contextmenucolorpickerchipborderI842"
                                    src="/external/contextmenucolorpickerchipborderi842-pg3o-200h.png"
                                    className="addtest-contextmenucolorpickerchipborder03"
                                  />
                                </div>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-vxs.svg"
                                  className="addtest-icchevrondown11"
                                />
                              </button>
                            </div>
                            <div className="addtest-format03">
                              <button className="addtest-menubarbutton047">
                                <button className="addtest-menubarbuttonbase059">
                                  <img
                                    alt="ictextboldI842"
                                    src="/external/ictextboldi842-80y3.svg"
                                    className="addtest-ictextbold03"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton048">
                                <button className="addtest-menubarbuttonbase060">
                                  <img
                                    alt="ictextitalicI842"
                                    src="/external/ictextitalici842-6fiu.svg"
                                    className="addtest-ictextitalic03"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton049">
                                <button className="addtest-menubarbuttonbase061">
                                  <img
                                    alt="ictextunderlineI842"
                                    src="/external/ictextunderlinei842-vj78.svg"
                                    className="addtest-ictextunderline03"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton050">
                                <button className="addtest-menubarbuttonbase062">
                                  <img
                                    alt="ictextstrikethroughI842"
                                    src="/external/ictextstrikethroughi842-5jc.svg"
                                    className="addtest-ictextstrikethrough03"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton051">
                                <button className="addtest-menubarbuttonbase063">
                                  <img
                                    alt="icinlinecodeI842"
                                    src="/external/icinlinecodei842-ldn.svg"
                                    className="addtest-icinlinecode03"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton052">
                                <button className="addtest-menubarbuttonbase064">
                                  <img
                                    alt="ictextclearformatI842"
                                    src="/external/ictextclearformati842-wwo2v.svg"
                                    className="addtest-ictextclearformat03"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-list03">
                              <button className="addtest-menubarbutton053">
                                <button className="addtest-menubarbuttonbase065">
                                  <img
                                    alt="iclistbulletedI842"
                                    src="/external/iclistbulletedi842-7cco.svg"
                                    className="addtest-iclistbulleted03"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton054">
                                <button className="addtest-menubarbuttonbase066">
                                  <img
                                    alt="iclistnumberedI842"
                                    src="/external/iclistnumberedi842-dts.svg"
                                    className="addtest-iclistnumbered03"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-etc03">
                              <button className="addtest-menubarbutton055">
                                <button className="addtest-menubarbuttonbase067">
                                  <img
                                    alt="iclinkI842"
                                    src="/external/iclinki842-a8as.svg"
                                    className="addtest-iclink03"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton056">
                                <button className="addtest-menubarbuttonbase068">
                                  <img
                                    alt="icimageI842"
                                    src="/external/icimagei842-m29j.svg"
                                    className="addtest-icimage03"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton057">
                                <button className="addtest-menubarbuttonbase069">
                                  <img
                                    alt="iccodeI842"
                                    src="/external/iccodei842-kfxa.svg"
                                    className="addtest-iccode03"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton058">
                                <button className="addtest-menubarbuttonbase070">
                                  <img
                                    alt="icquotesI842"
                                    src="/external/icquotesi842-38fr.svg"
                                    className="addtest-icquotes03"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton059">
                                <button className="addtest-menubarbuttonbase071">
                                  <div className="addtest-ichorizontalrule03">
                                    <img
                                      alt="Rectangle2486I842"
                                      src="/external/rectangle2486i842-ceij-200h.png"
                                      className="addtest-rectangle248603"
                                    />
                                  </div>
                                </button>
                              </button>
                            </div>
                          </div>
                          <div className="addtest-contentsarea03"></div>
                          <div className="addtest-frame100000154703">
                            <div className="addtest-corner06">
                              <div className="addtest-corner07">
                                <img
                                  alt="Line20I842"
                                  src="/external/line20i842-3i6e.svg"
                                  className="addtest-line2003"
                                />
                                <img
                                  alt="Line21I842"
                                  src="/external/line21i842-kebm.svg"
                                  className="addtest-line2103"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="addtest-input-icon03">
                          <img
                            alt="claritycloselineI842"
                            src="/external/claritycloselinei842-js7b.svg"
                            className="addtest-claritycloseline2"
                          />
                        </div>
                      </div>
                      <div className="addtest-frame6356337">
                        <div className="addtest-checkbox3">
                          <img
                            alt="Ellipse59I842"
                            src="/external/ellipse59i842-f86w-200h.png"
                            className="addtest-ellipse593"
                          />
                        </div>
                        <div className="addtest-texteditor04">
                          <div className="addtest-menubar04">
                            <button className="addtest-buttongrouphistory04">
                              <button className="addtest-menubarbutton060">
                                <button className="addtest-menubarbuttonbase072">
                                  <img
                                    alt="icundoI842"
                                    src="/external/icundoi842-r3gq.svg"
                                    className="addtest-icundo04"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton061">
                                <button className="addtest-menubarbuttonbase073">
                                  <img
                                    alt="icredoI842"
                                    src="/external/icredoi842-2zlx.svg"
                                    className="addtest-icredo04"
                                  />
                                </button>
                              </button>
                            </button>
                            <div className="addtest-menubartextstyledropdown04">
                              <button className="addtest-menubarbuttonbase074">
                                <span className="addtest-text40 button">
                                  <span>Normal text</span>
                                </span>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-owu.svg"
                                  className="addtest-icchevrondown12"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubartextaligndropdown04">
                              <button className="addtest-menubarbuttonbase075">
                                <img
                                  alt="ictextalignleftI842"
                                  src="/external/ictextalignlefti842-84zm.svg"
                                  className="addtest-ictextalignleft04"
                                />
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-xtg.svg"
                                  className="addtest-icchevrondown13"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubarcolorpickerdropdown04">
                              <button className="addtest-menubarbuttonbase076">
                                <div className="addtest-colorpickerlistitem04">
                                  <img
                                    alt="contextmenucolorpickerchipfillI842"
                                    src="/external/contextmenucolorpickerchipfilli842-n07u-200h.png"
                                    className="addtest-contextmenucolorpickerchipfill04"
                                  />
                                  <img
                                    alt="contextmenucolorpickerchipborderI842"
                                    src="/external/contextmenucolorpickerchipborderi842-gtb-200h.png"
                                    className="addtest-contextmenucolorpickerchipborder04"
                                  />
                                </div>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-gtbw.svg"
                                  className="addtest-icchevrondown14"
                                />
                              </button>
                            </div>
                            <div className="addtest-format04">
                              <button className="addtest-menubarbutton062">
                                <button className="addtest-menubarbuttonbase077">
                                  <img
                                    alt="ictextboldI842"
                                    src="/external/ictextboldi842-5w9.svg"
                                    className="addtest-ictextbold04"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton063">
                                <button className="addtest-menubarbuttonbase078">
                                  <img
                                    alt="ictextitalicI842"
                                    src="/external/ictextitalici842-s3wj.svg"
                                    className="addtest-ictextitalic04"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton064">
                                <button className="addtest-menubarbuttonbase079">
                                  <img
                                    alt="ictextunderlineI842"
                                    src="/external/ictextunderlinei842-u0va.svg"
                                    className="addtest-ictextunderline04"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton065">
                                <button className="addtest-menubarbuttonbase080">
                                  <img
                                    alt="ictextstrikethroughI842"
                                    src="/external/ictextstrikethroughi842-do5r.svg"
                                    className="addtest-ictextstrikethrough04"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton066">
                                <button className="addtest-menubarbuttonbase081">
                                  <img
                                    alt="icinlinecodeI842"
                                    src="/external/icinlinecodei842-tmum.svg"
                                    className="addtest-icinlinecode04"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton067">
                                <button className="addtest-menubarbuttonbase082">
                                  <img
                                    alt="ictextclearformatI842"
                                    src="/external/ictextclearformati842-5gch.svg"
                                    className="addtest-ictextclearformat04"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-list04">
                              <button className="addtest-menubarbutton068">
                                <button className="addtest-menubarbuttonbase083">
                                  <img
                                    alt="iclistbulletedI842"
                                    src="/external/iclistbulletedi842-p8m.svg"
                                    className="addtest-iclistbulleted04"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton069">
                                <button className="addtest-menubarbuttonbase084">
                                  <img
                                    alt="iclistnumberedI842"
                                    src="/external/iclistnumberedi842-xrso.svg"
                                    className="addtest-iclistnumbered04"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-etc04">
                              <button className="addtest-menubarbutton070">
                                <button className="addtest-menubarbuttonbase085">
                                  <img
                                    alt="iclinkI842"
                                    src="/external/iclinki842-3jjb.svg"
                                    className="addtest-iclink04"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton071">
                                <button className="addtest-menubarbuttonbase086">
                                  <img
                                    alt="icimageI842"
                                    src="/external/icimagei842-bbq.svg"
                                    className="addtest-icimage04"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton072">
                                <button className="addtest-menubarbuttonbase087">
                                  <img
                                    alt="iccodeI842"
                                    src="/external/iccodei842-ud0p.svg"
                                    className="addtest-iccode04"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton073">
                                <button className="addtest-menubarbuttonbase088">
                                  <img
                                    alt="icquotesI842"
                                    src="/external/icquotesi842-ro9l.svg"
                                    className="addtest-icquotes04"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton074">
                                <button className="addtest-menubarbuttonbase089">
                                  <div className="addtest-ichorizontalrule04">
                                    <img
                                      alt="Rectangle2486I842"
                                      src="/external/rectangle2486i842-vevs-200h.png"
                                      className="addtest-rectangle248604"
                                    />
                                  </div>
                                </button>
                              </button>
                            </div>
                          </div>
                          <div className="addtest-contentsarea04"></div>
                          <div className="addtest-frame100000154704">
                            <div className="addtest-corner08">
                              <div className="addtest-corner09">
                                <img
                                  alt="Line20I842"
                                  src="/external/line20i842-t5o.svg"
                                  className="addtest-line2004"
                                />
                                <img
                                  alt="Line21I842"
                                  src="/external/line21i842-f2ft.svg"
                                  className="addtest-line2104"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="addtest-input-icon04">
                          <img
                            alt="claritycloselineI842"
                            src="/external/claritycloselinei842-d6jc.svg"
                            className="addtest-claritycloseline3"
                          />
                        </div>
                      </div>
                      <div className="addtest-frame6356318">
                        <img
                          alt="addcircleoutlineblack24dp18422"
                          src="/external/addcircleoutlineblack24dp18422-myn5.svg"
                          className="addtest-addcircleoutlineblack24dp1"
                        />
                        <span className="addtest-text42">
                          <span>Add variant</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="addtest-frame6356351">
                    <button className="addtest-button">
                      <Link to="/" className="addtest-navlink1">
                        <div className="addtest-itemlink">
                          <span className="addtest-text44">
                            <span>Cancel</span>
                          </span>
                        </div>
                      </Link>
                    </button>
                    <button className="addtest-button1">
                      <Link to="/" className="addtest-navlink2">
                        <div className="addtest-itemlink1">
                          <span className="addtest-text46">
                            <span>Save</span>
                          </span>
                        </div>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="addtest-frame6356454">
                <div className="addtest-frame10000009001">
                  <div className="addtest-frame63564471">
                    <div className="addtest-frame63563501">
                      <div className="addtest-frame63563071">
                        <div className="addtest-input-dropdown2">
                          <input
                            type="text"
                            placeholder="Type question"
                            className="addtest-input-dropdown-txt3"
                          />
                          <div className="addtest-input1">
                            <input
                              type="text"
                              placeholder="With one right answer"
                              className="addtest-input-dropdown-txt4"
                            />
                            <div className="addtest-input-icon05">
                              <div className="addtest-downarrow1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="addtest-input-dropdown3">
                        <input
                          type="text"
                          placeholder="1 question "
                          className="addtest-input-dropdown-txt5"
                        />
                        <div className="addtest-texteditor05">
                          <div className="addtest-menubar05">
                            <button className="addtest-buttongrouphistory05">
                              <button className="addtest-menubarbutton075">
                                <button className="addtest-menubarbuttonbase090">
                                  <img
                                    alt="icundoI842"
                                    src="/external/icundoi842-fqeg.svg"
                                    className="addtest-icundo05"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton076">
                                <button className="addtest-menubarbuttonbase091">
                                  <img
                                    alt="icredoI842"
                                    src="/external/icredoi842-wjah.svg"
                                    className="addtest-icredo05"
                                  />
                                </button>
                              </button>
                            </button>
                            <div className="addtest-menubartextstyledropdown05">
                              <button className="addtest-menubarbuttonbase092">
                                <span className="addtest-text48 button">
                                  <span>Normal text</span>
                                </span>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-ysgc.svg"
                                  className="addtest-icchevrondown15"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubartextaligndropdown05">
                              <button className="addtest-menubarbuttonbase093">
                                <img
                                  alt="ictextalignleftI842"
                                  src="/external/ictextalignlefti842-ltnq.svg"
                                  className="addtest-ictextalignleft05"
                                />
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-m77.svg"
                                  className="addtest-icchevrondown16"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubarcolorpickerdropdown05">
                              <button className="addtest-menubarbuttonbase094">
                                <div className="addtest-colorpickerlistitem05">
                                  <img
                                    alt="contextmenucolorpickerchipfillI842"
                                    src="/external/contextmenucolorpickerchipfilli842-o6w-200h.png"
                                    className="addtest-contextmenucolorpickerchipfill05"
                                  />
                                  <img
                                    alt="contextmenucolorpickerchipborderI842"
                                    src="/external/contextmenucolorpickerchipborderi842-2t0q-200h.png"
                                    className="addtest-contextmenucolorpickerchipborder05"
                                  />
                                </div>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-dcmd.svg"
                                  className="addtest-icchevrondown17"
                                />
                              </button>
                            </div>
                            <div className="addtest-format05">
                              <button className="addtest-menubarbutton077">
                                <button className="addtest-menubarbuttonbase095">
                                  <img
                                    alt="ictextboldI842"
                                    src="/external/ictextboldi842-w61.svg"
                                    className="addtest-ictextbold05"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton078">
                                <button className="addtest-menubarbuttonbase096">
                                  <img
                                    alt="ictextitalicI842"
                                    src="/external/ictextitalici842-xw1u.svg"
                                    className="addtest-ictextitalic05"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton079">
                                <button className="addtest-menubarbuttonbase097">
                                  <img
                                    alt="ictextunderlineI842"
                                    src="/external/ictextunderlinei842-6i0m.svg"
                                    className="addtest-ictextunderline05"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton080">
                                <button className="addtest-menubarbuttonbase098">
                                  <img
                                    alt="ictextstrikethroughI842"
                                    src="/external/ictextstrikethroughi842-6iz4.svg"
                                    className="addtest-ictextstrikethrough05"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton081">
                                <button className="addtest-menubarbuttonbase099">
                                  <img
                                    alt="icinlinecodeI842"
                                    src="/external/icinlinecodei842-m7w.svg"
                                    className="addtest-icinlinecode05"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton082">
                                <button className="addtest-menubarbuttonbase100">
                                  <img
                                    alt="ictextclearformatI842"
                                    src="/external/ictextclearformati842-2yqt.svg"
                                    className="addtest-ictextclearformat05"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-list05">
                              <button className="addtest-menubarbutton083">
                                <button className="addtest-menubarbuttonbase101">
                                  <img
                                    alt="iclistbulletedI842"
                                    src="/external/iclistbulletedi842-riq.svg"
                                    className="addtest-iclistbulleted05"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton084">
                                <button className="addtest-menubarbuttonbase102">
                                  <img
                                    alt="iclistnumberedI842"
                                    src="/external/iclistnumberedi842-nxt.svg"
                                    className="addtest-iclistnumbered05"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-etc05">
                              <button className="addtest-menubarbutton085">
                                <button className="addtest-menubarbuttonbase103">
                                  <img
                                    alt="iclinkI842"
                                    src="/external/iclinki842-twcr.svg"
                                    className="addtest-iclink05"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton086">
                                <button className="addtest-menubarbuttonbase104">
                                  <img
                                    alt="icimageI842"
                                    src="/external/icimagei842-tvrb.svg"
                                    className="addtest-icimage05"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton087">
                                <button className="addtest-menubarbuttonbase105">
                                  <img
                                    alt="iccodeI842"
                                    src="/external/iccodei842-cdef.svg"
                                    className="addtest-iccode05"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton088">
                                <button className="addtest-menubarbuttonbase106">
                                  <img
                                    alt="icquotesI842"
                                    src="/external/icquotesi842-cuk.svg"
                                    className="addtest-icquotes05"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton089">
                                <button className="addtest-menubarbuttonbase107">
                                  <div className="addtest-ichorizontalrule05">
                                    <img
                                      alt="Rectangle2486I842"
                                      src="/external/rectangle2486i842-0gf-200h.png"
                                      className="addtest-rectangle248605"
                                    />
                                  </div>
                                </button>
                              </button>
                            </div>
                          </div>
                          <div className="addtest-contentsarea05"></div>
                          <div className="addtest-frame100000154705">
                            <div className="addtest-corner10">
                              <div className="addtest-corner11">
                                <img
                                  alt="Line20I842"
                                  src="/external/line20i842-jy5m.svg"
                                  className="addtest-line2005"
                                />
                                <img
                                  alt="Line21I842"
                                  src="/external/line21i842-ygog.svg"
                                  className="addtest-line2105"
                                />
                                <img
                                  alt="Line22I842"
                                  src="/external/line22i842-8naf.svg"
                                  className="addtest-line221"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="addtest-frame63563362">
                      <div className="addtest-frame63563341">
                        <div className="addtest-checkbox4">
                          <img
                            alt="Ellipse59I842"
                            src="/external/ellipse59i842-uwmc-200h.png"
                            className="addtest-ellipse594"
                          />
                        </div>
                        <div className="addtest-texteditor06">
                          <div className="addtest-menubar06">
                            <button className="addtest-buttongrouphistory06">
                              <button className="addtest-menubarbutton090">
                                <button className="addtest-menubarbuttonbase108">
                                  <img
                                    alt="icundoI842"
                                    src="/external/icundoi842-q9rr.svg"
                                    className="addtest-icundo06"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton091">
                                <button className="addtest-menubarbuttonbase109">
                                  <img
                                    alt="icredoI842"
                                    src="/external/icredoi842-in48.svg"
                                    className="addtest-icredo06"
                                  />
                                </button>
                              </button>
                            </button>
                            <div className="addtest-menubartextstyledropdown06">
                              <button className="addtest-menubarbuttonbase110">
                                <span className="addtest-text50 button">
                                  <span>Normal text</span>
                                </span>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-68j.svg"
                                  className="addtest-icchevrondown18"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubartextaligndropdown06">
                              <button className="addtest-menubarbuttonbase111">
                                <img
                                  alt="ictextalignleftI842"
                                  src="/external/ictextalignlefti842-9dk.svg"
                                  className="addtest-ictextalignleft06"
                                />
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-8n45.svg"
                                  className="addtest-icchevrondown19"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubarcolorpickerdropdown06">
                              <button className="addtest-menubarbuttonbase112">
                                <div className="addtest-colorpickerlistitem06">
                                  <img
                                    alt="contextmenucolorpickerchipfillI842"
                                    src="/external/contextmenucolorpickerchipfilli842-iw4k-200h.png"
                                    className="addtest-contextmenucolorpickerchipfill06"
                                  />
                                  <img
                                    alt="contextmenucolorpickerchipborderI842"
                                    src="/external/contextmenucolorpickerchipborderi842-uw4u-200h.png"
                                    className="addtest-contextmenucolorpickerchipborder06"
                                  />
                                </div>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-f81.svg"
                                  className="addtest-icchevrondown20"
                                />
                              </button>
                            </div>
                            <div className="addtest-format06">
                              <button className="addtest-menubarbutton092">
                                <button className="addtest-menubarbuttonbase113">
                                  <img
                                    alt="ictextboldI842"
                                    src="/external/ictextboldi842-8cas.svg"
                                    className="addtest-ictextbold06"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton093">
                                <button className="addtest-menubarbuttonbase114">
                                  <img
                                    alt="ictextitalicI842"
                                    src="/external/ictextitalici842-1b8.svg"
                                    className="addtest-ictextitalic06"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton094">
                                <button className="addtest-menubarbuttonbase115">
                                  <img
                                    alt="ictextunderlineI842"
                                    src="/external/ictextunderlinei842-dtbb.svg"
                                    className="addtest-ictextunderline06"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton095">
                                <button className="addtest-menubarbuttonbase116">
                                  <img
                                    alt="ictextstrikethroughI842"
                                    src="/external/ictextstrikethroughi842-0eei.svg"
                                    className="addtest-ictextstrikethrough06"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton096">
                                <button className="addtest-menubarbuttonbase117">
                                  <img
                                    alt="icinlinecodeI842"
                                    src="/external/icinlinecodei842-uqjf.svg"
                                    className="addtest-icinlinecode06"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton097">
                                <button className="addtest-menubarbuttonbase118">
                                  <img
                                    alt="ictextclearformatI842"
                                    src="/external/ictextclearformati842-6w3rx.svg"
                                    className="addtest-ictextclearformat06"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-list06">
                              <button className="addtest-menubarbutton098">
                                <button className="addtest-menubarbuttonbase119">
                                  <img
                                    alt="iclistbulletedI842"
                                    src="/external/iclistbulletedi842-aoh.svg"
                                    className="addtest-iclistbulleted06"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton099">
                                <button className="addtest-menubarbuttonbase120">
                                  <img
                                    alt="iclistnumberedI842"
                                    src="/external/iclistnumberedi842-ydp6.svg"
                                    className="addtest-iclistnumbered06"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-etc06">
                              <button className="addtest-menubarbutton100">
                                <button className="addtest-menubarbuttonbase121">
                                  <img
                                    alt="iclinkI842"
                                    src="/external/iclinki842-h25u.svg"
                                    className="addtest-iclink06"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton101">
                                <button className="addtest-menubarbuttonbase122">
                                  <img
                                    alt="icimageI842"
                                    src="/external/icimagei842-grgi.svg"
                                    className="addtest-icimage06"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton102">
                                <button className="addtest-menubarbuttonbase123">
                                  <img
                                    alt="iccodeI842"
                                    src="/external/iccodei842-m67.svg"
                                    className="addtest-iccode06"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton103">
                                <button className="addtest-menubarbuttonbase124">
                                  <img
                                    alt="icquotesI842"
                                    src="/external/icquotesi842-8eql.svg"
                                    className="addtest-icquotes06"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton104">
                                <button className="addtest-menubarbuttonbase125">
                                  <div className="addtest-ichorizontalrule06">
                                    <img
                                      alt="Rectangle2486I842"
                                      src="/external/rectangle2486i842-3i1b-200h.png"
                                      className="addtest-rectangle248606"
                                    />
                                  </div>
                                </button>
                              </button>
                            </div>
                          </div>
                          <div className="addtest-contentsarea06"></div>
                          <div className="addtest-frame100000154706">
                            <div className="addtest-corner12">
                              <div className="addtest-corner13">
                                <img
                                  alt="Line20I842"
                                  src="/external/line20i842-y248.svg"
                                  className="addtest-line2006"
                                />
                                <img
                                  alt="Line21I842"
                                  src="/external/line21i842-gw5o.svg"
                                  className="addtest-line2106"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="addtest-input-icon06">
                          <img
                            alt="claritycloselineI842"
                            src="/external/claritycloselinei842-44cj.svg"
                            className="addtest-claritycloseline4"
                          />
                        </div>
                      </div>
                      <div className="addtest-frame63563351">
                        <div className="addtest-checkbox5">
                          <div className="addtest-group8631">
                            <img
                              alt="Ellipse59I842"
                              src="/external/ellipse59i842-lwg-200h.png"
                              className="addtest-ellipse595"
                            />
                            <img
                              alt="Ellipse60I842"
                              src="/external/ellipse60i842-uh8b-200h.png"
                              className="addtest-ellipse601"
                            />
                          </div>
                        </div>
                        <div className="addtest-texteditor07">
                          <div className="addtest-menubar07">
                            <button className="addtest-buttongrouphistory07">
                              <button className="addtest-menubarbutton105">
                                <button className="addtest-menubarbuttonbase126">
                                  <img
                                    alt="icundoI842"
                                    src="/external/icundoi842-4jp5.svg"
                                    className="addtest-icundo07"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton106">
                                <button className="addtest-menubarbuttonbase127">
                                  <img
                                    alt="icredoI842"
                                    src="/external/icredoi842-c9sa.svg"
                                    className="addtest-icredo07"
                                  />
                                </button>
                              </button>
                            </button>
                            <div className="addtest-menubartextstyledropdown07">
                              <button className="addtest-menubarbuttonbase128">
                                <span className="addtest-text52 button">
                                  <span>Normal text</span>
                                </span>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-u8fl.svg"
                                  className="addtest-icchevrondown21"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubartextaligndropdown07">
                              <button className="addtest-menubarbuttonbase129">
                                <img
                                  alt="ictextalignleftI842"
                                  src="/external/ictextalignlefti842-8kd4.svg"
                                  className="addtest-ictextalignleft07"
                                />
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-t8615.svg"
                                  className="addtest-icchevrondown22"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubarcolorpickerdropdown07">
                              <button className="addtest-menubarbuttonbase130">
                                <div className="addtest-colorpickerlistitem07">
                                  <img
                                    alt="contextmenucolorpickerchipfillI842"
                                    src="/external/contextmenucolorpickerchipfilli842-mqzn-200h.png"
                                    className="addtest-contextmenucolorpickerchipfill07"
                                  />
                                  <img
                                    alt="contextmenucolorpickerchipborderI842"
                                    src="/external/contextmenucolorpickerchipborderi842-hfh-200h.png"
                                    className="addtest-contextmenucolorpickerchipborder07"
                                  />
                                </div>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-3s3.svg"
                                  className="addtest-icchevrondown23"
                                />
                              </button>
                            </div>
                            <div className="addtest-format07">
                              <button className="addtest-menubarbutton107">
                                <button className="addtest-menubarbuttonbase131">
                                  <img
                                    alt="ictextboldI842"
                                    src="/external/ictextboldi842-oqc.svg"
                                    className="addtest-ictextbold07"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton108">
                                <button className="addtest-menubarbuttonbase132">
                                  <img
                                    alt="ictextitalicI842"
                                    src="/external/ictextitalici842-095r.svg"
                                    className="addtest-ictextitalic07"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton109">
                                <button className="addtest-menubarbuttonbase133">
                                  <img
                                    alt="ictextunderlineI842"
                                    src="/external/ictextunderlinei842-nlet.svg"
                                    className="addtest-ictextunderline07"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton110">
                                <button className="addtest-menubarbuttonbase134">
                                  <img
                                    alt="ictextstrikethroughI842"
                                    src="/external/ictextstrikethroughi842-6rsj.svg"
                                    className="addtest-ictextstrikethrough07"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton111">
                                <button className="addtest-menubarbuttonbase135">
                                  <img
                                    alt="icinlinecodeI842"
                                    src="/external/icinlinecodei842-unui.svg"
                                    className="addtest-icinlinecode07"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton112">
                                <button className="addtest-menubarbuttonbase136">
                                  <img
                                    alt="ictextclearformatI842"
                                    src="/external/ictextclearformati842-vudd.svg"
                                    className="addtest-ictextclearformat07"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-list07">
                              <button className="addtest-menubarbutton113">
                                <button className="addtest-menubarbuttonbase137">
                                  <img
                                    alt="iclistbulletedI842"
                                    src="/external/iclistbulletedi842-7fn8.svg"
                                    className="addtest-iclistbulleted07"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton114">
                                <button className="addtest-menubarbuttonbase138">
                                  <img
                                    alt="iclistnumberedI842"
                                    src="/external/iclistnumberedi842-9sxh.svg"
                                    className="addtest-iclistnumbered07"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-etc07">
                              <button className="addtest-menubarbutton115">
                                <button className="addtest-menubarbuttonbase139">
                                  <img
                                    alt="iclinkI842"
                                    src="/external/iclinki842-xs3.svg"
                                    className="addtest-iclink07"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton116">
                                <button className="addtest-menubarbuttonbase140">
                                  <img
                                    alt="icimageI842"
                                    src="/external/icimagei842-duok.svg"
                                    className="addtest-icimage07"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton117">
                                <button className="addtest-menubarbuttonbase141">
                                  <img
                                    alt="iccodeI842"
                                    src="/external/iccodei842-ouu7.svg"
                                    className="addtest-iccode07"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton118">
                                <button className="addtest-menubarbuttonbase142">
                                  <img
                                    alt="icquotesI842"
                                    src="/external/icquotesi842-ot4.svg"
                                    className="addtest-icquotes07"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton119">
                                <button className="addtest-menubarbuttonbase143">
                                  <div className="addtest-ichorizontalrule07">
                                    <img
                                      alt="Rectangle2486I842"
                                      src="/external/rectangle2486i842-8oso-200h.png"
                                      className="addtest-rectangle248607"
                                    />
                                  </div>
                                </button>
                              </button>
                            </div>
                          </div>
                          <div className="addtest-contentsarea07"></div>
                          <div className="addtest-frame100000154707">
                            <div className="addtest-corner14">
                              <div className="addtest-corner15">
                                <img
                                  alt="Line20I842"
                                  src="/external/line20i842-vb6.svg"
                                  className="addtest-line2007"
                                />
                                <img
                                  alt="Line21I842"
                                  src="/external/line21i842-gp88.svg"
                                  className="addtest-line2107"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="addtest-input-icon07">
                          <img
                            alt="claritycloselineI842"
                            src="/external/claritycloselinei842-x6p.svg"
                            className="addtest-claritycloseline5"
                          />
                        </div>
                      </div>
                      <div className="addtest-frame63563363">
                        <div className="addtest-checkbox6">
                          <img
                            alt="Ellipse59I842"
                            src="/external/ellipse59i842-jp29-200h.png"
                            className="addtest-ellipse596"
                          />
                        </div>
                        <div className="addtest-texteditor08">
                          <div className="addtest-menubar08">
                            <button className="addtest-buttongrouphistory08">
                              <button className="addtest-menubarbutton120">
                                <button className="addtest-menubarbuttonbase144">
                                  <img
                                    alt="icundoI842"
                                    src="/external/icundoi842-s14.svg"
                                    className="addtest-icundo08"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton121">
                                <button className="addtest-menubarbuttonbase145">
                                  <img
                                    alt="icredoI842"
                                    src="/external/icredoi842-gxip.svg"
                                    className="addtest-icredo08"
                                  />
                                </button>
                              </button>
                            </button>
                            <div className="addtest-menubartextstyledropdown08">
                              <button className="addtest-menubarbuttonbase146">
                                <span className="addtest-text54 button">
                                  <span>Normal text</span>
                                </span>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-rtvs.svg"
                                  className="addtest-icchevrondown24"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubartextaligndropdown08">
                              <button className="addtest-menubarbuttonbase147">
                                <img
                                  alt="ictextalignleftI842"
                                  src="/external/ictextalignlefti842-rctj.svg"
                                  className="addtest-ictextalignleft08"
                                />
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-gm2r.svg"
                                  className="addtest-icchevrondown25"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubarcolorpickerdropdown08">
                              <button className="addtest-menubarbuttonbase148">
                                <div className="addtest-colorpickerlistitem08">
                                  <img
                                    alt="contextmenucolorpickerchipfillI842"
                                    src="/external/contextmenucolorpickerchipfilli842-o4g7-200h.png"
                                    className="addtest-contextmenucolorpickerchipfill08"
                                  />
                                  <img
                                    alt="contextmenucolorpickerchipborderI842"
                                    src="/external/contextmenucolorpickerchipborderi842-6eje-200h.png"
                                    className="addtest-contextmenucolorpickerchipborder08"
                                  />
                                </div>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-zud.svg"
                                  className="addtest-icchevrondown26"
                                />
                              </button>
                            </div>
                            <div className="addtest-format08">
                              <button className="addtest-menubarbutton122">
                                <button className="addtest-menubarbuttonbase149">
                                  <img
                                    alt="ictextboldI842"
                                    src="/external/ictextboldi842-eo99.svg"
                                    className="addtest-ictextbold08"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton123">
                                <button className="addtest-menubarbuttonbase150">
                                  <img
                                    alt="ictextitalicI842"
                                    src="/external/ictextitalici842-kd32.svg"
                                    className="addtest-ictextitalic08"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton124">
                                <button className="addtest-menubarbuttonbase151">
                                  <img
                                    alt="ictextunderlineI842"
                                    src="/external/ictextunderlinei842-vw.svg"
                                    className="addtest-ictextunderline08"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton125">
                                <button className="addtest-menubarbuttonbase152">
                                  <img
                                    alt="ictextstrikethroughI842"
                                    src="/external/ictextstrikethroughi842-m35.svg"
                                    className="addtest-ictextstrikethrough08"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton126">
                                <button className="addtest-menubarbuttonbase153">
                                  <img
                                    alt="icinlinecodeI842"
                                    src="/external/icinlinecodei842-hc28.svg"
                                    className="addtest-icinlinecode08"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton127">
                                <button className="addtest-menubarbuttonbase154">
                                  <img
                                    alt="ictextclearformatI842"
                                    src="/external/ictextclearformati842-nce.svg"
                                    className="addtest-ictextclearformat08"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-list08">
                              <button className="addtest-menubarbutton128">
                                <button className="addtest-menubarbuttonbase155">
                                  <img
                                    alt="iclistbulletedI842"
                                    src="/external/iclistbulletedi842-h0ro.svg"
                                    className="addtest-iclistbulleted08"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton129">
                                <button className="addtest-menubarbuttonbase156">
                                  <img
                                    alt="iclistnumberedI842"
                                    src="/external/iclistnumberedi842-7l6s.svg"
                                    className="addtest-iclistnumbered08"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-etc08">
                              <button className="addtest-menubarbutton130">
                                <button className="addtest-menubarbuttonbase157">
                                  <img
                                    alt="iclinkI842"
                                    src="/external/iclinki842-0gd.svg"
                                    className="addtest-iclink08"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton131">
                                <button className="addtest-menubarbuttonbase158">
                                  <img
                                    alt="icimageI842"
                                    src="/external/icimagei842-ee5.svg"
                                    className="addtest-icimage08"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton132">
                                <button className="addtest-menubarbuttonbase159">
                                  <img
                                    alt="iccodeI842"
                                    src="/external/iccodei842-dark.svg"
                                    className="addtest-iccode08"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton133">
                                <button className="addtest-menubarbuttonbase160">
                                  <img
                                    alt="icquotesI842"
                                    src="/external/icquotesi842-ic4i.svg"
                                    className="addtest-icquotes08"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton134">
                                <button className="addtest-menubarbuttonbase161">
                                  <div className="addtest-ichorizontalrule08">
                                    <img
                                      alt="Rectangle2486I842"
                                      src="/external/rectangle2486i842-pjn6-200h.png"
                                      className="addtest-rectangle248608"
                                    />
                                  </div>
                                </button>
                              </button>
                            </div>
                          </div>
                          <div className="addtest-contentsarea08"></div>
                          <div className="addtest-frame100000154708">
                            <div className="addtest-corner16">
                              <div className="addtest-corner17">
                                <img
                                  alt="Line20I842"
                                  src="/external/line20i842-1e4y.svg"
                                  className="addtest-line2008"
                                />
                                <img
                                  alt="Line21I842"
                                  src="/external/line21i842-2ai.svg"
                                  className="addtest-line2108"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="addtest-input-icon08">
                          <img
                            alt="claritycloselineI842"
                            src="/external/claritycloselinei842-kh1g.svg"
                            className="addtest-claritycloseline6"
                          />
                        </div>
                      </div>
                      <div className="addtest-frame63563371">
                        <div className="addtest-checkbox7">
                          <img
                            alt="Ellipse59I842"
                            src="/external/ellipse59i842-1txb-200h.png"
                            className="addtest-ellipse597"
                          />
                        </div>
                        <div className="addtest-texteditor09">
                          <div className="addtest-menubar09">
                            <button className="addtest-buttongrouphistory09">
                              <button className="addtest-menubarbutton135">
                                <button className="addtest-menubarbuttonbase162">
                                  <img
                                    alt="icundoI842"
                                    src="/external/icundoi842-122.svg"
                                    className="addtest-icundo09"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton136">
                                <button className="addtest-menubarbuttonbase163">
                                  <img
                                    alt="icredoI842"
                                    src="/external/icredoi842-dgu.svg"
                                    className="addtest-icredo09"
                                  />
                                </button>
                              </button>
                            </button>
                            <div className="addtest-menubartextstyledropdown09">
                              <button className="addtest-menubarbuttonbase164">
                                <span className="addtest-text56">
                                  <span>Normal text</span>
                                </span>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-cd7.svg"
                                  className="addtest-icchevrondown27"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubartextaligndropdown09">
                              <button className="addtest-menubarbuttonbase165">
                                <img
                                  alt="ictextalignleftI842"
                                  src="/external/ictextalignlefti842-cfku.svg"
                                  className="addtest-ictextalignleft09"
                                />
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-1a7m.svg"
                                  className="addtest-icchevrondown28"
                                />
                              </button>
                            </div>
                            <div className="addtest-menubarcolorpickerdropdown09">
                              <button className="addtest-menubarbuttonbase166">
                                <div className="addtest-colorpickerlistitem09">
                                  <img
                                    alt="contextmenucolorpickerchipfillI842"
                                    src="/external/contextmenucolorpickerchipfilli842-842-200h.png"
                                    className="addtest-contextmenucolorpickerchipfill09"
                                  />
                                  <img
                                    alt="contextmenucolorpickerchipborderI842"
                                    src="/external/contextmenucolorpickerchipborderi842-fp0o-200h.png"
                                    className="addtest-contextmenucolorpickerchipborder09"
                                  />
                                </div>
                                <img
                                  alt="icchevrondownI842"
                                  src="/external/icchevrondowni842-069k.svg"
                                  className="addtest-icchevrondown29"
                                />
                              </button>
                            </div>
                            <div className="addtest-format09">
                              <button className="addtest-menubarbutton137">
                                <button className="addtest-menubarbuttonbase167">
                                  <img
                                    alt="ictextboldI842"
                                    src="/external/ictextboldi842-ks9e.svg"
                                    className="addtest-ictextbold09"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton138">
                                <button className="addtest-menubarbuttonbase168">
                                  <img
                                    alt="ictextitalicI842"
                                    src="/external/ictextitalici842-77s.svg"
                                    className="addtest-ictextitalic09"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton139">
                                <button className="addtest-menubarbuttonbase169">
                                  <img
                                    alt="ictextunderlineI842"
                                    src="/external/ictextunderlinei842-mgw6.svg"
                                    className="addtest-ictextunderline09"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton140">
                                <button className="addtest-menubarbuttonbase170">
                                  <img
                                    alt="ictextstrikethroughI842"
                                    src="/external/ictextstrikethroughi842-3zfw.svg"
                                    className="addtest-ictextstrikethrough09"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton141">
                                <button className="addtest-menubarbuttonbase171">
                                  <img
                                    alt="icinlinecodeI842"
                                    src="/external/icinlinecodei842-1l5.svg"
                                    className="addtest-icinlinecode09"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton142">
                                <button className="addtest-menubarbuttonbase172">
                                  <img
                                    alt="ictextclearformatI842"
                                    src="/external/ictextclearformati842-wk2.svg"
                                    className="addtest-ictextclearformat09"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-list09">
                              <button className="addtest-menubarbutton143">
                                <button className="addtest-menubarbuttonbase173">
                                  <img
                                    alt="iclistbulletedI842"
                                    src="/external/iclistbulletedi842-hddv.svg"
                                    className="addtest-iclistbulleted09"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton144">
                                <button className="addtest-menubarbuttonbase174">
                                  <img
                                    alt="iclistnumberedI842"
                                    src="/external/iclistnumberedi842-brg.svg"
                                    className="addtest-iclistnumbered09"
                                  />
                                </button>
                              </button>
                            </div>
                            <div className="addtest-etc09">
                              <button className="addtest-menubarbutton145">
                                <button className="addtest-menubarbuttonbase175">
                                  <img
                                    alt="iclinkI842"
                                    src="/external/iclinki842-etar.svg"
                                    className="addtest-iclink09"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton146">
                                <button className="addtest-menubarbuttonbase176">
                                  <img
                                    alt="icimageI842"
                                    src="/external/icimagei842-w0l.svg"
                                    className="addtest-icimage09"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton147">
                                <button className="addtest-menubarbuttonbase177">
                                  <img
                                    alt="iccodeI842"
                                    src="/external/iccodei842-84og.svg"
                                    className="addtest-iccode09"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton148">
                                <button className="addtest-menubarbuttonbase178">
                                  <img
                                    alt="icquotesI842"
                                    src="/external/icquotesi842-au9a.svg"
                                    className="addtest-icquotes09"
                                  />
                                </button>
                              </button>
                              <button className="addtest-menubarbutton149">
                                <button className="addtest-menubarbuttonbase179">
                                  <div className="addtest-ichorizontalrule09">
                                    <img
                                      alt="Rectangle2486I842"
                                      src="/external/rectangle2486i842-eq4r-200h.png"
                                      className="addtest-rectangle248609"
                                    />
                                  </div>
                                </button>
                              </button>
                            </div>
                          </div>
                          <div className="addtest-contentsarea09"></div>
                          <div className="addtest-frame100000154709">
                            <div className="addtest-corner18">
                              <div className="addtest-corner19">
                                <img
                                  alt="Line20I842"
                                  src="/external/line20i842-4r08.svg"
                                  className="addtest-line2009"
                                />
                                <img
                                  alt="Line21I842"
                                  src="/external/line21i842-z4oq.svg"
                                  className="addtest-line2109"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="addtest-input-icon09">
                          <img
                            alt="claritycloselineI842"
                            src="/external/claritycloselinei842-vwij.svg"
                            className="addtest-claritycloseline7"
                          />
                        </div>
                      </div>
                      <div className="addtest-frame63563181">
                        <img
                          alt="addcircleoutlineblack24dp18424"
                          src="/external/addcircleoutlineblack24dp18424-3ehe.svg"
                          className="addtest-addcircleoutlineblack24dp11"
                        />
                        <span className="addtest-text58">
                          <span>Add variant</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="addtest-frame63563511">
                    <button className="addtest-button2">
                      <Link to="/" className="addtest-navlink3">
                        <div className="addtest-itemlink2">
                          <span className="addtest-text60">
                            <span>Cancel</span>
                          </span>
                        </div>
                      </Link>
                    </button>
                    <button className="addtest-button3">
                      <Link to="/" className="addtest-navlink4">
                        <div className="addtest-itemlink3">
                          <span className="addtest-text62">
                            <span>Save</span>
                          </span>
                        </div>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="addtest-frame-footer1">
            <div className="addtest-content-wrapper1">
              <div className="addtest-content-wrapper2">
                <span className="addtest-text64 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="addtest-text66 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="addtest-text68 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="addtest-text70 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="addtest-text72 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addtest
