const INITIAL_XML = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>';

const INITIAL_TOOLBOX_JSON = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'urb',
      colour: 210,
      contents: [
        {
          kind: 'block',
          blockxml:
            '<block type="menu_init" id="/g0|RBEsYAZF6%vD*-zA" x="56" y="37"><statement name="FIELDS"><block type="menu_init_field" id="8GKH~=D#Q9*eI/os^qZF"><field name="field">to do</field><field name="type">string</field><field name="headerName">To do</field><field name="addLabel">To do item</field><field name="width">90</field><next><block type="menu_init_field" id="/zFJ8)A8Z}[`bHAjg#EC"><field name="field">completed</field><field name="type">boolean</field><field name="headerName">Completed</field><field name="addLabel">Completed</field><field name="width">0</field><next><block type="menu_init_field" id="F9d(AOjT*=8pw.v?a*aj" disabled="true"><field name="field"></field><field name="type">string</field><field name="headerName"></field><field name="addLabel"></field><field name="width">0</field><next><block type="menu_init_field" id="!Zt3Z+s}7sQ:PV%G2Y.{" disabled="true"><field name="field"></field><field name="type">string</field><field name="headerName"></field><field name="addLabel"></field><field name="width">0</field></block></next></block></next></block></next></block></statement></block>',
        },   {
          kind: 'block',
          blockxml:
            '<block type="menu" id="Dfgm#^@AWU!kgiMW3g2r" x="23" y="48"><field name="NAME">main</field><field name="PRIMARY">TRUE</field><field name="POSITION">LEFT</field><field name="TITLE">To Do\'s</field><statement name="CHILDREN"><block type="menu_item" id="w18_QG7Qdh;:BUA1/nb("><value name="COMPONENT"><block type="urb_floating_button" id="wg-W]w,+G^p-=UiI$#9u"><value name="NAME"><block type="urb_list" id="/_3C1kbb?!xL1|{TmjrQ"><field name="NAME">TRUE</field><statement name="onRowClick"><block type="setstate" id="oW.(Eov,ZKGGP,M@9J4}"><field name="field">activeMenu</field><field name="value">add todo</field><next><block type="setstate" id="E$|GQ;c}t|-BA]:Z54~@"><field name="field">$key</field><field name="value">item.$key</field></block></next></block></statement></block></value><statement name="ON_CLICK"><block type="setstate" id="bYGpM{:{!q!;RCk:kPMO"><field name="field">activeMenu</field><field name="value">add todo</field></block></statement></block></value></block></statement></block>',
        },
        // {
        //   kind: 'block',
        //   type: 'menu_init',
        // },
        // {
        //   kind: 'block',
        //   type: 'menu_init_field',
        // },
        // {
        //   kind: 'block',
        //   type: 'icon',
        // },
        {
          kind: 'block',
          type: 'menu',
        },
        {
          kind: 'block',
          type: 'menu_item',
        },
        {
          kind: 'block',
          type: 'urb_component',
        },
        {
          kind: 'block',
          type: 'urb_floating_button',
        },
        {
          kind: 'block',
          type: 'urb_list',
        },
        {
          kind: 'block',
          type: 'urb_add',
        },
        {
          kind: 'block',
          type: 'setstate',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Logic',
      colour: 210,
      contents: [
        {
          kind: 'block',
          type: 'controls_if',
        },
        {
          kind: 'block',
          blockxml: '<block type="logic_compare"><field name="OP">EQ</field></block>',
        },
        {
          kind: 'block',
          blockxml: '<block type="logic_operation"><field name="OP">AND</field></block>',
        },
        {
          kind: 'block',
          type: 'logic_negate',
        },
        {
          kind: 'block',
          blockxml: '<block type="logic_boolean"><field name="BOOL">TRUE</field></block>',
        },
        {
          kind: 'block',
          type: 'logic_null',
        },
        {
          kind: 'block',
          type: 'logic_ternary',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Loops',
      colour: 120,
      contents: [
        {
          kind: 'block',
          blockxml:
            '<block type="controls_repeat_ext">\n' +
            '      <value name="TIMES">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">10</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="controls_whileUntil">\n' +
            '      <field name="MODE">WHILE</field>\n' +
            '    </block>',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="controls_for">\n' +
            '      <field name="VAR" id="C(8;cYCF}~vSgkxzJ+{O" variabletype="">i</field>\n' +
            '      <value name="FROM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '      <value name="TO">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">10</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '      <value name="BY">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="controls_forEach">\n' +
            '      <field name="VAR" id="Cg!CSk/ZJo2XQN3=VVrz" variabletype="">j</field>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="controls_flow_statements">\n' +
            '      <field name="FLOW">BREAK</field>\n' +
            '    </block>\n',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Math',
      colour: 230,
      contents: [
        {
          kind: 'block',
          blockxml:
            '    <block type="math_round">\n' +
            '      <field name="OP">ROUND</field>\n' +
            '      <value name="NUM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">3.1</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="math_number">\n' +
            '      <field name="NUM">0</field>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="math_single">\n' +
            '      <field name="OP">ROOT</field>\n' +
            '      <value name="NUM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">9</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="math_trig">\n' +
            '      <field name="OP">SIN</field>\n' +
            '      <value name="NUM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">45</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="math_constant">\n' +
            '      <field name="CONSTANT">PI</field>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="math_number_property">\n' +
            '      <mutation divisor_input="false"></mutation>\n' +
            '      <field name="PROPERTY">EVEN</field>\n' +
            '      <value name="NUMBER_TO_CHECK">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">0</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="math_arithmetic">\n' +
            '      <field name="OP">ADD</field>\n' +
            '      <value name="A">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '      <value name="B">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="math_on_list">\n' +
            '      <mutation op="SUM"></mutation>\n' +
            '      <field name="OP">SUM</field>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="math_modulo">\n' +
            '      <value name="DIVIDEND">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">64</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '      <value name="DIVISOR">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">10</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="math_constrain">\n' +
            '      <value name="VALUE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">50</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '      <value name="LOW">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '      <value name="HIGH">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">100</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="math_random_int">\n' +
            '      <value name="FROM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">1</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '      <value name="TO">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">100</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          type: 'math_random_float',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Text',
      colour: 160,
      contents: [
        {
          kind: 'block',
          blockxml:
            '    <block type="text_charAt">\n' +
            '      <mutation at="true"></mutation>\n' +
            '      <field name="WHERE">FROM_START</field>\n' +
            '      <value name="VALUE">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
            '        </block>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="text">\n' + '      <field name="TEXT"></field>\n' + '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="text_append">\n' +
            '      <field name="VAR" id=":};P,s[*|I8+L^-.EbRi" variabletype="">item</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT"></field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="text_length">\n' +
            '      <value name="VALUE">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="text_isEmpty">\n' +
            '      <value name="VALUE">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT"></field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="text_indexOf">\n' +
            '      <field name="END">FIRST</field>\n' +
            '      <value name="VALUE">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
            '        </block>\n' +
            '      </value>\n' +
            '      <value name="FIND">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="text_join">\n' +
            '      <mutation items="2"></mutation>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="text_getSubstring">\n' +
            '      <mutation at1="true" at2="true"></mutation>\n' +
            '      <field name="WHERE1">FROM_START</field>\n' +
            '      <field name="WHERE2">FROM_START</field>\n' +
            '      <value name="STRING">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
            '        </block>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="text_changeCase">\n' +
            '      <field name="CASE">UPPERCASE</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="text_trim">\n' +
            '      <field name="MODE">BOTH</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="text_print">\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="text_prompt_ext">\n' +
            '      <mutation type="TEXT"></mutation>\n' +
            '      <field name="TYPE">TEXT</field>\n' +
            '      <value name="TEXT">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">abc</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Lists',
      colour: 259,
      contents: [
        {
          kind: 'block',
          blockxml:
            '    <block type="lists_indexOf">\n' +
            '      <field name="END">FIRST</field>\n' +
            '      <value name="VALUE">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
            '        </block>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="lists_create_with">\n' +
            '      <mutation items="0"></mutation>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="lists_repeat">\n' +
            '      <value name="NUM">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">5</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          type: 'lists_length',
        },
        {
          kind: 'block',
          type: 'lists_isEmpty',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="lists_create_with">\n' +
            '      <mutation items="3"></mutation>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="lists_getIndex">\n' +
            '      <mutation statement="false" at="true"></mutation>\n' +
            '      <field name="MODE">GET</field>\n' +
            '      <field name="WHERE">FROM_START</field>\n' +
            '      <value name="VALUE">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
            '        </block>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="lists_setIndex">\n' +
            '      <mutation at="true"></mutation>\n' +
            '      <field name="MODE">SET</field>\n' +
            '      <field name="WHERE">FROM_START</field>\n' +
            '      <value name="LIST">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
            '        </block>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="lists_getSublist">\n' +
            '      <mutation at1="true" at2="true"></mutation>\n' +
            '      <field name="WHERE1">FROM_START</field>\n' +
            '      <field name="WHERE2">FROM_START</field>\n' +
            '      <value name="LIST">\n' +
            '        <block type="variables_get">\n' +
            '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
            '        </block>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="lists_split">\n' +
            '      <mutation mode="SPLIT"></mutation>\n' +
            '      <field name="MODE">SPLIT</field>\n' +
            '      <value name="DELIM">\n' +
            '        <shadow type="text">\n' +
            '          <field name="TEXT">,</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="lists_sort">\n' +
            '      <field name="TYPE">NUMERIC</field>\n' +
            '      <field name="DIRECTION">1</field>\n' +
            '    </block>\n',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Colour',
      colour: 19,
      contents: [
        {
          kind: 'block',
          blockxml:
            '    <block type="colour_picker">\n' +
            '      <field name="COLOUR">#ff0000</field>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          type: 'colour_random',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="colour_rgb">\n' +
            '      <value name="RED">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">100</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '      <value name="GREEN">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">50</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '      <value name="BLUE">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">0</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
        {
          kind: 'block',
          blockxml:
            '    <block type="colour_blend">\n' +
            '      <value name="COLOUR1">\n' +
            '        <shadow type="colour_picker">\n' +
            '          <field name="COLOUR">#ff0000</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '      <value name="COLOUR2">\n' +
            '        <shadow type="colour_picker">\n' +
            '          <field name="COLOUR">#3333ff</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '      <value name="RATIO">\n' +
            '        <shadow type="math_number">\n' +
            '          <field name="NUM">0.5</field>\n' +
            '        </shadow>\n' +
            '      </value>\n' +
            '    </block>\n',
        },
      ],
    },
    { kind: 'sep' },
    {
      kind: 'category',
      name: 'Custom Button',
      colour: 19,
      contents: [
        {
          kind: 'button',
          text: 'A button',
          callbackKey: 'myFirstButtonPressed',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Variables',
      custom: 'VARIABLE',
      colour: 330,
    },
    {
      kind: 'category',
      name: 'Functions',
      custom: 'PROCEDURE',
      colour: 290,
    },
  ],
};

const INITIAL_TOOLBOX_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">\n' +
  '  <category name="Logic" colour="#5C81A6">\n' +
  '    <block type="controls_if"></block>\n' +
  '    <block type="logic_compare">\n' +
  '      <field name="OP">EQ</field>\n' +
  '    </block>\n' +
  '    <block type="logic_operation">\n' +
  '      <field name="OP">AND</field>\n' +
  '    </block>\n' +
  '    <block type="logic_negate"></block>\n' +
  '    <block type="logic_boolean">\n' +
  '      <field name="BOOL">TRUE</field>\n' +
  '    </block>\n' +
  '    <block type="logic_null"></block>\n' +
  '    <block type="logic_ternary"></block>\n' +
  '  </category>\n' +
  '  <category name="Loops" colour="#5CA65C">\n' +
  '    <block type="controls_repeat_ext">\n' +
  '      <value name="TIMES">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">10</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="controls_whileUntil">\n' +
  '      <field name="MODE">WHILE</field>\n' +
  '    </block>\n' +
  '    <block type="controls_for">\n' +
  '      <field name="VAR" id="C(8;cYCF}~vSgkxzJ+{O" variabletype="">i</field>\n' +
  '      <value name="FROM">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="TO">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">10</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="BY">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="controls_forEach">\n' +
  '      <field name="VAR" id="Cg!CSk/ZJo2XQN3=VVrz" variabletype="">j</field>\n' +
  '    </block>\n' +
  '    <block type="controls_flow_statements">\n' +
  '      <field name="FLOW">BREAK</field>\n' +
  '    </block>\n' +
  '  </category>\n' +
  '  <category name="Math" colour="#5C68A6">\n' +
  '    <block type="math_round">\n' +
  '      <field name="OP">ROUND</field>\n' +
  '      <value name="NUM">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">3.1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_number">\n' +
  '      <field name="NUM">0</field>\n' +
  '    </block>\n' +
  '    <block type="math_single">\n' +
  '      <field name="OP">ROOT</field>\n' +
  '      <value name="NUM">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">9</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_trig">\n' +
  '      <field name="OP">SIN</field>\n' +
  '      <value name="NUM">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">45</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_constant">\n' +
  '      <field name="CONSTANT">PI</field>\n' +
  '    </block>\n' +
  '    <block type="math_number_property">\n' +
  '      <mutation divisor_input="false"></mutation>\n' +
  '      <field name="PROPERTY">EVEN</field>\n' +
  '      <value name="NUMBER_TO_CHECK">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">0</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_arithmetic">\n' +
  '      <field name="OP">ADD</field>\n' +
  '      <value name="A">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="B">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_on_list">\n' +
  '      <mutation op="SUM"></mutation>\n' +
  '      <field name="OP">SUM</field>\n' +
  '    </block>\n' +
  '    <block type="math_modulo">\n' +
  '      <value name="DIVIDEND">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">64</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="DIVISOR">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">10</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_constrain">\n' +
  '      <value name="VALUE">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">50</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="LOW">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="HIGH">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">100</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_random_int">\n' +
  '      <value name="FROM">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">1</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="TO">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">100</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="math_random_float"></block>\n' +
  '  </category>\n' +
  '  <category name="Text" colour="#5CA68D">\n' +
  '    <block type="text_charAt">\n' +
  '      <mutation at="true"></mutation>\n' +
  '      <field name="WHERE">FROM_START</field>\n' +
  '      <value name="VALUE">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text">\n' +
  '      <field name="TEXT"></field>\n' +
  '    </block>\n' +
  '    <block type="text_append">\n' +
  '      <field name="VAR" id=":};P,s[*|I8+L^-.EbRi" variabletype="">item</field>\n' +
  '      <value name="TEXT">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT"></field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_length">\n' +
  '      <value name="VALUE">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">abc</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_isEmpty">\n' +
  '      <value name="VALUE">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT"></field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_indexOf">\n' +
  '      <field name="END">FIRST</field>\n' +
  '      <value name="VALUE">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '      <value name="FIND">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">abc</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_join">\n' +
  '      <mutation items="2"></mutation>\n' +
  '    </block>\n' +
  '    <block type="text_getSubstring">\n' +
  '      <mutation at1="true" at2="true"></mutation>\n' +
  '      <field name="WHERE1">FROM_START</field>\n' +
  '      <field name="WHERE2">FROM_START</field>\n' +
  '      <value name="STRING">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_changeCase">\n' +
  '      <field name="CASE">UPPERCASE</field>\n' +
  '      <value name="TEXT">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">abc</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_trim">\n' +
  '      <field name="MODE">BOTH</field>\n' +
  '      <value name="TEXT">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">abc</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_print">\n' +
  '      <value name="TEXT">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">abc</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="text_prompt_ext">\n' +
  '      <mutation type="TEXT"></mutation>\n' +
  '      <field name="TYPE">TEXT</field>\n' +
  '      <value name="TEXT">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">abc</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '  </category>\n' +
  '  <category name="Lists" colour="#745CA6">\n' +
  '    <block type="lists_indexOf">\n' +
  '      <field name="END">FIRST</field>\n' +
  '      <value name="VALUE">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="lists_create_with">\n' +
  '      <mutation items="0"></mutation>\n' +
  '    </block>\n' +
  '    <block type="lists_repeat">\n' +
  '      <value name="NUM">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">5</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="lists_length"></block>\n' +
  '    <block type="lists_isEmpty"></block>\n' +
  '    <block type="lists_create_with">\n' +
  '      <mutation items="3"></mutation>\n' +
  '    </block>\n' +
  '    <block type="lists_getIndex">\n' +
  '      <mutation statement="false" at="true"></mutation>\n' +
  '      <field name="MODE">GET</field>\n' +
  '      <field name="WHERE">FROM_START</field>\n' +
  '      <value name="VALUE">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="lists_setIndex">\n' +
  '      <mutation at="true"></mutation>\n' +
  '      <field name="MODE">SET</field>\n' +
  '      <field name="WHERE">FROM_START</field>\n' +
  '      <value name="LIST">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="lists_getSublist">\n' +
  '      <mutation at1="true" at2="true"></mutation>\n' +
  '      <field name="WHERE1">FROM_START</field>\n' +
  '      <field name="WHERE2">FROM_START</field>\n' +
  '      <value name="LIST">\n' +
  '        <block type="variables_get">\n' +
  '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
  '        </block>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="lists_split">\n' +
  '      <mutation mode="SPLIT"></mutation>\n' +
  '      <field name="MODE">SPLIT</field>\n' +
  '      <value name="DELIM">\n' +
  '        <shadow type="text">\n' +
  '          <field name="TEXT">,</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="lists_sort">\n' +
  '      <field name="TYPE">NUMERIC</field>\n' +
  '      <field name="DIRECTION">1</field>\n' +
  '    </block>\n' +
  '  </category>\n' +
  '  <category name="Colour" colour="#A6745C">\n' +
  '    <block type="colour_picker">\n' +
  '      <field name="COLOUR">#ff0000</field>\n' +
  '    </block>\n' +
  '    <block type="colour_random"></block>\n' +
  '    <block type="colour_rgb">\n' +
  '      <value name="RED">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">100</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="GREEN">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">50</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="BLUE">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">0</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '    <block type="colour_blend">\n' +
  '      <value name="COLOUR1">\n' +
  '        <shadow type="colour_picker">\n' +
  '          <field name="COLOUR">#ff0000</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="COLOUR2">\n' +
  '        <shadow type="colour_picker">\n' +
  '          <field name="COLOUR">#3333ff</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '      <value name="RATIO">\n' +
  '        <shadow type="math_number">\n' +
  '          <field name="NUM">0.5</field>\n' +
  '        </shadow>\n' +
  '      </value>\n' +
  '    </block>\n' +
  '  </category>\n' +
  '  <sep></sep>\n' +
  '  <category name="Custom Button" colour="#A6745C">\n' +
  '    <button text="A button" callbackKey="myFirstButtonPressed"></button>\n' +
  '  </category>\n' +
  '  <category name="Variables" colour="#A65C81" custom="VARIABLE"></category>\n' +
  '  <category name="Functions" colour="#9A5CA6" custom="PROCEDURE"></category>\n' +
  '</xml>';

const INITIAL_TOOLBOX_CATEGORIES = [
  {
    name: 'Controls',
    blocks: [
      { type: 'controls_if' },
      {
        type: 'controls_repeat_ext',
        values: {
          TIMES: {
            type: 'math_number',
            shadow: true,
            fields: {
              NUM: 10,
            },
          },
        },
        statements: {
          DO: {
            type: 'text_print',
            shadow: true,
            values: {
              TEXT: {
                type: 'text',
                shadow: true,
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
      },
    ],
  },
  {
    name: 'Text',
    blocks: [
      { type: 'text' },
      {
        type: 'text_print',
        values: {
          TEXT: {
            type: 'text',
            shadow: true,
            fields: {
              TEXT: 'abc',
            },
          },
        },
      },
    ],
  },
];

const ConfigFiles = {
  INITIAL_XML,
  INITIAL_TOOLBOX_XML,
  INITIAL_TOOLBOX_JSON,
  INITIAL_TOOLBOX_CATEGORIES,
};

export default ConfigFiles;
