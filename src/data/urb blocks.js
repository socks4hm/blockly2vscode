import Blockly from 'blockly';

Blockly.Blocks['urb_set'] = {
  init: function() {
    this.appendValueInput('children')
      .setCheck(null)
      .appendField('set');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['menus_function'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('Menus Function')
      .appendField(new Blockly.FieldTextInput('myFunction'), 'function_name');
    this.appendStatementInput('fields')
      .setCheck(null)
      .appendField('fields');
    this.appendStatementInput('menus')
      .setCheck(null)
      .appendField('menus');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['setstate'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('setState')
      .appendField(new Blockly.FieldTextInput(''), 'field')
      .appendField(':')
      .appendField(new Blockly.FieldTextInput(''), 'value');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['icon'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('icon')
      .appendField(new Blockly.FieldTextInput(''), 'icon')
      .appendField('link')
      .appendField(new Blockly.FieldTextInput(''), 'link');
    this.appendValueInput('dropdonMenus')
      .setCheck(null)
      .appendField('dropDownMenus');
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['menu'] = {
  init: function() {
    this.appendStatementInput('CHILDREN')
      .setCheck(null)
      .appendField('name')
      .appendField(new Blockly.FieldTextInput(''), 'NAME')
      .appendField('primary')
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'PRIMARY')
      .appendField('position')
      .appendField(
        new Blockly.FieldDropdown([
          ['left', 'LEFT'],
          ['center', 'CENTER'],
          ['right', 'RIGHT'],
        ]),
        'POSITION',
      )
      .appendField('title')
      .appendField(new Blockly.FieldTextInput(''), 'TITLE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, '');
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['urb_component'] = {
  init: function() {
    this.appendValueInput('COMPONENT')
      .setCheck('component')
      .appendField('component');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['urb_floating_button'] = {
  init: function() {
    this.appendValueInput('NAME')
      .setCheck(null)
      .appendField('Floating button');
    this.appendStatementInput('ON_CLICK')
      .setCheck(null)
      .appendField('onClick');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['urb_list'] = {
  init: function() {
    this.appendValueInput('children')
      .setCheck(null)
      .appendField('list listen')
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'NAME');
    this.appendStatementInput('onRowClick')
      .setCheck(null)
      .appendField('onRowClick');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['urb_add'] = {
  init: function() {
    this.appendValueInput('CHILDREN')
      .setCheck(null)
      .appendField('add');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['menu_init_field'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('field')
      .appendField(new Blockly.FieldTextInput(''), 'field')
      .appendField(
        new Blockly.FieldDropdown([
          ['string', 'string'],
          ['number', 'number'],
          ['boolean', 'boolean'],
        ]),
        'type',
      )
      .appendField('column header')
      .appendField(new Blockly.FieldTextInput(''), 'headerName')
      .appendField('add label')
      .appendField(new Blockly.FieldTextInput(''), 'addLabel')
      .appendField('width')
      .appendField(new Blockly.FieldNumber(0, 0), 'width');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
