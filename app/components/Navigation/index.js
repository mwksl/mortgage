/**
*
* Navigation
*
*/

import React from 'react';

import {
  MuiThemeProvider,
  AppBar,
} from 'material-ui';

import styles from './styles.css';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <MuiThemeProvider>
        <AppBar
          title="Mortgage Calculator"
        />
      </MuiThemeProvider>
    </div>
  );
}

export default Navigation;
