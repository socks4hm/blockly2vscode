import React, { useRef } from 'react';
import { useBlocklyWorkspace } from 'react-blockly';
import ConfigFiles from '../../data/content';

// import PropTypes from 'prop-types';

export default function BlocklyTest() {
  const blocklyRef = useRef(null);
  const [toolboxConfiguration, setToolboxConfiguration] = React.useState(
    ConfigFiles.INITIAL_TOOLBOX_JSON,
  );
  const { workspace, xml } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolboxConfiguration, // this must be a JSON toolbox definition
    initialXml: ConfigFiles.INITIAL_XML,
  });
  return (
    <div className="home-blockly-test">
      <div ref={blocklyRef} />
    </div>
  );
}

BlocklyTest.propTypes = {};
BlocklyTest.defaultProps = {};
