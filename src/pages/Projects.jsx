import { motion } from 'framer-motion';
import Portfolios from './../raw/portfoliolist.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects(param) {
    const translateX = param.fromRight ? '-100vw' : '100vw';
    return (
        <motion.div
            initial={{ opacity: 0, x: translateX }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
        >
            <section id="portfolio" className="s-general">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className="s-header-allcaps">
                                Some of my projects
                            </h2>
                        </Col>
                    </Row>
                    <Row className="block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list margin-auto">
                        {Portfolios.map((item, index) => {
                            return (
                                <Col className="folio-item" key={item.name}>
                                    <a
                                        detail={item.name + '\n' + item.detail}
                                        href={item.link}
                                        className="folio-item-thumb"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={item.thumbnail}
                                            alt={item.name}
                                        ></img>
                                    </a>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </section>
        </motion.div>
    );
}
