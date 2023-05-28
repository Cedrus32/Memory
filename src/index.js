import React from 'react';
import { createRoot } from 'react-dom/client';

import icons from './scripts/icons';
import fonts from './scripts/fonts';

import Main from './components/Main';

import './styles/reset.css';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<Main/>);
