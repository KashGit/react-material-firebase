import { createMuiTheme } from '@material-ui/core/styles'

const mbbsPurple = "#6200EE";
const mbbsPink = '#ec407a';
const darkPink = '#560027';
const mbbsGrey = '#868686';

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
    },
    estimates: {
      fontFamily: 'Pacifico',
      textTransform: 'none',
      color: 'white',
      fontSize: '1rem'
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight:700,
      fontSize: '2.5rem',
      color: `${mbbsPurple}`,
      lineHeight: 1.5
    },
    h4:{
      fontFamily:'Raleway',
      fontSize:'1.75rem',
      color:mbbsPurple,
      fontWeight:700
    },
    subtitle1:{
      fontSize: '1.25rem',
      fontWeight:300,
      color: mbbsGrey,
    },
    buttonLearnMore:{
      fontFamily: 'Roboto',
            fontWeight: 'bold',
            textTransform: 'none',
            borderColor: mbbsPurple,
            color: mbbsPurple,
            borderRadius: 50,
            borderWidth: 2,
    }
  }
});