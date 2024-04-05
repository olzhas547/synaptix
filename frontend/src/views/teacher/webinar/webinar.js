import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './webinar.css'

const Webinar = (props) => {
  return (
    <div className="webinar-container">
      <Helmet>
        <title>webinar</title>
        <meta property="og:title" content="webinar" />
      </Helmet>
      <div className="webinar-createcourse">
        <div className="webinar-frame-admin-panel-menu1">
          <div className="webinar-frame-admin-panel-menu11">
            <div className="webinar-logo">
              <div className="webinar-logo1">
                <div className="webinar-frame1000002598">
                  <img
                    src="/external/containerlogo8415-u8i-200h.png"
                    alt="ContainerLogo8415"
                    className="webinar-container-logo"
                  />
                  <div className="webinar-book4">
                    <div className="webinar-group">
                      <img
                        src="/external/vectori841-q0kk.svg"
                        alt="VectorI841"
                        className="webinar-vector"
                      />
                      <img
                        src="/external/vectori841-n49s.svg"
                        alt="VectorI841"
                        className="webinar-vector1"
                      />
                      <img
                        src="/external/vectori841-jcoj.svg"
                        alt="VectorI841"
                        className="webinar-vector2"
                      />
                      <img
                        src="/external/vectori841-6euy.svg"
                        alt="VectorI841"
                        className="webinar-vector3"
                      />
                    </div>
                  </div>
                </div>
                <div className="webinar-frame-title">
                  <span className="webinar-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="webinar-frame-menu">
              <div className="webinar-menu-items">
                <div className="webinar-menu-item-inline-navigation-item">
                  <img
                    src="/external/icondashboardoutlinedi841-oa79.svg"
                    alt="IconDashboardOutlinedI841"
                    className="webinar-icon-dashboard-outlined"
                  />
                  <Link to="/" className="webinar-text002 LightBaseBaseNormal">
                    <span>Dashboard</span>
                  </Link>
                </div>
                <div className="webinar-menu-item-inline-navigation-item1">
                  <img
                    src="/external/icondatabaseoutlinedi841-vlvo.svg"
                    alt="IconDatabaseOutlinedI841"
                    className="webinar-icon-database-outlined"
                  />
                  <Link to="/" className="webinar-text004 LightBaseBaseNormal">
                    <span>My courses</span>
                  </Link>
                </div>
                <div className="webinar-menu-item-inline-navigation-item2">
                  <img
                    src="/external/iconbarchartoutlinedi841-g01.svg"
                    alt="IconBarChartOutlinedI841"
                    className="webinar-icon-bar-chart-outlined"
                  />
                  <Link
                    to="/createwebinar"
                    className="webinar-text006 LightBaseBaseNormal"
                  >
                    <span>Statistics</span>
                  </Link>
                </div>
                <div className="webinar-menu-item-inline-navigation-item3">
                  <img
                    src="/external/iconcalendaroutlinedi841-rz0n.svg"
                    alt="IconCalendarOutlinedI841"
                    className="webinar-icon-calendar-outlined"
                  />
                  <Link to="/" className="webinar-text008 LightBaseBaseNormal">
                    <span>Calendar</span>
                  </Link>
                </div>
                <div className="webinar-menu-item-inline-navigation-item4">
                  <img
                    src="/external/iconvideocameraoutlinedi841-izhp.svg"
                    alt="IconVideoCameraOutlinedI841"
                    className="webinar-icon-video-camera-outlined"
                  />
                  <Link to="/" className="webinar-text010 LightBaseBaseNormal">
                    <span>Webinar</span>
                  </Link>
                </div>
              </div>
              <div className="webinar-menu-items1">
                <div className="webinar-menu-item-inline-navigation-item5">
                  <img
                    src="/external/iconsettingoutlinedi841-r01.svg"
                    alt="IconSettingOutlinedI841"
                    className="webinar-icon-setting-outlined"
                  />
                  <Link
                    to="/createwebinar"
                    className="webinar-text012 LightBaseBaseNormal"
                  >
                    <span>Settings</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="webinar-content-wrapper">
          <div className="webinar-frame-header">
            <div className="webinar-icon-search">
              <button className="webinar-frame-button">
                <div className="webinar-content">
                  <img
                    src="/external/iconmenufoldoutlinedi841-reof.svg"
                    alt="IconMenuFoldOutlinedI841"
                    className="webinar-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="webinar-frame-input-search">
                <div className="webinar-input-wrapper">
                  <div className="webinar-frame-input-basic">
                    <div className="webinar-content01">
                      <span className="webinar-text014 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="webinar-frame-button1">
                  <div className="webinar-content02">
                    <img
                      src="/external/iconsearchoutlinedi841-edyba.svg"
                      alt="IconSearchOutlinedI841"
                      className="webinar-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="webinar-avatar-button">
              <button className="webinar-frame-button2">
                <div className="webinar-content03">
                  <img
                    src="/external/iconglobaloutlinedi841-xqhp.svg"
                    alt="IconGlobalOutlinedI841"
                    className="webinar-icon-global-outlined"
                  />
                  <span className="webinar-text016 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="webinar-notifications">
                <img
                  src="/external/iconbelloutlinedi841-536m.svg"
                  alt="IconBellOutlinedI841"
                  className="webinar-icon-bell-outlined"
                />
                <div className="webinar-content04">
                  <div className="webinar-frame-badge-basic">
                    <span className="webinar-text018 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/createwebinar" className="webinar-navlink">
                <div className="webinar-frame-avatar">
                  <img
                    src="/external/iconuseroutlinedi841-oha6.svg"
                    alt="IconUserOutlinedI841"
                    className="webinar-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="webinar-frame-card1">
            <button className="webinar-header-button">
              <div className="webinar-header-links">
                <div className="webinar-frame-title1">
                  <span className="webinar-text020 LightHeadingHeading2">
                    <span>Webinar</span>
                  </span>
                  <Link to="/createwebinar" className="webinar-frame-button3">
                    <div className="webinar-content05">
                      <img
                        src="/external/iconpluscircleoutlinedi841-497.svg"
                        alt="IconPlusCircleOutlinedI841"
                        className="webinar-icon-plus-circle-outlined"
                      />
                      <span className="webinar-text022 LightBaseBaseNormal">
                        <span>Create webinar</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </button>
            <div className="webinar-frame-calendar4">
              <div className="webinar-frame-title2">
                <span className="webinar-text024 LightHeadingHeading2">
                  <span>Upcoming webinars</span>
                </span>
              </div>
              <div className="webinar-list-calendar">
                <div className="webinar-calendar-list">
                  <div className="webinar-calendar-item-list">
                    <div className="webinar-text-wrapper">
                      <div className="webinar-header">
                        <div className="webinar-frame-avatar1">
                          <img
                            src="/external/rectangle1i842-221c-200h.png"
                            alt="Rectangle1I842"
                            className="webinar-rectangle1"
                          />
                        </div>
                        <div className="webinar-text-wrapper01">
                          <div className="webinar-text-wrapper02">
                            <span className="webinar-text026 LightBaseBaseStrong">
                              <span>Introduction to Cinema 4d</span>
                            </span>
                          </div>
                          <div className="webinar-footer">
                            <div className="webinar-icon-wrapper">
                              <img
                                src="/external/iconcalendaroutlinedi842-d8r9.svg"
                                alt="IconCalendarOutlinedI842"
                                className="webinar-icon-calendar-outlined1"
                              />
                              <span className="webinar-text028 LightBaseBaseNormal">
                                <span>January 10th, 2022 at 12:00 PM</span>
                              </span>
                            </div>
                            <img
                              src="/external/rectangle4i842-959f-200h.png"
                              alt="Rectangle4I842"
                              className="webinar-rectangle4"
                            />
                          </div>
                        </div>
                        <div className="webinar-pagination-item-more">
                          <img
                            src="/external/iconellipsisoutlinedi842-w57.svg"
                            alt="IconEllipsisOutlinedI842"
                            className="webinar-icon-ellipsis-outlined"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="webinar-calendar-item-list1">
                    <div className="webinar-text-wrapper03">
                      <div className="webinar-header1">
                        <div className="webinar-frame-avatar2">
                          <img
                            src="/external/rectangle1i842-dtm8-200h.png"
                            alt="Rectangle1I842"
                            className="webinar-rectangle11"
                          />
                        </div>
                        <div className="webinar-text-wrapper04">
                          <div className="webinar-text-wrapper05">
                            <span className="webinar-text030 LightBaseBaseStrong">
                              <span>How to find your first design job</span>
                            </span>
                          </div>
                          <div className="webinar-footer1">
                            <div className="webinar-icon-wrapper1">
                              <img
                                src="/external/iconcalendaroutlinedi842-gga.svg"
                                alt="IconCalendarOutlinedI842"
                                className="webinar-icon-calendar-outlined2"
                              />
                              <span className="webinar-text032 LightBaseBaseNormal">
                                <span>January 12th, 2022 at 12:00 PM</span>
                              </span>
                            </div>
                            <img
                              src="/external/rectangle4i842-kzk-200h.png"
                              alt="Rectangle4I842"
                              className="webinar-rectangle41"
                            />
                          </div>
                        </div>
                        <div className="webinar-pagination-item-more1">
                          <img
                            src="/external/iconellipsisoutlinedi842-iseo.svg"
                            alt="IconEllipsisOutlinedI842"
                            className="webinar-icon-ellipsis-outlined1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="webinar-calendar-item-list2">
                    <div className="webinar-text-wrapper06">
                      <div className="webinar-header2">
                        <div className="webinar-frame-avatar3">
                          <img
                            src="/external/rectangle1i842-qpgo-200h.png"
                            alt="Rectangle1I842"
                            className="webinar-rectangle12"
                          />
                        </div>
                        <div className="webinar-text-wrapper07">
                          <div className="webinar-text-wrapper08">
                            <span className="webinar-text034 LightBaseBaseStrong">
                              <span>Front-end</span>
                            </span>
                          </div>
                          <div className="webinar-footer2">
                            <div className="webinar-icon-wrapper2">
                              <img
                                src="/external/iconcalendaroutlinedi842-puq.svg"
                                alt="IconCalendarOutlinedI842"
                                className="webinar-icon-calendar-outlined3"
                              />
                              <span className="webinar-text036 LightBaseBaseNormal">
                                <span>January 13h, 2022 at 12:00 PM</span>
                              </span>
                            </div>
                            <img
                              src="/external/rectangle4i842-6xxh-200h.png"
                              alt="Rectangle4I842"
                              className="webinar-rectangle42"
                            />
                          </div>
                        </div>
                        <div className="webinar-pagination-item-more2">
                          <img
                            src="/external/iconellipsisoutlinedi842-rmfl.svg"
                            alt="IconEllipsisOutlinedI842"
                            className="webinar-icon-ellipsis-outlined2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="webinar-calendar-item-list3">
                    <div className="webinar-text-wrapper09">
                      <div className="webinar-header3">
                        <div className="webinar-frame-avatar4">
                          <img
                            src="/external/rectangle1i842-e8qa-200h.png"
                            alt="Rectangle1I842"
                            className="webinar-rectangle13"
                          />
                        </div>
                        <div className="webinar-text-wrapper10">
                          <div className="webinar-text-wrapper11">
                            <span className="webinar-text038 LightBaseBaseStrong">
                              <span>Dive the dynamics</span>
                            </span>
                          </div>
                          <div className="webinar-footer3">
                            <div className="webinar-icon-wrapper3">
                              <img
                                src="/external/iconcalendaroutlinedi842-0aybt.svg"
                                alt="IconCalendarOutlinedI842"
                                className="webinar-icon-calendar-outlined4"
                              />
                              <span className="webinar-text040 LightBaseBaseNormal">
                                <span>January 10th, 2022 at 12:00 PM</span>
                              </span>
                            </div>
                            <img
                              src="/external/rectangle4i842-isd4-200h.png"
                              alt="Rectangle4I842"
                              className="webinar-rectangle43"
                            />
                          </div>
                        </div>
                        <div className="webinar-pagination-item-more3">
                          <img
                            src="/external/iconellipsisoutlinedi842-dcm8.svg"
                            alt="IconEllipsisOutlinedI842"
                            className="webinar-icon-ellipsis-outlined3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="webinar-calendar">
                  <div className="webinar-frame-calendar-card">
                    <div className="webinar-header4">
                      <div className="webinar-frame-title3">
                        <span className="webinar-text042 LightHeadingHeading4">
                          <span>January</span>
                        </span>
                      </div>
                      <div className="webinar-frame1">
                        <div className="webinar-select-input">
                          <span className="webinar-text044 LightBaseBaseNormal">
                            <span>2023</span>
                          </span>
                          <img
                            src="/external/icondownoutlinedi842-4wet.svg"
                            alt="IconDownOutlinedI842"
                            className="webinar-icon-down-outlined"
                          />
                        </div>
                        <div className="webinar-select-input1">
                          <span className="webinar-text046 LightBaseBaseNormal">
                            <span>Dec</span>
                          </span>
                          <img
                            src="/external/icondownoutlinedi842-ci4n.svg"
                            alt="IconDownOutlinedI842"
                            className="webinar-icon-down-outlined1"
                          />
                        </div>
                        <div className="webinar-frame-radio-group">
                          <button className="webinar-radio-button">
                            <div className="webinar-content06">
                              <span className="webinar-text048 LightBaseBaseNormal">
                                <span>Month</span>
                              </span>
                            </div>
                          </button>
                          <button className="webinar-radio-button1">
                            <div className="webinar-content07">
                              <span className="webinar-text050 LightBaseBaseNormal">
                                <span>Year</span>
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="webinar-content08">
                      <div className="webinar-row">
                        <div className="webinar-cell-wrapper">
                          <div className="webinar-date-picker-menu-item">
                            <span className="webinar-text052 LightBaseBaseNormal">
                              <span>Su</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper01">
                          <div className="webinar-date-picker-menu-item01">
                            <span className="webinar-text054 LightBaseBaseNormal">
                              <span>Mo</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper02">
                          <div className="webinar-date-picker-menu-item02">
                            <span className="webinar-text056 LightBaseBaseNormal">
                              <span>Tu</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper03">
                          <div className="webinar-date-picker-menu-item03">
                            <span className="webinar-text058 LightBaseBaseNormal">
                              <span>We</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper04">
                          <div className="webinar-date-picker-menu-item04">
                            <span className="webinar-text060 LightBaseBaseNormal">
                              <span>Th</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper05">
                          <div className="webinar-date-picker-menu-item05">
                            <span className="webinar-text062 LightBaseBaseNormal">
                              <span>Fr</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper06">
                          <div className="webinar-date-picker-menu-item06">
                            <span className="webinar-text064 LightBaseBaseNormal">
                              <span>Sa</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="webinar-row1">
                        <div className="webinar-cell-wrapper07">
                          <div className="webinar-date-picker-menu-item07">
                            <span className="webinar-text066 LightBaseBaseNormal">
                              <span>29</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper08">
                          <div className="webinar-date-picker-menu-item08">
                            <span className="webinar-text068 LightBaseBaseNormal">
                              <span>30</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper09">
                          <div className="webinar-date-picker-menu-item09">
                            <span className="webinar-text070 LightBaseBaseNormal">
                              1
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper10">
                          <div className="webinar-date-picker-menu-item10">
                            <span className="webinar-text071 LightBaseBaseNormal">
                              2
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper11">
                          <div className="webinar-date-picker-menu-item11">
                            <span className="webinar-text072 LightBaseBaseNormal">
                              3
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper12">
                          <div className="webinar-date-picker-menu-item12">
                            <span className="webinar-text073 LightBaseBaseNormal">
                              4
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper13">
                          <div className="webinar-date-picker-menu-item13">
                            <span className="webinar-text074 LightBaseBaseNormal">
                              5
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="webinar-row2">
                        <div className="webinar-cell-wrapper14">
                          <div className="webinar-date-picker-menu-item14">
                            <span className="webinar-text075 LightBaseBaseNormal">
                              6
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper15">
                          <div className="webinar-date-picker-menu-item15">
                            <span className="webinar-text076 LightBaseBaseNormal">
                              7
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper16">
                          <div className="webinar-date-picker-menu-item16">
                            <span className="webinar-text077 LightBaseBaseNormal">
                              8
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper17">
                          <div className="webinar-date-picker-menu-item17">
                            <span className="webinar-text078 LightBaseBaseNormal">
                              9
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper18">
                          <div className="webinar-date-picker-menu-item18">
                            <span className="webinar-text079 LightBaseBaseNormal">
                              <span>10</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper19">
                          <div className="webinar-date-picker-menu-item19">
                            <span className="webinar-text081 LightBaseBaseNormal">
                              <span>11</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper20">
                          <div className="webinar-date-picker-menu-item20">
                            <span className="webinar-text083 LightBaseBaseNormal">
                              <span>12</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="webinar-row3">
                        <div className="webinar-cell-wrapper21">
                          <div className="webinar-date-picker-menu-item21">
                            <span className="webinar-text085 LightBaseBaseNormal">
                              <span>13</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper22">
                          <div className="webinar-date-picker-menu-item22">
                            <span className="webinar-text087 LightBaseBaseNormal">
                              <span>14</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper23">
                          <div className="webinar-date-picker-menu-item23">
                            <span className="webinar-text089 LightBaseBaseNormal">
                              <span>15</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper24">
                          <div className="webinar-date-picker-menu-item24">
                            <span className="webinar-text091 LightBaseBaseNormal">
                              <span>16</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper25">
                          <div className="webinar-date-picker-menu-item25">
                            <span className="webinar-text093 LightBaseBaseNormal">
                              <span>17</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper26">
                          <div className="webinar-date-picker-menu-item26">
                            <span className="webinar-text095 LightBaseBaseNormal">
                              <span>18</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper27">
                          <div className="webinar-date-picker-menu-item27">
                            <span className="webinar-text097 LightBaseBaseNormal">
                              <span>19</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="webinar-row4">
                        <div className="webinar-cell-wrapper28">
                          <div className="webinar-date-picker-menu-item28">
                            <span className="webinar-text099 LightBaseBaseNormal">
                              <span>20</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper29">
                          <div className="webinar-date-picker-menu-item29">
                            <span className="webinar-text101 LightBaseBaseNormal">
                              <span>21</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper30">
                          <div className="webinar-date-picker-menu-item30">
                            <span className="webinar-text103 LightBaseBaseNormal">
                              <span>22</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper31">
                          <div className="webinar-date-picker-menu-item31">
                            <span className="webinar-text105 LightBaseBaseNormal">
                              <span>23</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper32">
                          <div className="webinar-date-picker-menu-item32">
                            <span className="webinar-text107 LightBaseBaseNormal">
                              <span>24</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper33">
                          <div className="webinar-date-picker-menu-item33">
                            <span className="webinar-text109 LightBaseBaseNormal">
                              <span>25</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper34">
                          <div className="webinar-date-picker-menu-item34">
                            <span className="webinar-text111 LightBaseBaseNormal">
                              <span>26</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="webinar-row5">
                        <div className="webinar-cell-wrapper35">
                          <div className="webinar-date-picker-menu-item35">
                            <span className="webinar-text113 LightBaseBaseNormal">
                              <span>27</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper36">
                          <div className="webinar-date-picker-menu-item36">
                            <span className="webinar-text115 LightBaseBaseNormal">
                              <span>28</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper37">
                          <div className="webinar-date-picker-menu-item37">
                            <span className="webinar-text117 LightBaseBaseNormal">
                              <span>29</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper38">
                          <div className="webinar-date-picker-menu-item38">
                            <span className="webinar-text119 LightBaseBaseNormal">
                              <span>30</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper39">
                          <div className="webinar-date-picker-menu-item39">
                            <span className="webinar-text121 LightBaseBaseNormal">
                              <span>31</span>
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper40">
                          <div className="webinar-date-picker-menu-item40">
                            <span className="webinar-text123 LightBaseBaseNormal">
                              1
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper41">
                          <div className="webinar-date-picker-menu-item41">
                            <span className="webinar-text124 LightBaseBaseNormal">
                              2
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="webinar-row6">
                        <div className="webinar-cell-wrapper42">
                          <div className="webinar-date-picker-menu-item42">
                            <span className="webinar-text125 LightBaseBaseNormal">
                              3
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper43">
                          <div className="webinar-date-picker-menu-item43">
                            <span className="webinar-text126 LightBaseBaseNormal">
                              4
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper44">
                          <div className="webinar-date-picker-menu-item44">
                            <span className="webinar-text127 LightBaseBaseNormal">
                              5
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper45">
                          <div className="webinar-date-picker-menu-item45">
                            <span className="webinar-text128 LightBaseBaseNormal">
                              6
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper46">
                          <div className="webinar-date-picker-menu-item46">
                            <span className="webinar-text129 LightBaseBaseNormal">
                              7
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper47">
                          <div className="webinar-date-picker-menu-item47">
                            <span className="webinar-text130 LightBaseBaseNormal">
                              8
                            </span>
                          </div>
                        </div>
                        <div className="webinar-cell-wrapper48">
                          <div className="webinar-date-picker-menu-item48">
                            <span className="webinar-text131 LightBaseBaseNormal">
                              9
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="webinar-button-arrows">
                    <div className="webinar-frame-pagination">
                      <div className="webinar-pagination-item-arrow">
                        <img
                          src="/external/iconleftoutlinedi842-u2g.svg"
                          alt="IconLeftOutlinedI842"
                          className="webinar-icon-left-outlined"
                        />
                      </div>
                      <button className="webinar-frame-button4">
                        <div className="webinar-content09">
                          <img
                            src="/external/iconplusoutlinedi842-tbxj.svg"
                            alt="IconPlusOutlinedI842"
                            className="webinar-icon-plus-outlined"
                          />
                          <span className="webinar-text132 DarkBaseBaseNormal">
                            <span>Add event</span>
                          </span>
                        </div>
                      </button>
                      <div className="webinar-pagination-item-arrow1">
                        <img
                          src="/external/iconrightoutlinedi842-t8kq.svg"
                          alt="IconRightOutlinedI842"
                          className="webinar-icon-right-outlined"
                        />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="webinar-frame-footer1">
            <div className="webinar-content-wrapper1">
              <div className="webinar-content-wrapper2">
                <span className="webinar-text134 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="webinar-text136 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="webinar-text138 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="webinar-text140 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="webinar-text142 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Webinar
