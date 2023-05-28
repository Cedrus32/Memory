import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/Main';

import './styles/reset.css';
import './styles/style.css';
import iconsArray from './scripts/icons';

const root = createRoot(document.getElementById('root'));
root.render(<Main/>);
