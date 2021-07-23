import Blockly from 'blockly';

Blockly.JavaScript['urb_set'] = function(block) {
  var obj = {};
  obj.value_children = Blockly.JavaScript.valueToCode(
    block,
    'children',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify(obj);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['menus_function'] = function(block) {
  var text_function_name = block.getFieldValue('function_name');
  var statements_menu_init = Blockly.JavaScript.statementToCode(block, 'menu_init');
  var statements_menus = Blockly.JavaScript.statementToCode(block, 'menus');
  // TODO: Assemble JavaScript into code variable.
  var code =
    '{"function_definition":{"name":"' +
    text_function_name +
    '", "init":[' +
    statements_menu_init +
    '], "menus":[' +
    statements_menus +
    ']}}';
  return code;
};

Blockly.JavaScript['setstate'] = function(block) {
  var obj = {};
  obj.text_field = block.getFieldValue('field');
  obj.text_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify(obj);
  return code;
};

Blockly.JavaScript['icon'] = function(block) {
  var obj = {};
  obj.text_icon = block.getFieldValue('icon');
  obj.text_link = block.getFieldValue('link');
  obj.value_dropdonmenus = Blockly.JavaScript.valueToCode(
    block,
    'dropdonMenus',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify(obj);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['menu'] = function(block) {
  var obj = {};
  obj.text_name = block.getFieldValue('NAME');
  obj.checkbox_primary = block.getFieldValue('PRIMARY') == 'TRUE';
  obj.dropdown_position = block.getFieldValue('POSITION');
  obj.text_title = block.getFieldValue('TITLE');
  obj.statements_children = Blockly.JavaScript.statementToCode(block, 'CHILDREN');
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify(obj);
  return code;
};

Blockly.JavaScript['menu_item'] = function(block) {
  var obj = {};
  obj.value_component = Blockly.JavaScript.valueToCode(
    block,
    'COMPONENT',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify(obj);
  return code;
};

Blockly.JavaScript['urb_component'] = function(block) {
  var obj = {};
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify(obj);
  return code;
};

Blockly.JavaScript['urb_floating_button'] = function(block) {
  var obj = {};
  obj.value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  obj.statements_on_click = Blockly.JavaScript.statementToCode(block, 'ON_CLICK');
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify(obj);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['urb_list'] = function(block) {
  var obj = {};
  obj.checkbox_name = block.getFieldValue('NAME') == 'TRUE';
  obj.value_children = Blockly.JavaScript.valueToCode(
    block,
    'CHILDREN',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify(obj);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['urb_add'] = function(block) {
  var obj = {};
  obj.value_children = Blockly.JavaScript.valueToCode(
    block,
    'CHILDREN',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify(obj);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['menu_init_field'] = function(block) {
  var obj = {};
  obj.field_name = block.getFieldValue('field');
  obj.dropdown_type = block.getFieldValue('type');
  obj.text_headername = block.getFieldValue('headerName');
  obj.text_addlabel = block.getFieldValue('addLabel');
  obj.number_width = block.getFieldValue('width');
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify(obj) + ',';
  return code;
};
