declare var Ext: any;
import {Component} from '@angular/core';
@Component({
  selector: 'froala-component',
  templateUrl: './Froala.html',
  styles: [``]
})

Ext.require([ 'Ext.froala.EditorField' ]);
import 'froala-editor/css/froala_editor.pkgd.min.css';

export class FroalaComponent  {
  editorFieldCmp: any;

  value: any = '<p>Four score and seven years ago.</p>'

  editorConfig: any = {
      autofocus: true,
      fontSize: [10, 12, 16, 24]
  }

  onEditorFieldReady = (event) => {
    if (event.detail.cmp) {
      this.editorFieldCmp = event.detail.cmp;

      this.editorFieldCmp.setValue(this.value);
      this.editorFieldCmp.setListeners({
        'froala.click': (froalaComponent) => { Ext.toast({ message: 'Click!' }); }
      });
    }
  }

  froalaTextChange = (event) => {
    this.value = event.detail.the;
    Ext.toast({ message: 'Change!' });
  }

  listenersConfig: any = {
    change: this.froalaTextChange,
    'froala.click': (froalaComponent) => { Ext.toast({ message: 'Click!' }); }
  }

  formPanelOkBtnClick = () => {
    Ext.Msg.alert('getValues()', Ext.JSON.encode(this.editorFieldCmp.getValues()));
  }

  buttonsConfig: any = { ok: {
        text: 'getValues()',
        handler: this.formPanelOkBtnClick
      }
  }
}
