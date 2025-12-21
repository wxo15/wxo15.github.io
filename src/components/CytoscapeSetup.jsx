import Cytoscape from 'cytoscape';
import cytoscapePopper from 'cytoscape-popper';
import { createPopper } from '@popperjs/core';
import fcose from 'cytoscape-fcose';
import panzoom from 'cytoscape-panzoom';

let popperRegistered = false;

function popperFactory(ref, content, opts) {
  return createPopper(ref, content, {
    placement: opts.placement || 'top',
    modifiers: [
      {
        name: 'offset',
        options: { offset: opts.offset || [0, -8] },
      },
    ],
  });
}

if (!popperRegistered) {
  Cytoscape.use(cytoscapePopper(popperFactory));
  Cytoscape.use(fcose);
  panzoom(Cytoscape);
  popperRegistered = true;
}

export default Cytoscape;