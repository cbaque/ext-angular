declare var Ext: any;
import { Component } from '@angular/core';
import { generateData, randomDate } from '../generateSaleData';
import { model } from '../SaleModel';

Ext.require(['Ext.pivot.plugin.RangeEditor']);

@Component({
  selector: 'RangeEditorPlugin-component',
  templateUrl: './RangeEditorPlugin.html',
  styles: [``]
})
export class RangeEditorPluginComponent {

   isPhone = Ext.os.is.Phone;

   store = Ext.create('Ext.data.Store', {
    model: model,
    data: generateData()
  })

  pivotgrid:any;

  onPivotGridRead = function(event) {
    this.pivotgrid = event.ext;
  }

  collapseAll = () => { this.pivotgrid.collapseAll(); }
  expandAll = () => { this.pivotgrid.expandAll(); }

  pivotgridMatrix = {
    type: 'local',
    store: this.store,
    // Configure the aggregate dimensions. Multiple dimensions are supported.
    aggregate: [{
        dataIndex: 'value',
        header: 'Total',
        aggregator: 'sum',
        width: 120
    }],
    // Configure the left axis dimensions that will be used to generate the grid rows
    leftAxis: [{
        dataIndex: 'company',
        header: 'Company',
        width: 120
    }, {
        dataIndex: 'country',
        header: 'Country',
        direction: 'DESC',
        width: 150
    }],
    /**
    * Configure the top axis dimensions that will be used to generate
    * the columns.
    *
    * When columns are generated the aggregate dimensions are also used.
    * If multiple aggregation dimensions are defined then each top axis
    * result will have in the end a column header with children columns
    * for each aggregate dimension defined.
    */
    topAxis: [{
        dataIndex: 'year',
        header: 'Year'
    }, {
        dataIndex: 'month',
        header: 'Month',
        labelRenderer: value => Ext.Date.monthNames[value]
    }]
  };

}