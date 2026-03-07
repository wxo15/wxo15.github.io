export default StyleSheet = [
    {
        selector: 'node',
        style: {
            opacity: 1,
            transitionProperty: 'opacity',
            transitionDuration: '200ms'
        }
    },
    {
        selector: 'edge',
        style: {
            opacity: 1,
            transitionProperty: 'opacity',
            transitionDuration: '200ms'
        }
    },
    {
        selector: '.faded',
        style: {
            opacity: 0.2
        }
    },
    {
        selector: 'node', //default
        style: {
            content: 'data(label)',
            textValign: 'center',
            textHalign: 'center',
            textWrap: 'wrap',
            textMaxWidth: '50px',
            shape: 'round-rectangle',
            fontSize: 5,
            padding: "2px",
            "width": (node) => {
                const ctx = document.createElement('canvas').getContext("2d");
                const fStyle = node.pstyle('font-style').strValue;
                const size = node.pstyle('font-size').pfValue;
                const family = node.pstyle('font-family').strValue;
                const weight = node.pstyle('font-weight').strValue;
                const padding = 2 * node.pstyle('padding').pfValue;
                const textMaxWidth = 50;
                ctx.font = fStyle + ' ' + weight + ' ' + size + 'px ' + family;
                const textWidth = ctx.measureText(node.data('label')).width + padding;
                return (textWidth < textMaxWidth + padding) ? textWidth : textMaxWidth + padding;
            },
            "height": (node) => {
                const ctx = document.createElement('canvas').getContext("2d");
                const fStyle = node.pstyle('font-style').strValue;
                const size = node.pstyle('font-size').pfValue;
                const family = node.pstyle('font-family').strValue;
                const weight = node.pstyle('font-weight').strValue;
                const padding = 2 * node.pstyle('padding').pfValue;
                const textMaxWidth = 50;
                ctx.font = fStyle + ' ' + weight + ' ' + size + 'px ' + family;
                const textWidth = ctx.measureText(node.data('label')).width;
                const lines = Math.max(1, Math.ceil(textWidth / textMaxWidth));
                const lineHeight = size * 1.2;
                return lines * lineHeight + padding;
            }
        }
    },
    {
        selector: 'node[id="self"]',
        style: {
            shape: 'ellipse',
            backgroundColor: 'rgba(194, 0, 0, 1)',
            color: "white",
            width: "50px",
            height: "50px",
            fontSize: 10,
            fontWeight: 'bold'
        }
    },
    {
        selector: 'node[id^="domain-"]',
        style: {
            backgroundColor: 'rgba(82, 0, 189, 1)',
            color: "white"
        }
    },
    {
        selector: 'node[id^="cert-"]',
        style: {
            backgroundColor: '#0095ff'
        }
    },
    {
        selector: 'node[id^="org-"]',
        style: {
            backgroundColor: 'white',
            backgroundImage: 'data(logo)',
            backgroundFit: "cover cover",
            backgroundImageOpacity: 0.5,
            borderWidth: '1px',
            borderColor: '#000',
        }
    },
    {
        selector: 'edge',
        style: {
            content: 'data(label)',
            fontSize: 5,
            curveStyle: 'bezier',
            targetArrowShape: 'triangle',
            width: 3,
            color: '#888',
        }
    },
    {
        selector: 'edge[source^="self"]',
        style: {
            lineColor: 'purple',
            targetArrowColor: 'purple',
        }
    },
    {
        selector: 'edge[source^="domain-"]',
        style: {
            lineColor: '#006aff',
            targetArrowColor: '#006aff',
            width: 2
        }
    },
    {
        selector: 'edge[source^="cert-"]',
        style: {
            lineColor: '#00c3ff',
            targetArrowColor: '#00c3ff',
            width: 1
        }
    }
]