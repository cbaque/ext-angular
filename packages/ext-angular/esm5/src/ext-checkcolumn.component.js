//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { EngBase } from './eng-base';
var checkcolumnMetaData = /** @class */ (function () {
    function checkcolumnMetaData() {
    }
    checkcolumnMetaData.XTYPE = 'checkcolumn';
    checkcolumnMetaData.PROPERTIES = [
        'eng',
        'viewport',
        'align',
        'plugins',
        'responsiveConfig',
        'responsiveFormulas',
        'activeChildTabIndex',
        'activeItem',
        'align',
        'alignSelf',
        'allowFocusingDisabledChildren',
        'alwaysOnTop',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'autoDestroy',
        'autoSize',
        'axisLock',
        'bind',
        'bodyCls',
        'border',
        'bottom',
        'cardSwitchAnimation',
        'cell',
        'centered',
        'cls',
        'columns',
        'computedWidth',
        'constrainAlign',
        'contentEl',
        'control',
        'controller',
        'data',
        'dataIndex',
        'defaultColumnUI',
        'defaultEditor',
        'defaultFocus',
        'defaultListenerScope',
        'defaults',
        'defaultToolWeights',
        'defaultType',
        'defaultWidth',
        'depends',
        'disabled',
        'displayed',
        'docked',
        'draggable',
        'editable',
        'editor',
        'editorDefaults',
        'exportRenderer',
        'exportStyle',
        'exportSummaryRenderer',
        'filter',
        'flex',
        'floated',
        'focusableContainer',
        'focusCls',
        'formatter',
        'fullscreen',
        'groupable',
        'grouper',
        'groupHeaderTpl',
        'headerCheckbox',
        'headerCheckboxAlign',
        'height',
        'hidden',
        'hideable',
        'hideAnimation',
        'hideMode',
        'hideOnMaskTap',
        'hideShowMenuItem',
        'html',
        'id',
        'ignore',
        'ignoreExport',
        'inactiveChildTabIndex',
        'innerCls',
        'instanceCls',
        'itemId',
        'items',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'layout',
        'left',
        'listeners',
        'locked',
        'manageBorders',
        'margin',
        'masked',
        'maxHeight',
        'maxWidth',
        'menu',
        'menuDisabled',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'name',
        'nameable',
        'nameHolder',
        'padding',
        'plugins',
        'publishes',
        'record',
        'reference',
        'referenceHolder',
        'relative',
        'renderer',
        'renderTo',
        'reserveScrollbar',
        'resetFocusPosition',
        'resizable',
        'right',
        'ripple',
        'scope',
        'scratchCell',
        'scrollable',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'showAnimation',
        'sortable',
        'sorter',
        'stateful',
        'statefulDefaults',
        'stateId',
        'stopSelection',
        'style',
        'summary',
        'summaryCell',
        'summaryDataIndex',
        'summaryFormatter',
        'summaryRenderer',
        'tabIndex',
        'text',
        'toFrontOnShow',
        'toolDefaults',
        'tools',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'twoWayBindable',
        'ui',
        'userCls',
        'userSelectable',
        'verticalOverflow',
        'viewModel',
        'weight',
        'weighted',
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
    checkcolumnMetaData.EVENTS = [
        { name: 'activate', parameters: 'newActiveItem,checkcolumn,oldActiveItem' },
        { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
        { name: 'add', parameters: 'checkcolumn,item,index' },
        { name: 'added', parameters: 'sender,container,index' },
        { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforecheckchange', parameters: 'checkcolumn,rowIndex,checked,record,e' },
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
        { name: 'beforetofront', parameters: 'checkcolumn' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'checkcolumn,event' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'checkchange', parameters: 'checkcolumn,rowIndex,checked,record,e' },
        { name: 'deactivate', parameters: 'oldActiveItem,checkcolumn,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'checkcolumn,event' },
        { name: 'focusenter', parameters: 'checkcolumn,event' },
        { name: 'focusleave', parameters: 'checkcolumn,event' },
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
        { name: 'move', parameters: 'checkcolumn,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'remove', parameters: 'checkcolumn,item,index' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'renderedchange', parameters: 'checkcolumn,item,rendered' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'show', parameters: 'sender' },
        { name: 'tofront', parameters: 'checkcolumn' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    checkcolumnMetaData.EVENTNAMES = [
        'activate',
        'activeItemchange',
        'add',
        'added',
        'beforeactiveItemchange',
        'beforebottomchange',
        'beforecenteredchange',
        'beforecheckchange',
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
        'checkchange',
        'deactivate',
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
        'move',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'remove',
        'removed',
        'renderedchange',
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
    return checkcolumnMetaData;
}());
export { checkcolumnMetaData };
var ExtCheckcolumnComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCheckcolumnComponent, _super);
    function ExtCheckcolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, checkcolumnMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtCheckcolumnComponent_1 = ExtCheckcolumnComponent;
    ExtCheckcolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit(checkcolumnMetaData);
    };
    ExtCheckcolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit(checkcolumnMetaData);
    };
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ExtCheckcolumnComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
    var ExtCheckcolumnComponent_1;
    ExtCheckcolumnComponent = ExtCheckcolumnComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-checkcolumn',
            inputs: checkcolumnMetaData.PROPERTIES,
            outputs: checkcolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCheckcolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
    ], ExtCheckcolumnComponent);
    return ExtCheckcolumnComponent;
}(EngBase));
export { ExtCheckcolumnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNoZWNrY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWNoZWNrY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUFDMUIseUNBQXlDO0FBQ3pDLDJDQUEyQzs7QUFHM0MsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckM7SUFBQTtJQWdUQSxDQUFDO0lBL1NlLHlCQUFLLEdBQVcsYUFBYSxDQUFDO0lBQzlCLDhCQUFVLEdBQWE7UUFDbkMsS0FBSztRQUNMLFVBQVU7UUFDVixPQUFPO1FBQ1AsU0FBUztRQUNULGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixPQUFPO1FBQ1AsV0FBVztRQUNYLCtCQUErQjtRQUMvQixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixVQUFVO1FBQ1YsVUFBVTtRQUNWLE1BQU07UUFDTixTQUFTO1FBQ1QsUUFBUTtRQUNSLFFBQVE7UUFDUixxQkFBcUI7UUFDckIsTUFBTTtRQUNOLFVBQVU7UUFDVixLQUFLO1FBQ0wsU0FBUztRQUNULGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFNBQVM7UUFDVCxZQUFZO1FBQ1osTUFBTTtRQUNOLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGNBQWM7UUFDZCxzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2IsY0FBYztRQUNkLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVztRQUNY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LG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBQTNDLFVBQVUsRUFBeUQsT0FBTztPQURsRix1QkFBdUIsQ0EwQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQTFCRCxDQUE2QyxPQUFPLEdBMEJuRDtTQTFCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvL0V4dC5vblJlYWR5KGZ1bmN0aW9uKCkge1xuLy9pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZGVjbGFyZSB2YXIgRXh0OiBhbnlcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuZXhwb3J0IGNsYXNzIGNoZWNrY29sdW1uTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnY2hlY2tjb2x1bW4nO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdlbmcnLFxuICAgICd2aWV3cG9ydCcsXG4gICAgJ2FsaWduJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdyZXNwb25zaXZlRm9ybXVsYXMnLFxuICAgICdhY3RpdmVDaGlsZFRhYkluZGV4JyxcbiAgICAnYWN0aXZlSXRlbScsXG4gICAgJ2FsaWduJyxcbiAgICAnYWxpZ25TZWxmJyxcbiAgICAnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdhdXRvRGVzdHJveScsXG4gICAgJ2F1dG9TaXplJyxcbiAgICAnYXhpc0xvY2snLFxuICAgICdiaW5kJyxcbiAgICAnYm9keUNscycsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvdHRvbScsXG4gICAgJ2NhcmRTd2l0Y2hBbmltYXRpb24nLFxuICAgICdjZWxsJyxcbiAgICAnY2VudGVyZWQnLFxuICAgICdjbHMnLFxuICAgICdjb2x1bW5zJyxcbiAgICAnY29tcHV0ZWRXaWR0aCcsXG4gICAgJ2NvbnN0cmFpbkFsaWduJyxcbiAgICAnY29udGVudEVsJyxcbiAgICAnY29udHJvbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGF0YUluZGV4JyxcbiAgICAnZGVmYXVsdENvbHVtblVJJyxcbiAgICAnZGVmYXVsdEVkaXRvcicsXG4gICAgJ2RlZmF1bHRGb2N1cycsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGVmYXVsdHMnLFxuICAgICdkZWZhdWx0VG9vbFdlaWdodHMnLFxuICAgICdkZWZhdWx0VHlwZScsXG4gICAgJ2RlZmF1bHRXaWR0aCcsXG4gICAgJ2RlcGVuZHMnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2RvY2tlZCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2VkaXRhYmxlJyxcbiAgICAnZWRpdG9yJyxcbiAgICAnZWRpdG9yRGVmYXVsdHMnLFxuICAgICdleHBvcnRSZW5kZXJlcicsXG4gICAgJ2V4cG9ydFN0eWxlJyxcbiAgICAnZXhwb3J0U3VtbWFyeVJlbmRlcmVyJyxcbiAgICAnZmlsdGVyJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmb2N1c2FibGVDb250YWluZXInLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2Zvcm1hdHRlcicsXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdncm91cGFibGUnLFxuICAgICdncm91cGVyJyxcbiAgICAnZ3JvdXBIZWFkZXJUcGwnLFxuICAgICdoZWFkZXJDaGVja2JveCcsXG4gICAgJ2hlYWRlckNoZWNrYm94QWxpZ24nLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlYWJsZScsXG4gICAgJ2hpZGVBbmltYXRpb24nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2hpZGVPbk1hc2tUYXAnLFxuICAgICdoaWRlU2hvd01lbnVJdGVtJyxcbiAgICAnaHRtbCcsXG4gICAgJ2lkJyxcbiAgICAnaWdub3JlJyxcbiAgICAnaWdub3JlRXhwb3J0JyxcbiAgICAnaW5hY3RpdmVDaGlsZFRhYkluZGV4JyxcbiAgICAnaW5uZXJDbHMnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2l0ZW1zJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xheW91dCcsXG4gICAgJ2xlZnQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdsb2NrZWQnLFxuICAgICdtYW5hZ2VCb3JkZXJzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWFza2VkJyxcbiAgICAnbWF4SGVpZ2h0JyxcbiAgICAnbWF4V2lkdGgnLFxuICAgICdtZW51JyxcbiAgICAnbWVudURpc2FibGVkJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ25hbWVIb2xkZXInLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlZmVyZW5jZUhvbGRlcicsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyZXInLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3Jlc2VydmVTY3JvbGxiYXInLFxuICAgICdyZXNldEZvY3VzUG9zaXRpb24nLFxuICAgICdyZXNpemFibGUnLFxuICAgICdyaWdodCcsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Njb3BlJyxcbiAgICAnc2NyYXRjaENlbGwnLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc2hvd0FuaW1hdGlvbicsXG4gICAgJ3NvcnRhYmxlJyxcbiAgICAnc29ydGVyJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZWZ1bERlZmF1bHRzJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0b3BTZWxlY3Rpb24nLFxuICAgICdzdHlsZScsXG4gICAgJ3N1bW1hcnknLFxuICAgICdzdW1tYXJ5Q2VsbCcsXG4gICAgJ3N1bW1hcnlEYXRhSW5kZXgnLFxuICAgICdzdW1tYXJ5Rm9ybWF0dGVyJyxcbiAgICAnc3VtbWFyeVJlbmRlcmVyJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0ZXh0JyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3Rvb2xEZWZhdWx0cycsXG4gICAgJ3Rvb2xzJyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd1c2VyU2VsZWN0YWJsZScsXG4gICAgJ3ZlcnRpY2FsT3ZlcmZsb3cnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3ZWlnaHQnLFxuICAgICd3ZWlnaHRlZCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3h0eXBlJyxcbiAgICAneScsXG4gICAgJ3pJbmRleCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG57bmFtZTonYWN0aXZhdGUnLHBhcmFtZXRlcnM6J25ld0FjdGl2ZUl0ZW0sY2hlY2tjb2x1bW4sb2xkQWN0aXZlSXRlbSd9LFxue25hbWU6J2FjdGl2ZUl0ZW1jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2FkZCcscGFyYW1ldGVyczonY2hlY2tjb2x1bW4saXRlbSxpbmRleCd9LFxue25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG57bmFtZTonYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWJvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlY2hlY2tjaGFuZ2UnLHBhcmFtZXRlcnM6J2NoZWNrY29sdW1uLHJvd0luZGV4LGNoZWNrZWQscmVjb3JkLGUnfSxcbntuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWRvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2NoZWNrY29sdW1uJ30sXG57bmFtZTonYmVmb3JldG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidjaGVja2NvbHVtbixldmVudCd9LFxue25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2NoZWNrY2hhbmdlJyxwYXJhbWV0ZXJzOidjaGVja2NvbHVtbixyb3dJbmRleCxjaGVja2VkLHJlY29yZCxlJ30sXG57bmFtZTonZGVhY3RpdmF0ZScscGFyYW1ldGVyczonb2xkQWN0aXZlSXRlbSxjaGVja2NvbHVtbixuZXdBY3RpdmVJdGVtJ30sXG57bmFtZTonZGVzdHJveScscGFyYW1ldGVyczonJ30sXG57bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZXJhc2VkJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidmbG9hdGluZ2NoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcbntuYW1lOidmb2N1cycscGFyYW1ldGVyczonY2hlY2tjb2x1bW4sZXZlbnQnfSxcbntuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidjaGVja2NvbHVtbixldmVudCd9LFxue25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2NoZWNrY29sdW1uLGV2ZW50J30sXG57bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2luaXRpYWxpemUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2xlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21vdmUnLHBhcmFtZXRlcnM6J2NoZWNrY29sdW1uLGl0ZW0sdG9JbmRleCxmcm9tSW5kZXgnfSxcbntuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxue25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxue25hbWU6J3Bvc2l0aW9uZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG57bmFtZToncmVtb3ZlJyxwYXJhbWV0ZXJzOidjaGVja2NvbHVtbixpdGVtLGluZGV4J30sXG57bmFtZToncmVtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxue25hbWU6J3JlbmRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidjaGVja2NvbHVtbixpdGVtLHJlbmRlcmVkJ30sXG57bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcbntuYW1lOidyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonY2hlY2tjb2x1bW4nfSxcbntuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG57bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcbidhY3RpdmF0ZScsXG4nYWN0aXZlSXRlbWNoYW5nZScsXG4nYWRkJyxcbidhZGRlZCcsXG4nYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScsXG4nYmVmb3JlYm90dG9tY2hhbmdlJyxcbidiZWZvcmVjZW50ZXJlZGNoYW5nZScsXG4nYmVmb3JlY2hlY2tjaGFuZ2UnLFxuJ2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcbidiZWZvcmVkb2NrZWRjaGFuZ2UnLFxuJ2JlZm9yZWhlaWdodGNoYW5nZScsXG4nYmVmb3JlaGlkZGVuY2hhbmdlJyxcbidiZWZvcmVoaWRlJyxcbidiZWZvcmVsZWZ0Y2hhbmdlJyxcbidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLFxuJ2JlZm9yZW1heFdpZHRoY2hhbmdlJyxcbidiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLFxuJ2JlZm9yZW1pbldpZHRoY2hhbmdlJyxcbidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsXG4nYmVmb3JlcmlnaHRjaGFuZ2UnLFxuJ2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLFxuJ2JlZm9yZXNob3cnLFxuJ2JlZm9yZXRvZnJvbnQnLFxuJ2JlZm9yZXRvcGNoYW5nZScsXG4nYmVmb3Jld2lkdGhjaGFuZ2UnLFxuJ2JsdXInLFxuJ2JvdHRvbWNoYW5nZScsXG4nY2VudGVyZWRjaGFuZ2UnLFxuJ2NoZWNrY2hhbmdlJyxcbidkZWFjdGl2YXRlJyxcbidkZXN0cm95JyxcbidkaXNhYmxlZGNoYW5nZScsXG4nZG9ja2VkY2hhbmdlJyxcbidlcmFzZWQnLFxuJ2Zsb2F0aW5nY2hhbmdlJyxcbidmb2N1cycsXG4nZm9jdXNlbnRlcicsXG4nZm9jdXNsZWF2ZScsXG4nZnVsbHNjcmVlbicsXG4naGVpZ2h0Y2hhbmdlJyxcbidoaWRkZW5jaGFuZ2UnLFxuJ2hpZGUnLFxuJ2luaXRpYWxpemUnLFxuJ2xlZnRjaGFuZ2UnLFxuJ21heEhlaWdodGNoYW5nZScsXG4nbWF4V2lkdGhjaGFuZ2UnLFxuJ21pbkhlaWdodGNoYW5nZScsXG4nbWluV2lkdGhjaGFuZ2UnLFxuJ21vdmUnLFxuJ21vdmVkJyxcbidvcmllbnRhdGlvbmNoYW5nZScsXG4ncGFpbnRlZCcsXG4ncG9zaXRpb25lZGNoYW5nZScsXG4ncmVtb3ZlJyxcbidyZW1vdmVkJyxcbidyZW5kZXJlZGNoYW5nZScsXG4ncmVzaXplJyxcbidyaWdodGNoYW5nZScsXG4nc2Nyb2xsYWJsZWNoYW5nZScsXG4nc2hvdycsXG4ndG9mcm9udCcsXG4ndG9wY2hhbmdlJyxcbid1cGRhdGVkYXRhJyxcbid3aWR0aGNoYW5nZScsXG4ncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWNoZWNrY29sdW1uJyxcbiAgaW5wdXRzOiBjaGVja2NvbHVtbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGNoZWNrY29sdW1uTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENoZWNrY29sdW1uQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2hlY2tjb2x1bW5Db21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMgIHtcbiAgICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBFbmdCYXNlKSB7XG4gICAgICAgIHN1cGVyKGVSZWYubmF0aXZlRWxlbWVudCxjaGVja2NvbHVtbk1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoY2hlY2tjb2x1bW5NZXRhRGF0YSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KGNoZWNrY29sdW1uTWV0YURhdGEpXG4gICAgfVxuXG5cblxuICAvL3B1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gIC8vICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgLy99XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cblxuXG4gICAvLyBwdWJsaWMgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgLy8gICBjb25zb2xlLmxvZygnbmdBZnRlclZpZXdDaGVja2VkJylcbiAgLy99XG59XG5cbiJdfQ==