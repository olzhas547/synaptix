import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './explore.css'

const Explore = (props) => {
  return (
    <div className="explore-container">
      <Helmet>
        <title>Explore</title>
      </Helmet>
      <div className="explore-createcourse">
        <div className="explore-frame-admin-panel-menu1">
          <div className="explore-frame-admin-panel-menu11">
            <div className="explore-logo">
              <div className="explore-logo1">
                <div className="explore-frame1000002598">
                  <img
                    src="/external/containerlogo6313-t62s-200h.png"
                    alt="ContainerLogo6313"
                    className="explore-container-logo"
                  />
                  <div className="explore-book4">
                    <div className="explore-group">
                      <img
                        src="/external/vectori631-hvea.svg"
                        alt="VectorI631"
                        className="explore-vector"
                      />
                      <img
                        src="/external/vectori631-xm4.svg"
                        alt="VectorI631"
                        className="explore-vector1"
                      />
                      <img
                        src="/external/vectori631-wah4.svg"
                        alt="VectorI631"
                        className="explore-vector2"
                      />
                      <img
                        src="/external/vectori631-wnao.svg"
                        alt="VectorI631"
                        className="explore-vector3"
                      />
                    </div>
                  </div>
                </div>
                <div className="explore-frame-title">
                  <span className="explore-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="explore-frame-menu">
              <div className="explore-menu-items">
                <div className="explore-menu-item-inline-navigation-item">
                  <img
                    src="/external/icondashboardoutlinedi631-368l.svg"
                    alt="IconDashboardOutlinedI631"
                    className="explore-icon-dashboard-outlined"
                  />
                  <span className="explore-text002 LightBaseBaseNormal">
                    <span>Dashboard</span>
                  </span>
                </div>
                <div className="explore-menu-item-inline-navigation-item1">
                  <img
                    src="/external/icondatabaseoutlinedi631-olz.svg"
                    alt="IconDatabaseOutlinedI631"
                    className="explore-icon-database-outlined"
                  />
                  <span className="explore-text004 LightBaseBaseNormal">
                    <span>My courses</span>
                  </span>
                </div>
                <div className="explore-menu-item-inline-navigation-item2">
                  <img
                    src="/external/iconsearchoutlinedi631-tfty.svg"
                    alt="IconSearchOutlinedI631"
                    className="explore-icon-search-outlined"
                  />
                  <span className="explore-text006 LightBaseBaseNormal">
                    <span>Explore</span>
                  </span>
                </div>
                <div className="explore-menu-item-inline-navigation-item3">
                  <img
                    src="/external/iconcalendaroutlinedi631-l01o.svg"
                    alt="IconCalendarOutlinedI631"
                    className="explore-icon-calendar-outlined"
                  />
                  <span className="explore-text008 LightBaseBaseNormal">
                    <span>Calendar</span>
                  </span>
                </div>
              </div>
              <div className="explore-menu-items1">
                <div className="explore-menu-item-inline-navigation-item4">
                  <img
                    src="/external/iconsettingoutlinedi631-u1nd.svg"
                    alt="IconSettingOutlinedI631"
                    className="explore-icon-setting-outlined"
                  />
                  <span className="explore-text010 LightBaseBaseNormal">
                    <span>Settings</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="explore-content-wrapper">
          <div className="explore-frame-header">
            <div className="explore-icon-search">
              <button className="explore-frame-button">
                <div className="explore-content">
                  <img
                    src="/external/iconmenufoldoutlinedi631-7mgd.svg"
                    alt="IconMenuFoldOutlinedI631"
                    className="explore-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="explore-frame-input-search">
                <div className="explore-input-wrapper">
                  <div className="explore-frame-input-basic">
                    <div className="explore-content1">
                      <span className="explore-text012 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="explore-frame-button1">
                  <div className="explore-content2">
                    <img
                      src="/external/iconsearchoutlinedi631-1gc.svg"
                      alt="IconSearchOutlinedI631"
                      className="explore-icon-search-outlined1"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="explore-avatar-button">
              <button className="explore-frame-button2">
                <div className="explore-content3">
                  <img
                    src="/external/iconglobaloutlinedi631-mu7s.svg"
                    alt="IconGlobalOutlinedI631"
                    className="explore-icon-global-outlined"
                  />
                  <span className="explore-text014 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <img
                src="/external/iconbelloutlinedi631-7h.svg"
                alt="IconBellOutlinedI631"
                className="explore-icon-bell-outlined"
              />
              <div className="explore-notifications">
                <div className="explore-content4">
                  <div className="explore-frame-badge-basic">
                    <span className="explore-text016 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/uxui" className="explore-navlink">
                <div className="explore-frame-avatar">
                  <img
                    src="/external/iconuseroutlinedi631-a1vd.svg"
                    alt="IconUserOutlinedI631"
                    className="explore-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="explore-frame-card1">
            <button className="explore-header-button">
              <div className="explore-header-links">
                <div className="explore-frame-title1">
                  <span className="explore-text018 LightHeadingHeading2">
                    <span>
                      Explore
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
            </button>
            <div className="explore-frame-tabs-card">
              <div className="explore-tabs-content">
                <div className="explore-tablewith-search">
                  <button className="explore-buttons">
                    <div className="explore-frame-input-search1">
                      <div className="explore-input-wrapper1">
                        <div className="explore-frame-input-basic1">
                          <div className="explore-content5">
                            <span
                              type="text"
                              className="explore-text020 input LightBaseBaseNormal"
                            >
                              Search
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="explore-frame-button3">
                        <div className="explore-content6">
                          <img
                            src="/external/iconsearchoutlinedi631-mn7t.svg"
                            alt="IconSearchOutlinedI631"
                            className="explore-icon-search-outlined2"
                          />
                        </div>
                      </button>
                    </div>
                    <div className="explore-frame-select">
                      <div className="explore-select-input">
                        <span className="explore-text021 LightBaseBaseNormal">
                          <span>Filter</span>
                        </span>
                        <img
                          src="/external/icondownoutlinedi631-a5x.svg"
                          alt="IconDownOutlinedI631"
                          className="explore-icon-down-outlined"
                        />
                      </div>
                    </div>
                    <div className="explore-frame-select1">
                      <div className="explore-select-input1">
                        <span className="explore-text023 LightBaseBaseNormal">
                          <span>Sort by</span>
                        </span>
                        <img
                          src="/external/icondownoutlinedi671-snv.svg"
                          alt="IconDownOutlinedI671"
                          className="explore-icon-down-outlined1"
                        />
                      </div>
                    </div>
                  </button>
                  <div className="explore-frame-table">
                    <div className="explore-content-wrapper1">
                      <div className="explore-frame161">
                        <div className="explore-frame160">
                          <div className="explore-frame6356145">
                            <img
                              src="/external/weshicks4eetnac1s4unsplash16313-kar-200h.png"
                              alt="weshicks4EeTnaC1S4unsplash16313"
                              className="explore-weshicks4-ee-tna-c1s4unsplash1"
                            />
                            <div className="explore-badge">
                              <div className="explore-number">
                                <span className="explore-text025">
                                  <span>Sale 40%</span>
                                </span>
                              </div>
                            </div>
                            <div className="explore-icongraylike">
                              <img
                                src="/external/ellipsei631-g9ab-200h.png"
                                alt="EllipseI631"
                                className="explore-ellipse"
                              />
                              <img
                                src="/external/framei631-w1i.svg"
                                alt="FrameI631"
                                className="explore-frame"
                              />
                            </div>
                            <div className="explore-frame9">
                              <span className="explore-text027">
                                <span>Magzhan Onerbay</span>
                              </span>
                              <span className="explore-text029">
                                <span>React Advanced</span>
                              </span>
                            </div>
                            <div className="explore-frame6356146">
                              <div className="explore-frame6356138">
                                <span className="explore-text031">
                                  <span>Beginner level</span>
                                </span>
                                <span className="explore-text033">
                                  <span>Mentor: yes</span>
                                </span>
                                <span className="explore-text035">
                                  <span>Certificate: yes</span>
                                </span>
                              </div>
                              <img
                                src="/external/skilllevelsvgrepocom16313-ms4.svg"
                                alt="skilllevelsvgrepocom16313"
                                className="explore-skilllevelsvgrepocom1"
                              />
                              <img
                                src="/external/crownsvgrepocom16313-rlse.svg"
                                alt="crownsvgrepocom16313"
                                className="explore-crownsvgrepocom1"
                              />
                              <img
                                src="/external/badgesvgrepocom16313-nif6.svg"
                                alt="badgesvgrepocom16313"
                                className="explore-badgesvgrepocom1"
                              />
                            </div>
                            <div className="explore-frame6356147">
                              <div className="explore-frame147">
                                <span className="explore-text037">
                                  <span>705 000 ₸</span>
                                </span>
                                <span className="explore-text039">
                                  <span>905 000 ₸</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="explore-frame63561461">
                            <img
                              src="/external/weshicks4eetnac1s4unsplash16313-ddet-200h.png"
                              alt="weshicks4EeTnaC1S4unsplash16313"
                              className="explore-weshicks4-ee-tna-c1s4unsplash11"
                            />
                            <div className="explore-icongraylike1">
                              <img
                                src="/external/ellipsei631-25qr-200w.png"
                                alt="EllipseI631"
                                className="explore-ellipse1"
                              />
                              <img
                                src="/external/framei631-i7ar.svg"
                                alt="FrameI631"
                                className="explore-frame1"
                              />
                            </div>
                            <div className="explore-frame6356148">
                              <span className="explore-text041">
                                <span>Flow Education</span>
                              </span>
                              <span className="explore-text043">
                                <span>SMM-start for Beginner students</span>
                              </span>
                            </div>
                            <div className="explore-frame6356149">
                              <div className="explore-frame63561381">
                                <span className="explore-text045">
                                  <span>Beginner level</span>
                                </span>
                                <span className="explore-text047">
                                  <span>Mentor: yes</span>
                                </span>
                                <span className="explore-text049">
                                  <span>Certificate: yes</span>
                                </span>
                              </div>
                              <img
                                src="/external/skilllevelsvgrepocom16613-vdjr.svg"
                                alt="skilllevelsvgrepocom16613"
                                className="explore-skilllevelsvgrepocom11"
                              />
                              <img
                                src="/external/crownsvgrepocom16613-8qns.svg"
                                alt="crownsvgrepocom16613"
                                className="explore-crownsvgrepocom11"
                              />
                              <img
                                src="/external/badgesvgrepocom16613-8a6r.svg"
                                alt="badgesvgrepocom16613"
                                className="explore-badgesvgrepocom11"
                              />
                            </div>
                            <div className="explore-frame129">
                              <div className="explore-frame1471">
                                <span className="explore-text051">
                                  <span>FREE</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="explore-frame63561491">
                            <img
                              src="/external/weshicks4eetnac1s4unsplash16313-7egh-200h.png"
                              alt="weshicks4EeTnaC1S4unsplash16313"
                              className="explore-weshicks4-ee-tna-c1s4unsplash12"
                            />
                            <div className="explore-badge1">
                              <div className="explore-number1">
                                <span className="explore-text053">
                                  <span>Sale 40%</span>
                                </span>
                              </div>
                            </div>
                            <div className="explore-icongraylike2">
                              <img
                                src="/external/ellipsei631-w30k-200h.png"
                                alt="EllipseI631"
                                className="explore-ellipse2"
                              />
                              <img
                                src="/external/framei631-x9xi.svg"
                                alt="FrameI631"
                                className="explore-frame2"
                              />
                            </div>
                            <div className="explore-frame63561471">
                              <span className="explore-text055">
                                <span>Aizhan Omirzak</span>
                              </span>
                              <span className="explore-text057">
                                <span>
                                  <span>How to SQL basic</span>
                                  <br></br>
                                  <span></span>
                                </span>
                              </span>
                            </div>
                            <div className="explore-frame63561481">
                              <div className="explore-frame1472">
                                <span className="explore-text062">
                                  <span>60 000 ₸</span>
                                </span>
                                <span className="explore-text064">
                                  <span>80 000 ₸</span>
                                </span>
                              </div>
                            </div>
                            <div className="explore-frame63561492">
                              <div className="explore-frame63561382">
                                <span className="explore-text066">
                                  <span>Beginner level</span>
                                </span>
                                <span className="explore-text068">
                                  <span>Mentor: yes</span>
                                </span>
                                <span className="explore-text070">
                                  <span>Certificate: yes</span>
                                </span>
                              </div>
                              <img
                                src="/external/skilllevelsvgrepocom16613-a3x.svg"
                                alt="skilllevelsvgrepocom16613"
                                className="explore-skilllevelsvgrepocom12"
                              />
                              <img
                                src="/external/crownsvgrepocom16613-k77.svg"
                                alt="crownsvgrepocom16613"
                                className="explore-crownsvgrepocom12"
                              />
                              <img
                                src="/external/badgesvgrepocom16613-taso.svg"
                                alt="badgesvgrepocom16613"
                                className="explore-badgesvgrepocom12"
                              />
                            </div>
                          </div>
                          <Link to="/uxui" className="explore-navlink1">
                            <div className="explore-frame63561482">
                              <img
                                src="/external/weshicks4eetnac1s4unsplash16313-vpgn-200h.png"
                                alt="weshicks4EeTnaC1S4unsplash16313"
                                className="explore-weshicks4-ee-tna-c1s4unsplash13"
                              />
                              <div className="explore-badge2">
                                <div className="explore-number2">
                                  <span className="explore-text072">
                                    <span>Sale 40%</span>
                                  </span>
                                </div>
                              </div>
                              <div className="explore-icongraylike3">
                                <img
                                  src="/external/ellipsei631-a4bf-200h.png"
                                  alt="EllipseI631"
                                  className="explore-ellipse3"
                                />
                                <img
                                  src="/external/framei631-r5pc.svg"
                                  alt="FrameI631"
                                  className="explore-frame3"
                                />
                              </div>
                              <div className="explore-frame91">
                                <span className="explore-text074">
                                  <span>Flow Education</span>
                                </span>
                                <span className="explore-text076">
                                  <span>
                                    UX/UI Design
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: ' ',
                                      }}
                                    />
                                  </span>
                                </span>
                              </div>
                              <div className="explore-frame1291">
                                <div className="explore-frame1473">
                                  <span className="explore-text078">
                                    <span>705 000 ₸</span>
                                  </span>
                                  <span className="explore-text080">
                                    <span>905 000 ₸</span>
                                  </span>
                                </div>
                              </div>
                              <div className="explore-frame63561472">
                                <div className="explore-frame63561383">
                                  <span className="explore-text082">
                                    <span>Beginner level</span>
                                  </span>
                                  <span className="explore-text084">
                                    <span>Mentor: yes</span>
                                  </span>
                                  <span className="explore-text086">
                                    <span>Certificate: yes</span>
                                  </span>
                                </div>
                                <img
                                  src="/external/skilllevelsvgrepocom16613-24gm.svg"
                                  alt="skilllevelsvgrepocom16613"
                                  className="explore-skilllevelsvgrepocom13"
                                />
                                <img
                                  src="/external/crownsvgrepocom16613-mv1l.svg"
                                  alt="crownsvgrepocom16613"
                                  className="explore-crownsvgrepocom13"
                                />
                                <img
                                  src="/external/badgesvgrepocom16613-d93r.svg"
                                  alt="badgesvgrepocom16613"
                                  className="explore-badgesvgrepocom13"
                                />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="explore-frame163">
                        <div className="explore-frame1601">
                          <div className="explore-frame63561451">
                            <img
                              src="/external/weshicks4eetnac1s4unsplash16613-2rsf-200h.png"
                              alt="weshicks4EeTnaC1S4unsplash16613"
                              className="explore-weshicks4-ee-tna-c1s4unsplash14"
                            />
                            <div className="explore-badge3">
                              <div className="explore-number3">
                                <span className="explore-text088">
                                  <span>Sale 40%</span>
                                </span>
                              </div>
                            </div>
                            <div className="explore-icongraylike4">
                              <img
                                src="/external/ellipsei661-r0g-200h.png"
                                alt="EllipseI661"
                                className="explore-ellipse4"
                              />
                              <img
                                src="/external/framei661-nubk.svg"
                                alt="FrameI661"
                                className="explore-frame4"
                              />
                            </div>
                            <div className="explore-frame92">
                              <span className="explore-text090">
                                <span>Magzhan Onerbay</span>
                              </span>
                              <span className="explore-text092">
                                <span>React Advanced</span>
                              </span>
                            </div>
                            <div className="explore-frame63561462">
                              <div className="explore-frame63561384">
                                <span className="explore-text094">
                                  <span>Beginner level</span>
                                </span>
                                <span className="explore-text096">
                                  <span>Mentor: yes</span>
                                </span>
                                <span className="explore-text098">
                                  <span>Certificate: yes</span>
                                </span>
                              </div>
                              <img
                                src="/external/skilllevelsvgrepocom16613-xcpm.svg"
                                alt="skilllevelsvgrepocom16613"
                                className="explore-skilllevelsvgrepocom14"
                              />
                              <img
                                src="/external/crownsvgrepocom16613-5r06.svg"
                                alt="crownsvgrepocom16613"
                                className="explore-crownsvgrepocom14"
                              />
                              <img
                                src="/external/badgesvgrepocom16613-yo14.svg"
                                alt="badgesvgrepocom16613"
                                className="explore-badgesvgrepocom14"
                              />
                            </div>
                            <div className="explore-frame63561473">
                              <div className="explore-frame1474">
                                <span className="explore-text100">
                                  <span>705 000 ₸</span>
                                </span>
                                <span className="explore-text102">
                                  <span>905 000 ₸</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="explore-frame63561463">
                            <img
                              src="/external/weshicks4eetnac1s4unsplash16613-xck6-200h.png"
                              alt="weshicks4EeTnaC1S4unsplash16613"
                              className="explore-weshicks4-ee-tna-c1s4unsplash15"
                            />
                            <div className="explore-icongraylike5">
                              <img
                                src="/external/ellipsei661-xqkc-200w.png"
                                alt="EllipseI661"
                                className="explore-ellipse5"
                              />
                              <img
                                src="/external/framei661-cxeh.svg"
                                alt="FrameI661"
                                className="explore-frame5"
                              />
                            </div>
                            <div className="explore-frame63561483">
                              <span className="explore-text104">
                                <span>Flow Education</span>
                              </span>
                              <span className="explore-text106">
                                <span>SMM-start for Beginner students</span>
                              </span>
                            </div>
                            <div className="explore-frame63561493">
                              <div className="explore-frame63561385">
                                <span className="explore-text108">
                                  <span>Beginner level</span>
                                </span>
                                <span className="explore-text110">
                                  <span>Mentor: yes</span>
                                </span>
                                <span className="explore-text112">
                                  <span>Certificate: yes</span>
                                </span>
                              </div>
                              <img
                                src="/external/skilllevelsvgrepocom16613-0h03.svg"
                                alt="skilllevelsvgrepocom16613"
                                className="explore-skilllevelsvgrepocom15"
                              />
                              <img
                                src="/external/crownsvgrepocom16613-pj1e.svg"
                                alt="crownsvgrepocom16613"
                                className="explore-crownsvgrepocom15"
                              />
                              <img
                                src="/external/badgesvgrepocom16613-coe.svg"
                                alt="badgesvgrepocom16613"
                                className="explore-badgesvgrepocom15"
                              />
                            </div>
                            <div className="explore-frame1292">
                              <div className="explore-frame1475">
                                <span className="explore-text114">
                                  <span>
                                    FREE
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: ' ',
                                      }}
                                    />
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="explore-frame63561494">
                            <img
                              src="/external/weshicks4eetnac1s4unsplash16613-kz09-200h.png"
                              alt="weshicks4EeTnaC1S4unsplash16613"
                              className="explore-weshicks4-ee-tna-c1s4unsplash16"
                            />
                            <div className="explore-badge4">
                              <div className="explore-number4">
                                <span className="explore-text116">
                                  <span>Sale 40%</span>
                                </span>
                              </div>
                            </div>
                            <div className="explore-icongraylike6">
                              <img
                                src="/external/ellipsei661-qejr-200h.png"
                                alt="EllipseI661"
                                className="explore-ellipse6"
                              />
                              <img
                                src="/external/framei661-w1tg.svg"
                                alt="FrameI661"
                                className="explore-frame6"
                              />
                            </div>
                            <div className="explore-frame63561474">
                              <span className="explore-text118">
                                <span>Aizhan Omirzak</span>
                              </span>
                              <span className="explore-text120">
                                <span>
                                  <span>How to SQL basic</span>
                                  <br></br>
                                  <span></span>
                                </span>
                              </span>
                            </div>
                            <div className="explore-frame63561484">
                              <div className="explore-frame1476">
                                <span className="explore-text125">
                                  <span>60 000 ₸</span>
                                </span>
                                <span className="explore-text127">
                                  <span>80 000 ₸</span>
                                </span>
                              </div>
                            </div>
                            <div className="explore-frame63561495">
                              <div className="explore-frame63561386">
                                <span className="explore-text129">
                                  <span>Beginner level</span>
                                </span>
                                <span className="explore-text131">
                                  <span>Mentor: yes</span>
                                </span>
                                <span className="explore-text133">
                                  <span>Certificate: yes</span>
                                </span>
                              </div>
                              <img
                                src="/external/skilllevelsvgrepocom16613-4vkb.svg"
                                alt="skilllevelsvgrepocom16613"
                                className="explore-skilllevelsvgrepocom16"
                              />
                              <img
                                src="/external/crownsvgrepocom16613-bq1.svg"
                                alt="crownsvgrepocom16613"
                                className="explore-crownsvgrepocom16"
                              />
                              <img
                                src="/external/badgesvgrepocom16613-fnj4.svg"
                                alt="badgesvgrepocom16613"
                                className="explore-badgesvgrepocom16"
                              />
                            </div>
                          </div>
                          <div className="explore-frame63561485">
                            <img
                              src="/external/weshicks4eetnac1s4unsplash16613-0rmb-200h.png"
                              alt="weshicks4EeTnaC1S4unsplash16613"
                              className="explore-weshicks4-ee-tna-c1s4unsplash17"
                            />
                            <div className="explore-badge5">
                              <div className="explore-number5">
                                <span className="explore-text135">
                                  <span>Sale 40%</span>
                                </span>
                              </div>
                            </div>
                            <div className="explore-icongraylike7">
                              <img
                                src="/external/ellipsei661-qqd7-200h.png"
                                alt="EllipseI661"
                                className="explore-ellipse7"
                              />
                              <img
                                src="/external/framei661-gpgj.svg"
                                alt="FrameI661"
                                className="explore-frame7"
                              />
                            </div>
                            <div className="explore-frame93">
                              <span className="explore-text137">
                                <span>Flow Education</span>
                              </span>
                              <span className="explore-text139">
                                <span>
                                  UX/UI Design
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: ' ',
                                    }}
                                  />
                                </span>
                              </span>
                            </div>
                            <div className="explore-frame1293">
                              <div className="explore-frame1477">
                                <span className="explore-text141">
                                  <span>705 000 ₸</span>
                                </span>
                                <span className="explore-text143">
                                  <span>905 000 ₸</span>
                                </span>
                              </div>
                            </div>
                            <div className="explore-frame63561475">
                              <div className="explore-frame63561387">
                                <span className="explore-text145">
                                  <span>Beginner level</span>
                                </span>
                                <span className="explore-text147">
                                  <span>Mentor: yes</span>
                                </span>
                                <span className="explore-text149">
                                  <span>Certificate: yes</span>
                                </span>
                              </div>
                              <img
                                src="/external/skilllevelsvgrepocom16613-sc7.svg"
                                alt="skilllevelsvgrepocom16613"
                                className="explore-skilllevelsvgrepocom17"
                              />
                              <img
                                src="/external/crownsvgrepocom16614-rbvk.svg"
                                alt="crownsvgrepocom16614"
                                className="explore-crownsvgrepocom17"
                              />
                              <img
                                src="/external/badgesvgrepocom16614-2klh.svg"
                                alt="badgesvgrepocom16614"
                                className="explore-badgesvgrepocom17"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="explore-frame-pagination">
                      <div className="explore-pagination-item-arrow">
                        <img
                          src="/external/iconleftoutlinedi631-kmmi.svg"
                          alt="IconLeftOutlinedI631"
                          className="explore-icon-left-outlined"
                        />
                      </div>
                      <div className="explore-pagination-item-number">
                        <span className="explore-text151 LightBaseBaseStrong">
                          1
                        </span>
                      </div>
                      <div className="explore-pagination-item-number1">
                        <span className="explore-text152 LightBaseBaseNormal">
                          2
                        </span>
                      </div>
                      <div className="explore-pagination-item-number2">
                        <span className="explore-text153 LightBaseBaseNormal">
                          3
                        </span>
                      </div>
                      <div className="explore-pagination-item-number3">
                        <span className="explore-text154 LightBaseBaseNormal">
                          4
                        </span>
                      </div>
                      <div className="explore-pagination-item-number4">
                        <span className="explore-text155 LightBaseBaseNormal">
                          5
                        </span>
                      </div>
                      <div className="explore-pagination-item-arrow1">
                        <img
                          src="/external/iconrightoutlinedi631-mxki.svg"
                          alt="IconRightOutlinedI631"
                          className="explore-icon-right-outlined"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-frame-footer1">
            <div className="explore-content-wrapper2">
              <div className="explore-content-wrapper3">
                <span className="explore-text156 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="explore-text158 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="explore-text160 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="explore-text162 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="explore-text164 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
