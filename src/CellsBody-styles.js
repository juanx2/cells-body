/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

.general {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

img {
  width: 445px;
}

.header {
  background: #f4f4f4;
  width: 420px;
  height: 460px;
  padding-top: 3%;
  padding-left: 3%;
  display: flex;
  flex-direction: column;
}

.line1 {
  font-weight: bold;
  height: 25px;
}

.line2 {
  color: #878787;
  font-weight: 400;
  height: 19px;
}

.line3 {
  font-weight: 560;
  font-size: 25px;
  height: 35px;
}

.line4 {
  font-weight: bold;
  height: 27px;
}

.lista1 {
  height: 72px;
}

.marker-icon {
  color: #1973b8 !important;
}

.btn-Modify {
  color: #f4f4f4 !important;
  font-weight: 10;
  height: 32px;
  width: 2px;
  margin-top: 15px;
}

.icon-delete {
  margin-bottom: 4px;
  margin-right: 5px;
}

.btn-Delete {
  background: #f4f4f4;
  font-weight: 500;
  color: #1a73b8;
  margin-top: 35px;
  padding-bottom: 1.8%;
  padding-left: 0%;
  padding-right: 12%;
  height: 32px;
  width: 25px;
}

*, *:before, *:after {
  box-sizing: inherit;
}
`;