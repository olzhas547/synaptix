import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './cinema4d.css'

const Cinema4d = (props) => {
  return (
    <div className="cinema4d-container">
      <Helmet>
        <title>cinema 4D</title>
      </Helmet>
      <div className="cinema4d-mycourses">
        <div className="cinema4d-frame-admin-panel-menu1">
          <div className="cinema4d-frame-admin-panel-menu11">
            <div className="cinema4d-logo">
              <div className="cinema4d-logo1">
                <div className="cinema4d-frame1000002598">
                  <img
                    src="/external/containerlogo5411-5pvr-200h.png"
                    alt="ContainerLogo5411"
                    className="cinema4d-container-logo"
                  />
                  <div className="cinema4d-book4">
                    <div className="cinema4d-group">
                      <img
                        src="/external/vectori541-k2fd.svg"
                        alt="VectorI541"
                        className="cinema4d-vector"
                      />
                      <img
                        src="/external/vectori541-gcdo.svg"
                        alt="VectorI541"
                        className="cinema4d-vector01"
                      />
                      <img
                        src="/external/vectori541-fz7b.svg"
                        alt="VectorI541"
                        className="cinema4d-vector02"
                      />
                      <img
                        src="/external/vectori541-cc8u.svg"
                        alt="VectorI541"
                        className="cinema4d-vector03"
                      />
                    </div>
                  </div>
                </div>
                <div className="cinema4d-frame-title">
                  <span className="cinema4d-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="cinema4d-frame-menu">
              <div className="cinema4d-menu-items">
                <Link to="/cinema4d" className="cinema4d-navlink">
                  <div className="cinema4d-menu-item-inline-navigation-item">
                    <img
                      src="/external/icondashboardoutlinedi541-th9r.svg"
                      alt="IconDashboardOutlinedI541"
                      className="cinema4d-icon-dashboard-outlined"
                    />
                    <span className="cinema4d-text002 LightBaseBaseNormal">
                      <span>Dashboard</span>
                    </span>
                  </div>
                </Link>
                <Link to="/cinema4d" className="cinema4d-navlink1">
                  <div className="cinema4d-menu-item-inline-navigation-item1">
                    <img
                      src="/external/icondatabaseoutlinedi541-bl8j.svg"
                      alt="IconDatabaseOutlinedI541"
                      className="cinema4d-icon-database-outlined"
                    />
                    <span className="cinema4d-text004 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                </Link>
                <Link to="/cinema4d" className="cinema4d-navlink2">
                  <div className="cinema4d-menu-item-inline-navigation-item2">
                    <img
                      src="/external/iconbarchartoutlinedi541-29x8.svg"
                      alt="IconBarChartOutlinedI541"
                      className="cinema4d-icon-bar-chart-outlined"
                    />
                    <span className="cinema4d-text006 LightBaseBaseNormal">
                      <span>Statistics</span>
                    </span>
                  </div>
                </Link>
                <Link to="/cinema4d" className="cinema4d-navlink3">
                  <div className="cinema4d-menu-item-inline-navigation-item3">
                    <img
                      src="/external/iconcalendaroutlinedi541-ngw.svg"
                      alt="IconCalendarOutlinedI541"
                      className="cinema4d-icon-calendar-outlined"
                    />
                    <span className="cinema4d-text008 LightBaseBaseNormal">
                      <span>Calendar</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="cinema4d-menu-submenu">
                <Link to="/cinema4d" className="cinema4d-navlink4">
                  <div className="cinema4d-menu-item-inline-submenu-title">
                    <img
                      src="/external/iconfiletextoutlinedi541-bb0q.svg"
                      alt="IconFileTextOutlinedI541"
                      className="cinema4d-icon-file-text-outlined"
                    />
                    <span className="cinema4d-text010 LightBaseBaseNormal">
                      <span>Invoice</span>
                    </span>
                    <img
                      src="/external/icondownoutlinedi541-ltxu.svg"
                      alt="IconDownOutlinedI541"
                      className="cinema4d-icon-down-outlined"
                    />
                  </div>
                </Link>
              </div>
              <div className="cinema4d-menu-items1">
                <Link to="/cinema4d" className="cinema4d-navlink5">
                  <div className="cinema4d-menu-item-inline-navigation-item4">
                    <img
                      src="/external/iconsettingoutlinedi541-lvx.svg"
                      alt="IconSettingOutlinedI541"
                      className="cinema4d-icon-setting-outlined"
                    />
                    <span className="cinema4d-text012 LightBaseBaseNormal">
                      <span>Settings</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="cinema4d-content-wrapper">
          <div className="cinema4d-frame-header">
            <div className="cinema4d-icon-search">
              <button className="cinema4d-frame-button">
                <div className="cinema4d-content">
                  <img
                    src="/external/iconmenufoldoutlinedi541-1ozj.svg"
                    alt="IconMenuFoldOutlinedI541"
                    className="cinema4d-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="cinema4d-frame-input-search">
                <div className="cinema4d-input-wrapper">
                  <div className="cinema4d-frame-input-basic">
                    <div className="cinema4d-content1">
                      <span className="cinema4d-text014 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="cinema4d-frame-button1">
                  <div className="cinema4d-content2">
                    <img
                      src="/external/iconsearchoutlinedi541-opc.svg"
                      alt="IconSearchOutlinedI541"
                      className="cinema4d-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="cinema4d-avatar-button">
              <button className="cinema4d-frame-button2">
                <div className="cinema4d-content3">
                  <img
                    src="/external/iconglobaloutlinedi541-bn7l.svg"
                    alt="IconGlobalOutlinedI541"
                    className="cinema4d-icon-global-outlined"
                  />
                  <span className="cinema4d-text016 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="cinema4d-notifications">
                <img
                  src="/external/iconbelloutlinedi541-7xwz.svg"
                  alt="IconBellOutlinedI541"
                  className="cinema4d-icon-bell-outlined"
                />
                <div className="cinema4d-content4">
                  <div className="cinema4d-frame-badge-basic">
                    <span className="cinema4d-text018 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/dashboard" className="cinema4d-navlink6">
                <div className="cinema4d-frame-avatar">
                  <img
                    src="/external/iconuseroutlinedi541-5wso.svg"
                    alt="IconUserOutlinedI541"
                    className="cinema4d-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="cinema4d-frame-card1">
            <button className="cinema4d-header-button">
              <div className="cinema4d-header-links">
                <div className="cinema4d-frame-breadcrumb">
                  <div className="cinema4d-breadcrumb-link">
                    <span className="cinema4d-text020 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                  <div className="cinema4d-breadcrumb-separator">
                    <div className="cinema4d-content5">
                      <span className="cinema4d-text022 LightBaseBaseNormal">
                        /
                      </span>
                    </div>
                  </div>
                  <div className="cinema4d-breadcrumb-link1">
                    <span className="cinema4d-text023 LightBaseBaseNormal">
                      <span>Cinema 4d</span>
                    </span>
                  </div>
                </div>
                <div className="cinema4d-frame-title1">
                  <span className="cinema4d-text025 LightHeadingHeading2">
                    <span>Cinema 4d</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="cinema4d-frame2">
              <div className="cinema4d-remixiconslinesystemapps2line">
                <div className="cinema4d-group1"></div>
              </div>
              <div className="cinema4d-frame80"></div>
              <img
                src="/external/rectangle355412-65be-200h.png"
                alt="Rectangle355412"
                className="cinema4d-rectangle35"
              />
              <div className="cinema4d-frame107">
                <div className="cinema4d-remixiconslinesystemapps2line1">
                  <div className="cinema4d-group2"></div>
                </div>
                <div className="cinema4d-frame801"></div>
                <img
                  src="/external/rectangle355412-le39-300w.png"
                  alt="Rectangle355412"
                  className="cinema4d-rectangle351"
                />
                <img
                  src="/external/rectangle365412-m12s-400h.png"
                  alt="Rectangle365412"
                  className="cinema4d-rectangle36"
                />
                <div className="cinema4d-frame16">
                  <div className="cinema4d-frame97">
                    <div className="cinema4d-frame96"></div>
                  </div>
                </div>
                <div className="cinema4d-group50">
                  <div className="cinema4d-group58">
                    <span className="cinema4d-text027">
                      <span>24 hours in total</span>
                    </span>
                    <img
                      src="/external/ellipse105412-247c-200h.png"
                      alt="Ellipse105412"
                      className="cinema4d-ellipse10"
                    />
                    <img
                      src="/external/ellipse115412-t2nf-200w.png"
                      alt="Ellipse115412"
                      className="cinema4d-ellipse11"
                    />
                    <span className="cinema4d-text029">
                      <span>70%</span>
                    </span>
                  </div>
                </div>
                <div className="cinema4d-frame121">
                  <div className="cinema4d-frame120">
                    <span className="cinema4d-text031">
                      <span>Cinema 4D</span>
                    </span>
                    <div className="cinema4d-frame119">
                      <div className="cinema4d-group51">
                        <img
                          src="/external/ellipse25412-nwjt-200h.png"
                          alt="Ellipse25412"
                          className="cinema4d-ellipse2"
                        />
                        <img
                          src="/external/ellipse35412-69zn-200h.png"
                          alt="Ellipse35412"
                          className="cinema4d-ellipse3"
                        />
                        <img
                          src="/external/ellipse45412-krof-200h.png"
                          alt="Ellipse45412"
                          className="cinema4d-ellipse4"
                        />
                        <img
                          src="/external/ellipse55412-jftk-200h.png"
                          alt="Ellipse55412"
                          className="cinema4d-ellipse5"
                        />
                      </div>
                      <div className="cinema4d-frame11">
                        <div className="cinema4d-remixiconslinesystemarrowrightsline">
                          <div className="cinema4d-group3">
                            <img
                              src="/external/vectori541-uowj.svg"
                              alt="VectorI541"
                              className="cinema4d-vector04"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="cinema4d-text033">
                    <span>
                      Take your design skills to the next level  with this
                      Cinema 4D Course.
                    </span>
                  </span>
                </div>
                <div className="cinema4d-group52">
                  <img
                    src="/external/vector5412-yjda.svg"
                    alt="Vector5412"
                    className="cinema4d-vector05"
                  />
                  <img
                    src="/external/vector5412-qd2t.svg"
                    alt="Vector5412"
                    className="cinema4d-vector06"
                  />
                  <img
                    src="/external/vector5412-yfjr.svg"
                    alt="Vector5412"
                    className="cinema4d-vector07"
                  />
                  <img
                    src="/external/vector5412-3dp9.svg"
                    alt="Vector5412"
                    className="cinema4d-vector08"
                  />
                  <img
                    src="/external/vector5412-usy.svg"
                    alt="Vector5412"
                    className="cinema4d-vector09"
                  />
                  <img
                    src="/external/vector5412-mr7t.svg"
                    alt="Vector5412"
                    className="cinema4d-vector10"
                  />
                  <img
                    src="/external/vector5412-h2cv.svg"
                    alt="Vector5412"
                    className="cinema4d-vector11"
                  />
                  <img
                    src="/external/vector5412-197i.svg"
                    alt="Vector5412"
                    className="cinema4d-vector12"
                  />
                  <div className="cinema4d-group4">
                    <img
                      src="/external/vector5412-i4y.svg"
                      alt="Vector5412"
                      className="cinema4d-vector13"
                    />
                  </div>
                  <img
                    src="/external/vector5412-m6w.svg"
                    alt="Vector5412"
                    className="cinema4d-vector14"
                  />
                  <img
                    src="/external/vector5412-wxp6.svg"
                    alt="Vector5412"
                    className="cinema4d-vector15"
                  />
                  <img
                    src="/external/vector5412-awnb.svg"
                    alt="Vector5412"
                    className="cinema4d-vector16"
                  />
                  <img
                    src="/external/vector5412-uho.svg"
                    alt="Vector5412"
                    className="cinema4d-vector17"
                  />
                  <img
                    src="/external/vector5412-lofn.svg"
                    alt="Vector5412"
                    className="cinema4d-vector18"
                  />
                  <img
                    src="/external/vector5412-hnp.svg"
                    alt="Vector5412"
                    className="cinema4d-vector19"
                  />
                  <img
                    src="/external/vector5412-mm2.svg"
                    alt="Vector5412"
                    className="cinema4d-vector20"
                  />
                  <img
                    src="/external/vector5412-gsh3.svg"
                    alt="Vector5412"
                    className="cinema4d-vector21"
                  />
                  <img
                    src="/external/vector5412-3vr.svg"
                    alt="Vector5412"
                    className="cinema4d-vector22"
                  />
                  <img
                    src="/external/vector5412-ss4m.svg"
                    alt="Vector5412"
                    className="cinema4d-vector23"
                  />
                  <img
                    src="/external/vector5412-0v0m.svg"
                    alt="Vector5412"
                    className="cinema4d-vector24"
                  />
                  <img
                    src="/external/vector5412-ta6.svg"
                    alt="Vector5412"
                    className="cinema4d-vector25"
                  />
                  <img
                    src="/external/vector5412-h2dl.svg"
                    alt="Vector5412"
                    className="cinema4d-vector26"
                  />
                  <img
                    src="/external/vector5412-r4jz.svg"
                    alt="Vector5412"
                    className="cinema4d-vector27"
                  />
                  <img
                    src="/external/vector5412-zf5.svg"
                    alt="Vector5412"
                    className="cinema4d-vector28"
                  />
                  <img
                    src="/external/vector5412-724.svg"
                    alt="Vector5412"
                    className="cinema4d-vector29"
                  />
                  <img
                    src="/external/vector5412-bxds.svg"
                    alt="Vector5412"
                    className="cinema4d-vector30"
                  />
                  <img
                    src="/external/vector5412-6d3g.svg"
                    alt="Vector5412"
                    className="cinema4d-vector31"
                  />
                  <img
                    src="/external/vector5412-60zg.svg"
                    alt="Vector5412"
                    className="cinema4d-vector32"
                  />
                  <img
                    src="/external/vector5412-cse.svg"
                    alt="Vector5412"
                    className="cinema4d-vector33"
                  />
                  <img
                    src="/external/vector5412-1bsh.svg"
                    alt="Vector5412"
                    className="cinema4d-vector34"
                  />
                  <img
                    src="/external/vector5412-jrie.svg"
                    alt="Vector5412"
                    className="cinema4d-vector35"
                  />
                  <img
                    src="/external/vector5412-263h.svg"
                    alt="Vector5412"
                    className="cinema4d-vector36"
                  />
                  <img
                    src="/external/vector5412-umz.svg"
                    alt="Vector5412"
                    className="cinema4d-vector37"
                  />
                  <img
                    src="/external/vector5412-729i.svg"
                    alt="Vector5412"
                    className="cinema4d-vector38"
                  />
                  <img
                    src="/external/vector5412-2h1r.svg"
                    alt="Vector5412"
                    className="cinema4d-vector39"
                  />
                  <img
                    src="/external/vector5412-epdt.svg"
                    alt="Vector5412"
                    className="cinema4d-vector40"
                  />
                  <img
                    src="/external/vector5412-7pp.svg"
                    alt="Vector5412"
                    className="cinema4d-vector41"
                  />
                  <img
                    src="/external/vector5412-fn1.svg"
                    alt="Vector5412"
                    className="cinema4d-vector42"
                  />
                  <img
                    src="/external/vector5412-xor.svg"
                    alt="Vector5412"
                    className="cinema4d-vector43"
                  />
                  <img
                    src="/external/vector5412-q6bk.svg"
                    alt="Vector5412"
                    className="cinema4d-vector44"
                  />
                  <img
                    src="/external/vector5412-7vlk.svg"
                    alt="Vector5412"
                    className="cinema4d-vector45"
                  />
                  <img
                    src="/external/vector5412-mbeh.svg"
                    alt="Vector5412"
                    className="cinema4d-vector46"
                  />
                  <img
                    src="/external/vector5412-a1u.svg"
                    alt="Vector5412"
                    className="cinema4d-vector47"
                  />
                  <img
                    src="/external/vector5412-k8m.svg"
                    alt="Vector5412"
                    className="cinema4d-vector48"
                  />
                </div>
                <div className="cinema4d-frame123">
                  <span className="cinema4d-text035">
                    <span>Courses Progress</span>
                  </span>
                  <div className="cinema4d-group60">
                    <div className="cinema4d-frame42">
                      <div className="cinema4d-frame70">
                        <div className="cinema4d-frame68">
                          <div className="cinema4d-frame67">
                            <img
                              src="/external/rectangle205412-2t2k-200w.png"
                              alt="Rectangle205412"
                              className="cinema4d-rectangle20"
                            />
                            <div className="cinema4d-frame66">
                              <span className="cinema4d-text037">
                                <span className="cinema4d-text038">54</span>
                                <span>/70</span>
                              </span>
                              <span className="cinema4d-text040">
                                <span>Visited lectures</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="cinema4d-frame69">
                          <div className="cinema4d-frame671">
                            <img
                              src="/external/rectangle205412-2oxs-200w.png"
                              alt="Rectangle205412"
                              className="cinema4d-rectangle201"
                            />
                            <div className="cinema4d-frame661">
                              <span className="cinema4d-text042">
                                <span className="cinema4d-text043">08</span>
                                <span>/12</span>
                              </span>
                              <span className="cinema4d-text045">
                                <span>Completed HW</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cinema4d-group57">
                      <div className="cinema4d-group53">
                        <div className="cinema4d-group56">
                          <div className="cinema4d-frame681">
                            <div className="cinema4d-frame672">
                              <img
                                src="/external/rectangle205412-s49-200w.png"
                                alt="Rectangle205412"
                                className="cinema4d-rectangle202"
                              />
                              <div className="cinema4d-frame662">
                                <span className="cinema4d-text047">
                                  <span>Passed tests</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="cinema4d-text049">
                            <span className="cinema4d-text050">20</span>
                            <span>/30</span>
                          </span>
                        </div>
                      </div>
                      <div className="cinema4d-group55">
                        <div className="cinema4d-frame122">
                          <div className="cinema4d-frame673">
                            <img
                              src="/external/rectangle205412-cggs-200w.png"
                              alt="Rectangle205412"
                              className="cinema4d-rectangle203"
                            />
                            <div className="cinema4d-frame663">
                              <span className="cinema4d-text052">
                                <span>GPA</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="cinema4d-text054">
                          <span className="cinema4d-text055">97</span>
                          <span>/100</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cinema4d-group59">
                  <span className="cinema4d-text057">
                    <span>Your assignments</span>
                  </span>
                  <div className="cinema4d-group12">
                    <img
                      src="/external/rectangle345412-l4z-200h.png"
                      alt="Rectangle345412"
                      className="cinema4d-rectangle34"
                    />
                    <div className="cinema4d-frame65">
                      <div className="cinema4d-frame64">
                        <div className="cinema4d-component4">
                          <span className="cinema4d-text059">
                            <span>4D</span>
                          </span>
                        </div>
                        <div className="cinema4d-frame63">
                          <span className="cinema4d-text061">
                            <span>
                              Homework №9
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                          <div className="cinema4d-frame14">
                            <span className="cinema4d-text063">
                              <span>23.00</span>
                            </span>
                            <span className="cinema4d-text065">|</span>
                            <span className="cinema4d-text066">
                              <span>May 18</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="cinema4d-remixiconslinesystemarrowrightsline1">
                        <div className="cinema4d-group5">
                          <img
                            src="/external/vectori541-4lgn.svg"
                            alt="VectorI541"
                            className="cinema4d-vector49"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cinema4d-frame124">
                <span className="cinema4d-text068">
                  <span>Course modules</span>
                </span>
                <span className="cinema4d-text070">
                  <span>See all</span>
                </span>
              </div>
              <div className="cinema4d-group62">
                <div className="cinema4d-group61">
                  <img
                    src="/external/rectangle455412-vvv-300w.png"
                    alt="Rectangle455412"
                    className="cinema4d-rectangle45"
                  />
                  <span className="cinema4d-text072">
                    <span className="cinema4d-text073">Module 1</span>
                    <br></br>
                    <span className="cinema4d-text075"></span>
                    <span>Introduction to Cinema 4D</span>
                  </span>
                </div>
                <div className="cinema4d-frame29">
                  <span className="cinema4d-text077">
                    <span className="cinema4d-text078">05/</span>
                    <span>05</span>
                  </span>
                  <span className="cinema4d-text080">
                    <span>100% Complete</span>
                  </span>
                </div>
                <div className="cinema4d-group7">
                  <img
                    src="/external/rectangle195412-hhj-200h.png"
                    alt="Rectangle195412"
                    className="cinema4d-rectangle19"
                  />
                </div>
              </div>
              <div className="cinema4d-group65">
                <div className="cinema4d-group611">
                  <img
                    src="/external/rectangle455412-jge-300w.png"
                    alt="Rectangle455412"
                    className="cinema4d-rectangle451"
                  />
                  <span className="cinema4d-text082">
                    <span className="cinema4d-text083">Module 4</span>
                    <br></br>
                    <span className="cinema4d-text085"></span>
                    <span>Introduction to Cinema 4D</span>
                  </span>
                </div>
                <div className="cinema4d-frame291">
                  <span className="cinema4d-text087">
                    <span className="cinema4d-text088">20/</span>
                    <span>20</span>
                  </span>
                  <span className="cinema4d-text090">
                    <span>100% Complete</span>
                  </span>
                </div>
                <div className="cinema4d-group71">
                  <img
                    src="/external/rectangle195412-ouzl-200h.png"
                    alt="Rectangle195412"
                    className="cinema4d-rectangle191"
                  />
                </div>
              </div>
              <div className="cinema4d-group68">
                <div className="cinema4d-group612">
                  <img
                    src="/external/rectangle455412-vhuo-300w.png"
                    alt="Rectangle455412"
                    className="cinema4d-rectangle452"
                  />
                  <span className="cinema4d-text092">
                    <span className="cinema4d-text093">Module 7</span>
                    <br></br>
                    <span className="cinema4d-text095"></span>
                    <span>Introduction to Cinema 4D</span>
                  </span>
                </div>
                <div className="cinema4d-frame292">
                  <span className="cinema4d-text097">
                    <span className="cinema4d-text098">00/</span>
                    <span>10</span>
                  </span>
                  <span className="cinema4d-text100">
                    <span>100% Complete</span>
                  </span>
                </div>
                <div className="cinema4d-group72">
                  <img
                    src="/external/rectangle195412-8a8p-200h.png"
                    alt="Rectangle195412"
                    className="cinema4d-rectangle192"
                  />
                </div>
              </div>
              <div className="cinema4d-group63">
                <div className="cinema4d-group613">
                  <img
                    src="/external/rectangle455412-cwa9-300w.png"
                    alt="Rectangle455412"
                    className="cinema4d-rectangle453"
                  />
                  <span className="cinema4d-text102">
                    <span className="cinema4d-text103">Module2</span>
                    <br></br>
                    <span className="cinema4d-text105"></span>
                    <span>Introduction to Cinema 4D</span>
                  </span>
                </div>
                <div className="cinema4d-frame293">
                  <span className="cinema4d-text107">
                    <span className="cinema4d-text108">15/</span>
                    <span>15</span>
                  </span>
                  <span className="cinema4d-text110">
                    <span>100% Complete</span>
                  </span>
                </div>
                <div className="cinema4d-group73">
                  <img
                    src="/external/rectangle195412-xvae-200h.png"
                    alt="Rectangle195412"
                    className="cinema4d-rectangle193"
                  />
                </div>
              </div>
              <div className="cinema4d-group66">
                <div className="cinema4d-group614">
                  <img
                    src="/external/rectangle455412-jm6f-300w.png"
                    alt="Rectangle455412"
                    className="cinema4d-rectangle454"
                  />
                  <span className="cinema4d-text112">
                    <span className="cinema4d-text113">Module 5</span>
                    <br></br>
                    <span className="cinema4d-text115"></span>
                    <span>Introduction to Cinema 4D</span>
                  </span>
                </div>
                <div className="cinema4d-frame294">
                  <span className="cinema4d-text117">
                    <span className="cinema4d-text118">15/</span>
                    <span>15</span>
                  </span>
                  <span className="cinema4d-text120">
                    <span>100% Complete</span>
                  </span>
                </div>
                <div className="cinema4d-group74">
                  <img
                    src="/external/rectangle195412-tmxi-200h.png"
                    alt="Rectangle195412"
                    className="cinema4d-rectangle194"
                  />
                </div>
              </div>
              <div className="cinema4d-group69">
                <div className="cinema4d-group615">
                  <img
                    src="/external/rectangle455412-0by-300w.png"
                    alt="Rectangle455412"
                    className="cinema4d-rectangle455"
                  />
                  <span className="cinema4d-text122">
                    <span className="cinema4d-text123">Module 8</span>
                    <br></br>
                    <span className="cinema4d-text125"></span>
                    <span>Introduction to Cinema 4D</span>
                  </span>
                </div>
                <div className="cinema4d-frame295">
                  <span className="cinema4d-text127">
                    <span className="cinema4d-text128">00/</span>
                    <span>15</span>
                  </span>
                  <span className="cinema4d-text130">
                    <span>100% Complete</span>
                  </span>
                </div>
                <div className="cinema4d-group75">
                  <img
                    src="/external/rectangle195412-o898-200h.png"
                    alt="Rectangle195412"
                    className="cinema4d-rectangle195"
                  />
                </div>
              </div>
              <div className="cinema4d-group64">
                <div className="cinema4d-group616">
                  <img
                    src="/external/rectangle455412-yi6-300w.png"
                    alt="Rectangle455412"
                    className="cinema4d-rectangle456"
                  />
                  <span className="cinema4d-text132">
                    <span className="cinema4d-text133">Module 3</span>
                    <br></br>
                    <span className="cinema4d-text135"></span>
                    <span>Introduction to Cinema 4D</span>
                  </span>
                </div>
                <div className="cinema4d-frame296">
                  <span className="cinema4d-text137">
                    <span className="cinema4d-text138">07/</span>
                    <span>07</span>
                  </span>
                  <span className="cinema4d-text140">
                    <span>100% Complete</span>
                  </span>
                </div>
                <div className="cinema4d-group76">
                  <img
                    src="/external/rectangle195412-9aji-200h.png"
                    alt="Rectangle195412"
                    className="cinema4d-rectangle196"
                  />
                </div>
              </div>
              <div className="cinema4d-group67">
                <div className="cinema4d-group617">
                  <Link to="/about" className="cinema4d-navlink7">
                    <img
                      src="/external/rectangle455412-ut4-300w.png"
                      alt="Rectangle455412"
                      className="cinema4d-rectangle457"
                    />
                  </Link>
                  <span className="cinema4d-text142">
                    <span className="cinema4d-text143">Module 6</span>
                    <br></br>
                    <span className="cinema4d-text145"></span>
                    <span>Introduction to Cinema 4D</span>
                  </span>
                </div>
                <div className="cinema4d-frame297">
                  <span className="cinema4d-text147">
                    <span className="cinema4d-text148">04/</span>
                    <span>07</span>
                  </span>
                  <span className="cinema4d-text150">
                    <span>70% Complete</span>
                  </span>
                </div>
                <div className="cinema4d-group77">
                  <img
                    src="/external/rectangle245412-xw99-200h.png"
                    alt="Rectangle245412"
                    className="cinema4d-rectangle24"
                  />
                </div>
              </div>
              <div className="cinema4d-group70">
                <div className="cinema4d-group618">
                  <img
                    src="/external/rectangle455412-3noq-300w.png"
                    alt="Rectangle455412"
                    className="cinema4d-rectangle458"
                  />
                  <span className="cinema4d-text152">
                    <span className="cinema4d-text153">Module 9</span>
                    <br></br>
                    <span className="cinema4d-text155"></span>
                    <span>Introduction to Cinema 4D</span>
                  </span>
                </div>
                <div className="cinema4d-frame298">
                  <span className="cinema4d-text157">
                    <span className="cinema4d-text158">00/</span>
                    <span>09</span>
                  </span>
                  <span className="cinema4d-text160">
                    <span>70% Complete</span>
                  </span>
                </div>
                <div className="cinema4d-group78"></div>
              </div>
              <div className="cinema4d-frame-input-search1">
                <div className="cinema4d-input-wrapper1">
                  <div className="cinema4d-frame-input-basic1">
                    <div className="cinema4d-content6">
                      <span className="cinema4d-text162 LightBaseBaseNormal">
                        <span>
                          Search
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
                <button className="cinema4d-frame-button3">
                  <div className="cinema4d-content7">
                    <img
                      src="/external/iconsearchoutlinedi671-yswe.svg"
                      alt="IconSearchOutlinedI671"
                      className="cinema4d-icon-search-outlined1"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="cinema4d-frame-footer1">
            <div className="cinema4d-content-wrapper1">
              <div className="cinema4d-content-wrapper2">
                <span className="cinema4d-text164 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="cinema4d-text166 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="cinema4d-text168 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="cinema4d-text170 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="cinema4d-text172 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cinema4d
