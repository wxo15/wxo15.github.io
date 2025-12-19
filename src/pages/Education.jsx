import { motion } from 'framer-motion';
import Educations from './../raw/educationlist.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Education(param) {
    const translateX = param.fromRight ? '-100vw' : '100vw';
    return (
        <motion.div
            initial={{ opacity: 0, x: translateX }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
        >
            <section id="career" className="s-general">
                <Container className="fill-height">
                    <Row className="fill-height">
                        <Col lg={3} xs={12} className="center_of_container">
                            <h2 className="s-header-allcaps">Education</h2>
                        </Col>
                        <Col lg={9} xs={12} className="center_of_container">
                            <div className="margin-auto">
                                {Educations.map((item, index) => {
                                    return (
                                        <div
                                            className="resume-block"
                                            key={item.institution + item.period}
                                        >
                                            <div className="resume-block-header">
                                                <h4>
                                                    <u>
                                                        <a
                                                            href={item.link}
                                                            target="blank"
                                                        >
                                                            {item.institution}
                                                        </a>
                                                    </u>
                                                </h4>
                                            </div>
                                            <div key={index}>
                                                <p className="resume-block-subheader">
                                                    <span>
                                                        <strong>
                                                            {item.course}
                                                        </strong>
                                                    </span>
                                                    <span className="resume-block-date">
                                                        {item.period}
                                                    </span>
                                                </p>
                                                <ul>
                                                    {item.description.map(
                                                        (dscp, index) => {
                                                            return (
                                                                <li key={index}>
                                                                    {dscp}
                                                                </li>
                                                            );
                                                        },
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </motion.div>
    );
}
