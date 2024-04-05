import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './calendar.css'

const Calendar = (props) => {
  return (
    <div className="calendar-container">
      <Helmet>
        <title>Calendar</title>
      </Helmet>
      <div className="calendar-createcourse">
        <div className="calendar-frame-admin-panel-menu1">
          <div className="calendar-frame-admin-panel-menu11">
            <div className="calendar-logo">
              <div className="calendar-logo1">
                <div className="calendar-frame1000002598">
                  <img
                    alt="ContainerLogo5114"
                    src="/external/containerlogo5114-i5ai-200h.png"
                    className="calendar-container-logo"
                  />
                  <div className="calendar-book4">
                    <div className="calendar-group">
                      <img
                        alt="VectorI511"
                        src="/external/vectori511-pxr.svg"
                        className="calendar-vector"
                      />
                      <img
                        alt="VectorI511"
                        src="/external/vectori511-ga1.svg"
                        className="calendar-vector1"
                      />
                      <img
                        alt="VectorI511"
                        src="/external/vectori511-3fhp.svg"
                        className="calendar-vector2"
                      />
                      <img
                        alt="VectorI511"
                        src="/external/vectori511-js3.svg"
                        className="calendar-vector3"
                      />
                    </div>
                  </div>
                </div>
                <div className="calendar-frame-title">
                  <span className="calendar-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="calendar-frame-menu">
              <div className="calendar-menu-items">
                <Link to="/dashboard-teacher" className="calendar-navlink">
                  <div className="calendar-menu-item-inline-navigation-item">
                    <img
                      alt="IconDashboardOutlinedI511"
                      src="/external/icondashboardoutlinedi511-axfq.svg"
                      className="calendar-icon-dashboard-outlined"
                    />
                    <span className="calendar-text002 LightBaseBaseNormal">
                      <span>Dashboard</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="calendar-navlink1">
                  <div className="calendar-menu-item-inline-navigation-item1">
                    <img
                      alt="IconDatabaseOutlinedI511"
                      src="/external/icondatabaseoutlinedi511-uc7d.svg"
                      className="calendar-icon-database-outlined"
                    />
                    <span className="calendar-text004 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                </Link>
                <Link to="/dashboard-teacher" className="calendar-navlink2">
                  <div className="calendar-menu-item-inline-navigation-item2">
                    <img
                      alt="IconBarChartOutlinedI511"
                      src="/external/iconbarchartoutlinedi511-fzg.svg"
                      className="calendar-icon-bar-chart-outlined"
                    />
                    <span className="calendar-text006 LightBaseBaseNormal">
                      <span>Statistics</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="calendar-navlink3">
                  <div className="calendar-menu-item-inline-navigation-item3">
                    <img
                      alt="IconCalendarOutlinedI511"
                      src="/external/iconcalendaroutlinedi511-c1x.svg"
                      className="calendar-icon-calendar-outlined"
                    />
                    <span className="calendar-text008 LightBaseBaseNormal">
                      <span>Calendar</span>
                    </span>
                  </div>
                </Link>
                <Link to="/" className="calendar-navlink4">
                  <div className="calendar-menu-item-inline-navigation-item4">
                    <img
                      alt="IconVideoCameraOutlinedI831"
                      src="/external/iconvideocameraoutlinedi831-yaf.svg"
                      className="calendar-icon-video-camera-outlined"
                    />
                    <span className="calendar-text010 LightBaseBaseNormal">
                      <span>Webinar</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="calendar-menu-items1">
                <Link to="/dashboard-teacher" className="calendar-navlink5">
                  <div className="calendar-menu-item-inline-navigation-item5">
                    <img
                      alt="IconSettingOutlinedI511"
                      src="/external/iconsettingoutlinedi511-xbpr.svg"
                      className="calendar-icon-setting-outlined"
                    />
                    <span className="calendar-text012 LightBaseBaseNormal">
                      <span>Settings</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="calendar-content-wrapper">
          <div className="calendar-frame-header">
            <div className="calendar-icon-search">
              <button className="calendar-frame-button">
                <div className="calendar-content">
                  <img
                    alt="IconMenuFoldOutlinedI511"
                    src="/external/iconmenufoldoutlinedi511-8x2y.svg"
                    className="calendar-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="calendar-frame-input-search">
                <div className="calendar-input-wrapper">
                  <div className="calendar-frame-input-basic">
                    <div className="calendar-content1">
                      <span className="calendar-text014 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="calendar-frame-button1">
                  <div className="calendar-content2">
                    <img
                      alt="IconSearchOutlinedI511"
                      src="/external/iconsearchoutlinedi511-1wtg.svg"
                      className="calendar-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="calendar-avatar-button">
              <button className="calendar-frame-button2">
                <div className="calendar-content3">
                  <img
                    alt="IconGlobalOutlinedI511"
                    src="/external/iconglobaloutlinedi511-1qtt.svg"
                    className="calendar-icon-global-outlined"
                  />
                  <span className="calendar-text016 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="calendar-notifications">
                <img
                  alt="IconBellOutlinedI511"
                  src="/external/iconbelloutlinedi511-h17a.svg"
                  className="calendar-icon-bell-outlined"
                />
                <div className="calendar-content4">
                  <div className="calendar-frame-badge-basic">
                    <span className="calendar-text018 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/dashboard-teacher" className="calendar-navlink6">
                <div className="calendar-frame-avatar">
                  <img
                    alt="IconUserOutlinedI511"
                    src="/external/iconuseroutlinedi511-vp9b.svg"
                    className="calendar-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="calendar-frame-card1">
            <button className="calendar-header-button">
              <div className="calendar-header-links">
                <div className="calendar-frame-title1">
                  <span className="calendar-text020 LightHeadingHeading2">
                    <span>Calendar</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="calendar-frame-calendar4">
              <div className="calendar-frame-title2">
                <span className="calendar-text022 LightHeadingHeading2">
                  <span>Upcoming lessons</span>
                </span>
              </div>
              <div className="calendar-list-calendar">
                <div className="calendar-calendar-list">
                  <div className="calendar-calendar-item-list">
                    <div className="calendar-text-wrapper">
                      <div className="calendar-header">
                        <div className="calendar-frame-avatar1">
                          <img
                            alt="Rectangle1I842"
                            src="/external/rectangle1i842-xrgg-200h.png"
                            className="calendar-rectangle1"
                          />
                        </div>
                        <div className="calendar-text-wrapper01">
                          <div className="calendar-text-wrapper02">
                            <span className="calendar-text024 LightBaseBaseStrong">
                              <span>Introduction to Cinema 4d</span>
                            </span>
                          </div>
                          <div className="calendar-footer">
                            <div className="calendar-icon-wrapper">
                              <img
                                alt="IconCalendarOutlinedI842"
                                src="/external/iconcalendaroutlinedi842-g2cm.svg"
                                className="calendar-icon-calendar-outlined1"
                              />
                              <span className="calendar-text026 LightBaseBaseNormal">
                                <span>January 10th, 2022 at 12:00 PM</span>
                              </span>
                            </div>
                            <img
                              alt="Rectangle4I842"
                              src="/external/rectangle4i842-rtab-200h.png"
                              className="calendar-rectangle4"
                            />
                          </div>
                        </div>
                        <div className="calendar-pagination-item-more">
                          <img
                            alt="IconEllipsisOutlinedI842"
                            src="/external/iconellipsisoutlinedi842-fm8d.svg"
                            className="calendar-icon-ellipsis-outlined"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-calendar-item-list1">
                    <div className="calendar-text-wrapper03">
                      <div className="calendar-header1">
                        <div className="calendar-frame-avatar2">
                          <img
                            alt="Rectangle1I842"
                            src="/external/rectangle1i842-p4d-200h.png"
                            className="calendar-rectangle11"
                          />
                        </div>
                        <div className="calendar-text-wrapper04">
                          <div className="calendar-text-wrapper05">
                            <span className="calendar-text028 LightBaseBaseStrong">
                              <span>How to find your first design job</span>
                            </span>
                          </div>
                          <div className="calendar-footer1">
                            <div className="calendar-icon-wrapper1">
                              <img
                                alt="IconCalendarOutlinedI842"
                                src="/external/iconcalendaroutlinedi842-p6li.svg"
                                className="calendar-icon-calendar-outlined2"
                              />
                              <span className="calendar-text030 LightBaseBaseNormal">
                                <span>January 12th, 2022 at 12:00 PM</span>
                              </span>
                            </div>
                            <img
                              alt="Rectangle4I842"
                              src="/external/rectangle4i842-0fz-200h.png"
                              className="calendar-rectangle41"
                            />
                          </div>
                        </div>
                        <div className="calendar-pagination-item-more1">
                          <img
                            alt="IconEllipsisOutlinedI842"
                            src="/external/iconellipsisoutlinedi842-9y7g.svg"
                            className="calendar-icon-ellipsis-outlined1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-calendar-item-list2">
                    <div className="calendar-text-wrapper06">
                      <div className="calendar-header2">
                        <div className="calendar-frame-avatar3">
                          <img
                            alt="Rectangle1I842"
                            src="/external/rectangle1i842-0nyr-200h.png"
                            className="calendar-rectangle12"
                          />
                        </div>
                        <div className="calendar-text-wrapper07">
                          <div className="calendar-text-wrapper08">
                            <span className="calendar-text032 LightBaseBaseStrong">
                              <span>Front-end</span>
                            </span>
                          </div>
                          <div className="calendar-footer2">
                            <div className="calendar-icon-wrapper2">
                              <img
                                alt="IconCalendarOutlinedI842"
                                src="/external/iconcalendaroutlinedi842-ea4l.svg"
                                className="calendar-icon-calendar-outlined3"
                              />
                              <span className="calendar-text034 LightBaseBaseNormal">
                                <span>January 13h, 2022 at 12:00 PM</span>
                              </span>
                            </div>
                            <img
                              alt="Rectangle4I842"
                              src="/external/rectangle4i842-u648-200h.png"
                              className="calendar-rectangle42"
                            />
                          </div>
                        </div>
                        <div className="calendar-pagination-item-more2">
                          <img
                            alt="IconEllipsisOutlinedI842"
                            src="/external/iconellipsisoutlinedi842-xw8n.svg"
                            className="calendar-icon-ellipsis-outlined2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-calendar-item-list3">
                    <div className="calendar-text-wrapper09">
                      <div className="calendar-header3">
                        <div className="calendar-frame-avatar4">
                          <img
                            alt="Rectangle1I842"
                            src="/external/rectangle1i842-wbl8-200h.png"
                            className="calendar-rectangle13"
                          />
                        </div>
                        <div className="calendar-text-wrapper10">
                          <div className="calendar-text-wrapper11">
                            <span className="calendar-text036 LightBaseBaseStrong">
                              <span>Dive the dynamics</span>
                            </span>
                          </div>
                          <div className="calendar-footer3">
                            <div className="calendar-icon-wrapper3">
                              <img
                                alt="IconCalendarOutlinedI842"
                                src="/external/iconcalendaroutlinedi842-uijn.svg"
                                className="calendar-icon-calendar-outlined4"
                              />
                              <span className="calendar-text038 LightBaseBaseNormal">
                                <span>January 10th, 2022 at 12:00 PM</span>
                              </span>
                            </div>
                            <img
                              alt="Rectangle4I842"
                              src="/external/rectangle4i842-3hly-200h.png"
                              className="calendar-rectangle43"
                            />
                          </div>
                        </div>
                        <div className="calendar-pagination-item-more3">
                          <img
                            alt="IconEllipsisOutlinedI842"
                            src="/external/iconellipsisoutlinedi842-239.svg"
                            className="calendar-icon-ellipsis-outlined3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="calendar-calendar">
                  <div className="calendar-frame-calendar-card">
                    <div className="calendar-header4">
                      <div className="calendar-frame-title3">
                        <span className="calendar-text040 LightHeadingHeading4">
                          <span>January</span>
                        </span>
                      </div>
                      <div className="calendar-frame1">
                        <div className="calendar-select-input">
                          <span className="calendar-text042 LightBaseBaseNormal">
                            <span>2023</span>
                          </span>
                          <img
                            alt="IconDownOutlinedI842"
                            src="/external/icondownoutlinedi842-jxg.svg"
                            className="calendar-icon-down-outlined"
                          />
                        </div>
                        <div className="calendar-select-input1">
                          <span className="calendar-text044 LightBaseBaseNormal">
                            <span>Dec</span>
                          </span>
                          <img
                            alt="IconDownOutlinedI842"
                            src="/external/icondownoutlinedi842-gspc.svg"
                            className="calendar-icon-down-outlined1"
                          />
                        </div>
                        <div className="calendar-frame-radio-group">
                          <button className="calendar-radio-button">
                            <div className="calendar-content5">
                              <span className="calendar-text046 LightBaseBaseNormal">
                                <span>Month</span>
                              </span>
                            </div>
                          </button>
                          <button className="calendar-radio-button1">
                            <div className="calendar-content6">
                              <span className="calendar-text048 LightBaseBaseNormal">
                                <span>Year</span>
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="calendar-content7">
                      <div className="calendar-row">
                        <div className="calendar-cell-wrapper">
                          <div className="calendar-date-picker-menu-item">
                            <span className="calendar-text050 LightBaseBaseNormal">
                              <span>Su</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper01">
                          <div className="calendar-date-picker-menu-item01">
                            <span className="calendar-text052 LightBaseBaseNormal">
                              <span>Mo</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper02">
                          <div className="calendar-date-picker-menu-item02">
                            <span className="calendar-text054 LightBaseBaseNormal">
                              <span>Tu</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper03">
                          <div className="calendar-date-picker-menu-item03">
                            <span className="calendar-text056 LightBaseBaseNormal">
                              <span>We</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper04">
                          <div className="calendar-date-picker-menu-item04">
                            <span className="calendar-text058 LightBaseBaseNormal">
                              <span>Th</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper05">
                          <div className="calendar-date-picker-menu-item05">
                            <span className="calendar-text060 LightBaseBaseNormal">
                              <span>Fr</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper06">
                          <div className="calendar-date-picker-menu-item06">
                            <span className="calendar-text062 LightBaseBaseNormal">
                              <span>Sa</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="calendar-row1">
                        <div className="calendar-cell-wrapper07">
                          <div className="calendar-date-picker-menu-item07">
                            <span className="calendar-text064 LightBaseBaseNormal">
                              <span>29</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper08">
                          <div className="calendar-date-picker-menu-item08">
                            <span className="calendar-text066 LightBaseBaseNormal">
                              <span>30</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper09">
                          <div className="calendar-date-picker-menu-item09">
                            <span className="calendar-text068 LightBaseBaseNormal">
                              1
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper10">
                          <div className="calendar-date-picker-menu-item10">
                            <span className="calendar-text069 LightBaseBaseNormal">
                              2
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper11">
                          <div className="calendar-date-picker-menu-item11">
                            <span className="calendar-text070 LightBaseBaseNormal">
                              3
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper12">
                          <div className="calendar-date-picker-menu-item12">
                            <span className="calendar-text071 LightBaseBaseNormal">
                              4
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper13">
                          <div className="calendar-date-picker-menu-item13">
                            <span className="calendar-text072 LightBaseBaseNormal">
                              5
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="calendar-row2">
                        <div className="calendar-cell-wrapper14">
                          <div className="calendar-date-picker-menu-item14">
                            <span className="calendar-text073 LightBaseBaseNormal">
                              6
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper15">
                          <div className="calendar-date-picker-menu-item15">
                            <span className="calendar-text074 LightBaseBaseNormal">
                              7
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper16">
                          <div className="calendar-date-picker-menu-item16">
                            <span className="calendar-text075 LightBaseBaseNormal">
                              8
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper17">
                          <div className="calendar-date-picker-menu-item17">
                            <span className="calendar-text076 LightBaseBaseNormal">
                              9
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper18">
                          <div className="calendar-date-picker-menu-item18">
                            <span className="calendar-text077 LightBaseBaseNormal">
                              <span>10</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper19">
                          <div className="calendar-date-picker-menu-item19">
                            <span className="calendar-text079 LightBaseBaseNormal">
                              <span>11</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper20">
                          <div className="calendar-date-picker-menu-item20">
                            <span className="calendar-text081 LightBaseBaseNormal">
                              <span>12</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="calendar-row3">
                        <div className="calendar-cell-wrapper21">
                          <div className="calendar-date-picker-menu-item21">
                            <span className="calendar-text083 LightBaseBaseNormal">
                              <span>13</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper22">
                          <div className="calendar-date-picker-menu-item22">
                            <span className="calendar-text085 LightBaseBaseNormal">
                              <span>14</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper23">
                          <div className="calendar-date-picker-menu-item23">
                            <span className="calendar-text087 LightBaseBaseNormal">
                              <span>15</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper24">
                          <div className="calendar-date-picker-menu-item24">
                            <span className="calendar-text089 LightBaseBaseNormal">
                              <span>16</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper25">
                          <div className="calendar-date-picker-menu-item25">
                            <span className="calendar-text091 LightBaseBaseNormal">
                              <span>17</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper26">
                          <div className="calendar-date-picker-menu-item26">
                            <span className="calendar-text093 LightBaseBaseNormal">
                              <span>18</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper27">
                          <div className="calendar-date-picker-menu-item27">
                            <span className="calendar-text095 LightBaseBaseNormal">
                              <span>19</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="calendar-row4">
                        <div className="calendar-cell-wrapper28">
                          <div className="calendar-date-picker-menu-item28">
                            <span className="calendar-text097 LightBaseBaseNormal">
                              <span>20</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper29">
                          <div className="calendar-date-picker-menu-item29">
                            <span className="calendar-text099 LightBaseBaseNormal">
                              <span>21</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper30">
                          <div className="calendar-date-picker-menu-item30">
                            <span className="calendar-text101 LightBaseBaseNormal">
                              <span>22</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper31">
                          <div className="calendar-date-picker-menu-item31">
                            <span className="calendar-text103 LightBaseBaseNormal">
                              <span>23</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper32">
                          <div className="calendar-date-picker-menu-item32">
                            <span className="calendar-text105 LightBaseBaseNormal">
                              <span>24</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper33">
                          <div className="calendar-date-picker-menu-item33">
                            <span className="calendar-text107 LightBaseBaseNormal">
                              <span>25</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper34">
                          <div className="calendar-date-picker-menu-item34">
                            <span className="calendar-text109 LightBaseBaseNormal">
                              <span>26</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="calendar-row5">
                        <div className="calendar-cell-wrapper35">
                          <div className="calendar-date-picker-menu-item35">
                            <span className="calendar-text111 LightBaseBaseNormal">
                              <span>27</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper36">
                          <div className="calendar-date-picker-menu-item36">
                            <span className="calendar-text113 LightBaseBaseNormal">
                              <span>28</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper37">
                          <div className="calendar-date-picker-menu-item37">
                            <span className="calendar-text115 LightBaseBaseNormal">
                              <span>29</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper38">
                          <div className="calendar-date-picker-menu-item38">
                            <span className="calendar-text117 LightBaseBaseNormal">
                              <span>30</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper39">
                          <div className="calendar-date-picker-menu-item39">
                            <span className="calendar-text119 LightBaseBaseNormal">
                              <span>31</span>
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper40">
                          <div className="calendar-date-picker-menu-item40">
                            <span className="calendar-text121 LightBaseBaseNormal">
                              1
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper41">
                          <div className="calendar-date-picker-menu-item41">
                            <span className="calendar-text122 LightBaseBaseNormal">
                              2
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="calendar-row6">
                        <div className="calendar-cell-wrapper42">
                          <div className="calendar-date-picker-menu-item42">
                            <span className="calendar-text123 LightBaseBaseNormal">
                              3
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper43">
                          <div className="calendar-date-picker-menu-item43">
                            <span className="calendar-text124 LightBaseBaseNormal">
                              4
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper44">
                          <div className="calendar-date-picker-menu-item44">
                            <span className="calendar-text125 LightBaseBaseNormal">
                              5
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper45">
                          <div className="calendar-date-picker-menu-item45">
                            <span className="calendar-text126 LightBaseBaseNormal">
                              6
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper46">
                          <div className="calendar-date-picker-menu-item46">
                            <span className="calendar-text127 LightBaseBaseNormal">
                              7
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper47">
                          <div className="calendar-date-picker-menu-item47">
                            <span className="calendar-text128 LightBaseBaseNormal">
                              8
                            </span>
                          </div>
                        </div>
                        <div className="calendar-cell-wrapper48">
                          <div className="calendar-date-picker-menu-item48">
                            <span className="calendar-text129 LightBaseBaseNormal">
                              9
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="calendar-frame-footer1">
            <div className="calendar-content-wrapper1">
              <div className="calendar-content-wrapper2">
                <span className="calendar-text130 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="calendar-text132 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="calendar-text134 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="calendar-text136 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="calendar-text138 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
