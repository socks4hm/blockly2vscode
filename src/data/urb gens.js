import Blockly from 'blockly';

Blockly.JavaScript['icon'] = function(block) {
  var text_icon = block.getFieldValue('icon');
  var text_link = block.getFieldValue('link');
  var value_dropdonmenus = Blockly.JavaScript.valueToCode(
    block,
    'dropdonMenus',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['menu'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var checkbox_primary = block.getFieldValue('PRIMARY') == 'TRUE';
  var dropdown_position = block.getFieldValue('POSITION');
  var text_title = block.getFieldValue('TITLE');
  var statements_children = Blockly.JavaScript.statementToCode(block, 'CHILDREN');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['menu_item'] = function(block) {
  var value_component = Blockly.JavaScript.valueToCode(
    block,
    'COMPONENT',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['urb_component'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['urb_floating_button'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_on_click = Blockly.JavaScript.statementToCode(block, 'ON_CLICK');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['urb_list'] = function(block) {
  var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
  var value_children = Blockly.JavaScript.valueToCode(
    block,
    'CHILDREN',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['urb_add'] = function(block) {
  var value_children = Blockly.JavaScript.valueToCode(
    block,
    'CHILDREN',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['menu_init'] = function(block) {
  var statements_fields = Blockly.JavaScript.statementToCode(block, 'FIELDS');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['menu_init_field'] = function(block) {
  var text_field = block.getFieldValue('field');
  var dropdown_type = block.getFieldValue('type');
  var text_headername = block.getFieldValue('headerName');
  var text_addlabel = block.getFieldValue('addLabel');
  var number_width = block.getFieldValue('width');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
