import _ from 'lodash';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
  
    var button = document.createElement('button');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    button.innerHTML = 'Click me for print more information';
    button.onclick = printMe;

    element.appendChild(button);

    return element;
  }
  
  document.body.appendChild(component());