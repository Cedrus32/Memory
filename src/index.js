import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/Main';

import './styles/style.css';
import './styles/reset.css';
import iconsArray from './scripts/icons.js';

const root = createRoot(document.getElementById('root'));
root.render(<Main />);
