/*esLint-disable import/default */ 
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../semantic/dist/semantic.min.css';
import $ from 'jquery';
import '../semantic/dist/semantic.min.js';


 render(
   <Router history={browserHistory} routes={routes} />,
   document.getElementById('app')
 );
