import { createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'
import amber from 'material-ui/colors/amber'
import red from 'material-ui/colors/red'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: amber,
    error: red
  }
})

export default theme
