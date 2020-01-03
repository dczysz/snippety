type Theme = {
  sidebarWidth: number;
  br: string;
  white: string;
  gray: string;
  lightGray: string;
  lighterGray: string;
  lightestGray: string;
  danger: string;
  titleBarHeight: string;
  bs: string;
};

const gray = '220, 13%, 18%';

const theme: Theme = {
  sidebarWidth: 300,
  br: '4px',
  white: '220, 10%, 85%',
  gray,
  lightGray: '220, 15%, 29%',
  lighterGray: '220, 16%, 60%',
  lightestGray: '220, 16%, 75%',
  danger: '338, 100%, 50%',
  titleBarHeight: '1.75rem',
  bs: `0 4px 32px hsla(${gray}, 0.9), 0 4px 8px hsla(${gray}, 0.75)`,
};

export default theme;
