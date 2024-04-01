import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './mainpage.css'

const MAINPAGE = (props) => {
  return (
    <div className="mainpage-container">
      <Helmet>
        <title>MAINPAGE</title>
        <meta property="og:title" content="MAINPAGE" />
      </Helmet>

      <div className="mainpage-desktop1">
        <img
          alt="Rectangle40216314"
          src="/external/rectangle40216314-rlq-900h.png"
          className="mainpage-rectangle4021"
        />

        <Link to="/" className="mainpage-text h3" >
          <span style={{color:'white', width:"110px"}}>Synaptix</span>
        </Link>

        <Link to="/" className="mainpage-text004 link">
          <span style={{color:'white'}}>Home</span>
        </Link>
        <Link to="/mycourses" className="mainpage-text006 link">
          <span style={{color:'white'}}>Courses</span>
        </Link>
        <Link to="/" className="mainpage-text008 link">
          <span style={{color:'white'}}>Our Feature</span>
        </Link>
        <span className="mainpage-text010 btnText">
          <span>Login</span>
        </span>
        <Link to="/signin" className="mainpage-text012 btnText">
          <span style={{color:'white' }}>JOIN Us</span>
        </Link>
        <Link to="/" className="mainpage-navlink">
          <img
            alt="Vector6314"
            src="/external/vector6314-xjyd.svg"
            className="mainpage-vector"
          />
        </Link>
        <div className="mainpage-colmd6">
          <h5 className="mainpage-text014 h5">
            <span style={{color:'white'}}>Welcome</span>
          </h5>
          <h1 className="mainpage-text016">
            <span style={{color:'white'}}>Study online with us!</span>
          </h1>
          <h4 className="mainpage-text018">
            <span style={{color:'white'}}>
              Synaptix is an educational website that integrates online courses,
              video conferences, and gamification.
            </span>
          </h4>
          <div className="mainpage-cta">
            <Link to="/signin" className="mainpage-button-md">
              <span className="mainpage-text020 btnText">
                <span>Join Us</span>
              </span>
            </Link>
            <Link to="/main" className="mainpage-button-md1">
              <span className="mainpage-text022 btnText">
                <span>Learn More</span>
              </span>
            </Link>
          </div>
        </div>
        <Link to="/signin" className="mainpage-button-md2">
          <span className="mainpage-text024 btnText">
            <span>Edit my calendar</span>
          </span>
        </Link>
        <div className="mainpage-frame-input-with-addons">
          <div className="mainpage-autoaddedframe">
            <div className="mainpage-addon">
              <img
                alt="Icon6314"
                src="/external/icon6314-uijm.svg"
                className="mainpage-icon"
              />
            </div>
          </div>
          <span className="mainpage-text026">
            <span>What do you want to learn?</span>
          </span>
          <div className="mainpage-frame-min-width">
            <img
              alt="Content6314"
              src="/external/content6314-yudh-200h.png"
              className="mainpage-content"
            />
          </div>
        </div>
        <img
          alt="Rectangle156314"
          src="/external/rectangle156314-1n24-1500w.png"
          className="mainpage-rectangle15"
        />
        <div className="mainpage-frame162">
          <div className="mainpage-frame160">
            <div className="mainpage-frame6356145">
              <img
                alt="weshicks4EeTnaC1S4unsplash16714"
                src="/external/weshicks4eetnac1s4unsplash16714-izw-200h.png"
                className="mainpage-weshicks4-ee-tna-c1s4unsplash1"
              />
              <div className="mainpage-badge">
                <div className="mainpage-number">
                  <span className="mainpage-text028">
                    <span>Sale 40%</span>
                  </span>
                </div>
              </div>
              <div className="mainpage-icongraylike">
                <img
                  alt="EllipseI671"
                  src="/external/ellipsei671-n7y5-200h.png"
                  className="mainpage-ellipse"
                />
                <img
                  alt="FrameI671"
                  src="/external/framei671-d8g5.svg"
                  className="mainpage-frame"
                />
              </div>
              <div className="mainpage-frame9">
                <span className="mainpage-text030">
                  <span>Magzhan Onerbay</span>
                </span>
                <span className="mainpage-text032">
                  <span>React Advanced</span>
                </span>
              </div>
              <div className="mainpage-frame6356146">
                <div className="mainpage-frame6356138">
                  <span className="mainpage-text034">
                    <span>Beginner level</span>
                  </span>
                  <span className="mainpage-text036">
                    <span>Mentor: yes</span>
                  </span>
                  <span className="mainpage-text038">
                    <span>Certificate: yes</span>
                  </span>
                </div>
                <img
                  alt="skilllevelsvgrepocom16714"
                  src="/external/skilllevelsvgrepocom16714-4p0k.svg"
                  className="mainpage-skilllevelsvgrepocom1"
                />
                <img
                  alt="crownsvgrepocom16714"
                  src="/external/crownsvgrepocom16714-buzp.svg"
                  className="mainpage-crownsvgrepocom1"
                />
                <img
                  alt="badgesvgrepocom16714"
                  src="/external/badgesvgrepocom16714-w4ye.svg"
                  className="mainpage-badgesvgrepocom1"
                />
              </div>
              <div className="mainpage-frame6356147">
                <div className="mainpage-frame147">
                  <span className="mainpage-text040">
                    <span>705 000 ₸</span>
                  </span>
                  <span className="mainpage-text042">
                    <span>905 000 ₸</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mainpage-frame63561461">
              <img
                alt="weshicks4EeTnaC1S4unsplash16714"
                src="/external/weshicks4eetnac1s4unsplash16714-bw6j-200h.png"
                className="mainpage-weshicks4-ee-tna-c1s4unsplash11"
              />
              <div className="mainpage-icongraylike1">
                <img
                  alt="EllipseI671"
                  src="/external/ellipsei671-9n7l-200w.png"
                  className="mainpage-ellipse1"
                />
                <img alt="FrameI671" src="/external/framei671-kj2.svg" />
              </div>
              <div className="mainpage-frame6356148">
                <span className="mainpage-text044">
                  <span>Flow Education</span>
                </span>
                <span className="mainpage-text046">
                  <span>SMM-start for Beginner students</span>
                </span>
              </div>
              <div className="mainpage-frame6356149">
                <div className="mainpage-frame63561381">
                  <span className="mainpage-text048">
                    <span>Beginner level</span>
                  </span>
                  <span className="mainpage-text050">
                    <span>Mentor: yes</span>
                  </span>
                  <span className="mainpage-text052">
                    <span>Certificate: yes</span>
                  </span>
                </div>
                <img
                  alt="skilllevelsvgrepocom16714"
                  src="/external/skilllevelsvgrepocom16714-lehe.svg"
                  className="mainpage-skilllevelsvgrepocom11"
                />
                <img
                  alt="crownsvgrepocom16714"
                  src="/external/crownsvgrepocom16714-qcw8.svg"
                  className="mainpage-crownsvgrepocom11"
                />
                <img
                  alt="badgesvgrepocom16714"
                  src="/external/badgesvgrepocom16714-x66j.svg"
                  className="mainpage-badgesvgrepocom11"
                />
              </div>
              <div className="mainpage-frame129">
                <div className="mainpage-frame1471">
                  <span className="mainpage-text054">
                    <span>FREE</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mainpage-frame63561491">
              <img
                alt="weshicks4EeTnaC1S4unsplash16714"
                src="/external/weshicks4eetnac1s4unsplash16714-71ct-200h.png"
                className="mainpage-weshicks4-ee-tna-c1s4unsplash12"
              />
              <div className="mainpage-badge1">
                <div className="mainpage-number1">
                  <span className="mainpage-text056">
                    <span>Sale 40%</span>
                  </span>
                </div>
              </div>
              <div className="mainpage-icongraylike2">
                <img
                  alt="EllipseI671"
                  src="/external/ellipsei671-6ein-200h.png"
                  className="mainpage-ellipse2"
                />
                <img
                  alt="FrameI671"
                  src="/external/framei671-oy2u.svg"
                  className="mainpage-frame2"
                />
              </div>
              <div className="mainpage-frame63561471">
                <span className="mainpage-text058">
                  <span>Aizhan Omirzak</span>
                </span>
                <span className="mainpage-text060">
                  <span>How to SQL basic</span>
                  <br></br>
                  <span></span>
                </span>
              </div>
              <div className="mainpage-frame63561481">
                <div className="mainpage-frame1472">
                  <span className="mainpage-text064">
                    <span>60 000 ₸</span>
                  </span>
                  <span className="mainpage-text066">
                    <span>80 000 ₸</span>
                  </span>
                </div>
              </div>
              <div className="mainpage-frame63561492">
                <div className="mainpage-frame63561382">
                  <span className="mainpage-text068">
                    <span>Beginner level</span>
                  </span>
                  <span className="mainpage-text070">
                    <span>Mentor: yes</span>
                  </span>
                  <span className="mainpage-text072">
                    <span>Certificate: yes</span>
                  </span>
                </div>
                <img
                  alt="skilllevelsvgrepocom16714"
                  src="/external/skilllevelsvgrepocom16714-8np9.svg"
                  className="mainpage-skilllevelsvgrepocom12"
                />
                <img
                  alt="crownsvgrepocom16714"
                  src="/external/crownsvgrepocom16714-th.svg"
                  className="mainpage-crownsvgrepocom12"
                />
                <img
                  alt="badgesvgrepocom16714"
                  src="/external/badgesvgrepocom16714-yfie.svg"
                  className="mainpage-badgesvgrepocom12"
                />
              </div>
            </div>
            <Link to="/" className="mainpage-navlink1">
              <div className="mainpage-frame63561482">
                <img
                  alt="weshicks4EeTnaC1S4unsplash16714"
                  src="/external/weshicks4eetnac1s4unsplash16714-nf8b-200h.png"
                  className="mainpage-weshicks4-ee-tna-c1s4unsplash13"
                />
                <div className="mainpage-badge2">
                  <div className="mainpage-number2">
                    <span className="mainpage-text074">
                      <span>Sale 40%</span>
                    </span>
                  </div>
                </div>
                <div className="mainpage-icongraylike3">
                  <img
                    alt="EllipseI671"
                    src="/external/ellipsei671-5bpp-200h.png"
                    className="mainpage-ellipse3"
                  />
                  <img
                    alt="FrameI671"
                    src="/external/framei671-ehpe.svg"
                    className="mainpage-frame3"
                  />
                </div>
                <div className="mainpage-frame91">
                  <span className="mainpage-text076">
                    <span>Flow Education</span>
                  </span>
                  <span className="mainpage-text078">
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
                <div className="mainpage-frame1291">
                  <div className="mainpage-frame1473">
                    <span className="mainpage-text080">
                      <span>705 000 ₸</span>
                    </span>
                    <span className="mainpage-text082">
                      <span>905 000 ₸</span>
                    </span>
                  </div>
                </div>
                <div className="mainpage-frame63561472">
                  <div className="mainpage-frame63561383">
                    <span className="mainpage-text084">
                      <span>Beginner level</span>
                    </span>
                    <span className="mainpage-text086">
                      <span>Mentor: yes</span>
                    </span>
                    <span className="mainpage-text088">
                      <span>Certificate: yes</span>
                    </span>
                  </div>
                  <img
                    alt="skilllevelsvgrepocom16714"
                    src="/external/skilllevelsvgrepocom16714-1lm8.svg"
                    className="mainpage-skilllevelsvgrepocom13"
                  />
                  <img
                    alt="crownsvgrepocom16714"
                    src="/external/crownsvgrepocom16714-la1b.svg"
                    className="mainpage-crownsvgrepocom13"
                  />
                  <img
                    alt="badgesvgrepocom16714"
                    src="/external/badgesvgrepocom16714-qim.svg"
                    className="mainpage-badgesvgrepocom13"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <span className="mainpage-text090">
          <span className="mainpage-text091">
            Most
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Popular Course</span>
        </span>
        <div className="mainpage-frame61">
          <div className="mainpage-frame29">
            <img
              alt="Ellipse76314"
              src="/external/ellipse76314-dmi-200h.png"
              className="mainpage-ellipse7"
            />
            <img
              alt="Ellipse86314"
              src="/external/ellipse86314-1z2e-200h.png"
              className="mainpage-ellipse8"
            />
            <img
              alt="Ellipse96314"
              src="/external/ellipse96314-glol-200h.png"
              className="mainpage-ellipse9"
            />
            <img
              alt="Ellipse106314"
              src="/external/ellipse106314-ebdr-200h.png"
              className="mainpage-ellipse10"
            />
            <img
              alt="Ellipse116314"
              src="/external/ellipse116314-6r0b-200h.png"
              className="mainpage-ellipse11"
            />
          </div>
          <div className="mainpage-frame32">
            <div className="mainpage-frame30">
              <img
                alt="CaretLeft6314"
                src="/external/caretleft6314-bq8.svg"
                className="mainpage-caret-left"
              />
            </div>
            <div className="mainpage-frame23">
              <img
                alt="CaretRight6314"
                src="/external/caretright6314-olbw.svg"
                className="mainpage-caret-right"
              />
            </div>
          </div>
        </div>
        <span className="mainpage-text093 HeaderHeading-1">
          <span className="mainpage-text094">
            Most
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Popular Categories</span>
        </span>
        <span className="mainpage-text096 HeaderHeading-1">
          <span className="mainpage-text097">Join</span>
          <span className="mainpage-text098">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="mainpage-text099">and Launch</span>
          <span>
            {' '}
            an online video conference
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="mainpage-text101 HeaderHeading-1">
          <span className="mainpage-text102">
            Our
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Features</span>
        </span>
        <span className="mainpage-text104 BodyLarge400">
          <span>Choose what you want to learn</span>
        </span>
        <div className="mainpage-frame611">
          <div className="mainpage-frame50">
            <div className="mainpage-frame35">
              <img
                alt="PenNib6314"
                src="/external/pennib6314-puas.svg"
                className="mainpage-pen-nib"
              />
              <span className="mainpage-text106 BodyLarge500">
                <span>Design</span>
              </span>
            </div>
            <div className="mainpage-frame231">
              <img
                alt="ArrowUpRight6314"
                src="/external/arrowupright6314-ofxo.svg"
                className="mainpage-arrow-up-right"
              />
            </div>
          </div>
        </div>
        <div className="mainpage-frame62">
          <div className="mainpage-frame46">
            <div className="mainpage-frame39">
              <img
                alt="MicrophoneStage6314"
                src="/external/microphonestage6314-6ivg.svg"
                className="mainpage-microphone-stage"
              />
              <span className="mainpage-text108 BodyLarge500">
                <span>Marketing</span>
              </span>
            </div>
            <div className="mainpage-frame42">
              <img
                alt="ArrowUpRight6314"
                src="/external/arrowupright6314-d1s5.svg"
                className="mainpage-arrow-up-right1"
              />
            </div>
          </div>
        </div>
        <div className="mainpage-frame64">
          <div className="mainpage-frame461">
            <div className="mainpage-frame391">
              <img
                alt="Graph6314"
                src="/external/graph6314-zm4.svg"
                className="mainpage-graph"
              />
              <span className="mainpage-text110 BodyLarge500">
                <span>Finance</span>
              </span>
            </div>
            <div className="mainpage-frame421">
              <img
                alt="ArrowUpRight6314"
                src="/external/arrowupright6314-tdajv.svg"
                className="mainpage-arrow-up-right2"
              />
            </div>
          </div>
        </div>
        <div className="mainpage-frame65">
          <div className="mainpage-frame44">
            <div className="mainpage-frame37">
              <img
                alt="FileHtml6314"
                src="/external/filehtml6314-yiv.svg"
                className="mainpage-file-html"
              />
              <span className="mainpage-text112 BodyLarge500">
                <span>Development</span>
              </span>
            </div>
            <div className="mainpage-frame34">
              <img
                alt="ArrowUpRight6314"
                src="/external/arrowupright6314-3svh.svg"
                className="mainpage-arrow-up-right3"
              />
            </div>
          </div>
        </div>
        <div className="mainpage-frame66">
          <div className="mainpage-frame441">
            <div className="mainpage-frame371">
              <img
                alt="Camera6314"
                src="/external/camera6314-3hr.svg"
                className="mainpage-camera"
              />
              <span className="mainpage-text114 BodyLarge500">
                <span>Photography</span>
              </span>
            </div>
            <div className="mainpage-frame341">
              <img
                alt="ArrowUpRight6314"
                src="/external/arrowupright6314-ow1d.svg"
                className="mainpage-arrow-up-right4"
              />
            </div>
          </div>
        </div>
        <div className="mainpage-frame67">
          <div className="mainpage-frame442">
            <div className="mainpage-frame372">
              <img
                alt="Heartbeat6314"
                src="/external/heartbeat6314-erbi.svg"
                className="mainpage-heartbeat"
              />
              <span className="mainpage-text116 BodyLarge500">
                <span>Helth &amp; Fitness</span>
              </span>
            </div>
            <div className="mainpage-frame342">
              <img
                alt="ArrowUpRight6314"
                src="/external/arrowupright6314-gkc.svg"
                className="mainpage-arrow-up-right5"
              />
            </div>
          </div>
        </div>
        <div className="mainpage-frame68">
          <div className="mainpage-frame443">
            <div className="mainpage-frame373">
              <img
                alt="SunHorizon6314"
                src="/external/sunhorizon6314-9fxa.svg"
                className="mainpage-sun-horizon"
              />
              <span className="mainpage-text118 BodyLarge500">
                <span>Lifestyle</span>
              </span>
            </div>
            <div className="mainpage-frame343">
              <img
                alt="ArrowUpRight6314"
                src="/external/arrowupright6314-e9pk.svg"
                className="mainpage-arrow-up-right6"
              />
            </div>
          </div>
        </div>
        <div className="mainpage-frame69">
          <div className="mainpage-frame444">
            <div className="mainpage-frame374">
              <img
                alt="Lightbulb6314"
                src="/external/lightbulb6314-w78.svg"
                className="mainpage-lightbulb"
              />
              <span className="mainpage-text120">Personal Dev.</span>
            </div>
            <div className="mainpage-frame344">
              <img
                alt="ArrowUpRight6314"
                src="/external/arrowupright6314-ekd.svg"
                className="mainpage-arrow-up-right7"
              />
            </div>
          </div>
        </div>
        <img
          alt="Video6314"
          src="/external/video6314-irv9-800w.png"
          className="mainpage-video"
        />
        <img
          alt="Rectangle40276314"
          src="/external/rectangle40276314-tlk9-200h.png"
          className="mainpage-rectangle4027"
        />
        <span className="mainpage-text121">
          <span>Join</span>
        </span>
        <img
          alt="Subtract6314"
          src="/external/subtract6314-8ofr.svg"
          className="mainpage-subtract"
        />
        <span className="mainpage-text123">
          <span>Today at 11am</span>
        </span>
        <span className="mainpage-text125">
          <span>Host: Aru Lyskova about the profession of a designer</span>
        </span>
        <span className="mainpage-text127">
          <span>Add your meeting to the calendar</span>
        </span>
        <img
          alt="Rectangle40286314"
          src="/external/rectangle40286314-j6g3-400w.png"
          className="mainpage-rectangle4028"
        />
        <img
          alt="Rectangle76314"
          src="/external/rectangle76314-3bl5q-200w.png"
          className="mainpage-rectangle7"
        />
        <span className="mainpage-text129">
          <span>December 2021</span>
        </span>
        <img alt="Vector16314" src="/external/vector16314-har5.svg" />
        <div className="mainpage-group3">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-hs25-200h.png"
            className="mainpage-ellipse1001"
          />
          <span className="mainpage-text131">1</span>
        </div>
        <div className="mainpage-group4">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-gxw-200h.png"
            className="mainpage-ellipse1002"
          />
          <span className="mainpage-text132">2</span>
        </div>
        <div className="mainpage-group5">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-9fh-200h.png"
            className="mainpage-ellipse1003"
          />
          <span className="mainpage-text133">3</span>
        </div>
        <div className="mainpage-group6">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-jyze-200h.png"
            className="mainpage-ellipse1004"
          />
          <span className="mainpage-text134">4</span>
        </div>
        <div className="mainpage-group7">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-4wa-200h.png"
            className="mainpage-ellipse1005"
          />
          <span className="mainpage-text135">5</span>
        </div>
        <div className="mainpage-group8">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-726-200h.png"
            className="mainpage-ellipse1006"
          />
          <span className="mainpage-text136">6</span>
        </div>
        <div className="mainpage-group9">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-mmvw-200h.png"
            className="mainpage-ellipse1007"
          />
          <span className="mainpage-text137">7</span>
        </div>
        <div className="mainpage-group30">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-82o-200h.png"
            className="mainpage-ellipse1008"
          />
          <span className="mainpage-text138">8</span>
        </div>
        <div className="mainpage-group31">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-7cwf-200h.png"
            className="mainpage-ellipse1009"
          />
          <span className="mainpage-text139">9</span>
        </div>
        <div className="mainpage-group32">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-kep-200h.png"
            className="mainpage-ellipse1010"
          />
          <span className="mainpage-text140">
            <span>10</span>
          </span>
        </div>
        <div className="mainpage-group33">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-e8kk-200h.png"
            className="mainpage-ellipse1011"
          />
          <span className="mainpage-text142">
            <span>11</span>
          </span>
        </div>
        <div className="mainpage-group34">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-g1kd-200h.png"
            className="mainpage-ellipse1012"
          />
          <span className="mainpage-text144">
            <span>12</span>
          </span>
        </div>
        <div className="mainpage-group35">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-jnyu-200h.png"
            className="mainpage-ellipse1013"
          />
          <span className="mainpage-text146">
            <span>13</span>
          </span>
        </div>
        <div className="mainpage-group36">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-kbu-200h.png"
            className="mainpage-ellipse1014"
          />
          <span className="mainpage-text148">
            <span>14</span>
          </span>
        </div>
        <div className="mainpage-group37">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-bd3p-200h.png"
            className="mainpage-ellipse1015"
          />
          <span className="mainpage-text150">
            <span>15</span>
          </span>
        </div>
        <div className="mainpage-group38">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-jn5n-200h.png"
            className="mainpage-ellipse1016"
          />
          <span className="mainpage-text152">
            <span>16</span>
          </span>
        </div>
        <div className="mainpage-group39">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-3o47-200h.png"
            className="mainpage-ellipse1017"
          />
          <span className="mainpage-text154">
            <span>17</span>
          </span>
        </div>
        <div className="mainpage-group40">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-ciqc-200h.png"
            className="mainpage-ellipse1018"
          />
          <span className="mainpage-text156">
            <span>18</span>
          </span>
        </div>
        <div className="mainpage-group41">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-e9h8-200h.png"
            className="mainpage-ellipse1019"
          />
          <span className="mainpage-text158">
            <span>19</span>
          </span>
        </div>
        <div className="mainpage-group42">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-1ug-200h.png"
            className="mainpage-ellipse1020"
          />
          <span className="mainpage-text160">
            <span>20</span>
          </span>
        </div>
        <div className="mainpage-group43">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-soo-200h.png"
            className="mainpage-ellipse1021"
          />
          <span className="mainpage-text162">
            <span>21</span>
          </span>
        </div>
        <div className="mainpage-group44">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-wzgh-200h.png"
            className="mainpage-ellipse1022"
          />
          <span className="mainpage-text164">
            <span>22</span>
          </span>
        </div>
        <div className="mainpage-group45">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-cqo-200h.png"
            className="mainpage-ellipse1023"
          />
          <span className="mainpage-text166">
            <span>23</span>
          </span>
        </div>
        <div className="mainpage-group46">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-7c0g-200h.png"
            className="mainpage-ellipse1024"
          />
          <span className="mainpage-text168">
            <span>24</span>
          </span>
        </div>
        <div className="mainpage-group47">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-jjrj-200h.png"
            className="mainpage-ellipse1025"
          />
          <span className="mainpage-text170">
            <span>25</span>
          </span>
        </div>
        <div className="mainpage-group48">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-t25h-200h.png"
            className="mainpage-ellipse1026"
          />
          <span className="mainpage-text172">
            <span>26</span>
          </span>
        </div>
        <div className="mainpage-group49">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-yinf-200h.png"
            className="mainpage-ellipse1027"
          />
          <span className="mainpage-text174">
            <span>27</span>
          </span>
        </div>
        <div className="mainpage-group50">
          <img
            alt="Ellipse106314"
            src="/external/ellipse106314-4lk-200h.png"
            className="mainpage-ellipse1028"
          />
          <span className="mainpage-text176">
            <span>28</span>
          </span>
        </div>
        <span className="mainpage-text178">M</span>
        <span className="mainpage-text179">T</span>
        <span className="mainpage-text180">W</span>
        <span className="mainpage-text181">T</span>
        <span className="mainpage-text182">F</span>
        <span className="mainpage-text183">S</span>
        <span className="mainpage-text184">S</span>
        <img alt="Vector26314" src="/external/vector26314-i0nl.svg" />
        <div className="mainpage-group1000002793">
          <span className="mainpage-text185">
            <span>Центр событий</span>
          </span>
          <img
            alt="Rectangle14086314"
            src="/external/rectangle14086314-h2r8-400h.png"
            className="mainpage-rectangle1408"
          />
          <img
            alt="Rectangle14096314"
            src="/external/rectangle14096314-3ry-300w.png"
            className="mainpage-rectangle1409"
          />
          <img
            alt="pexelscottonbrostudio406514316314"
            src="/external/pexelscottonbrostudio406514316314-bqzs-200w.png"
            className="mainpage-pexelscottonbrostudio40651431"
          />
        </div>
        <div className="mainpage-group1000002792">
          <span className="mainpage-text187">
            <span>Центр событий</span>
          </span>
          <img
            alt="pexelscottonbrostudio406514316314"
            src="/external/pexelscottonbrostudio406514316314-61ab-300w.png"
            className="mainpage-pexelscottonbrostudio406514311"
          />
        </div>
        <div className="mainpage-features-center">
          <div className="mainpage-icon-box"></div>
          <h3 className="mainpage-text189 h51">
            <span>Gamification</span>
          </h3>
          <span className="mainpage-text191">
            <span>
              {' '}
              We implemented gamified elements into courses, such as quizzes,
              challenges, leader boards, and badges, to enhance engagement and
              motivation among learners.
            </span>
          </span>
        </div>
        <div className="mainpage-features-center1">
          <div className="mainpage-icon-box1">
            <div className="mainpage-vector1 mainpage-vector1"></div>
          </div>
          <h3 className="mainpage-text193 h51">
            <span>Chat System</span>
          </h3>
          <span className="mainpage-text195">
            <span>
              We have real-time communication between students and instructors
              through a chat feature within courses, allowing for questions,
              discussions, and feedback.
            </span>
          </span>
        </div>
        <div className="mainpage-features-center2">
          <div className="mainpage-icon-box2">
            <div className="mainpage-vector2 mainpage-vector2"></div>
          </div>
          <h3 className="mainpage-text197 h51">
            <span>Progress Tracking</span>
          </h3>
          <span className="mainpage-text199">
            <span>
              We provide visual progress tracking tools, such as progress bars
              or dashboards, to help users monitor their advancement through
              courses and modules.
            </span>
          </span>
        </div>
        <img
          alt="communicationtechnology16314"
          src="/external/communicationtechnology16314-xi3h-200h.png"
          className="mainpage-communicationtechnology1"
        />
        <img
          alt="progress16314"
          src="/external/progress16314-6tun-200h.png"
          className="mainpage-progress1"
        />
        <img
          alt="game16314"
          src="/external/game16314-xu27-200h.png"
          className="mainpage-game1"
        />
        <img
          alt="Rectangle40306314"
          src="/external/rectangle40306314-7eok-600h.png"
          className="mainpage-rectangle4030"
        />
        <span className="mainpage-text201 HeaderHeading-1">
          <span className="mainpage-text202">
            Join
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="mainpage-text203">our</span>
          <span className="mainpage-text204">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="mainpage-text205">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>learning platform today</span>
        </span>
        <span className="mainpage-text207 BodyBodyXL">
          <span>Start learning by registering for free</span>
        </span>
        <Link to="/signin" className="mainpage-navlink2">
          <div className="mainpage-frame1 mainpage-frame1 button">
            <span className="mainpage-text209 BodyRegular500">
              <span>Log in</span>
            </span>
          </div>
        </Link>
        <img
          alt="Rectangle236314"
          src="/external/rectangle236314-qd1-400h.png"
          className="mainpage-rectangle23"
        />
        <span className="mainpage-text211 HeaderHeading-4">
          <span>Explore</span>
        </span>
        <span className="mainpage-text213 HeaderHeading-4">
          <span>Category</span>
        </span>
        <span className="mainpage-text215 BodyRegular400">
          <span>Home</span>
        </span>
        <span className="mainpage-text217 BodyRegular400">
          <span>Design</span>
        </span>
        <span className="mainpage-text219 BodyRegular400">
          <span>About</span>
        </span>
        <span className="mainpage-text221 BodyRegular400">
          <span>Development</span>
        </span>
        <span className="mainpage-text223 BodyRegular400">
          <span>Contact</span>
        </span>
        <span className="mainpage-text225 BodyRegular400">
          <span>Lifestyle</span>
        </span>
        <span className="mainpage-text227 BodyRegular400">
          <span>Blog</span>
        </span>
        <span className="mainpage-text229 BodyRegular400">
          <span>Business</span>
        </span>
        <span className="mainpage-text231 BodyRegular400">
          <span>Course</span>
        </span>
        <span className="mainpage-text233 BodyRegular400">
          <span>Marketing</span>
        </span>
        <span className="mainpage-text235 HeaderHeading-4">
          <span>Contact Us</span>
        </span>
        <img
          alt="image2216314"
          src="/external/image2216314-ivji-200h.png"
          className="mainpage-image221"
        />
        <img
          alt="image2316314"
          src="/external/image2316314-0d1n-200h.png"
          className="mainpage-image231"
        />
        <span className="mainpage-text237">
          <span>+7 705 9809 98 76</span>
        </span>
        <div className="mainpage-group">
          <div className="mainpage-group1">
            <img
              alt="Vector6314"
              src="/external/vector6314-rgvfn.svg"
              className="mainpage-vector3"
            />
          </div>
        </div>
        <span className="mainpage-text239">
          <span>© Synaptix, 2023</span>
        </span>
        <div className="mainpage-frame63">
          <div className="mainpage-frame462">
            <div className="mainpage-frame392">
              <img
                alt="MusicNote6314"
                src="/external/musicnote6314-9oq9.svg"
                className="mainpage-music-note"
              />
              <span className="mainpage-text241 BodyLarge500">
                <span>Music</span>
              </span>
            </div>
            <div className="mainpage-frame422">
              <img
                alt="ArrowUpRight6314"
                src="/external/arrowupright6314-ll8c.svg"
                className="mainpage-arrow-up-right8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MAINPAGE
