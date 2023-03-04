import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { observer } from 'mobx-react-lite';
import { PropsWithChildren } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { themeStr } from '#main/store/theme.store';

export const ThemeWrapper = observer(function ({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={themeStr.theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
});
