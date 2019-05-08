/*
|--------------------------------------------------------------------------
| Imports
|--------------------------------------------------------------------------
|
| Import external libraries here
|
|
|
*/

import Vue from 'vue';
import axios from 'axios';

import './tailwind.css';

/*
|--------------------------------------------------------------------------
| Binding div
|--------------------------------------------------------------------------
|
| Setup a div in the dom to bind Vue on.
|
|
|
*/

let bindingDiv = document.createElement('div');
bindingDiv.id = 'frontier';
bindingDiv.setAttribute("style", "position: fixed; bottom: 0px; left: 0px; background: black;");
document.body.appendChild(bindingDiv);

/*
|--------------------------------------------------------------------------
| Instantiate
|--------------------------------------------------------------------------
|
| Setup Vue and create the root component. hr
|
|
|
*/

import componentWrapper from './components/componentWrapper.vue';


/* setup Vue*/
const frontier = new Vue({
    el: '#frontier',
    render(createElement) {
        return createElement(componentWrapper, {}, {});
    },
});