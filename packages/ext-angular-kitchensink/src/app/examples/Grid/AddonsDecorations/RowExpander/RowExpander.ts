declare var Ext: any;
import { Component } from '@angular/core';
import {model} from '../../CompanyModel';


Ext.require(['Ext.grid.plugin.RowExpander'])

@Component({
  selector: 'rowexpander-component',
  templateUrl: './RowExpander.html',
  styles: [``]
})
export class RowExpanderComponent {

  store = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    pageSize: null,
    proxy: {
      type: 'ajax',
      url: 'resources/data/CompanyData.json',
    }
  })

  rowExpandeerPlugin = { rowexpander: true };

  grid:any;
  onGridReady = (event) => {
    this.grid = event.ext;
    this.grid.setPlugins(this.rowExpandeerPlugin);
  }

  tplVal = 
    `
    <div>
      <div>Industry: {industry}</div>
      <div>Last Updated: {lastChange} </div>
      <div style="{marginTop:'1em'}">{desc}</div>
    </div>
    `;

  //mjg
  renderSign = (format, value) => {
    var formattedValue = Ext.util.Format.number(value, format);
    var color = "";
    if(value > 0) {
      color = "green";
    }
    else {
      color = "red";
    }
    return formattedValue;
  } ;

}