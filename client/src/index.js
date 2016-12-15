import React from 'react';
import { render } from 'react-dom';
import App from './ui/App'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { renderRoutes } from './routes';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

render(renderRoutes(), document.getElementById('root'));
