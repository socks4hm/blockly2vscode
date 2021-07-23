import React, { useRef, useState } from 'react';
import { useBlocklyWorkspace } from 'react-blockly';
import ConfigFiles from '../../data/content';
import Blockly from 'blockly';

import '../../data/urb blocks';
import '../../data/urb gens';
// import PropTypes from 'prop-types';

export default function BlocklyTest() {
  const blocklyRef = useRef(null);
  const [toolboxConfiguration, setToolboxConfiguration] = React.useState(
    ConfigFiles.INITIAL_TOOLBOX_JSON,
  );
  const [code, setCode] = useState(null);

  const { workspace, xml } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolboxConfiguration, // this must be a JSON toolbox definition
    initialXml: ConfigFiles.INITIAL_XML,
    onWorkspaceChange: handleWorkspaceChange,
  });

  function handleWorkspaceChange(data) {
    setCode(Blockly.JavaScript.workspaceToCode(workspace));
  }

  // eslint-disable-next-line no-undef
  //  Blockly.JavaScript.workspaceToCode(workspace);
  return (
    <div className="blockly-blockly-test fit vertical layout">
      <div>blockly test</div>
      <div className="flex" ref={blocklyRef} />
      <div className="horizontal layout" style={{ height: '20%' }}>
        <div id="code">{code}</div>
      </div>
    </div>
  );
}

BlocklyTest.propTypes = {};
BlocklyTest.defaultProps = {};
