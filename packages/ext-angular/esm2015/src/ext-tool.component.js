//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
var ExtToolComponent_1;
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { EngBase } from './eng-base';
export class toolMetaData {
}
toolMetaData.XTYPE = 'tool';
toolMetaData.PROPERTIES = [
    'eng',
    'viewport',
    'align',
    'plugins',
    'responsiveConfig',
    'responsiveFormulas',
    'alignSelf',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'axisLock',
    'bind',
    'border',
    'bottom',
    'centered',
    'cls',
    'constrainAlign',
    'contentEl',
    'controller',
    'data',
    'defaultListenerScope',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'flex',
    'floated',
    'focusCls',
    'fullscreen',
    'handler',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'iconCls',
    'id',
    'instanceCls',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'padding',
    'passive',
    'plugins',
    'publishes',
    'record',
    'reference',
    'relative',
    'renderTo',
    'right',
    'ripple',
    'scope',
    'scrollable',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'stateful',
    'statefulDefaults',
    'stateId',
    'stopEvent',
    'style',
    'tabIndex',
    'toFrontOnShow',
    'toolOwner',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'twoWayBindable',
    'type',
    'ui',
    'userCls',
    'userSelectable',
    'viewModel',
    'weight',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
toolMetaData.EVENTS = [
    { name: 'added', parameters: 'sender,container,index' },
    { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehide', parameters: 'sender' },
    { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeshow', parameters: 'sender' },
    { name: 'beforetofront', parameters: 'tool' },
    { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'tool,event' },
    { name: 'bottomchange', parameters: 'sender,value,oldValue' },
    { name: 'centeredchange', parameters: 'sender,value,oldValue' },
    { name: 'click', parameters: 'tool,e,owner' },
    { name: 'destroy', parameters: '' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'dockedchange', parameters: 'sender,value,oldValue' },
    { name: 'erased', parameters: 'sender' },
    { name: 'floatingchange', parameters: 'sender,positioned' },
    { name: 'focus', parameters: 'tool,event' },
    { name: 'focusenter', parameters: 'tool,event' },
    { name: 'focusleave', parameters: 'tool,event' },
    { name: 'fullscreen', parameters: 'sender' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'hide', parameters: 'sender' },
    { name: 'initialize', parameters: 'sender' },
    { name: 'leftchange', parameters: 'sender,value,oldValue' },
    { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'sender,element' },
    { name: 'positionedchange', parameters: 'sender,positioned' },
    { name: 'removed', parameters: 'sender,container,index' },
    { name: 'resize', parameters: 'element,info' },
    { name: 'rightchange', parameters: 'sender,value,oldValue' },
    { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
    { name: 'show', parameters: 'sender' },
    { name: 'tofront', parameters: 'tool' },
    { name: 'topchange', parameters: 'sender,value,oldValue' },
    { name: 'updatedata', parameters: 'sender,newData' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
toolMetaData.EVENTNAMES = [
    'added',
    'beforebottomchange',
    'beforecenteredchange',
    'beforedisabledchange',
    'beforedockedchange',
    'beforeheightchange',
    'beforehiddenchange',
    'beforehide',
    'beforeleftchange',
    'beforemaxHeightchange',
    'beforemaxWidthchange',
    'beforeminHeightchange',
    'beforeminWidthchange',
    'beforeorientationchange',
    'beforerightchange',
    'beforescrollablechange',
    'beforeshow',
    'beforetofront',
    'beforetopchange',
    'beforewidthchange',
    'blur',
    'bottomchange',
    'centeredchange',
    'click',
    'destroy',
    'disabledchange',
    'dockedchange',
    'erased',
    'floatingchange',
    'focus',
    'focusenter',
    'focusleave',
    'fullscreen',
    'heightchange',
    'hiddenchange',
    'hide',
    'initialize',
    'leftchange',
    'maxHeightchange',
    'maxWidthchange',
    'minHeightchange',
    'minWidthchange',
    'moved',
    'orientationchange',
    'painted',
    'positionedchange',
    'removed',
    'resize',
    'rightchange',
    'scrollablechange',
    'show',
    'tofront',
    'topchange',
    'updatedata',
    'widthchange',
    'ready'
];
let ExtToolComponent = ExtToolComponent_1 = class ExtToolComponent extends EngBase {
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, toolMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    ngOnInit() {
        this.baseOnInit(toolMetaData);
    }
    ngAfterViewInit() {
        this.baseAfterViewInit(toolMetaData);
    }
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ngOnChanges(changes) { this.baseOnChanges(changes); }
};
ExtToolComponent = ExtToolComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ext-tool',
        inputs: toolMetaData.PROPERTIES,
        outputs: toolMetaData.EVENTNAMES,
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtToolComponent_1) }],
        template: '<ng-template></ng-template>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
    tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
], ExtToolComponent);
export { ExtToolComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRvb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtdG9vbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCLHlDQUF5QztBQUN6QywyQ0FBMkM7OztBQUczQyxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBRVgsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxNQUFNLE9BQU8sWUFBWTs7QUFDVCxrQkFBSyxHQUFXLE1BQU0sQ0FBQztBQUN2Qix1QkFBVSxHQUFhO0lBQ25DLEtBQUs7SUFDTCxVQUFVO0lBQ1YsT0FBTztJQUNQLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtJQUNSLFFBQVE7SUFDUixVQUFVO0lBQ1YsS0FBSztJQUNMLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IsV0FBVztJQUNYLE1BQU07SUFDTixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLFFBQVE7SUFDUixlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULElBQUk7SUFDSixhQUFhO0lBQ2IsUUFBUTtJQUNSLFFBQVE7SUFDUixlQUFlO0lBQ2YsY0FBYztJQUNkLE1BQU07SUFDTixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFD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QUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBSUgsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixHQUFHO0lBRUksV0FBVyxDQUFDLE9BQXNCLElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFBLENBQUM7Q0FPekUsQ0FBQTtBQTFCWSxnQkFBZ0I7SUFQNUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVO1FBQy9CLE9BQU8sRUFBRSxZQUFZLENBQUMsVUFBVTtRQUNoQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBZ0IsQ0FBQyxFQUFDLENBQUM7UUFDaEYsUUFBUSxFQUFFLDZCQUE2QjtLQUN4QyxDQUFDO0lBRWdDLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTs2Q0FBM0MsVUFBVSxFQUF5RCxPQUFPO0dBRGxGLGdCQUFnQixDQTBCNUI7U0ExQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy9FeHQub25SZWFkeShmdW5jdGlvbigpIHtcbi8vaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmRlY2xhcmUgdmFyIEV4dDogYW55XG5pbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmV4cG9ydCBjbGFzcyB0b29sTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAndG9vbCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2VuZycsXG4gICAgJ3ZpZXdwb3J0JyxcbiAgICAnYWxpZ24nLFxuICAgICdwbHVnaW5zJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVGb3JtdWxhcycsXG4gICAgJ2FsaWduU2VsZicsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F4aXNMb2NrJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvdHRvbScsXG4gICAgJ2NlbnRlcmVkJyxcbiAgICAnY2xzJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNwbGF5ZWQnLFxuICAgICdkb2NrZWQnLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2hhbmRsZXInLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlQW5pbWF0aW9uJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdoaWRlT25NYXNrVGFwJyxcbiAgICAnaHRtbCcsXG4gICAgJ2ljb25DbHMnLFxuICAgICdpZCcsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xlZnQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGFzc2l2ZScsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWNvcmQnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWxhdGl2ZScsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmlnaHQnLFxuICAgICdyaXBwbGUnLFxuICAgICdzY29wZScsXG4gICAgJ3Njcm9sbGFibGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaG93QW5pbWF0aW9uJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZWZ1bERlZmF1bHRzJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0b3BFdmVudCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG9vbE93bmVyJyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd0eXBlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndXNlclNlbGVjdGFibGUnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3ZWlnaHQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3gnLFxuICAgICd4dHlwZScsXG4gICAgJ3knLFxuICAgICd6SW5kZXgnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG57bmFtZTonYmVmb3JlYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWRvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J3Rvb2wnfSxcbntuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J3Rvb2wsZXZlbnQnfSxcbntuYW1lOidib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2NlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidjbGljaycscGFyYW1ldGVyczondG9vbCxlLG93bmVyJ30sXG57bmFtZTonZGVzdHJveScscGFyYW1ldGVyczonJ30sXG57bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZXJhc2VkJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidmbG9hdGluZ2NoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcbntuYW1lOidmb2N1cycscGFyYW1ldGVyczondG9vbCxldmVudCd9LFxue25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J3Rvb2wsZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOid0b29sLGV2ZW50J30sXG57bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2luaXRpYWxpemUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2xlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLHRvSW5kZXgsZnJvbUluZGV4J30sXG57bmFtZTonb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J3BhaW50ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixlbGVtZW50J30sXG57bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcbntuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG57bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcbntuYW1lOidyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTondG9mcm9udCcscGFyYW1ldGVyczondG9vbCd9LFxue25hbWU6J3RvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTondXBkYXRlZGF0YScscGFyYW1ldGVyczonc2VuZGVyLG5ld0RhdGEnfSxcbntuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuJ2FkZGVkJyxcbidiZWZvcmVib3R0b21jaGFuZ2UnLFxuJ2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxcbidiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG4nYmVmb3JlZG9ja2VkY2hhbmdlJyxcbidiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuJ2JlZm9yZWhpZGRlbmNoYW5nZScsXG4nYmVmb3JlaGlkZScsXG4nYmVmb3JlbGVmdGNoYW5nZScsXG4nYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxcbidiZWZvcmVtYXhXaWR0aGNoYW5nZScsXG4nYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxcbidiZWZvcmVtaW5XaWR0aGNoYW5nZScsXG4nYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLFxuJ2JlZm9yZXJpZ2h0Y2hhbmdlJyxcbidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxcbidiZWZvcmVzaG93JyxcbidiZWZvcmV0b2Zyb250JyxcbidiZWZvcmV0b3BjaGFuZ2UnLFxuJ2JlZm9yZXdpZHRoY2hhbmdlJyxcbidibHVyJyxcbidib3R0b21jaGFuZ2UnLFxuJ2NlbnRlcmVkY2hhbmdlJyxcbidjbGljaycsXG4nZGVzdHJveScsXG4nZGlzYWJsZWRjaGFuZ2UnLFxuJ2RvY2tlZGNoYW5nZScsXG4nZXJhc2VkJyxcbidmbG9hdGluZ2NoYW5nZScsXG4nZm9jdXMnLFxuJ2ZvY3VzZW50ZXInLFxuJ2ZvY3VzbGVhdmUnLFxuJ2Z1bGxzY3JlZW4nLFxuJ2hlaWdodGNoYW5nZScsXG4naGlkZGVuY2hhbmdlJyxcbidoaWRlJyxcbidpbml0aWFsaXplJyxcbidsZWZ0Y2hhbmdlJyxcbidtYXhIZWlnaHRjaGFuZ2UnLFxuJ21heFdpZHRoY2hhbmdlJyxcbidtaW5IZWlnaHRjaGFuZ2UnLFxuJ21pbldpZHRoY2hhbmdlJyxcbidtb3ZlZCcsXG4nb3JpZW50YXRpb25jaGFuZ2UnLFxuJ3BhaW50ZWQnLFxuJ3Bvc2l0aW9uZWRjaGFuZ2UnLFxuJ3JlbW92ZWQnLFxuJ3Jlc2l6ZScsXG4ncmlnaHRjaGFuZ2UnLFxuJ3Njcm9sbGFibGVjaGFuZ2UnLFxuJ3Nob3cnLFxuJ3RvZnJvbnQnLFxuJ3RvcGNoYW5nZScsXG4ndXBkYXRlZGF0YScsXG4nd2lkdGhjaGFuZ2UnLFxuJ3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC10b29sJyxcbiAgaW5wdXRzOiB0b29sTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogdG9vbE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRUb29sQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0VG9vbENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuICAgIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IEVuZ0Jhc2UpIHtcbiAgICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LHRvb2xNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KHRvb2xNZXRhRGF0YSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KHRvb2xNZXRhRGF0YSlcbiAgICB9XG5cblxuXG4gIC8vcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgLy8gIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAvL31cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cblxuXG5cbiAgIC8vIHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAvLyAgIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0NoZWNrZWQnKVxuICAvL31cbn1cblxuIl19