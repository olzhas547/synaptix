import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './uxui.css'

const Uxui = (props) => {
  return (
    <div className="uxui-container">
      <Helmet>
        <title>UX-UI</title>
      </Helmet>
      <div className="uxui-createcourse">
        <div className="uxui-frame-admin-panel-menu1">
          <div className="uxui-frame-admin-panel-menu11">
            <div className="uxui-logo">
              <div className="uxui-logo1">
                <div className="uxui-frame1000002598">
                  <img
                    src="/external/containerlogo6542-o3j-200h.png"
                    alt="ContainerLogo6542"
                    className="uxui-container-logo"
                  />
                  <div className="uxui-book4">
                    <div className="uxui-group">
                      <img
                        src="/external/vectori654-txmy.svg"
                        alt="VectorI654"
                        className="uxui-vector"
                      />
                      <img
                        src="/external/vectori654-rfci.svg"
                        alt="VectorI654"
                        className="uxui-vector1"
                      />
                      <img
                        src="/external/vectori654-rheyj.svg"
                        alt="VectorI654"
                        className="uxui-vector2"
                      />
                      <img
                        src="/external/vectori654-x3s.svg"
                        alt="VectorI654"
                        className="uxui-vector3"
                      />
                    </div>
                  </div>
                </div>
                <div className="uxui-frame-title">
                  <span className="uxui-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="uxui-frame-menu">
              <div className="uxui-menu-items">
                <div className="uxui-menu-item-inline-navigation-item">
                  <img
                    src="/external/icondashboardoutlinedi654-57.svg"
                    alt="IconDashboardOutlinedI654"
                    className="uxui-icon-dashboard-outlined"
                  />
                  <span className="uxui-text002 LightBaseBaseNormal">
                    <span>Dashboard</span>
                  </span>
                </div>
                <div className="uxui-menu-item-inline-navigation-item1">
                  <img
                    src="/external/icondatabaseoutlinedi654-9r7d.svg"
                    alt="IconDatabaseOutlinedI654"
                    className="uxui-icon-database-outlined"
                  />
                  <span className="uxui-text004 LightBaseBaseNormal">
                    <span>My courses</span>
                  </span>
                </div>
                <div className="uxui-menu-item-inline-navigation-item2">
                  <img
                    src="/external/iconsearchoutlinedi654-4pgb.svg"
                    alt="IconSearchOutlinedI654"
                    className="uxui-icon-search-outlined"
                  />
                  <Link to="/" className="uxui-text006 LightBaseBaseNormal">
                    <span>Explore</span>
                  </Link>
                </div>
                <div className="uxui-menu-item-inline-navigation-item3">
                  <img
                    src="/external/iconcalendaroutlinedi654-1fyg.svg"
                    alt="IconCalendarOutlinedI654"
                    className="uxui-icon-calendar-outlined"
                  />
                  <span className="uxui-text008 LightBaseBaseNormal">
                    <span>Calendar</span>
                  </span>
                </div>
              </div>
              <div className="uxui-menu-items1">
                <div className="uxui-menu-item-inline-navigation-item4">
                  <img
                    src="/external/iconsettingoutlinedi654-6tge.svg"
                    alt="IconSettingOutlinedI654"
                    className="uxui-icon-setting-outlined"
                  />
                  <span className="uxui-text010 LightBaseBaseNormal">
                    <span>Settings</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uxui-content-wrapper">
          <div className="uxui-frame-header">
            <div className="uxui-icon-search">
              <button className="uxui-frame-button">
                <div className="uxui-content">
                  <img
                    src="/external/iconmenufoldoutlinedi654-14hv.svg"
                    alt="IconMenuFoldOutlinedI654"
                    className="uxui-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="uxui-frame-input-search">
                <div className="uxui-input-wrapper">
                  <div className="uxui-frame-input-basic">
                    <div className="uxui-content1">
                      <span className="uxui-text012 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="uxui-frame-button1">
                  <div className="uxui-content2">
                    <img
                      src="/external/iconsearchoutlinedi654-vehi.svg"
                      alt="IconSearchOutlinedI654"
                      className="uxui-icon-search-outlined1"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="uxui-avatar-button">
              <button className="uxui-frame-button2">
                <div className="uxui-content3">
                  <img
                    src="/external/iconglobaloutlinedi654-qd8.svg"
                    alt="IconGlobalOutlinedI654"
                    className="uxui-icon-global-outlined"
                  />
                  <span className="uxui-text014 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="uxui-notifications">
                <img
                  src="/external/iconbelloutlinedi654-2n9m.svg"
                  alt="IconBellOutlinedI654"
                  className="uxui-icon-bell-outlined"
                />
                <div className="uxui-content4">
                  <div className="uxui-frame-badge-basic">
                    <span className="uxui-text016 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="uxui-frame-avatar">
                <Link to="/" className="uxui-navlink">
                  <img
                    src="/external/iconuseroutlinedi654-1lgh.svg"
                    alt="IconUserOutlinedI654"
                    className="uxui-icon-user-outlined"
                  />
                </Link>
              </div>
            </button>
          </div>
          <div className="uxui-frame-card1">
            <button className="uxui-header-button">
              <div className="uxui-header-links">
                <div className="uxui-frame-breadcrumb">
                  <div className="uxui-breadcrumb-link">
                    <span className="uxui-text018 LightBaseBaseNormal">
                      <span>Explore</span>
                    </span>
                  </div>
                  <div className="uxui-breadcrumb-separator">
                    <div className="uxui-content5">
                      <span className="uxui-text020 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="uxui-breadcrumb-link1">
                    <span className="uxui-text021 LightBaseBaseNormal">
                      <span>UX/UI Design</span>
                    </span>
                  </div>
                </div>
              </div>
            </button>
            <div className="uxui-frame1000002675">
              <div className="uxui-card-course">
                <img
                  src="/external/imageplaceholder6542-c28h-300h.png"
                  alt="ImagePlaceholder6542"
                  className="uxui-image-placeholder"
                />
                <span className="uxui-text023 HeadingH3Bold">
                  <span>
                    UX/UI Design
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div className="uxui-frame1000002681">
                  <div className="uxui-ratings">
                    <div className="uxui-icon">
                      <img
                        src="/external/containeri654-z0ad-200h.png"
                        alt="ContainerI654"
                        className="uxui-container01"
                      />
                      <div className="uxui-actionstarrate">
                        <div className="uxui-frame-round-actionstarrate">
                          <img
                            src="/external/svgiconcolori654-irk6.svg"
                            alt="SVGIconColorI654"
                            className="uxui-svg-icon-color"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="uxui-text025 BodyBody2Regular">
                      <span>4.7 (687 Reviews)</span>
                    </span>
                    <span className="uxui-text027 BodyBody2Regular">
                      <span>1250 students</span>
                    </span>
                  </div>
                  <span className="uxui-text029 BodyBody2Regular">
                    <span>Created by Flow Education</span>
                  </span>
                  <div className="uxui-lastupdate">
                    <div className="uxui-icon-search01">
                      <div className="uxui-actionupdate">
                        <div className="uxui-outlined-actionupdate">
                          <img
                            src="/external/svgiconcolori654-kdap.svg"
                            alt="SVGIconColorI654"
                            className="uxui-svg-icon-color01"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="uxui-text031 BodyBody2Regular">
                      <span>Last update 12/2023</span>
                    </span>
                  </div>
                  <div className="uxui-lastupdate1">
                    <div className="uxui-icon-search02">
                      <div className="uxui-actionlanguage">
                        <div className="uxui-frame-round-actionlanguage">
                          <img
                            src="/external/svgiconcolori654-p6s4.svg"
                            alt="SVGIconColorI654"
                            className="uxui-svg-icon-color02"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="uxui-text033 BodyBody2Regular">
                      <span>English</span>
                    </span>
                  </div>
                  <div className="uxui-lastupdate2">
                    <div className="uxui-icon-search03">
                      <div className="uxui-frame24variouscontrast">
                        <img
                          src="/external/iconi654-zci.svg"
                          alt="iconI654"
                          className="uxui-icon01"
                        />
                      </div>
                    </div>
                    <span className="uxui-text035 BodyBody2Regular">
                      <span>English (Auto), French (Auto), 5 more</span>
                    </span>
                  </div>
                </div>
                <div className="uxui-icon-search04">
                  <div className="uxui-food-favorite">
                    <img
                      src="/external/favoritei654-hbb.svg"
                      alt="FavoriteI654"
                      className="uxui-favorite"
                    />
                  </div>
                </div>
                <div className="uxui-icon-search05">
                  <div className="uxui-socialshare">
                    <div className="uxui-two-tone-socialshare">
                      <img
                        src="/external/svgsecondarycolori654-5fvr.svg"
                        alt="SVGSecondaryColorI654"
                        className="uxui-svg-secondary-color"
                      />
                      <img
                        src="/external/svgprimarycolori654-9gnd.svg"
                        alt="SVGPrimaryColorI654"
                        className="uxui-svg-primary-color"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="uxui-whatyou-learn">
                <div className="uxui-frame986">
                  <span className="uxui-text037 HeadingH4Bold">
                    <span>What you’ll learn</span>
                  </span>
                  <div className="uxui-group907">
                    <span className="uxui-text039 BodyBody2Regular">
                      <span>Create mobile app designs from scratch</span>
                    </span>
                    <div className="uxui-icon-search06">
                      <img
                        src="/external/uicheck6542-w1hk.svg"
                        alt="UICheck6542"
                        className="uxui-ui-check"
                      />
                    </div>
                  </div>
                  <div className="uxui-group910">
                    <span className="uxui-text041 BodyBody2Regular">
                      <span>Create mockups using Figma</span>
                    </span>
                    <div className="uxui-icon-search07">
                      <img
                        src="/external/uicheck6542-bgx8.svg"
                        alt="UICheck6542"
                        className="uxui-ui-check01"
                      />
                    </div>
                  </div>
                  <div className="uxui-group911">
                    <span className="uxui-text043 BodyBody2Regular">
                      <span>Start a new career as a UI/UX designer</span>
                    </span>
                    <div className="uxui-icon-search08">
                      <img
                        src="/external/uicheck6542-62.svg"
                        alt="UICheck6542"
                        className="uxui-ui-check02"
                      />
                    </div>
                  </div>
                  <div className="uxui-group908">
                    <span className="uxui-text045 BodyBody2Regular">
                      <span>
                        Understand the differences between designing for iOS and
                        Android
                      </span>
                    </span>
                    <div className="uxui-icon-search09">
                      <img
                        src="/external/uicheck6542-kdpe.svg"
                        alt="UICheck6542"
                        className="uxui-ui-check03"
                      />
                    </div>
                  </div>
                  <div className="uxui-group909">
                    <span className="uxui-text047 BodyBody2Regular">
                      <span>
                        Create wireframe designs for e-Commerce Project
                      </span>
                    </span>
                    <div className="uxui-icon-search10">
                      <img
                        src="/external/uicheck6542-gzgb.svg"
                        alt="UICheck6542"
                        className="uxui-ui-check04"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="uxui-requirement">
                <span className="uxui-text049 HeadingH4Bold">
                  <span>Requirement</span>
                </span>
                <div className="uxui-point">
                  <div className="uxui-text051">
                    <span className="uxui-text052 BodyBody2Regular">
                      <span>
                        No pre-knowledge required - we&apos;ll teach you
                        everything you need to know
                      </span>
                    </span>
                  </div>
                  <img
                    src="/external/point6542-n68c-200h.png"
                    alt="Point6542"
                    className="uxui-point1"
                  />
                </div>
                <div className="uxui-point2">
                  <div className="uxui-text054">
                    <span className="uxui-text055 BodyBody2Regular">
                      <span>A PC or Mac is required</span>
                    </span>
                  </div>
                  <img
                    src="/external/point6542-qc5-200h.png"
                    alt="Point6542"
                    className="uxui-point3"
                  />
                </div>
                <div className="uxui-point4">
                  <div className="uxui-text057">
                    <span className="uxui-text058 BodyBody2Regular">
                      <span>
                        No software is required in advance of the course (all
                        software used in the course is free or has a demo
                        version)
                      </span>
                    </span>
                  </div>
                  <img
                    src="/external/point6542-xk5-200h.png"
                    alt="Point6542"
                    className="uxui-point5"
                  />
                </div>
              </div>
              <div className="uxui-description">
                <span className="uxui-text060 HeadingH4Bold">
                  <span>Description</span>
                </span>
                <div className="uxui-text062">
                  <span className="uxui-text063">
                    <span>
                      This Course is great for people with absolutely no design
                      experience or experienced designers who want to get up to
                      speed quickly with mobile app design. We&apos;ll introduce
                      you to the art of making beautiful apps. We&apos;ll
                      explore key UI and UX concepts that are essential to
                      building good looking and easy to use apps that are loved
                      by users.
                    </span>
                    <br className="uxui-text065"></br>
                    <br></br>
                    <span>
                      The course has a practical component that takes you
                      step-by-step through the workflow of a professional app
                      designer. From user flow diagrams to wireframing to
                      mockups and prototypes.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Students completing the course will have the knowledge to
                      create beautiful and lovable apps that leave people with a
                      smile on their face.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="uxui-text073">See more</span>
                    <br className="uxui-text074"></br>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="uxui-price">
                <span className="uxui-text076 HeadingH3Bold">
                  <span>60 000 ₸</span>
                </span>
                <img
                  src="/external/separator6542-7mco.svg"
                  alt="Separator6542"
                  className="uxui-separator"
                />
                <span className="uxui-text078 HeadingH6Bold">
                  <span>This course includes:</span>
                </span>
                <div className="uxui-group9071">
                  <span className="uxui-text080 BodyBody2Regular">
                    <span>5 hours on demand video</span>
                  </span>
                  <div className="uxui-icon-search11">
                    <img
                      src="/external/uicheck6542-9e3c.svg"
                      alt="UICheck6542"
                      className="uxui-ui-check05"
                    />
                  </div>
                </div>
                <div className="uxui-group9081">
                  <span className="uxui-text082 BodyBody2Regular">
                    <span>15 articles</span>
                  </span>
                  <div className="uxui-icon-search12">
                    <img
                      src="/external/uicheck6542-p2fp.svg"
                      alt="UICheck6542"
                      className="uxui-ui-check06"
                    />
                  </div>
                </div>
                <div className="uxui-group9091">
                  <span className="uxui-text084 BodyBody2Regular">
                    <span>4 downloadalbe resources</span>
                  </span>
                  <div className="uxui-icon-search13">
                    <img
                      src="/external/uicheck6542-u00b.svg"
                      alt="UICheck6542"
                      className="uxui-ui-check07"
                    />
                  </div>
                </div>
                <div className="uxui-group9101">
                  <span className="uxui-text086 BodyBody2Regular">
                    <span>Full lifetime access</span>
                  </span>
                  <div className="uxui-icon-search14">
                    <img
                      src="/external/uicheck6542-b8a3.svg"
                      alt="UICheck6542"
                      className="uxui-ui-check08"
                    />
                  </div>
                </div>
                <div className="uxui-group9111">
                  <span className="uxui-text088 BodyBody2Regular">
                    <span>Access on mobile and tv</span>
                  </span>
                  <div className="uxui-icon-search15">
                    <img
                      src="/external/uicheck6542-jgaa.svg"
                      alt="UICheck6542"
                      className="uxui-ui-check09"
                    />
                  </div>
                </div>
                <button className="uxui-button">
                  <span className="uxui-text090 MenuMenu1Bold">
                    <span>Add to Cart</span>
                  </span>
                </button>
                <button className="uxui-button1">
                  <span className="uxui-text092 MenuMenu1Bold">
                    <span>Buy Now</span>
                  </span>
                </button>
                <span className="uxui-text094 BodyBody2Regular">
                  <span>30 days money back guarantee</span>
                </span>
              </div>
              <div className="uxui-content-course">
                <span className="uxui-text096 HeadingH4Bold">
                  <span>Content Course</span>
                </span>
                <div className="uxui-content-course1">
                  <div className="uxui-accordion">
                    <img
                      src="/external/containeri654-ygk.svg"
                      alt="ContainerI654"
                      className="uxui-container02"
                    />
                    <div className="uxui-icon02">
                      <img
                        src="/external/containeri654-qbqr-200h.png"
                        alt="ContainerI654"
                        className="uxui-container03"
                      />
                      <img
                        src="/external/uichevrondowni654-6mdm.svg"
                        alt="UIChevronDownI654"
                        className="uxui-ui-chevron-down"
                      />
                    </div>
                    <img
                      src="/external/divideri654-o51.svg"
                      alt="DividerI654"
                      className="uxui-divider"
                    />
                    <span className="uxui-text098 HeadlinesHeadlineBoldNormal">
                      <span>Introduction</span>
                    </span>
                  </div>
                  <div className="uxui-accordion1">
                    <div className="uxui-group84">
                      <img
                        src="/external/containeri654-zqfl.svg"
                        alt="ContainerI654"
                        className="uxui-container04"
                      />
                      <img
                        src="/external/divideri654-imep.svg"
                        alt="DividerI654"
                        className="uxui-divider1"
                      />
                      <div className="uxui-icon03">
                        <img
                          src="/external/containeri654-bxe6-200h.png"
                          alt="ContainerI654"
                          className="uxui-container05"
                        />
                        <img
                          src="/external/svg16chevrontopi654-ktud.svg"
                          alt="SVG16chevrontopI654"
                          className="uxui-svg16chevrontop"
                        />
                      </div>
                      <span className="uxui-text100 HeadlinesHeadlineBoldNormal">
                        <span>Color Theory</span>
                      </span>
                    </div>
                  </div>
                  <div className="uxui-accordion2">
                    <div className="uxui-group841">
                      <img
                        src="/external/containeri654-jw4e.svg"
                        alt="ContainerI654"
                        className="uxui-container06"
                      />
                      <img
                        src="/external/divideri654-0dbg.svg"
                        alt="DividerI654"
                        className="uxui-divider2"
                      />
                      <div className="uxui-icon04">
                        <img
                          src="/external/containeri654-055-200h.png"
                          alt="ContainerI654"
                          className="uxui-container07"
                        />
                        <img
                          src="/external/uichevrondowni654-22ri.svg"
                          alt="UIChevronDownI654"
                          className="uxui-ui-chevron-down1"
                        />
                      </div>
                      <span className="uxui-text102 HeadlinesHeadlineBoldNormal">
                        <span>Typography</span>
                      </span>
                    </div>
                  </div>
                  <div className="uxui-accordion3">
                    <div className="uxui-group842">
                      <img
                        src="/external/containeri654-fgls.svg"
                        alt="ContainerI654"
                        className="uxui-container08"
                      />
                      <img
                        src="/external/divideri654-forq.svg"
                        alt="DividerI654"
                        className="uxui-divider3"
                      />
                      <div className="uxui-icon05">
                        <img
                          src="/external/containeri654-mtp-200h.png"
                          alt="ContainerI654"
                          className="uxui-container09"
                        />
                        <img
                          src="/external/uichevrondowni654-9nqb.svg"
                          alt="UIChevronDownI654"
                          className="uxui-ui-chevron-down2"
                        />
                      </div>
                      <span className="uxui-text104 HeadlinesHeadlineBoldNormal">
                        <span>UI Design for Mobile Apps</span>
                      </span>
                    </div>
                  </div>
                  <div className="uxui-accordion4">
                    <div className="uxui-group843">
                      <img
                        src="/external/containeri654-1f9f.svg"
                        alt="ContainerI654"
                        className="uxui-container10"
                      />
                      <img
                        src="/external/divideri654-kwwm.svg"
                        alt="DividerI654"
                        className="uxui-divider4"
                      />
                      <div className="uxui-icon06">
                        <img
                          src="/external/containeri654-i6fu-200h.png"
                          alt="ContainerI654"
                          className="uxui-container11"
                        />
                        <img
                          src="/external/uichevrondowni654-6cla.svg"
                          alt="UIChevronDownI654"
                          className="uxui-ui-chevron-down3"
                        />
                      </div>
                      <span className="uxui-text106 HeadlinesHeadlineBoldNormal">
                        <span>UX Design for Mobile Apps</span>
                      </span>
                    </div>
                  </div>
                  <div className="uxui-accordion5">
                    <div className="uxui-group844">
                      <img
                        src="/external/containeri654-an4.svg"
                        alt="ContainerI654"
                        className="uxui-container12"
                      />
                      <img
                        src="/external/divideri654-gx9.svg"
                        alt="DividerI654"
                        className="uxui-divider5"
                      />
                      <div className="uxui-icon07">
                        <img
                          src="/external/containeri654-biv4-200h.png"
                          alt="ContainerI654"
                          className="uxui-container13"
                        />
                        <img
                          src="/external/uichevrondowni654-ftee.svg"
                          alt="UIChevronDownI654"
                          className="uxui-ui-chevron-down4"
                        />
                      </div>
                      <span className="uxui-text108 HeadlinesHeadlineBoldNormal">
                        <span>Designing for iOS and Android</span>
                      </span>
                    </div>
                  </div>
                  <div className="uxui-accordion6">
                    <div className="uxui-group845">
                      <img
                        src="/external/containeri654-w8z.svg"
                        alt="ContainerI654"
                        className="uxui-container14"
                      />
                      <img
                        src="/external/divideri654-ovdp.svg"
                        alt="DividerI654"
                        className="uxui-divider6"
                      />
                      <div className="uxui-icon08">
                        <img
                          src="/external/containeri654-g66-200h.png"
                          alt="ContainerI654"
                          className="uxui-container15"
                        />
                        <img
                          src="/external/uichevrondowni654-9qy.svg"
                          alt="UIChevronDownI654"
                          className="uxui-ui-chevron-down5"
                        />
                      </div>
                      <span className="uxui-text110 HeadlinesHeadlineBoldNormal">
                        <span>
                          Putting all Together : A step by step guide to
                          E-Commerce Mobile Apps
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="uxui-accordion7">
                    <img
                      src="/external/containeri654-83cr.svg"
                      alt="ContainerI654"
                      className="uxui-container16"
                    />
                    <div className="uxui-icon09">
                      <img
                        src="/external/containeri654-kjqo-200h.png"
                        alt="ContainerI654"
                        className="uxui-container17"
                      />
                      <img
                        src="/external/uichevrondowni654-ofwx.svg"
                        alt="UIChevronDownI654"
                        className="uxui-ui-chevron-down6"
                      />
                    </div>
                    <span className="uxui-text112 HeadlinesHeadlineBoldNormal">
                      <span>Resources</span>
                    </span>
                  </div>
                  <div className="uxui-video-list">
                    <div className="uxui-lastupdate3">
                      <div className="uxui-icon-search16">
                        <div className="uxui-a-vplaycircleoutline">
                          <div className="uxui-outlined-a-vplaycircleoutline">
                            <img
                              src="/external/svgiconcolori654-e5ug.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color03"
                            />
                          </div>
                        </div>
                      </div>
                      <span className="uxui-text114 BodyBody2Regular">
                        <span>
                          Understanding the Mood of your Colour Palette
                        </span>
                      </span>
                      <span className="uxui-text116 BodyBody2Regular">
                        <span>06:02</span>
                      </span>
                      <span className="uxui-text118 BodyBody2Regular">
                        <span>Preview</span>
                      </span>
                    </div>
                    <div className="uxui-lastupdate4">
                      <div className="uxui-icon-search17">
                        <div className="uxui-a-vplaycircleoutline1">
                          <div className="uxui-outlined-a-vplaycircleoutline1">
                            <img
                              src="/external/svgiconcolori654-14lq.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color04"
                            />
                          </div>
                        </div>
                      </div>
                      <span className="uxui-text120 BodyBody2Regular">
                        <span>
                          How to Combine Colours to Create Colour Palettes
                        </span>
                      </span>
                      <span className="uxui-text122 BodyBody2Regular">
                        <span>04:22</span>
                      </span>
                    </div>
                    <div className="uxui-lastupdate5">
                      <div className="uxui-icon-search18">
                        <div className="uxui-a-vplaycircleoutline2">
                          <div className="uxui-outlined-a-vplaycircleoutline2">
                            <img
                              src="/external/svgiconcolori654-rth.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color05"
                            />
                          </div>
                        </div>
                      </div>
                      <span className="uxui-text124 BodyBody2Regular">
                        <span>Tools for Designing with Colour</span>
                      </span>
                      <span className="uxui-text126 BodyBody2Regular">
                        <span>06:02</span>
                      </span>
                      <span className="uxui-text128 BodyBody2Regular">
                        <span>Preview</span>
                      </span>
                    </div>
                    <div className="uxui-lastupdate6">
                      <div className="uxui-icon-search19">
                        <div className="uxui-a-vplaycircleoutline3">
                          <div className="uxui-outlined-a-vplaycircleoutline3">
                            <img
                              src="/external/svgiconcolori654-j86j.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color06"
                            />
                          </div>
                        </div>
                      </div>
                      <span className="uxui-text130 BodyBody2Regular">
                        <span>Tools for Designing with Colour Resources</span>
                      </span>
                      <span className="uxui-text132 BodyBody2Regular">
                        <span>06:02</span>
                      </span>
                      <span className="uxui-text134 BodyBody2Regular">
                        <span>Preview</span>
                      </span>
                    </div>
                    <div className="uxui-lastupdate7">
                      <div className="uxui-icon-search20">
                        <div className="uxui-a-vplaycircleoutline4">
                          <div className="uxui-outlined-a-vplaycircleoutline4">
                            <img
                              src="/external/svgiconcolori654-tjhl.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color07"
                            />
                          </div>
                        </div>
                      </div>
                      <span className="uxui-text136 BodyBody2Regular">
                        <span>Further Reading on Designing with Colout</span>
                      </span>
                      <span className="uxui-text138 BodyBody2Regular">
                        <span>06:02</span>
                      </span>
                      <span className="uxui-text140 BodyBody2Regular">
                        <span>Preview</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uxui-ratingand-reviews">
                <span className="uxui-text142 HeadingH4Bold">
                  <span>Student Reviews</span>
                </span>
                <div className="uxui-ratings1">
                  <span className="uxui-text144 HeadingH1Bold">
                    <span>4.9</span>
                  </span>
                  <div className="uxui-reviews">
                    <span className="uxui-text146 BodyBody2Regular">
                      <span>12.6 reviews</span>
                    </span>
                    <div className="uxui-icon10">
                      <img
                        src="/external/containeri654-n0ml-200h.png"
                        alt="ContainerI654"
                        className="uxui-container18"
                      />
                      <div className="uxui-actionstarrate01">
                        <div className="uxui-frame-round-actionstarrate01">
                          <img
                            src="/external/svgiconcolori654-y25.svg"
                            alt="SVGIconColorI654"
                            className="uxui-svg-icon-color08"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="uxui-rates">
                    <div>
                      <div className="uxui-icon11">
                        <img
                          src="/external/containeri654-w2u-200h.png"
                          alt="ContainerI654"
                          className="uxui-container19"
                        />
                        <div className="uxui-actionstarrate02">
                          <div className="uxui-frame-round-actionstarrate02">
                            <img
                              src="/external/svgiconcolori654-z0e.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color09"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon12">
                        <img
                          src="/external/containeri654-8y2k-200h.png"
                          alt="ContainerI654"
                          className="uxui-container20"
                        />
                        <div className="uxui-actionstarrate03">
                          <div className="uxui-frame-round-actionstarrate03">
                            <img
                              src="/external/svgiconcolori654-i3n8.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color10"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon13">
                        <img
                          src="/external/containeri654-sw3u-200h.png"
                          alt="ContainerI654"
                          className="uxui-container21"
                        />
                        <div className="uxui-actionstarrate04">
                          <div className="uxui-frame-round-actionstarrate04">
                            <img
                              src="/external/svgiconcolori654-262j.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color11"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon14">
                        <img
                          src="/external/containeri654-ui1i-200h.png"
                          alt="ContainerI654"
                          className="uxui-container22"
                        />
                        <div className="uxui-actionstarrate05">
                          <div className="uxui-frame-round-actionstarrate05">
                            <img
                              src="/external/svgiconcolori654-8xza.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color12"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon15">
                        <img
                          src="/external/containeri654-b49t-200h.png"
                          alt="ContainerI654"
                          className="uxui-container23"
                        />
                        <div className="uxui-actionstarrate06">
                          <div className="uxui-frame-round-actionstarrate06">
                            <img
                              src="/external/svgiconcolori654-65af.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color13"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-progressbar">
                        <img
                          src="/external/progressbarcontaineri654-49fr-200h.png"
                          alt="ProgressbarcontainerI654"
                          className="uxui-progressbarcontainer"
                        />
                      </div>
                      <span className="uxui-text148 BodyBody2Regular">
                        <span>80%</span>
                      </span>
                      <div className="uxui-progressbar01">
                        <img
                          src="/external/rectangle10i654-81l8-200h.png"
                          alt="Rectangle10I654"
                          className="uxui-rectangle10"
                        />
                      </div>
                    </div>
                    <div className="uxui-rate2">
                      <div className="uxui-icon16">
                        <img
                          src="/external/containeri654-1vah-200h.png"
                          alt="ContainerI654"
                          className="uxui-container24"
                        />
                        <div className="uxui-actionstarrate07">
                          <div className="uxui-frame-round-actionstarrate07">
                            <img
                              src="/external/svgiconcolori654-3g4d.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color14"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon17">
                        <img
                          src="/external/containeri654-fwf8-200h.png"
                          alt="ContainerI654"
                          className="uxui-container25"
                        />
                        <div className="uxui-actionstarrate08">
                          <div className="uxui-frame-round-actionstarrate08">
                            <img
                              src="/external/svgiconcolori654-0okn.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color15"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon18">
                        <img
                          src="/external/containeri654-okhs-200h.png"
                          alt="ContainerI654"
                          className="uxui-container26"
                        />
                        <div className="uxui-actionstarrate09">
                          <div className="uxui-frame-round-actionstarrate09">
                            <img
                              src="/external/svgiconcolori654-v7lc.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color16"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon19">
                        <img
                          src="/external/containeri654-make-200h.png"
                          alt="ContainerI654"
                          className="uxui-container27"
                        />
                        <div className="uxui-actionstarrate10">
                          <div className="uxui-frame-round-actionstarrate10">
                            <img
                              src="/external/svgiconcolori654-jtug.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color17"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon20">
                        <img
                          src="/external/containeri654-aohq-200h.png"
                          alt="ContainerI654"
                          className="uxui-container28"
                        />
                        <div className="uxui-actionstarrate11">
                          <div className="uxui-frame-round-actionstarrate11">
                            <img
                              src="/external/svgiconcolori654-ka5v.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color18"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-progressbar02">
                        <img
                          src="/external/progressbarcontaineri654-ufdo-200h.png"
                          alt="ProgressbarcontainerI654"
                          className="uxui-progressbarcontainer1"
                        />
                      </div>
                      <span className="uxui-text150 BodyBody2Regular">
                        <span>10%</span>
                      </span>
                      <div className="uxui-progressbar03">
                        <img
                          src="/external/rectangle10i654-o1p-200h.png"
                          alt="Rectangle10I654"
                          className="uxui-rectangle101"
                        />
                      </div>
                    </div>
                    <div className="uxui-rate3">
                      <div className="uxui-icon21">
                        <img
                          src="/external/containeri654-kapi-200h.png"
                          alt="ContainerI654"
                          className="uxui-container29"
                        />
                        <div className="uxui-actionstarrate12">
                          <div className="uxui-frame-round-actionstarrate12">
                            <img
                              src="/external/svgiconcolori654-dxob.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color19"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon22">
                        <img
                          src="/external/containeri654-ehzh-200h.png"
                          alt="ContainerI654"
                          className="uxui-container30"
                        />
                        <div className="uxui-actionstarrate13">
                          <div className="uxui-frame-round-actionstarrate13">
                            <img
                              src="/external/svgiconcolori654-okcl.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color20"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon23">
                        <img
                          src="/external/containeri654-ybap-200h.png"
                          alt="ContainerI654"
                          className="uxui-container31"
                        />
                        <div className="uxui-actionstarrate14">
                          <div className="uxui-frame-round-actionstarrate14">
                            <img
                              src="/external/svgiconcolori654-w4ka.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color21"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon24">
                        <img
                          src="/external/containeri654-1zmb-200h.png"
                          alt="ContainerI654"
                          className="uxui-container32"
                        />
                        <div className="uxui-actionstarrate15">
                          <div className="uxui-frame-round-actionstarrate15">
                            <img
                              src="/external/svgiconcolori654-yc5p.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color22"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon25">
                        <img
                          src="/external/containeri654-f1mg-200h.png"
                          alt="ContainerI654"
                          className="uxui-container33"
                        />
                        <div className="uxui-actionstarrate16">
                          <div className="uxui-frame-round-actionstarrate16">
                            <img
                              src="/external/svgiconcolori654-yfo.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color23"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-progressbar04">
                        <img
                          src="/external/progressbarcontaineri654-qqvo-200h.png"
                          alt="ProgressbarcontainerI654"
                          className="uxui-progressbarcontainer2"
                        />
                      </div>
                      <span className="uxui-text152 BodyBody2Regular">
                        <span>5%</span>
                      </span>
                      <div className="uxui-progressbar05">
                        <img
                          src="/external/rectangle10i654-59o3-200h.png"
                          alt="Rectangle10I654"
                          className="uxui-rectangle102"
                        />
                      </div>
                    </div>
                    <div className="uxui-rate4">
                      <div className="uxui-icon26">
                        <img
                          src="/external/containeri654-6m2m-200h.png"
                          alt="ContainerI654"
                          className="uxui-container34"
                        />
                        <div className="uxui-actionstarrate17">
                          <div className="uxui-frame-round-actionstarrate17">
                            <img
                              src="/external/svgiconcolori654-d1i.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color24"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon27">
                        <img
                          src="/external/containeri654-zogh-200h.png"
                          alt="ContainerI654"
                          className="uxui-container35"
                        />
                        <div className="uxui-actionstarrate18">
                          <div className="uxui-frame-round-actionstarrate18">
                            <img
                              src="/external/svgiconcolori654-i3lzq.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color25"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon28">
                        <img
                          src="/external/containeri654-cqz5-200h.png"
                          alt="ContainerI654"
                          className="uxui-container36"
                        />
                        <div className="uxui-actionstarrate19">
                          <div className="uxui-frame-round-actionstarrate19">
                            <img
                              src="/external/svgiconcolori654-6ebw.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color26"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon29">
                        <img
                          src="/external/containeri654-zki-200h.png"
                          alt="ContainerI654"
                          className="uxui-container37"
                        />
                        <div className="uxui-actionstarrate20">
                          <div className="uxui-frame-round-actionstarrate20">
                            <img
                              src="/external/svgiconcolori654-ise.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color27"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon30">
                        <img
                          src="/external/containeri654-j2sh-200h.png"
                          alt="ContainerI654"
                          className="uxui-container38"
                        />
                        <div className="uxui-actionstarrate21">
                          <div className="uxui-frame-round-actionstarrate21">
                            <img
                              src="/external/svgiconcolori654-lbf.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color28"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-progressbar06">
                        <img
                          src="/external/progressbarcontaineri654-np1y-200h.png"
                          alt="ProgressbarcontainerI654"
                          className="uxui-progressbarcontainer3"
                        />
                      </div>
                      <span className="uxui-text154 BodyBody2Regular">
                        <span>3%</span>
                      </span>
                      <div className="uxui-progressbar07">
                        <img
                          src="/external/rectangle10i654-qj64-200h.png"
                          alt="Rectangle10I654"
                          className="uxui-rectangle103"
                        />
                      </div>
                    </div>
                    <div className="uxui-rate5">
                      <div className="uxui-icon31">
                        <img
                          src="/external/containeri654-0eaf-200h.png"
                          alt="ContainerI654"
                          className="uxui-container39"
                        />
                        <div className="uxui-actionstarrate22">
                          <div className="uxui-frame-round-actionstarrate22">
                            <img
                              src="/external/svgiconcolori654-0ka.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color29"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon32">
                        <img
                          src="/external/containeri654-idkh-200h.png"
                          alt="ContainerI654"
                          className="uxui-container40"
                        />
                        <div className="uxui-actionstarrate23">
                          <div className="uxui-frame-round-actionstarrate23">
                            <img
                              src="/external/svgiconcolori654-w1z2.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color30"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon33">
                        <img
                          src="/external/containeri654-72l9-200h.png"
                          alt="ContainerI654"
                          className="uxui-container41"
                        />
                        <div className="uxui-actionstarrate24">
                          <div className="uxui-frame-round-actionstarrate24">
                            <img
                              src="/external/svgiconcolori654-3v84.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color31"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon34">
                        <img
                          src="/external/containeri654-hgzs-200h.png"
                          alt="ContainerI654"
                          className="uxui-container42"
                        />
                        <div className="uxui-actionstarrate25">
                          <div className="uxui-frame-round-actionstarrate25">
                            <img
                              src="/external/svgiconcolori654-mlb.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color32"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-icon35">
                        <img
                          src="/external/containeri654-myyk-200h.png"
                          alt="ContainerI654"
                          className="uxui-container43"
                        />
                        <div className="uxui-actionstarrate26">
                          <div className="uxui-frame-round-actionstarrate26">
                            <img
                              src="/external/svgiconcolori654-6w2n.svg"
                              alt="SVGIconColorI654"
                              className="uxui-svg-icon-color33"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uxui-progressbar08">
                        <img
                          src="/external/progressbarcontaineri654-ho4-200h.png"
                          alt="ProgressbarcontainerI654"
                          className="uxui-progressbarcontainer4"
                        />
                      </div>
                      <span className="uxui-text156 BodyBody2Regular">
                        <span>2%</span>
                      </span>
                      <div className="uxui-progressbar09">
                        <img
                          src="/external/rectangle10i654-er1wo-200h.png"
                          alt="Rectangle10I654"
                          className="uxui-rectangle104"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uxui-comments">
                  <div className="uxui-profile-comments">
                    <img
                      src="/external/imageplaceholder6543-o11u-200h.png"
                      alt="ImagePlaceholder6543"
                      className="uxui-image-placeholder1"
                    />
                    <span className="uxui-text158 BodyBody1Semibold">
                      <span>Hanna Amalina</span>
                    </span>
                    <div className="uxui-rate">
                      <div className="uxui-reviews01">
                        <div className="uxui-icon36">
                          <img
                            src="/external/containeri654-3a4-200h.png"
                            alt="ContainerI654"
                            className="uxui-container44"
                          />
                          <div className="uxui-actionstarrate27">
                            <div className="uxui-frame-round-actionstarrate27">
                              <img
                                src="/external/svgiconcolori654-b5zd.svg"
                                alt="SVGIconColorI654"
                                className="uxui-svg-icon-color34"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="uxui-reviews02">
                        <div className="uxui-icon37">
                          <img
                            src="/external/containeri654-ufq-200h.png"
                            alt="ContainerI654"
                            className="uxui-container45"
                          />
                          <div className="uxui-actionstarrate28">
                            <div className="uxui-frame-round-actionstarrate28">
                              <img
                                src="/external/svgiconcolori654-wgrn.svg"
                                alt="SVGIconColorI654"
                                className="uxui-svg-icon-color35"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="uxui-reviews03">
                        <div className="uxui-icon38">
                          <img
                            src="/external/containeri654-ia5d-200h.png"
                            alt="ContainerI654"
                            className="uxui-container46"
                          />
                          <div className="uxui-actionstarrate29">
                            <div className="uxui-frame-round-actionstarrate29">
                              <img
                                src="/external/svgiconcolori654-x2i.svg"
                                alt="SVGIconColorI654"
                                className="uxui-svg-icon-color36"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="uxui-reviews04">
                        <div className="uxui-icon39">
                          <img
                            src="/external/containeri654-pbb-200h.png"
                            alt="ContainerI654"
                            className="uxui-container47"
                          />
                          <div className="uxui-actionstarrate30">
                            <div className="uxui-frame-round-actionstarrate30">
                              <img
                                src="/external/svgiconcolori654-5m4t.svg"
                                alt="SVGIconColorI654"
                                className="uxui-svg-icon-color37"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="uxui-reviews05">
                        <div className="uxui-icon40">
                          <img
                            src="/external/containeri654-gvjg-200h.png"
                            alt="ContainerI654"
                            className="uxui-container48"
                          />
                          <div className="uxui-actionstarrate31">
                            <div className="uxui-frame-round-actionstarrate31">
                              <img
                                src="/external/svgiconcolori654-onpw.svg"
                                alt="SVGIconColorI654"
                                className="uxui-svg-icon-color38"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="uxui-text160 CaptionsCaptionsRegular">
                      <span>4 hour ago.</span>
                    </span>
                  </div>
                  <span className="uxui-text162 BodyBody2Regular">
                    <span>
                      Learning these design skills was fascinating for an
                      accountant and very easy to follow. I have learnt a lot
                      and will be designing on a regular basis going forward.
                    </span>
                  </span>
                </div>
                <div className="uxui-comments1">
                  <div className="uxui-profile-comments1">
                    <img
                      src="/external/imageplaceholder6543-8g1-200h.png"
                      alt="ImagePlaceholder6543"
                      className="uxui-image-placeholder2"
                    />
                    <span className="uxui-text164 BodyBody1Semibold">
                      <span>Scott Andersen</span>
                    </span>
                    <div className="uxui-rate1 uxui-rate1">
                      <div className="uxui-reviews06">
                        <div className="uxui-icon41">
                          <img
                            src="/external/containeri654-vuv7-200h.png"
                            alt="ContainerI654"
                            className="uxui-container49"
                          />
                          <div className="uxui-actionstarrate32">
                            <div className="uxui-frame-round-actionstarrate32">
                              <img
                                src="/external/svgiconcolori654-6vk2d.svg"
                                alt="SVGIconColorI654"
                                className="uxui-svg-icon-color39"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="uxui-reviews07">
                        <div className="uxui-icon42">
                          <img
                            src="/external/containeri654-a85ur-200h.png"
                            alt="ContainerI654"
                            className="uxui-container50"
                          />
                          <div className="uxui-actionstarrate33">
                            <div className="uxui-frame-round-actionstarrate33">
                              <img
                                src="/external/svgiconcolori654-200g.svg"
                                alt="SVGIconColorI654"
                                className="uxui-svg-icon-color40"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="uxui-reviews08">
                        <div className="uxui-icon43">
                          <img
                            src="/external/containeri654-clj-200h.png"
                            alt="ContainerI654"
                            className="uxui-container51"
                          />
                          <div className="uxui-actionstarrate34">
                            <div className="uxui-frame-round-actionstarrate34">
                              <img
                                src="/external/svgiconcolori654-nmag.svg"
                                alt="SVGIconColorI654"
                                className="uxui-svg-icon-color41"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="uxui-reviews09">
                        <div className="uxui-icon44">
                          <img
                            src="/external/containeri654-93yw-200h.png"
                            alt="ContainerI654"
                            className="uxui-container52"
                          />
                          <div className="uxui-actionstarrate35">
                            <div className="uxui-frame-round-actionstarrate35">
                              <img
                                src="/external/svgiconcolori654-bfxf.svg"
                                alt="SVGIconColorI654"
                                className="uxui-svg-icon-color42"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="uxui-reviews10">
                        <div className="uxui-icon45">
                          <img
                            src="/external/containeri654-jvy2-200h.png"
                            alt="ContainerI654"
                            className="uxui-container53"
                          />
                          <div className="uxui-actionstarrate36">
                            <div className="uxui-frame-round-actionstarrate36">
                              <img
                                src="/external/svgiconcolori654-elig.svg"
                                alt="SVGIconColorI654"
                                className="uxui-svg-icon-color43"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="uxui-text166 CaptionsCaptionsRegular">
                      <span>4 hour ago.</span>
                    </span>
                  </div>
                  <span className="uxui-text168 BodyBody2Regular">
                    <span>
                      Learning these design skills was fascinating for an
                      accountant and very easy to follow. I have learnt a lot
                      and will be designing on a regular basis going forward.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="uxui-frame-footer1">
            <div className="uxui-content-wrapper1">
              <div className="uxui-content-wrapper2">
                <span className="uxui-text170 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="uxui-text172 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="uxui-text174 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="uxui-text176 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="uxui-text178 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Uxui
