import { createMuiTheme } from '@material-ui/core/styles'

const mbbsPurple = "#4a148c";
const mbbsPink = '#ec407a';
const darkPink = '#560027';

export default createMuiTheme({
  palette: {
    common: {
      purple: `${mbbsPurple}`,
      pink: `${mbbsPink}`,
    },
    primary: {
      main: `${mbbsPurple}`,
    },
    secondary: {
      main: `${mbbsPink}`
    },
    status: {
      danger: `${darkPink}`,
    },
  },
  typography: {
    tab: {
      textTransform: 'none',
      fontFamily: 'Raleway',
      fontWeight: '700',
      fontSize: '1rem',
    }
  }
});