import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>about</title>
      </Helmet>
      <div className="about-mycourses">
        <div className="about-frame-admin-panel-menu1">
          <div className="about-frame-admin-panel-menu11">
            <div className="about-logo">
              <div className="about-logo1">
                <div className="about-frame1000002598">
                  <img
                    src="/external/containerlogo5411-yzv7-200h.png"
                    alt="ContainerLogo5411"
                    className="about-container-logo"
                  />
                  <div className="about-book4">
                    <div className="about-group">
                      <img
                        src="/external/vectori541-0hcl.svg"
                        alt="VectorI541"
                        className="about-vector"
                      />
                      <img
                        src="/external/vectori541-rr89.svg"
                        alt="VectorI541"
                        className="about-vector01"
                      />
                      <img
                        src="/external/vectori541-u70d.svg"
                        alt="VectorI541"
                        className="about-vector02"
                      />
                      <img
                        src="/external/vectori541-hrh.svg"
                        alt="VectorI541"
                        className="about-vector03"
                      />
                    </div>
                  </div>
                </div>
                <div className="about-frame-title">
                  <span className="about-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="about-frame-menu">
              <div className="about-menu-items">
                <Link to="/" className="about-navlink">
                  <div className="about-menu-item-inline-navigation-item">
                    <img
                      src="/external/icondashboardoutlinedi541-4po.svg"
                      alt="IconDashboardOutlinedI541"
                      className="about-icon-dashboard-outlined"
                    />
                    <span className="about-text002 LightBaseBaseNormal">
                      <span>Dashboard</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="about-navlink1">
                  <div className="about-menu-item-inline-navigation-item1">
                    <img
                      src="/external/icondatabaseoutlinedi541-zkr.svg"
                      alt="IconDatabaseOutlinedI541"
                      className="about-icon-database-outlined"
                    />
                    <span className="about-text004 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="about-navlink2">
                  <div className="about-menu-item-inline-navigation-item2">
                    <img
                      src="/external/iconbarchartoutlinedi541-flk.svg"
                      alt="IconBarChartOutlinedI541"
                      className="about-icon-bar-chart-outlined"
                    />
                    <span className="about-text006 LightBaseBaseNormal">
                      <span>Statistics</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="about-navlink3">
                  <div className="about-menu-item-inline-navigation-item3">
                    <img
                      src="/external/iconcalendaroutlinedi541-3upd.svg"
                      alt="IconCalendarOutlinedI541"
                      className="about-icon-calendar-outlined"
                    />
                    <span className="about-text008 LightBaseBaseNormal">
                      <span>Calendar</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="about-menu-submenu">
                <Link to="/" className="about-navlink4">
                  <div className="about-menu-item-inline-submenu-title">
                    <img
                      src="/external/iconfiletextoutlinedi541-pu4.svg"
                      alt="IconFileTextOutlinedI541"
                      className="about-icon-file-text-outlined"
                    />
                    <span className="about-text010 LightBaseBaseNormal">
                      <span>Invoice</span>
                    </span>
                    <img
                      src="/external/icondownoutlinedi541-lwje.svg"
                      alt="IconDownOutlinedI541"
                      className="about-icon-down-outlined"
                    />
                  </div>
                </Link>
              </div>
              <div className="about-menu-items1">
                <Link to="/" className="about-navlink5">
                  <div className="about-menu-item-inline-navigation-item4">
                    <img
                      src="/external/iconsettingoutlinedi541-gg9s.svg"
                      alt="IconSettingOutlinedI541"
                      className="about-icon-setting-outlined"
                    />
                    <span className="about-text012 LightBaseBaseNormal">
                      Settings
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about-content-wrapper">
          <div className="about-frame-header">
            <div className="about-icon-search">
              <button className="about-frame-button">
                <div className="about-content">
                  <img
                    src="/external/iconmenufoldoutlinedi541-dx9q.svg"
                    alt="IconMenuFoldOutlinedI541"
                    className="about-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="about-frame-input-search">
                <div className="about-input-wrapper">
                  <div className="about-frame-input-basic">
                    <div className="about-content1">
                      <span className="about-text013 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="about-frame-button1">
                  <div className="about-content2">
                    <img
                      src="/external/iconsearchoutlinedi541-ao2m.svg"
                      alt="IconSearchOutlinedI541"
                      className="about-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="about-avatar-button">
              <button className="about-frame-button2">
                <div className="about-content3">
                  <img
                    src="/external/iconglobaloutlinedi541-pf59.svg"
                    alt="IconGlobalOutlinedI541"
                    className="about-icon-global-outlined"
                  />
                  <span className="about-text015 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="about-notifications">
                <img
                  src="/external/iconbelloutlinedi541-xj0p.svg"
                  alt="IconBellOutlinedI541"
                  className="about-icon-bell-outlined"
                />
                <div className="about-content4">
                  <div className="about-frame-badge-basic">
                    <span className="about-text017 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/" className="about-navlink6">
                <div className="about-frame-avatar">
                  <img
                    src="/external/iconuseroutlinedi541-0wm8.svg"
                    alt="IconUserOutlinedI541"
                    className="about-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="about-frame-card1">
            <button className="about-header-button">
              <div className="about-header-links">
                <div className="about-frame-breadcrumb">
                  <div className="about-breadcrumb-link">
                    <span className="about-text019 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                  <div className="about-breadcrumb-separator">
                    <div className="about-content5">
                      <span className="about-text021 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="about-breadcrumb-link1">
                    <span className="about-text022 LightBaseBaseNormal">
                      <span>Cinema 4d</span>
                    </span>
                  </div>
                </div>
                <div className="about-frame-title1">
                  <span className="about-text024 LightHeadingHeading2">
                    <span>Cinema 4d</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="about-frame1">
              <div className="about-remixiconslinesystemapps2line">
                <div className="about-group01"></div>
              </div>
              <img
                src="/external/rectangle355412-l24.svg"
                alt="Rectangle355412"
                className="about-rectangle35"
              />
              <span className="about-text026">
                <span className="about-text027">
                  Courses /
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="about-text028">
                  Cinema 4D /
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Module 6</span>
              </span>
              <div className="about-frame107">
                <div className="about-remixiconslinesystemapps2line1">
                  <div className="about-group02"></div>
                </div>
                <div className="about-frame80"></div>
                <img
                  src="/external/rectangle355412-2nqh-300w.png"
                  alt="Rectangle355412"
                  className="about-rectangle351"
                />
                <img
                  src="/external/rectangle365412-qvxe-400h.png"
                  alt="Rectangle365412"
                  className="about-rectangle36"
                />
                <div className="about-group85">
                  <span className="about-text030">
                    <span>Module 6 Completion</span>
                  </span>
                  <div className="about-group80">
                    <div className="about-frame29">
                      <span className="about-text032">
                        <span className="about-text033">02/</span>
                        <span>07</span>
                      </span>
                      <span className="about-text035">
                        <span>35% Completed</span>
                      </span>
                    </div>
                    <div className="about-group7">
                      <img
                        src="/external/rectangle245412-atpw-200h.png"
                        alt="Rectangle245412"
                        className="about-rectangle24"
                      />
                    </div>
                  </div>
                </div>
                <div className="about-remixiconslinesystemcheckline">
                  <div className="about-group03"></div>
                </div>
                <div className="about-frame82">
                  <span className="about-text037">
                    <span>Lesson 3. Creation project</span>
                  </span>
                  <div className="about-frame11">
                    <div className="about-remixiconslinesystemlock2line">
                      <div className="about-group04">
                        <img
                          src="/external/vectori541-9td8.svg"
                          alt="VectorI541"
                          className="about-vector04"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-frame83">
                  <span className="about-text039">
                    <span>
                      Lesson 4. Elaboration of textures and contour adjustment
                    </span>
                  </span>
                  <div className="about-frame111">
                    <div className="about-remixiconslinesystemlock2line1">
                      <div className="about-group05">
                        <img
                          src="/external/vectori541-dpl3.svg"
                          alt="VectorI541"
                          className="about-vector05"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-frame84">
                  <span className="about-text041">
                    <span>
                      Lesson 5. Development of detailed objects and high-quality
                      study of structures
                    </span>
                  </span>
                  <div className="about-frame112">
                    <div className="about-remixiconslinesystemlock2line2">
                      <div className="about-group06">
                        <img
                          src="/external/vectori541-ox1.svg"
                          alt="VectorI541"
                          className="about-vector06"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="/external/line55412-kiwe.svg"
                  alt="Line55412"
                  className="about-line5"
                />
                <img
                  src="/external/line65412-01d.svg"
                  alt="Line65412"
                  className="about-line6"
                />
                <div className="about-remixiconslinesystemcheckline1">
                  <div className="about-group07">
                    <img
                      src="/external/vectori541-f26.svg"
                      alt="VectorI541"
                      className="about-vector07"
                    />
                  </div>
                </div>
                <div className="about-remixiconslinesystemcheckline2">
                  <div className="about-group08">
                    <img
                      src="/external/vectori541-jt7h.svg"
                      alt="VectorI541"
                      className="about-vector08"
                    />
                  </div>
                </div>
              </div>
              <span className="about-text043">
                <span>View my notes</span>
              </span>
              <img
                src="/external/rectangle195412-mzj6-200w.png"
                alt="Rectangle195412"
                className="about-rectangle19"
              />
              <div className="about-frame134">
                <img
                  src="/external/rectangle245412-543w-200h.png"
                  alt="Rectangle245412"
                  className="about-rectangle241"
                />
                <img
                  src="/external/rectangle485412-3a6p-200h.png"
                  alt="Rectangle485412"
                  className="about-rectangle48"
                />
                <img
                  src="/external/rectangle495412-zmcg-200h.png"
                  alt="Rectangle495412"
                  className="about-rectangle49"
                />
                <img
                  src="/external/rectangle505412-w95f-200h.png"
                  alt="Rectangle505412"
                  className="about-rectangle50"
                />
                <img
                  src="/external/rectangle525412-lvc9-200h.png"
                  alt="Rectangle525412"
                  className="about-rectangle52"
                />
              </div>
              <div className="about-frame124"></div>
              <img
                src="/external/line55412-msqg.svg"
                alt="Line55412"
                className="about-line51"
              />
              <div className="about-frame841">
                <div className="about-frame133">
                  <div className="about-group83">
                    <img
                      src="/external/line55412-y0ij.svg"
                      alt="Line55412"
                      className="about-line52"
                    />
                    <div className="about-frame821">
                      <span className="about-text045">
                        <span>Lesson 1. Introduction</span>
                      </span>
                      <div className="about-frame113">
                        <div className="about-remixiconslinesystemarrowrightsline">
                          <div className="about-group09">
                            <img
                              src="/external/vectori541-n01.svg"
                              alt="VectorI541"
                              className="about-vector09"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="about-frame132">
                      <div className="about-frame822">
                        <div className="about-frame823">
                          <span className="about-text047">
                            <span>
                              1.1. Basic tools and built-in animation
                              capabilities
                            </span>
                          </span>
                          <div className="about-frame130">
                            <span className="about-text049">
                              <span>1.2. Work with lighting</span>
                            </span>
                          </div>
                          <span className="about-text051">
                            <span>
                              1.3. Adding volume to an image through chiaroscuro
                              adjustment
                            </span>
                          </span>
                          <span className="about-text053">
                            <span>1.4. Test №1</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-group831">
                  <img
                    src="/external/line55412-753n.svg"
                    alt="Line55412"
                    className="about-line53"
                  />
                  <div className="about-frame824">
                    <span className="about-text055">
                      <span>
                        Lesson 2. Fundamentals of animation and rendering
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <div className="about-frame114">
                      <div className="about-remixiconslinesystemarrowrightsline1">
                        <div className="about-group10">
                          <img
                            src="/external/vectori541-lvd.svg"
                            alt="VectorI541"
                            className="about-vector10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-frame1321">
                    <div className="about-frame825">
                      <div className="about-frame826">
                        <span className="about-text057">
                          <span>
                            1.1. Basic tools and built-in animation capabilities
                          </span>
                        </span>
                        <div className="about-frame1301">
                          <span className="about-text059">
                            <span>1.2. Work with lighting</span>
                          </span>
                        </div>
                        <span className="about-text061">
                          <span>
                            1.3. Adding volume to an image through chiaroscuro
                            adjustment
                          </span>
                        </span>
                        <span className="about-text063">
                          <span>1.4. Test №1</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-frame136">
                <span className="about-text065">
                  <span>Timeline outline plan</span>
                </span>
                <div className="about-frame87">
                  <div className="about-frame135">
                    <span className="about-text067">
                      <span>00:00 - 00:20</span>
                    </span>
                    <span className="about-text069">
                      <span>00:20 - 01:30</span>
                    </span>
                    <span className="about-text071">
                      <span>01:30 - 02:20</span>
                    </span>
                    <span className="about-text073">
                      <span>02:20 - 04:10</span>
                    </span>
                    <span className="about-text075">
                      <span>04:10 - 04:50</span>
                    </span>
                    <span className="about-text077">
                      <span>04:50 - 05:10</span>
                    </span>
                  </div>
                  <div className="about-frame871">
                    <span className="about-text079">
                      <span>Parturient Venenatis Etiam</span>
                    </span>
                    <span className="about-text081">
                      <span>Inceptos</span>
                    </span>
                    <span className="about-text083">
                      <span>Fringilla Nullam</span>
                    </span>
                    <span className="about-text085">
                      <span>Magna Malesuada</span>
                    </span>
                    <span className="about-text087">
                      <span>Vestibulum</span>
                    </span>
                    <span className="about-text089">
                      <span>Fermentum Venenatis Tortor</span>
                    </span>
                  </div>
                </div>
              </div>
              <span className="about-text091">
                <span>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi.
                </span>
              </span>
              <div className="about-frame872">
                <div className="about-frame81">
                  <span className="about-text093">
                    <span>About</span>
                  </span>
                  <span className="about-text095">
                    <span>Additional materials</span>
                  </span>
                  <Link to="/resources" className="about-text097">
                    <span>Resources</span>
                  </Link>
                  <Link to="/discussions" className="about-text099">
                    <span>Discussion</span>
                  </Link>
                  <Link to="/transcripts" className="about-text101">
                    <span>Transcripts</span>
                  </Link>
                </div>
                <div className="about-group84">
                  <div className="about-component1">
                    <img
                      src="/external/rectangle275412-w6yc-200h.png"
                      alt="Rectangle275412"
                      className="about-rectangle27"
                    />
                    <span className="about-text103">
                      <span>Next Step</span>
                    </span>
                  </div>
                </div>
                <img
                  src="/external/rectangle256544-8p82-200h.png"
                  alt="Rectangle256544"
                  className="about-rectangle25"
                />
              </div>
              <img
                src="/external/line45412-qsd.svg"
                alt="Line45412"
                className="about-line4"
              />
              <div className="about-group86">
                <span className="about-text105">
                  <span>1.2. Work with lighting</span>
                </span>
                <div className="about-group79">
                  <img
                    src="/external/rectangle465412-wwrr-400h.png"
                    alt="Rectangle465412"
                    className="about-rectangle46"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="about-frame-footer1">
            <div className="about-content-wrapper1">
              <div className="about-content-wrapper2">
                <span className="about-text107 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="about-text109 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="about-text111 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="about-text113 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="about-text115 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
