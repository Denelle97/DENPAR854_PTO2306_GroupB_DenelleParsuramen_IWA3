// scripts.js

 import {company , year} from './configuration.js'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message //DOM fetch footer, innertext( puts the value in the object)
//select object dom then 