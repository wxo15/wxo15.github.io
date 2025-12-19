import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About(param) {
    const translateX = param.fromRight ? '-100vw' : '100vw';
    return (
        <motion.div
            initial={{ opacity: 0, x: translateX }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
        >
            <section id="about" className="s-general">
                <Container fluid className="fill-height">
                    <Row className="fill-height">
                        <Col lg={6} xs={12} className="center_of_container">
                            <img
                                className="s-about_pic"
                                src={'images/avatar.jpeg'}
                                alt=""
                            ></img>
                        </Col>
                        <Col lg={6} xs={12} className="center_of_container">
                            <div className="margin-auto">
                                <h2 className="s-header-allcaps">About Me</h2>
                                <br></br>
                                <p>
                                    Engineer, data scientist, developer and
                                    coffee drinker
                                </p>
                                <hr></hr>
                                <div>
                                    <p>
                                        Max Ooi Wei Xiang<br></br>
                                        Probably somewhere in Malaysia <br></br>
                                    </p>
                                    <br></br>
                                    <h5>Find me on</h5>
                                    <div className="s-hero__content-social">
                                        <a
                                            href="https://api.whatsapp.com/send?phone=60177218779"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                alt="whatsapp"
                                                className="bi bi-whatsapp"
                                            ></i>{' '}
                                        </a>
                                        <a
                                            href="mailto:wxooi15@gmail.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                alt="linked"
                                                className="bi bi-envelope"
                                            ></i>{' '}
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/maxooiwx"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                alt="linkedin"
                                                className="bi bi-linkedin"
                                            ></i>{' '}
                                        </a>
                                        <a
                                            href="http://github.com/wxo15"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                alt="github"
                                                className="bi bi-github"
                                            ></i>{' '}
                                        </a>
                                        <a
                                            href="https://leetcode.com/wxo15/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                alt="leetcode"
                                                className="iconify"
                                                data-icon="simple-icons:leetcode"
                                            ></i>{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </motion.div>
    );
}
