// scripts.js

import'./configuration' // corrected path
import {year} from './configuration' //added parenthesis {} and changed form to from

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message