export const STYLE_OVERRIDES = [
  {
    id: 'general',
    property: 'position',
    type: 'select',
    default: 'static',
    options: [
      { id: 'static' },
      { id: 'relative' },
      { id: 'absolute' },
      { id: 'fixed' },
      { id: 'relative' },
      { id: 'sticky' }
    ]
  },
  {
    id: 'typography',
    property: 'font-family',
    type: 'select',
    default: 'Sen',
    options: [{ id: 'Sen', label: 'Sen' }]
  },
  {
    id: 'typography',
    property: 'text-decoration',
    type: 'select',
    options: [
      { id: 'auto' },
      { id: 'blink' },
      { id: 'dashed' },
      { id: 'dotted' },
      { id: 'double' },
      { id: 'line-through' },
      { id: 'none' },
      { id: 'overline' },
      { id: 'solid' },
      { id: 'underline' },
      { id: 'wavy' },
      { id: 'inherit' },
      { id: 'initial' },
      { id: 'revert' },
      { id: 'revert-layer' },
      { id: 'unset' }
    ]
  },
  {
    id: 'flex',
    property: 'gap',
    type: 'number',
    units: ['px', 'em', 'rem']
  },
  {
    id: 'decorations',
    property: 'border'
  },
  {
    id: 'decorations',
    property: 'border-width',
    name: 'Border Width',
    type: 'number',
    units: ['px', 'em', 'rem']
  },
  {
    id: 'decorations',
    property: 'border-style',
    name: 'Border Style',
    type: 'select',
    options: [
      { value: 'none' },
      { value: 'solid' },
      { value: 'dotted' },
      { value: 'dashed' },
      { value: 'double' },
      { value: 'groove' },
      { value: 'ridge' },
      { value: 'inset' },
      { value: 'outset' }
    ]
  },
  {
    id: 'decorations',
    property: 'border-color',
    name: 'Border Color',
    type: 'color'
  }
];
