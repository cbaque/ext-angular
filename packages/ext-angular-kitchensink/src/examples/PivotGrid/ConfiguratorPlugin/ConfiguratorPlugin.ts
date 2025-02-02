declare var Ext: any;
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { generateData, randomDate } from '../generateSaleData';
import { model } from '../SaleModel';

Ext.require(['Ext.pivot.plugin.Configurator']);

@Component({
  selector: 'ConfiguratorPlugin-component',
  templateUrl: './ConfiguratorPlugin.html',
  styles: [``]
})
export class ConfiguratorPluginComponent {

  isPhone = Ext.os.is.Phone;

  store = Ext.create('Ext.data.Store', {
    model: model,
    data: generateData()
  })
  //problem with late rendered components
  coloredRenderer = (v, record, dataIndex, cell, column) => {
      cell.setStyle( Ext.String.format('color: {0};', v > 500 ? 'green' : 'red') );

      return Ext.util.Format.number(v, '0,000.00');
  }

  pivotgrid:any;
  onPivotGridRead = function(event) {
    this.pivotgrid = event.ext;
  }

  showConfigurator = () => { this.pivotgrid.showConfigurator() }

  monthRenderer = value => Ext.Date.monthNames[value];


pivotgridPlugins = [{
  type: 'pivotconfigurator',
  // It is possible to configure a list of fields that can be used to
  // configure the pivot grid
  // If no fields list is supplied then all fields from the Store model
  // are fetched automatically
  fields: [{
      dataIndex: 'quantity',
      header: 'Qty',
      // You can even provide a default aggregator function to be used
      // when this field is dropped
      // on the agg dimensions
      aggregator: 'min',
      formatter: 'number("0")',
      settings: {
          // Define here in which areas this field could be used
          allowed: ['aggregate'],
          // Set a custom style for this field to inform the user that it
          // can be dragged only to "Values"
          style: {
              fontWeight: 'bold'
          },
          // Define here custom formatters that ca be used on this dimension
          formatters: {
              '0': 'number("0")',
              '0%': 'number("0%")'
          }
      }
  }, {
      dataIndex: 'value',
      header: 'Value',
      settings: {
          // Define here in which areas this field could be used
          allowed: 'aggregate',
          // Define here what aggregator functions can be used when this
          // field is used as an aggregate dimension
          aggregators: ['sum', 'avg', 'count'],
          // Set a custom style for this field to inform the user that it
          // can be dragged only to "Values"
          style: {
              fontWeight: 'bold'
          },
          // Define here custom renderers that can be used on this dimension
          renderers: {
              'Colored 0,000.00': this.coloredRenderer
          },
          // Define here custom formatters that ca be used on this dimension
          formatters: {
              '0': 'number("0")',
              '0.00': 'number("0.00")',
              '0,000.00': 'number("0,000.00")',
              '0%': 'number("0%")',
              '0.00%': 'number("0.00%")'
          }
      }
  }, {
      dataIndex: 'company',
      header: 'Company',
      settings: {
          // Define here what aggregator functions can be used when this
          // field is used as an aggregate dimension
          aggregators: ['count']
      }
  }, {
      dataIndex: 'country',
      header: 'Country',
      settings: {
          // Define here what aggregator functions can be used when this
          // field is used as an aggregate dimension
          aggregators: ['count']
      }
  }, {
      dataIndex: 'person',
      header: 'Person',
      settings: {
          // Define here what aggregator functions can be used when this
          // field is used as an aggregate dimension
          aggregators: 'count'
      }
  }, {
      dataIndex: 'year',
      header: 'Year',
      settings: {
          // Define here the areas in which this field is fixed and cannot
          // be moved from
          fixed: ['topAxis']
      }
  }, {
      dataIndex: 'month',
      header: 'Month',
      labelRenderer: this.monthRenderer,
      settings: {
          // Define here what aggregator functions can be used when this
          // field is used as an aggregate dimension
          aggregators: ['count'],
          // Define here in which areas this field could be used
          allowed: ['leftAxis', 'topAxis']
      }
  }]
}];

pivotgridMatrix = {
  type: 'local',
  store: this.store,
  // Configure the aggregate dimensions. Multiple dimensions are supported.
  aggregate: [{
      dataIndex: 'value',
      header: 'Value',
      aggregator: 'avg',
      width: 120
  }],
  // Configure the left axis dimensions that will be used to generate the
  // grid rows
  leftAxis: [{
      dataIndex: 'person',
      header: 'Person',
      width: 120
  }, {
      dataIndex: 'company',
      header: 'Company',
      sortable: false
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
      header: 'Year',
      labelRenderer: value => `Year ${value}`
  }]
};

}