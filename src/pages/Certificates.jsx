import { motion } from 'framer-motion';
import Certs from './../raw/certlist.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Certificates(param) {
    const translateX = param.fromRight ? '-100vw' : '100vw';
    return (
        <motion.div
            initial={{ opacity: 0, x: translateX }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
        >
            <section id="portfolio" className="s-general">
                <Container className="fill-height">
                    <Row>
                        <Col lg={12}>
                            <h2 className="s-header-allcaps">
                                Certifications/Past courses
                            </h2>
                        </Col>
                    </Row>

                    {Certs.map((item, index) => {
                        return (
                            <Row>
                                <Col
                                    lg={3}
                                    xs={12}
                                    className="center_of_container"
                                >
                                    <h2 className="s-subheader">{item.area}</h2>
                                </Col>
                                <Col className="resume-block" key={item.name}>
                                    <ul className="margin-auto">
                                        {item.certlist.map((cert, index) => {
                                            return (
                                                <li key={index}>
                                                    <span
                                                        style={{
                                                            marginRight:
                                                                '0.6rem',
                                                        }}
                                                    >
                                                        <a
                                                            detail={cert.title}
                                                            href={cert.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {cert.title}
                                                        </a>
                                                    </span>
                                                    <span className="resume-block-date">
                                                        {cert.earndate}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Col>
                            </Row>
                        );
                    })}
                </Container>
            </section>
        </motion.div>
    );
}
