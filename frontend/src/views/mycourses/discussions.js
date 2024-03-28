import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './discussions.css'

const Discussions = (props) => {
  return (
    <div className="discussions-container">
      <Helmet>
        <title>Discussions</title>
      </Helmet>
      <div className="discussions-mycourses">
        <div className="discussions-frame-admin-panel-menu1">
          <div className="discussions-frame-admin-panel-menu11">
            <div className="discussions-logo">
              <div className="discussions-logo1">
                <div className="discussions-frame1000002598">
                  <img
                    src="/external/containerlogo6543-wis-200h.png"
                    alt="ContainerLogo6543"
                    className="discussions-container-logo"
                  />
                  <div className="discussions-book4">
                    <div className="discussions-group">
                      <img
                        src="/external/vectori654-6upf.svg"
                        alt="VectorI654"
                        className="discussions-vector"
                      />
                      <img
                        src="/external/vectori654-2ceh.svg"
                        alt="VectorI654"
                        className="discussions-vector01"
                      />
                      <img
                        src="/external/vectori654-j42g.svg"
                        alt="VectorI654"
                        className="discussions-vector02"
                      />
                      <img
                        src="/external/vectori654-c3tw.svg"
                        alt="VectorI654"
                        className="discussions-vector03"
                      />
                    </div>
                  </div>
                </div>
                <div className="discussions-frame-title">
                  <span className="discussions-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="discussions-frame-menu">
              <div className="discussions-menu-items">
                <Link to="/discussions" className="discussions-navlink">
                  <div className="discussions-menu-item-inline-navigation-item">
                    <img
                      src="/external/icondashboardoutlinedi654-vtij.svg"
                      alt="IconDashboardOutlinedI654"
                      className="discussions-icon-dashboard-outlined"
                    />
                    <span className="discussions-text002 LightBaseBaseNormal">
                      <span>Dashboard</span>
                    </span>
                  </div>
                </Link>
                <Link to="/discussions" className="discussions-navlink1">
                  <div className="discussions-menu-item-inline-navigation-item1">
                    <img
                      src="/external/icondatabaseoutlinedi654-sl4.svg"
                      alt="IconDatabaseOutlinedI654"
                      className="discussions-icon-database-outlined"
                    />
                    <span className="discussions-text004 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                </Link>
                <Link to="/discussions" className="discussions-navlink2">
                  <div className="discussions-menu-item-inline-navigation-item2">
                    <img
                      src="/external/iconbarchartoutlinedi654-5v6t.svg"
                      alt="IconBarChartOutlinedI654"
                      className="discussions-icon-bar-chart-outlined"
                    />
                    <span className="discussions-text006 LightBaseBaseNormal">
                      <span>Statistics</span>
                    </span>
                  </div>
                </Link>
                <Link to="/discussions" className="discussions-navlink3">
                  <div className="discussions-menu-item-inline-navigation-item3">
                    <img
                      src="/external/iconcalendaroutlinedi654-ury8.svg"
                      alt="IconCalendarOutlinedI654"
                      className="discussions-icon-calendar-outlined"
                    />
                    <span className="discussions-text008 LightBaseBaseNormal">
                      <span>Calendar</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="discussions-menu-submenu">
                <Link to="/discussions" className="discussions-navlink4">
                  <div className="discussions-menu-item-inline-submenu-title">
                    <img
                      src="/external/iconfiletextoutlinedi654-44d.svg"
                      alt="IconFileTextOutlinedI654"
                      className="discussions-icon-file-text-outlined"
                    />
                    <span className="discussions-text010 LightBaseBaseNormal">
                      <span>Invoice</span>
                    </span>
                    <img
                      src="/external/icondownoutlinedi654-yjxo.svg"
                      alt="IconDownOutlinedI654"
                      className="discussions-icon-down-outlined"
                    />
                  </div>
                </Link>
              </div>
              <div className="discussions-menu-items1">
                <Link to="/discussions" className="discussions-navlink5">
                  <div className="discussions-menu-item-inline-navigation-item4">
                    <img
                      src="/external/iconsettingoutlinedi654-br2j.svg"
                      alt="IconSettingOutlinedI654"
                      className="discussions-icon-setting-outlined"
                    />
                    <span className="discussions-text012 LightBaseBaseNormal">
                      <span>Settings</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="discussions-content-wrapper">
          <div className="discussions-frame-header">
            <div className="discussions-icon-search">
              <button className="discussions-frame-button">
                <div className="discussions-content">
                  <img
                    src="/external/iconmenufoldoutlinedi654-ot8i.svg"
                    alt="IconMenuFoldOutlinedI654"
                    className="discussions-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="discussions-frame-input-search">
                <div className="discussions-input-wrapper">
                  <div className="discussions-frame-input-basic">
                    <div className="discussions-content1">
                      <span className="discussions-text014 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="discussions-frame-button1">
                  <div className="discussions-content2">
                    <img
                      src="/external/iconsearchoutlinedi654-tyno.svg"
                      alt="IconSearchOutlinedI654"
                      className="discussions-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="discussions-avatar-button">
              <button className="discussions-frame-button2">
                <div className="discussions-content3">
                  <img
                    src="/external/iconglobaloutlinedi654-pqki.svg"
                    alt="IconGlobalOutlinedI654"
                    className="discussions-icon-global-outlined"
                  />
                  <span className="discussions-text016 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="discussions-notifications">
                <img
                  src="/external/iconbelloutlinedi654-sw4.svg"
                  alt="IconBellOutlinedI654"
                  className="discussions-icon-bell-outlined"
                />
                <div className="discussions-content4">
                  <div className="discussions-frame-badge-basic">
                    <span className="discussions-text018 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/discussions" className="discussions-navlink6">
                <div className="discussions-frame-avatar">
                  <img
                    src="/external/iconuseroutlinedi654-19to.svg"
                    alt="IconUserOutlinedI654"
                    className="discussions-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="discussions-frame-card1">
            <button className="discussions-header-button">
              <div className="discussions-header-links">
                <div className="discussions-frame-breadcrumb">
                  <div className="discussions-breadcrumb-link">
                    <span className="discussions-text020 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                  <div className="discussions-breadcrumb-separator">
                    <div className="discussions-content5">
                      <span className="discussions-text022 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="discussions-breadcrumb-link1">
                    <span className="discussions-text023 LightBaseBaseNormal">
                      <span>Cinema 4d</span>
                    </span>
                  </div>
                </div>
                <div className="discussions-frame-title1">
                  <span className="discussions-text025 LightHeadingHeading2">
                    <span>Cinema 4d</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="discussions-frame295">
              <div className="discussions-frame1">
                <div className="discussions-remixiconslinesystemapps2line">
                  <div className="discussions-group01"></div>
                </div>
                <img
                  src="/external/rectangle356544-tfho.svg"
                  alt="Rectangle356544"
                  className="discussions-rectangle35"
                />
                <span className="discussions-text027">
                  <span className="discussions-text028">
                    Courses /
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="discussions-text029">
                    Cinema 4D /
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Module 6</span>
                </span>
                <div className="discussions-frame107">
                  <div className="discussions-remixiconslinesystemapps2line1">
                    <div className="discussions-group02"></div>
                  </div>
                  <div className="discussions-frame80"></div>
                  <img
                    src="/external/rectangle356544-qwxk-300w.png"
                    alt="Rectangle356544"
                    className="discussions-rectangle351"
                  />
                  <img
                    src="/external/rectangle366544-zlx-400h.png"
                    alt="Rectangle366544"
                    className="discussions-rectangle36"
                  />
                  <div className="discussions-group85">
                    <span className="discussions-text031">
                      <span>Module 6 Completion</span>
                    </span>
                    <div className="discussions-group80">
                      <div className="discussions-frame29">
                        <span className="discussions-text033">
                          <span className="discussions-text034">02/</span>
                          <span>07</span>
                        </span>
                        <span className="discussions-text036">
                          <span>35% Completed</span>
                        </span>
                      </div>
                      <div className="discussions-group7">
                        <img
                          src="/external/rectangle246544-4pana-200h.png"
                          alt="Rectangle246544"
                          className="discussions-rectangle24"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="discussions-remixiconslinesystemcheckline">
                    <div className="discussions-group03"></div>
                  </div>
                  <div className="discussions-frame82">
                    <span className="discussions-text038">
                      <span>Lesson 3. Creation project</span>
                    </span>
                    <div className="discussions-frame11">
                      <div className="discussions-remixiconslinesystemlock2line">
                        <div className="discussions-group04">
                          <img
                            src="/external/vectori654-um4.svg"
                            alt="VectorI654"
                            className="discussions-vector04"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="discussions-frame83">
                    <span className="discussions-text040">
                      <span>
                        Lesson 4. Elaboration of textures and contour adjustment
                      </span>
                    </span>
                    <div className="discussions-frame111">
                      <div className="discussions-remixiconslinesystemlock2line1">
                        <div className="discussions-group05">
                          <img
                            src="/external/vectori654-avgn.svg"
                            alt="VectorI654"
                            className="discussions-vector05"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="discussions-frame84">
                    <span className="discussions-text042">
                      <span>
                        Lesson 5. Development of detailed objects and
                        high-quality study of structures
                      </span>
                    </span>
                    <div className="discussions-frame112">
                      <div className="discussions-remixiconslinesystemlock2line2">
                        <div className="discussions-group06">
                          <img
                            src="/external/vectori654-hpe3.svg"
                            alt="VectorI654"
                            className="discussions-vector06"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src="/external/line56544-zy3r.svg"
                    alt="Line56544"
                    className="discussions-line5"
                  />
                  <img
                    src="/external/line66544-5bui.svg"
                    alt="Line66544"
                    className="discussions-line6"
                  />
                  <div className="discussions-remixiconslinesystemcheckline1">
                    <div className="discussions-group07">
                      <img
                        src="/external/vectori654-sm6s.svg"
                        alt="VectorI654"
                        className="discussions-vector07"
                      />
                    </div>
                  </div>
                  <div className="discussions-remixiconslinesystemcheckline2">
                    <div className="discussions-group08">
                      <img
                        src="/external/vectori654-ne2.svg"
                        alt="VectorI654"
                        className="discussions-vector08"
                      />
                    </div>
                  </div>
                </div>
                <span className="discussions-text044">
                  <span>View my notes</span>
                </span>
                <img
                  src="/external/rectangle196544-yhcn-200w.png"
                  alt="Rectangle196544"
                  className="discussions-rectangle19"
                />
                <div className="discussions-frame134">
                  <img
                    src="/external/rectangle246544-7z6l-200h.png"
                    alt="Rectangle246544"
                    className="discussions-rectangle241"
                  />
                  <img
                    src="/external/rectangle486544-9lyp-200h.png"
                    alt="Rectangle486544"
                    className="discussions-rectangle48"
                  />
                  <img
                    src="/external/rectangle496544-2cwu-200h.png"
                    alt="Rectangle496544"
                    className="discussions-rectangle49"
                  />
                  <img
                    src="/external/rectangle506544-7i87-200h.png"
                    alt="Rectangle506544"
                    className="discussions-rectangle50"
                  />
                  <img
                    src="/external/rectangle526544-0spn-200h.png"
                    alt="Rectangle526544"
                    className="discussions-rectangle52"
                  />
                </div>
                <div className="discussions-frame124"></div>
                <img
                  src="/external/line56544-xf8.svg"
                  alt="Line56544"
                  className="discussions-line51"
                />
                <div className="discussions-frame3">
                  <div className="discussions-frame31">
                    <div className="discussions-remixiconslinesystemloginboxline">
                      <div className="discussions-group09"></div>
                    </div>
                  </div>
                  <div className="discussions-frame32">
                    <div className="discussions-remixiconslinesystemquestionline">
                      <div className="discussions-group10"></div>
                    </div>
                  </div>
                </div>
                <div className="discussions-frame87">
                  <div className="discussions-frame81">
                    <span className="discussions-text046">
                      <span>About</span>
                    </span>
                    <span className="discussions-text048">
                      <span>Additional materials</span>
                    </span>
                    <span className="discussions-text050">
                      <span>Resources</span>
                    </span>
                    <span className="discussions-text052">
                      <span>
                        Discussions
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span className="discussions-text054">
                      <span>Transcripts</span>
                    </span>
                  </div>
                  <div className="discussions-group851">
                    <div className="discussions-component1">
                      <img
                        src="/external/rectangle276544-slz2o-200h.png"
                        alt="Rectangle276544"
                        className="discussions-rectangle27"
                      />
                      <span className="discussions-text056">
                        <span>Next Step</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  src="/external/rectangle256544-96kk-200h.png"
                  alt="Rectangle256544"
                  className="discussions-rectangle25"
                />
                <img
                  src="/external/line46544-8qg9.svg"
                  alt="Line46544"
                  className="discussions-line4"
                />
                <div className="discussions-frame841">
                  <div className="discussions-frame133">
                    <div className="discussions-group83">
                      <img
                        src="/external/line56544-raw.svg"
                        alt="Line56544"
                        className="discussions-line52"
                      />
                      <div className="discussions-frame821">
                        <span className="discussions-text058">
                          <span>Lesson 1. Introduction</span>
                        </span>
                        <div className="discussions-frame113">
                          <div className="discussions-remixiconslinesystemarrowrightsline">
                            <div className="discussions-group11">
                              <img
                                src="/external/vectori654-6hht.svg"
                                alt="VectorI654"
                                className="discussions-vector09"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="discussions-frame132">
                        <div className="discussions-frame822">
                          <div className="discussions-frame823">
                            <span className="discussions-text060">
                              <span>
                                1.1. Basic tools and built-in animation
                                capabilities
                              </span>
                            </span>
                            <div className="discussions-frame130">
                              <span className="discussions-text062">
                                <span>1.2. Work with lighting</span>
                              </span>
                            </div>
                            <span className="discussions-text064">
                              <span>
                                1.3. Adding volume to an image through
                                chiaroscuro adjustment
                              </span>
                            </span>
                            <span className="discussions-text066">
                              <span>1.4. Test №1</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="discussions-group831">
                    <img
                      src="/external/line56544-vnah.svg"
                      alt="Line56544"
                      className="discussions-line53"
                    />
                    <div className="discussions-frame824">
                      <span className="discussions-text068">
                        <span>
                          Lesson 2. Fundamentals of animation and rendering
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                      <div className="discussions-frame114">
                        <div className="discussions-remixiconslinesystemarrowrightsline1">
                          <div>
                            <img
                              src="/external/vectori654-ql7k.svg"
                              alt="VectorI654"
                              className="discussions-vector10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="discussions-frame1321">
                      <div className="discussions-frame825">
                        <div className="discussions-frame826">
                          <span className="discussions-text070">
                            <span>
                              1.1. Basic tools and built-in animation
                              capabilities
                            </span>
                          </span>
                          <div className="discussions-frame1301">
                            <span className="discussions-text072">
                              <span>1.2. Work with lighting</span>
                            </span>
                          </div>
                          <span className="discussions-text074">
                            <span>
                              1.3. Adding volume to an image through chiaroscuro
                              adjustment
                            </span>
                          </span>
                          <span className="discussions-text076">
                            <span>1.4. Test №1</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="discussions-text078">
                  <span>Comments (232)</span>
                </span>
                <div className="discussions-frame137">
                  <div className="discussions-remixiconslineeditorsortdesc">
                    <div className="discussions-group13">
                      <img
                        src="/external/vectori654-rzrnup.svg"
                        alt="VectorI654"
                        className="discussions-vector11"
                      />
                    </div>
                  </div>
                  <span className="discussions-text080">
                    <span>Sort by popularity</span>
                  </span>
                </div>
                <img
                  src="/external/rectangle546544-z3km-200h.png"
                  alt="Rectangle546544"
                  className="discussions-rectangle54"
                />
                <div className="discussions-frame138">
                  <div className="discussions-frame6">
                    <img
                      src="/external/ellipse16544-o7lu-200w.png"
                      alt="Ellipse16544"
                      className="discussions-ellipse1"
                    />
                  </div>
                  <div className="discussions-group12 discussions-group12">
                    <span className="discussions-text082">
                      <span>Leave a comment...</span>
                    </span>
                  </div>
                </div>
                <div className="discussions-frame140">
                  <div className="discussions-frame139">
                    <img
                      src="/external/ellipse16544-fzdr-200w.png"
                      alt="Ellipse16544"
                      className="discussions-ellipse11"
                    />
                    <span className="discussions-text084">
                      <span>Olivia Tompson</span>
                    </span>
                  </div>
                  <span className="discussions-text086">
                    <span>1 month ago</span>
                  </span>
                </div>
                <span className="discussions-text088">
                  <span>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                    et. Sunt qui esse pariatur duis deserunt mollit dolore
                    cillum minim tempor enim. Elit aute irure tempor cupidatat
                    incididunt sint deserunt ut voluptate aute id deserunt nisi.
                  </span>
                </span>
                <div className="discussions-frame102">
                  <span className="discussions-text090">
                    <span>Like</span>
                  </span>
                  <span className="discussions-text092">
                    <span>Reply</span>
                  </span>
                  <span className="discussions-text094">
                    <span>Follow Thread</span>
                  </span>
                  <span className="discussions-text096">
                    <span>Last active 1 month ago</span>
                  </span>
                </div>
                <div className="discussions-frame1021">
                  <div className="discussions-remixiconsfillcommunicationchatsmile3fill">
                    <div className="discussions-group14">
                      <img
                        src="/external/vectori654-m9eh.svg"
                        alt="VectorI654"
                        className="discussions-vector12"
                      />
                    </div>
                  </div>
                  <span className="discussions-text098">
                    <span>56</span>
                  </span>
                </div>
                <div className="discussions-frame142">
                  <div className="discussions-remixiconsfilluserteamfill">
                    <div className="discussions-group15">
                      <img
                        src="/external/vectori654-fwc.svg"
                        alt="VectorI654"
                        className="discussions-vector13"
                      />
                    </div>
                  </div>
                  <span className="discussions-text100">
                    <span>44</span>
                  </span>
                </div>
                <div className="discussions-frame141">
                  <div className="discussions-remixiconsfillhealthheartfill">
                    <div className="discussions-group16">
                      <img
                        src="/external/vectori654-7q9g.svg"
                        alt="VectorI654"
                        className="discussions-vector14"
                      />
                    </div>
                  </div>
                  <span className="discussions-text102">
                    <span>32</span>
                  </span>
                </div>
              </div>
              <div className="discussions-group86">
                <span className="discussions-text104">
                  <span>1.2. Work with lighting</span>
                </span>
                <div className="discussions-group79">
                  <img
                    src="/external/rectangle466544-drme-400h.png"
                    alt="Rectangle466544"
                    className="discussions-rectangle46"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="discussions-frame-footer1">
            <div className="discussions-content-wrapper1">
              <div className="discussions-content-wrapper2">
                <span className="discussions-text106 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="discussions-text108 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="discussions-text110 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="discussions-text112 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="discussions-text114 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discussions
