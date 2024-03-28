import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './chat.css'

const Chat = (props) => {
  return (
    <div className="chat-container">
      <Helmet>
        <title>chat</title>
        <meta property="og:title" content="chat - exported project" />
      </Helmet>
      <div className="chat-mycourses">
        <div className="chat-frame-admin-panel-menu1">
          <div className="chat-frame-admin-panel-menu11">
            <div className="chat-logo">
              <div className="chat-logo1">
                <div className="chat-frame1000002598">
                  <img
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/b1a0f76e-6950-414d-9422-0028db372e94?org_if_sml=1273&amp;force_format=original"
                    alt="ContainerLogo6548"
                    className="chat-container-logo"
                  />
                  <div className="chat-book4">
                    <div className="chat-group">
                      <img
                        src="/external/vectori654-atmi.svg"
                        alt="VectorI654"
                        className="chat-vector"
                      />
                      <img
                        src="/external/vectori654-f5qp.svg"
                        alt="VectorI654"
                        className="chat-vector01"
                      />
                      <img
                        src="/external/vectori654-b1zc.svg"
                        alt="VectorI654"
                        className="chat-vector02"
                      />
                      <img
                        src="/external/vectori654-nox.svg"
                        alt="VectorI654"
                        className="chat-vector03"
                      />
                    </div>
                  </div>
                </div>
                <div className="chat-frame-title">
                  <span className="chat-text">
                    <span>Synaptix</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="chat-frame-menu">
              <div className="chat-menu-items">
                <Link to="/chat" className="chat-navlink">
                  <div className="chat-menu-item-inline-navigation-item">
                    <img
                      src="/external/icondashboardoutlinedi654-z2dr.svg"
                      alt="IconDashboardOutlinedI654"
                      className="chat-icon-dashboard-outlined"
                    />
                    <span className="chat-text02 LightBaseBaseNormal">
                      <span>Dashboard</span>
                    </span>
                  </div>
                </Link>
                <Link to="/chat" className="chat-navlink1">
                  <div className="chat-menu-item-inline-navigation-item1">
                    <img
                      src="/external/icondatabaseoutlinedi654-scpn.svg"
                      alt="IconDatabaseOutlinedI654"
                      className="chat-icon-database-outlined"
                    />
                    <span className="chat-text04 LightBaseBaseNormal">
                      <span>My courses</span>
                    </span>
                  </div>
                </Link>
                <Link to="/chat" className="chat-navlink2">
                  <div className="chat-menu-item-inline-navigation-item2">
                    <img
                      src="/external/iconbarchartoutlinedi654-jau.svg"
                      alt="IconBarChartOutlinedI654"
                      className="chat-icon-bar-chart-outlined"
                    />
                    <span className="chat-text06 LightBaseBaseNormal">
                      <span>Statistics</span>
                    </span>
                  </div>
                </Link>
                <Link to="/chat" className="chat-navlink3">
                  <div className="chat-menu-item-inline-navigation-item3">
                    <img
                      src="/external/iconcalendaroutlinedi654-fla.svg"
                      alt="IconCalendarOutlinedI654"
                      className="chat-icon-calendar-outlined"
                    />
                    <span className="chat-text08 LightBaseBaseNormal">
                      <span>Calendar</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="chat-menu-submenu">
                <Link to="/chat" className="chat-navlink4">
                  <div className="chat-menu-item-inline-submenu-title">
                    <img
                      src="/external/chatregulari654-uqc7.svg"
                      alt="chatregularI654"
                      className="chat-chatregular"
                    />
                    <span className="chat-text10 LightBaseBaseNormal">
                      <span>Chat</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="chat-menu-items1">
                <Link to="/chat" className="chat-navlink5">
                  <div className="chat-menu-item-inline-navigation-item4">
                    <img
                      src="/external/iconsettingoutlinedi654-aita.svg"
                      alt="IconSettingOutlinedI654"
                      className="chat-icon-setting-outlined"
                    />
                    <span className="chat-text12 LightBaseBaseNormal">
                      <span>Settings</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-content-wrapper">
          <div className="chat-frame-header">
            <div className="chat-icon-search">
              <button className="chat-frame-button">
                <div className="chat-content">
                  <img
                    src="/external/iconmenufoldoutlinedi654-mljej.svg"
                    alt="IconMenuFoldOutlinedI654"
                    className="chat-icon-menu-fold-outlined"
                  />
                </div>
              </button>
              <div className="chat-frame-input-search">
                <div className="chat-input-wrapper">
                  <div className="chat-frame-input-basic">
                    <div className="chat-content1">
                      <span className="chat-text14 LightBaseBaseNormal">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                </div>
                <button className="chat-frame-button1">
                  <div className="chat-content2">
                    <img
                      src="/external/iconsearchoutlinedi654-6u4.svg"
                      alt="IconSearchOutlinedI654"
                      className="chat-icon-search-outlined"
                    />
                  </div>
                </button>
              </div>
            </div>
            <button className="chat-avatar-button">
              <button className="chat-frame-button2">
                <div className="chat-content3">
                  <img
                    src="/external/iconglobaloutlinedi654-590h.svg"
                    alt="IconGlobalOutlinedI654"
                    className="chat-icon-global-outlined"
                  />
                  <span className="chat-text16 DarkBaseBaseNormal">
                    <span>English</span>
                  </span>
                </div>
              </button>
              <div className="chat-notifications">
                <img
                  src="/external/iconbelloutlinedi654-8x0fg.svg"
                  alt="IconBellOutlinedI654"
                  className="chat-icon-bell-outlined"
                />
                <div className="chat-content4">
                  <div className="chat-frame-badge-basic">
                    <span className="chat-text18 LightSMSMNormal">
                      <span>21</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/" className="chat-navlink6">
                <div className="chat-frame-avatar">
                  <img
                    src="/external/iconuseroutlinedi654-za63.svg"
                    alt="IconUserOutlinedI654"
                    className="chat-icon-user-outlined"
                  />
                </div>
              </Link>
            </button>
          </div>
          <div className="chat-frame-card1">
            <button className="chat-header-button">
              <div className="chat-header-links">
                <div className="chat-frame-title1">
                  <span className="chat-text20 LightHeadingHeading2">
                    <span>Chat</span>
                  </span>
                </div>
              </div>
            </button>
            <div className="chat-frame48095574">
              <div className="chat-sidebar">
                <div className="chat-frame349">
                  <div className="chat-heading">
                    <span className="chat-text22">
                      <span>Message</span>
                    </span>
                  </div>
                  <div className="chat-search">
                    <div className="chat-info">
                      <div className="chat-magnifying-glass">
                        <div className="chat-magnifying-glass1">
                          <img
                            src="/external/vectori691-uoefb.svg"
                            alt="VectorI691"
                            className="chat-vector04"
                          />
                          <img
                            src="/external/vectori691-hynj.svg"
                            alt="VectorI691"
                            className="chat-vector05"
                          />
                        </div>
                      </div>
                      <span className="chat-text24 BodyLarge400">
                        <span>Search</span>
                      </span>
                    </div>
                  </div>
                  <div className="chat-message">
                    <div className="chat-message01">
                      <div className="chat-profile">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/623a67b4-4a2c-4cd7-82eb-d1de832e070c?org_if_sml=15279&amp;force_format=original"
                          alt="AvatarI691"
                          className="chat-avatar"
                        />
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/ea254e35-c2f1-4379-be6a-d0fbbe0da0d4?org_if_sml=1316&amp;force_format=original"
                          alt="AvatarI691"
                          className="chat-avatar01"
                        />
                      </div>
                      <div className="chat-contents">
                        <div className="chat-main-info">
                          <span className="chat-text26 BodyMedium500">
                            <span>Sanzhar Gabdullin</span>
                          </span>
                          <span className="chat-text28 BodyMedium400">
                            <span>just now</span>
                          </span>
                        </div>
                        <span className="chat-text30 BodyMedium400">
                          <span>Thank you so much, sir</span>
                        </span>
                      </div>
                    </div>
                    <div className="chat-message02">
                      <div className="chat-profile1">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/97366656-6166-4f2c-afb1-dedd5b2e443b?org_if_sml=15561&amp;force_format=original"
                          alt="AvatarI691"
                          className="chat-avatar02"
                        />
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/fe7081f8-3ee0-43b3-a33b-58ac5f82590f?org_if_sml=1315&amp;force_format=original"
                          alt="AvatarI691"
                          className="chat-avatar03"
                        />
                      </div>
                      <div className="chat-contents1">
                        <div className="chat-main-info1">
                          <span className="chat-text32 BodyMedium500">
                            <span>Igor Lyskov</span>
                          </span>
                          <span className="chat-text34 BodyMedium400">
                            <span>2 d</span>
                          </span>
                        </div>
                        <div className="chat-message03">
                          <span className="chat-text36 BodyMedium400">
                            <span>Thank you so much, sir</span>
                          </span>
                          <img
                            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/40afc447-4b47-427d-b133-1569daca04eb?org_if_sml=1261&amp;force_format=original"
                            alt="DotI691"
                            className="chat-dot"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="chat-profile2">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/faa7fd5e-b528-42b8-a312-78260ea4210f?org_if_sml=15500&amp;force_format=original"
                        alt="Avatar6914"
                        className="chat-avatar04"
                      />
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/aa225eae-b667-44fb-8769-6cecf06b0b0d?org_if_sml=1324&amp;force_format=original"
                        alt="Avatar6914"
                        className="chat-avatar05"
                      />
                    </div>
                    <div className="chat-message04">
                      <div className="chat-profile3">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/d49a093e-196b-4d69-9108-488660090d3f?org_if_sml=15322&amp;force_format=original"
                          alt="AvatarI691"
                          className="chat-avatar06"
                        />
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/7f50803f-799d-4729-b771-54367075c572?org_if_sml=1320&amp;force_format=original"
                          alt="AvatarI691"
                          className="chat-avatar07"
                        />
                      </div>
                      <div className="chat-contents2">
                        <div className="chat-main-info2">
                          <span className="chat-text38 BodyMedium500">
                            <span>Aruzhan Aliyeva</span>
                          </span>
                          <span className="chat-text40 BodyMedium400">
                            <span>1 m</span>
                          </span>
                        </div>
                        <div className="chat-message05">
                          <span className="chat-text42 BodyMedium400">
                            <span>Thank you so much, sir</span>
                          </span>
                          <img
                            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/c174865e-5023-41c0-995c-b122c6e990c8?org_if_sml=1261&amp;force_format=original"
                            alt="DotI691"
                            className="chat-dot1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="chat-message06">
                      <img
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/86d98e07-ea18-4978-ab3a-1e59146ed6ae?org_if_sml=15630&amp;force_format=original"
                        alt="AvatarI691"
                        className="chat-avatar08"
                      />
                      <div className="chat-contents3">
                        <div className="chat-main-info3">
                          <span className="chat-text44 BodyMedium500">
                            <span>
                              Arman
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                          <span className="chat-text46 BodyMedium400">
                            <span>1 m</span>
                          </span>
                        </div>
                        <span className="chat-text48 BodyMedium400">
                          <span>Thank you so much, sir</span>
                        </span>
                      </div>
                    </div>
                    <div className="chat-message07">
                      <div className="chat-profile4">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/af4b95b1-a2b5-4f72-a525-5a3ecefe46ee?org_if_sml=14810&amp;force_format=original"
                          alt="AvatarI691"
                          className="chat-avatar09"
                        />
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/7b62f8b5-e0d5-49f5-b457-b8521e53b8fe?org_if_sml=1328&amp;force_format=original"
                          alt="AvatarI691"
                          className="chat-avatar10"
                        />
                      </div>
                      <div className="chat-contents4">
                        <div className="chat-main-info4">
                          <span className="chat-text50 BodyMedium500">
                            <span>Askar</span>
                          </span>
                          <span className="chat-text52 BodyMedium400">
                            <span>2 m</span>
                          </span>
                        </div>
                        <span className="chat-text54 BodyMedium400">
                          <span>Thank you so much, sir</span>
                        </span>
                      </div>
                    </div>
                    <div className="chat-message08">
                      <div className="chat-profile5">
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/1d99fecf-9b35-42e4-80f5-f9d57f0ad9ca?org_if_sml=15427&amp;force_format=original"
                          alt="AvatarI691"
                          className="chat-avatar11"
                        />
                        <img
                          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/9bac543e-bb58-4f1b-9487-0f8f03ca807d?org_if_sml=1325&amp;force_format=original"
                          alt="AvatarI691"
                          className="chat-avatar12"
                        />
                      </div>
                      <div className="chat-contents5">
                        <div className="chat-main-info5">
                          <span className="chat-text56 BodyMedium500">
                            <span>Katya</span>
                          </span>
                          <span className="chat-text58 BodyMedium400">
                            <span>6 m</span>
                          </span>
                        </div>
                        <span className="chat-text60 BodyMedium400">
                          <span>Thank you so much, sir</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-messagetop">
                <div className="chat-avatar13">
                  <div className="chat-image">
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/75f1483b-df4c-42cd-bfc6-5e9a0204e922?org_if_sml=18518&amp;force_format=original"
                      alt="Image6914"
                      className="chat-image1"
                    />
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/263196bf-2223-417f-98af-a8bb1922d68e?org_if_sml=18971&amp;force_format=original"
                      alt="Avatar6914"
                      className="chat-avatar14"
                    />
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/523d0cec-1972-411f-b7cb-9646741c7af1/b9ea7b2c-5a72-4122-bbd6-d8bca086e3c2?org_if_sml=1366&amp;force_format=original"
                      alt="Dot6914"
                      className="chat-dot2"
                    />
                  </div>
                  <div className="chat-contents6">
                    <span className="chat-text62">
                      <span>Sanzhar Gabdullin</span>
                    </span>
                    <span className="chat-text64">
                      <span>Active Now</span>
                    </span>
                  </div>
                </div>
                <button className="chat-button">
                  <div className="chat-dots-three">
                    <div className="chat-dots-three1">
                      <img
                        src="/external/vectori691-1na9.svg"
                        alt="VectorI691"
                        className="chat-vector06"
                      />
                      <img
                        src="/external/vectori691-853n.svg"
                        alt="VectorI691"
                        className="chat-vector07"
                      />
                      <img
                        src="/external/vectori691-e17q.svg"
                        alt="VectorI691"
                        className="chat-vector08"
                      />
                    </div>
                  </div>
                </button>
              </div>
              <div className="chat-message09">
                <button className="chat-buttons">
                  <span className="chat-text66 ButtonM">
                    <span>Send</span>
                  </span>
                  <div className="chat-paper-plane-right">
                    <div className="chat-paper-plane-right1">
                      <img
                        src="/external/vectori691-ffxi.svg"
                        alt="VectorI691"
                        className="chat-vector09"
                      />
                      <img
                        src="/external/vectori691-pc7j.svg"
                        alt="VectorI691"
                        className="chat-vector10"
                      />
                    </div>
                  </div>
                </button>
                <div className="chat-write-message">
                  <div className="chat-info1">
                    <div className="chat-pencil-line">
                      <div className="chat-pencil-line1">
                        <img
                          src="/external/vectori691-0ew.svg"
                          alt="VectorI691"
                          className="chat-vector11"
                        />
                        <img
                          src="/external/vectori691-838b.svg"
                          alt="VectorI691"
                          className="chat-vector12"
                        />
                        <img
                          src="/external/vectori691-2wh2.svg"
                          alt="VectorI691"
                          className="chat-vector13"
                        />
                      </div>
                    </div>
                    <span className="chat-text68">
                      <span>Type your message</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-frame-footer1">
            <div className="chat-content-wrapper1">
              <div className="chat-content-wrapper2">
                <span className="chat-text70 LightBaseBaseNormal">
                  <span>About</span>
                </span>
                <span className="chat-text72 LightBaseBaseNormal">
                  <span>Careers</span>
                </span>
                <span className="chat-text74 LightBaseBaseNormal">
                  <span>Blog</span>
                </span>
                <span className="chat-text76 LightBaseBaseNormal">
                  <span>Terms &amp; Conditions</span>
                </span>
              </div>
              <span className="chat-text78 LightBaseBaseNormal">
                <span>© 2024 Synaptix</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
