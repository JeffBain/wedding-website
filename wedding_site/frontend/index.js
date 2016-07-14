import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './theme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './RSVPApp';

injectTapEventPlugin();

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App mealChoices={context.mealChoices} />
  </MuiThemeProvider>,
  document.getElementById('mount')
);
