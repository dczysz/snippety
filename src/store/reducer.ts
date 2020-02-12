import * as types from './types';

export type ActionType = {
  type: string;
  payload: any;
};

export type StateType = {
  input: string;
  angle: number;
  hue: number;
  saturation: number;
  lightness: number;
  paddingY: number;
  paddingX: number;
  width: number | null;
  height: number | null;
  language: string;
  plugin: string;
  titleBar: string;
  font: string;
};

const initialState: StateType = {
  input: '',
  angle: 10,
  hue: 250,
  saturation: 100,
  lightness: 50,
  paddingY: 100,
  paddingX: 100,
  width: null,
  height: null,
  language: types.languageTypes.JS.code,
  plugin: types.pluginTypes.LINE_NUMBERS.code,
  titleBar: types.titleBarTypes.OSX.code,
  font: types.fontTypes.DEFAULT.code,
};

const reducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
    case types.actionTypes.INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case types.actionTypes.ANGLE:
      return {
        ...state,
        angle: action.payload,
      };
    case types.actionTypes.HUE:
      return {
        ...state,
        hue: action.payload,
      };
    case types.actionTypes.SATURATION:
      return {
        ...state,
        saturation: action.payload,
      };
    case types.actionTypes.LIGHTNESS:
      return {
        ...state,
        lightness: action.payload,
      };
    case types.actionTypes.PADDING_X:
      return {
        ...state,
        paddingX: action.payload,
      };
    case types.actionTypes.PADDING_Y:
      return {
        ...state,
        paddingY: action.payload,
      };
    case types.actionTypes.WIDTH:
      return {
        ...state,
        width: action.payload,
      };
    case types.actionTypes.HEIGHT:
      return {
        ...state,
        height: action.payload,
      };
    case types.actionTypes.LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case types.actionTypes.PLUGIN:
      return {
        ...state,
        plugin: action.payload,
      };
    case types.actionTypes.TITLE_BAR:
      return {
        ...state,
        titleBar: action.payload,
      };
    case types.actionTypes.FONT:
      return {
        ...state,
        font: action.payload,
      };
    default:
      process.env.NODE_ENV === 'development' &&
        console.error(
          `No reducer function found for \`${action.type}\` (payload: \`${action.payload}\`)`
        );
      return state;
  }
};

export default reducer;
