import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Frame1 from '../../components/frame1'
import Frame237679 from '../../components/frame237679'
import './main.css'
import PopularCourses from "./PopularCourses";
import Footer from "./Footer";

const Main = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>main</title>
        <meta property="og:title" content="exported project" />
      </Helmet>
      <div className="page-mainpage">
        <div className="page-header">
          <div className="page-text-input-master">
            <div className="page-content">
              <div>
                <span className="page-text">
                  <span>Search</span>
                </span>
                <img
                  alt="Cursor0208"
                  src="/external/cursor0208-h32.svg"
                  className="page-cursor"
                />
              </div>
            </div>
            <div className="page-frame36454">
              <img
                alt="Rectangle11830208"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8d0628c1-e191-4f13-ae4a-1ec1d9199fc6/eb417e26-a6eb-404e-b82d-3bf0cec0c841?org_if_sml=1439&amp;force_format=original"
                className="page-rectangle1183"
              />
              <div className="page-search">
                <img
                  alt="UnionI020"
                  src="/external/unioni020-zb9a.svg"
                  className="page-union"
                />
              </div>
            </div>
          </div>
          <Link to="/signup" className="page-navlink">
            <div className="page-frame6356157 button">
              <img
                alt="accountcirclesvgrepocom10208"
                src="/external/accountcirclesvgrepocom10208-ea0e.svg"
                className="page-accountcirclesvgrepocom1"
              />
              <span className="page-text002">Sign up</span>
            </div>
          </Link>
          <div className="page-frame1000002682">
            <div className="page-frame1000002598">
              <img
                alt="ContainerLogo0208"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8d0628c1-e191-4f13-ae4a-1ec1d9199fc6/d78bddae-fa2e-436d-91da-29e640d51d17?org_if_sml=1361&amp;force_format=original"
                className="page-container-logo"
              />
              <div className="page-book4">
                <div className="page-group">
                  <img
                    alt="VectorI020"
                    src="/external/vectori020-x5ak.svg"
                    className="page-vector"
                  />
                  <img
                    alt="VectorI020"
                    src="/external/vectori020-yysa.svg"
                    className="page-vector01"
                  />
                  <img
                    alt="VectorI020"
                    src="/external/vectori020-eu39.svg"
                    className="page-vector02"
                  />
                  <img
                    alt="VectorI020"
                    src="/external/vectori020-04a.svg"
                    className="page-vector03"
                  />
                </div>
              </div>
            </div>
            <div className="page-frame-title">
              <span className="page-text003">
                <span>Synaptix</span>
              </span>
            </div>
          </div>
          <div className="page-frame36450">
            <div className="page-icon-container">
              <img
                alt="UnionI020"
                src="/external/unioni020-3dp.svg"
                className="page-union1"
              />
            </div>
            <span className="page-text005">
              <span>Favourites</span>
            </span>
          </div>
          <div className="page-frame36451">
            <div className="page-icon-container1">
              <img
                alt="UnionI020"
                src="/external/unioni020-ykw1b.svg"
                className="page-union2"
              />
            </div>
            <span className="page-text007">
              <span>Cart</span>
            </span>
          </div>
          <Link to="/signin" className="page-text009">
            <span>Log in</span>
          </Link>
        </div>
        <div className="page-category">
          <div className="page-frame103">
            <div className="page-stack">
              <img
                alt="designpencilsvgrepocom10208"
                src="/external/designpencilsvgrepocom10208-peud.svg"
                className="page-designpencilsvgrepocom1"
              />
              <span className="page-text011 golosreg">
                <span>Design</span>
              </span>
            </div>
            <div className="page-stack1">
              <img
                alt="targetsvgrepocom10208"
                src="/external/targetsvgrepocom10208-b7n.svg"
                className="page-targetsvgrepocom1"
              />
              <span className="page-text013 golosreg">
                <span>Marketing</span>
              </span>
            </div>
            <div className="page-stack2">
              <img
                alt="codesvgrepocom10208"
                src="/external/codesvgrepocom10208-qx2t.svg"
                className="page-codesvgrepocom1"
              />
              <span className="page-text015 golosreg">
                <span>IT</span>
              </span>
            </div>
            <div className="page-stack3">
              <img
                alt="mathfinancesvgrepocom110208"
                src="/external/mathfinancesvgrepocom110208-juu.svg"
                className="page-mathfinancesvgrepocom11"
              />
              <span className="page-text017 golosreg">
                <span>Finance</span>
              </span>
            </div>
            <div className="page-stack4">
              <img
                alt="managementsvgrepocom10208"
                src="/external/managementsvgrepocom10208-gdx.svg"
                className="page-managementsvgrepocom1"
              />
              <span className="page-text019 golosreg">
                <span>Management</span>
              </span>
            </div>
            <div className="page-stack5">
              <img
                alt="graphicdesignsvgrepocom10208"
                src="/external/graphicdesignsvgrepocom10208-yh2.svg"
                className="page-graphicdesignsvgrepocom1"
              />
              <span className="page-text021 golosreg">
                <span>Science</span>
              </span>
            </div>
            <div className="page-stack6">
              <img
                alt="mobilesvgrepocom10208"
                src="/external/mobilesvgrepocom10208-s5wl.svg"
                className="page-mobilesvgrepocom1"
              />
              <span className="page-text023 golosreg">
                <span>Mobilography</span>
              </span>
            </div>
            <div className="page-stack7">
              <img
                alt="languagesvgrepocom110209"
                src="/external/languagesvgrepocom110209-jxtd.svg"
                className="page-languagesvgrepocom11"
              />
              <span className="page-text025 golosreg">
                <span>Language</span>
              </span>
            </div>
            <div className="page-stack8">
              <img
                alt="Frame0209"
                src="/external/frame0209-esd.svg"
                className="page-frame"
              />
              <span className="page-text027 golosreg">
                <span>Other</span>
              </span>
            </div>
          </div>
        </div>
        <div className="page-hero">
          <div className="page-content1">
            <div className="page-header1">
              <span className="page-text029">
                <span>Study online with us</span>
              </span>
              <span className="page-text031 golos">
                <span>
                  Synaptix is an educational website that integrates online
                  courses, video conferences, and gamification.
                </span>
              </span>
            </div>
            <button className="page-buttons">
              <div className="page-frame36453">
                <div className="page-frame6356143">
                  <span className="page-text033">
                    <span>go to the courses</span>
                  </span>
                </div>
              </div>
            </button>
          </div>
          <Frame1 rootClassName="frame1-root-class-name"></Frame1>
          <div className="page-frame6356144">
            <img
              alt="ActiveBullet0209"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8d0628c1-e191-4f13-ae4a-1ec1d9199fc6/7480387c-2524-443c-b6a3-f1a59b2bc36d?org_if_sml=1123&amp;force_format=original"
              className="page-active-bullet"
            />
            <img
              alt="Bullet0209"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8d0628c1-e191-4f13-ae4a-1ec1d9199fc6/67135e1e-7c14-484e-93cd-c748143a3488?org_if_sml=1170&amp;force_format=original"
              className="page-bullet"
            />
            <img
              alt="Bullet0209"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8d0628c1-e191-4f13-ae4a-1ec1d9199fc6/4fda59be-25b0-4bd7-963b-368f1b579143?org_if_sml=1170&amp;force_format=original"
              className="page-bullet1"
            />
            <img
              alt="Bullet0209"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8d0628c1-e191-4f13-ae4a-1ec1d9199fc6/80943ddb-b5cf-4e9d-bf7c-08f10e2c0e07?org_if_sml=1170&amp;force_format=original"
              className="page-bullet2"
            />
          </div>
        </div>
        <div className="page-frame237680">
          <Frame237679 rootClassName="frame237679-root-class-name"></Frame237679>
        </div>
        <div className="page-frame1000002684">
          <PopularCourses/>
        </div>

        <div className="page-frame52">
          <div className="page-frame50">
            <div className="page-frame501">
              <div className="page-group44">
                <span className="page-text102">
                  <span>
                    <span>
                      Become a course author
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>and earn money</span>
                  </span>
                </span>
                <img
                  alt="Rectangle170212"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8d0628c1-e191-4f13-ae4a-1ec1d9199fc6/15c4aa1f-fda7-4a55-9f48-b8c1e0190f60?org_if_sml=1147&amp;force_format=original"
                  className="page-rectangle17"
                />
              </div>
              <span className="page-text107">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </span>
              <div className="page-ghostbtndefault">
                <span className="page-text109">
                  <span>i want to be author</span>
                </span>
              </div>
            </div>
            <div className="page-frame107">
              <div className="page-group02">
                <div className="page-group03">
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-hdxzj.svg"
                    className="page-vector05"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-kntq.svg"
                    className="page-vector06"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-zuf6.svg"
                    className="page-vector07"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-gmgb.svg"
                    className="page-vector08"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-p92g.svg"
                    className="page-vector09"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-t45.svg"
                    className="page-vector10"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-ufhd.svg"
                    className="page-vector11"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-vry.svg"
                    className="page-vector12"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-1bkn.svg"
                    className="page-vector13"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-4bn.svg"
                    className="page-vector14"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-k07b.svg"
                    className="page-vector15"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-tw6.svg"
                    className="page-vector16"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-1js.svg"
                    className="page-vector17"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-akln.svg"
                    className="page-vector18"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-6t1.svg"
                    className="page-vector19"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-0w.svg"
                    className="page-vector20"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-1jt.svg"
                    className="page-vector21"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-zjvu.svg"
                    className="page-vector22"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-odx.svg"
                    className="page-vector23"
                  />
                  <div className="page-group04">
                    <img
                      alt="Vector0212"
                      src="/external/vector0212-f9f.svg"
                      className="page-vector24"
                    />
                    <img
                      alt="Vector0212"
                      src="/external/vector0212-qy8e.svg"
                      className="page-vector25"
                    />
                    <img
                      alt="Vector0212"
                      src="/external/vector0212-dom.svg"
                      className="page-vector26"
                    />
                    <img
                      alt="Vector0212"
                      src="/external/vector0212-roei.svg"
                      className="page-vector27"
                    />
                  </div>
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-hhei.svg"
                    className="page-vector28"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-dh5b.svg"
                    className="page-vector29"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-2duw.svg"
                    className="page-vector30"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-rp2zh.svg"
                    className="page-vector31"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-xy5d.svg"
                    className="page-vector32"
                  />
                  <img
                    alt="Vector0212"
                    src="/external/vector0212-3ga.svg"
                    className="page-vector33"
                  />
                  <div className="page-group05">
                    <div className="page-group06">
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-zd7l.svg"
                        className="page-vector34"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-url.svg"
                        className="page-vector35"
                      />
                      <div className="page-group07">
                        <img
                          alt="Vector0212"
                          src="/external/vector0212-u81m.svg"
                          className="page-vector36"
                        />
                        <img
                          alt="Vector0212"
                          src="/external/vector0212-tvbj.svg"
                          className="page-vector37"
                        />
                        <img
                          alt="Vector0212"
                          src="/external/vector0212-kotu.svg"
                          className="page-vector38"
                        />
                      </div>
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-83qj.svg"
                        className="page-vector39"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-obx.svg"
                        className="page-vector40"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-3ya.svg"
                        className="page-vector41"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-6jjv.svg"
                        className="page-vector42"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-u3tm.svg"
                        className="page-vector43"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-dbh.svg"
                        className="page-vector44"
                      />
                    </div>
                    <div className="page-group08">
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-ckgw.svg"
                        className="page-vector45"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-pv4.svg"
                        className="page-vector46"
                      />
                      <div className="page-group09">
                        <img
                          alt="Vector0212"
                          src="/external/vector0212-zeof.svg"
                          className="page-vector47"
                        />
                        <img
                          alt="Vector0212"
                          src="/external/vector0212-nn0c.svg"
                          className="page-vector48"
                        />
                        <img
                          alt="Vector0212"
                          src="/external/vector0212-m4a.svg"
                          className="page-vector49"
                        />
                      </div>
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-hx0k.svg"
                        className="page-vector50"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-46y6.svg"
                        className="page-vector51"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-17kk.svg"
                        className="page-vector52"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-ksl.svg"
                        className="page-vector53"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-cn7g.svg"
                        className="page-vector54"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-7w8e.svg"
                        className="page-vector55"
                      />
                    </div>
                  </div>
                  <div className="page-group10">
                    <img
                      alt="Vector0212"
                      src="/external/vector0212-d72.svg"
                      className="page-vector56"
                    />
                    <div className="page-group11">
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-3rcp.svg"
                        className="page-vector57"
                      />
                    </div>
                  </div>
                  <div className="page-group12">
                    <img
                      alt="Vector0212"
                      src="/external/vector0212-48v8.svg"
                      className="page-vector58"
                    />
                    <img
                      alt="Vector0212"
                      src="/external/vector0212-9pmz.svg"
                      className="page-vector59"
                    />
                    <img
                      alt="Vector0212"
                      src="/external/vector0212-vvpb.svg"
                      className="page-vector60"
                    />
                    <img
                      alt="Vector0212"
                      src="/external/vector0212-85x.svg"
                      className="page-vector61"
                    />
                    <img
                      alt="Vector0212"
                      src="/external/vector0212-ml8g.svg"
                      className="page-vector62"
                    />
                    <img
                      alt="Vector0212"
                      src="/external/vector0212-y8h.svg"
                      className="page-vector63"
                    />
                    <div className="page-group13">
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-015.svg"
                        className="page-vector64"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-wr.svg"
                        className="page-vector65"
                      />
                      <img
                        alt="Vector0212"
                        src="/external/vector0212-3zpw.svg"
                        className="page-vector66"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-frame-footer1">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Main
