declare var Ext: any;
import { Component} from '@angular/core';
import fileData from './Files.js'

@Component({
  selector: 'breadcrumbtoolbar-component',
  templateUrl: './BreadcrumbToolbar.html',
  styles: [``]
})
export class BreadcrumbToolBarComponent {
  breadcrumbarCmp:any;
  treeStore:any;
  breadcrumbarReady = function(event) {
    this.breadcrumbarCmp = event.ext;
    this.treeStore = Ext.create('Ext.data.TreeStore', {
        rootVisible: true,
        root: fileData
    });
    this.breadcrumbarCmp.setStore(this.treeStore);
  }
}