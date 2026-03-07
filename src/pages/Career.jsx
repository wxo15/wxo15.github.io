import { motion } from 'framer-motion';
import Careers from './../raw/careerlist.json';
import Organizations from '../raw/organizations.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Career(param) {
    const availableOrgList = new Map(Organizations.map(item => [item.name, item.logo]));
    
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
                            <h2 className="s-header-allcaps">Career</h2>
                        </Col>
                        <Col lg={9} xs={12} className="center_of_container">
                            <div className="margin-auto">
                                {Careers.map((item, index) => {
                                    return (
                                        <div
                                            className="resume-block"
                                            key={item.company + item.period}
                                        >
                                            <div className="resume-block-header">
                                                {availableOrgList.get(item.company_alias) && (
                                                    <img className="resume-org-logo" src={availableOrgList.get(item.company_alias)}/>
                                                )}
                                                <h4>
                                                    <u >
                                                        
                                                        <a
                                                            href={item.link}
                                                            target="blank"
                                                        >
                                                            
                                                            {item.company}
                                                        </a>
                                                    </u>
                                                </h4>
                                            </div>
                                            {item.roles.map((role, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className="resume-block-subheader">
                                                            <span>
                                                                <strong>
                                                                    {
                                                                        role.jobtitle
                                                                    }
                                                                </strong>
                                                            </span>
                                                            <span className="resume-block-date">
                                                                {role.period}
                                                            </span>
                                                        </p>
                                                        <ul>
                                                            {role.description.map(
                                                                (
                                                                    dscp,
                                                                    index,
                                                                ) => {
                                                                    return (
                                                                        <li
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            {
                                                                                dscp
                                                                            }
                                                                        </li>
                                                                    );
                                                                },
                                                            )}
                                                        </ul>
                                                    </div>
                                                );
                                            })}
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
