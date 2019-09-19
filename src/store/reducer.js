export const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        input: action.payload,
      };
    case 'ANGLE':
      return {
        ...state,
        angle: action.payload,
      };
    case 'HUE':
      return {
        ...state,
        hue: action.payload,
      };
    case 'SATURATION':
      return {
        ...state,
        saturation: action.payload,
      };
    case 'LIGHTNESS':
      return {
        ...state,
        lightness: action.payload,
      };
    case 'PADDING_X':
      return {
        ...state,
        paddingX: action.payload,
      };
    case 'PADDING_Y':
      return {
        ...state,
        paddingY: action.payload,
      };
    case 'RATIO':
      return {
        ...state,
        ratio: action.payload,
      };
    case 'LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    default:
      console.error(
        `No reducer function found for \`${action.type}\` (payload: \`${action.payload}\`)`
      );
      return state;
  }
};
