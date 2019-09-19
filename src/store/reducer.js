import { actionTypes } from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case actionTypes.ANGLE:
      return {
        ...state,
        angle: action.payload,
      };
    case actionTypes.HUE:
      return {
        ...state,
        hue: action.payload,
      };
    case actionTypes.SATURATION:
      return {
        ...state,
        saturation: action.payload,
      };
    case actionTypes.LIGHTNESS:
      return {
        ...state,
        lightness: action.payload,
      };
    case actionTypes.PADDING_X:
      return {
        ...state,
        paddingX: action.payload,
      };
    case actionTypes.PADDING_Y:
      return {
        ...state,
        paddingY: action.payload,
      };
    case actionTypes.WIDTH:
      return {
        ...state,
        width: action.payload,
      };
    case actionTypes.HEIGHT:
      return {
        ...state,
        height: action.payload,
      };
    case actionTypes.LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case actionTypes.PLUGIN:
      return {
        ...state,
        plugin: action.payload,
      };
    default:
      console.error(
        `No reducer function found for \`${action.type}\` (payload: \`${action.payload}\`)`
      );
      return state;
  }
};
