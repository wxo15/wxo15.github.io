import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { animate, motion } from 'framer-motion';
import Certs from '../raw/certlist.json';
import Organizations from '../raw/organizations.json';
import CytoscapeComponent from 'react-cytoscapejs';
import Cytoscape from '../components/CytoscapeSetup';
import Stylesheet from '../components/CytoscapeStylesheet';

export default function Certificates(param) {
    const cyRef = useRef(null);
    const cyPopperRef = useRef(null);

    // Element construction
    const domainsList = [...new Set(Certs.flatMap(item => item.domain))].sort();
    const usedOrgList = [...new Set(Certs.map(item => item.issuedBy).filter(org => org != null && org !== ''))].sort();
    const availableOrgList = [...new Set(Organizations.map(item => item.name))];

    const cleanId = (raw) => {
        return raw.toLowerCase().replace(/[^a-zA-Z0-9_]/g, '_')
    };

    const elements = [
        { data: { id: 'self', label: 'Max Ooi' }}
    ]
    domainsList.forEach(item => {
        elements.push(
            { data: { id: `domain-${cleanId(item)}`, label: item}},
            { data: { source: 'self', target: `domain-${cleanId(item)}`, label: 'has domain' } }
        );
    });
    
    usedOrgList.forEach(item => {
        if (availableOrgList.includes(item)) {
            elements.push(
                { data: { id: `org-${cleanId(item)}`, label: item, logo: Organizations.filter(org => org.name == item)[0].logo}}
            );
        } else {
            elements.push(
                { data: { id: `org-${cleanId(item)}`, label: item}}
            );
        }
    });

    Certs
    .sort((a, b) => a.domain.sort()[0].localeCompare(b.domain.sort()[0]) || a.title.localeCompare(b.title))
    .forEach(item => {
        elements.push({ data: { id: `cert-${cleanId(item.title)}`, label: item.title, earn_date: item.earndate, link: item.link}});
        item.domain.forEach(subitem => {
            elements.push({ data: { source: `domain-${cleanId(subitem)}`, target: `cert-${cleanId(item.title)}`, label: 'covers' } });
        })
        if (availableOrgList.includes(item.issuedBy)) {
            elements.push({ data: { source: `cert-${cleanId(item.title)}`, target: `org-${cleanId(item.issuedBy)}`, label: 'issued by' } });
        }
    });

    // Default and focused layouts
    const default_layout = {
        name: 'concentric',
        concentric: node => {
            if (node.id() === 'self') return 4;
            if (node.id().startsWith('domain-')) return 3;
            if (node.id().startsWith('cert-')) return 2;
            if (node.id().startsWith('org-')) return 1;
            return 0;
        },
        levelWidth: () => 1,
        minNodeSpacing: 0,
        animate: true
    };

    const focused_layout = {
        name: 'fcose',
        animate: true,
        fit: true,
        randomize: false
    };

    // tooltip when hover

    const createContentFromComponent = (component) => {
        const ttDomEle = document.createElement('div');
        document.body.appendChild(ttDomEle);

        const root = createRoot(ttDomEle);
        root.render(component);
        cyPopperRef.current = {
            el: ttDomEle,
            _destroyReact: () => {
                root.unmount();
                ttDomEle.remove();
            }
        };
        return ttDomEle
    };

    useEffect(() => {
        const cy = cyRef.current;

        // focus when clicking on a node
        cy.nodes().on('select', (evt) => {
            const node = evt.target;
            cy.elements().addClass('faded');

            node
                .add(node.neighborhood())
                .add(node.connectedEdges())
                .removeClass('faded');

            cy.elements('.faded').hide();
            cy.elements().layout(focused_layout).run();
            cy.elements('.faded').show();

        });

        // Reset when clicking on background
        cy.on('tap', (event) => {
            if (event.target === cy) {
                cy.elements().removeClass('faded');
                cy.elements().show();
                cy.layout(default_layout).run();
            }
        });

        // tooltip
        cy.nodes().on('mouseover', (event) => {
            const node_data = event.target.data();
            let tooltipContent = [];
            if (node_data.earn_date) {
                tooltipContent.push(
                    <div key="earndate">
                        <strong>Earned: </strong>{node_data.earn_date}
                    </div>
                );
            }
            if (node_data.link) {
                tooltipContent.push(
                    <a
                        href={node_data.link}
                        key="link"
                        target="_blank"
                    >
                        <i class="bi bi-box-arrow-up-right"></i>{' '}
                    </a>
                );
            }
            if (tooltipContent.length === 0) return;

            const tooltip = createContentFromComponent(
                <div className='popper-tooltip'>{tooltipContent}</div>
            );
            event.target.popper({
                content: () => tooltip,
                popper: {
                    placement: 'right-end',
                    removeOnDestroy: true,
                },
            });
        });

        cy.nodes().on('mouseout', () => {
        if (cyPopperRef.current) {
            cyPopperRef.current._destroyReact?.();
            cyPopperRef.current = null;
        }
        });

        return () => {
            cy.nodes().off('mouseover');
            cy.nodes().off('mouseout');
            cy.off('tap');
        };
    }, []);

    const translateX = param.fromRight ? '-100vw' : '100vw';

    return (
        <motion.div
            initial={{ opacity: 0, x: translateX }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
        >
            <section id="certs" className="s-general">

                <h2 className="s-header-allcaps">
                    Certifications / Past courses
                </h2>
                    <CytoscapeComponent 
                    elements={elements} 
                    stylesheet={Stylesheet}
                    layout={default_layout}
                    style={{
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'auto',
                        backgroundColor: "#0000"
                    }}
                    cy={(cy) => {
                        cy.userPanningEnabled(true);
                        cy.userZoomingEnabled(true);
                        cy.boxSelectionEnabled(true);

                        // Ensure nodes can be dragged
                        cy.nodes().grabify();
                        cy.nodes().selectify();
                        cy.panzoom({
                            sliderHandleIcon: 'bi bi-dash',
                            zoomInIcon: 'bi bi-plus',
                            zoomOutIcon: 'bi bi-dash',
                            resetIcon: 'bi bi-arrows-angle-expand'
                        });
                        cyRef.current = cy;
                    }}
                    />
            </section>
        </motion.div>
    );
}
