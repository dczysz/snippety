export const languageTypes = {
  JS: { name: 'JavaScript', code: 'js' },
  CSS: { name: 'CSS', code: 'css' },
  MARKUP: { name: 'Markup', code: 'markup' },
  C_Like: { name: 'C-like', code: 'clike' },
};

export const actionTypes = {
  INPUT: 'INPUT',
  ANGLE: 'ANGLE',
  HUE: 'HUE',
  SATURATION: 'SATURATION',
  LIGHTNESS: 'LIGHTNESS',
  PADDING_X: 'PADDING_X',
  PADDING_Y: 'PADDING_Y',
  WIDTH: 'WIDTH',
  HEIGHT: 'HEIGHT',
  LANGUAGE: 'LANGUAGE',
  PLUGIN: 'PLUGIN',
  TITLE_BAR: 'TITLE_BAR',
  FONT: 'FONT',
};

export const pluginTypes = {
  NONE: { name: '', code: '' },
  LINE_NUMBERS: { name: 'Line Numbers', code: 'line-numbers' },
};

export const titleBarTypes = {
  NONE: { name: '', code: '' },
  OSX: { name: 'OSX', code: 'OSX' },
};

export const fontTypes = {
  DEFAULT: { name: 'Default', code: 'inherit' },
  DEJAVU_SANS_MONO: { name: 'DejaVu Sans Mono', code: 'DejaVu Sans Mono' },
  COURIER_NEW: { name: 'Courier New', code: 'Courier New' },
};
