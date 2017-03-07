/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from './progress-bar.component.ngfactory';
import * as import2 from '../../../../build/components/body/progress-bar.component';
import * as import3 from './body-row-wrapper.component.ngfactory';
import * as import4 from '@angular/common';
import * as import5 from '../../../../build/components/body/body-row-wrapper.component';
import * as import6 from './body-row.component.ngfactory';
import * as import7 from '../../../../build/components/body/body-row.component';
import * as import8 from './scroller.component.ngfactory';
import * as import9 from '../../../../build/components/body/scroller.component';
import * as import10 from '../../../../build/components/body/body.component';
import * as import11 from './selection.component.ngfactory';
import * as import12 from '../../../../build/components/body/selection.component';
const styles_DataTableBodyComponent:any[] = ([] as any[]);
export const RenderType_DataTableBodyComponent:import0.RendererTypeV2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_DataTableBodyComponent,
  data: {}
}
);
function View_DataTableBodyComponent_1():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵeld(0,(null as any),(null as any),2,'datatable-progress',([] as any[]),(null as any),(null as any),(null as any),import1.View_ProgressBarComponent_0,import1.RenderType_ProgressBarComponent),
    import0.ɵdid(24576,(null as any),0,import2.ProgressBarComponent,([] as any[]),(null as any),(null as any)),
    import0.ɵted((null as any),['\n      '])
  ]
  ,(null as any),(null as any));
}
function View_DataTableBodyComponent_3():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      import0.ɵeld(0,(null as any),(null as any),7,'datatable-row-wrapper',[[
        'class',
        'datatable-row-wrapper'
      ]
    ],(null as any),[
      [
        (null as any),
        'rowContextmenu'
      ]
      ,
      [
        (null as any),
        'contextmenu'
      ]

    ]
    ,(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:any = view.component;
      if (('contextmenu' === eventName)) {
        const pd_0:any = ((<any>import0.ɵnov(view,2).onContextmenu($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      if (('rowContextmenu' === eventName)) {
        const pd_1:any = ((<any>comp.rowContextmenu.emit($event)) !== false);
        allowDefault = (pd_1 && allowDefault);
      }
      return allowDefault;
    },import3.View_DataTableRowWrapperComponent_0,import3.RenderType_DataTableRowWrapperComponent),
    import0.ɵdid(139264,(null as any),0,import4.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵdid(24576,(null as any),0,import5.DataTableRowWrapperComponent,([] as any[]),{
      rowDetail: [
        0,
        'rowDetail'
      ]
      ,
      detailRowHeight: [
        1,
        'detailRowHeight'
      ]
      ,
      expanded: [
        2,
        'expanded'
      ]
      ,
      row: [
        3,
        'row'
      ]

    }
    ,{rowContextmenu: 'rowContextmenu'}),
    import0.ɵted(0,['\n          ']),
      import0.ɵeld(0,(null as any),0,2,'datatable-body-row',[[
        'tabindex',
        '-1'
      ]
    ],[
      [
        3,
        'className',
        0
      ]
      ,
      [
        2,
        'height',
        'px'
      ]
      ,
      [
        2,
        'width',
        'px'
      ]

    ]
    ,[
      [
        (null as any),
        'activate'
      ]
      ,
      [
        (null as any),
        'keydown'
      ]

    ]
    ,(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:any = view.component;
      if (('keydown' === eventName)) {
        const pd_0:any = ((<any>import0.ɵnov(view,5).onKeyDown($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      if (('activate' === eventName)) {
        const pd_1:any = ((<any>import0.ɵnov(view.parent.parent,3).onActivate($event,view.context.index)) !== false);
        allowDefault = (pd_1 && allowDefault);
      }
      return allowDefault;
    },import6.View_DataTableBodyRowComponent_0,import6.RenderType_DataTableBodyRowComponent),
    import0.ɵdid(24576,(null as any),0,import7.DataTableBodyRowComponent,[import0.ElementRef],{
      columns: [
        0,
        'columns'
      ]
      ,
      innerWidth: [
        1,
        'innerWidth'
      ]
      ,
      rowClass: [
        2,
        'rowClass'
      ]
      ,
      row: [
        3,
        'row'
      ]
      ,
      offsetX: [
        4,
        'offsetX'
      ]
      ,
      isSelected: [
        5,
        'isSelected'
      ]
      ,
      rowHeight: [
        6,
        'rowHeight'
      ]

    }
    ,{activate: 'activate'}),
    import0.ɵted((null as any),['\n          ']),
    import0.ɵted(0,['\n        '])
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.getRowsStyles(view.context.$implicit);
    check(view,1,0,currVal_0);
    const currVal_1:any = comp.rowDetail;
    const currVal_2:any = comp.detailRowHeight;
    const currVal_3:any = (view.context.$implicit.$$expanded === 1);
    const currVal_4:any = view.context.$implicit;
    check(view,2,0,currVal_1,currVal_2,currVal_3,currVal_4);
    const currVal_5:any = comp.columns;
    const currVal_6:any = comp.innerWidth;
    const currVal_7:any = comp.rowClass;
    const currVal_8:any = view.context.$implicit;
    const currVal_9:any = comp.offsetX;
    const currVal_10:any = import0.ɵnov(view.parent.parent,3).getRowSelected(view.context.$implicit);
    const currVal_11:any = comp.rowHeight;
    check(view,5,0,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11);
  },(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = import0.ɵnov(view,5).cssClass;
    const currVal_1:any = import0.ɵnov(view,5).rowHeight;
    const currVal_2:any = import0.ɵnov(view,5).columnsTotalWidths;
    check(view,4,0,currVal_0,currVal_1,currVal_2);
  });
}
function View_DataTableBodyComponent_2():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      import0.ɵeld(0,(null as any),(null as any),5,'datatable-scroller',[[
        'class',
        'datatable-scroll'
      ]
    ],[
      [
        2,
        'height',
        'px'
      ]
      ,
      [
        2,
        'width',
        'px'
      ]

    ]
      ,[[
        (null as any),
        'scroll'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:any = view.component;
      if (('scroll' === eventName)) {
        const pd_0:any = ((<any>comp.onBodyScroll($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },import8.View_ScrollerComponent_0,import8.RenderType_ScrollerComponent),
      import0.ɵdid(122880,[[
        1,
        4
      ]
    ],0,import9.ScrollerComponent,[
      import0.ElementRef,
      import0.Renderer
    ]
    ,{
      scrollbarV: [
        0,
        'scrollbarV'
      ]
      ,
      scrollbarH: [
        1,
        'scrollbarH'
      ]
      ,
      scrollHeight: [
        2,
        'scrollHeight'
      ]
      ,
      scrollWidth: [
        3,
        'scrollWidth'
      ]

    }
    ,{scroll: 'scroll'}),
    import0.ɵted(0,['\n        ']),
    import0.ɵand(8388608,(null as any),0,1,(null as any),View_DataTableBodyComponent_3),
    import0.ɵdid(401408,(null as any),0,import4.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
    ,{
      ngForOf: [
        0,
        'ngForOf'
      ]
      ,
      ngForTrackBy: [
        1,
        'ngForTrackBy'
      ]

    }
    ,(null as any)),
    import0.ɵted(0,['\n      '])
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.scrollbarV;
    const currVal_1:any = comp.scrollbarH;
    const currVal_2:any = comp.scrollHeight;
    const currVal_3:any = comp.columnGroupWidths.total;
    check(view,1,0,currVal_0,currVal_1,currVal_2,currVal_3);
    const currVal_4:any = comp.temp;
    const currVal_5:any = comp.rowTrackingFn;
    check(view,4,0,currVal_4,currVal_5);
  },(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = import0.ɵnov(view,1).scrollHeight;
    const currVal_1:any = import0.ɵnov(view,1).scrollWidth;
    check(view,0,0,currVal_0,currVal_1);
  });
}
function View_DataTableBodyComponent_4():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'empty-row'
      ]
      ],[[
        3,
        'innerHTML',
        1
      ]
    ],(null as any),(null as any),(null as any),(null as any)),
    import0.ɵted((null as any),['\n      '])
  ]
  ,(null as any),(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.emptyMessage;
    check(view,0,0,currVal_0);
  });
}
export function View_DataTableBodyComponent_0():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵqud(335544320,1,{scroller: 0}),
    import0.ɵted((null as any),['\n    ']),
    import0.ɵeld(0,(null as any),(null as any),11,'datatable-selection',([] as any[]),(null as any),[
      [
        (null as any),
        'select'
      ]
      ,
      [
        (null as any),
        'activate'
      ]

    ]
    ,(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import10.DataTableBodyComponent = view.component;
      if (('select' === eventName)) {
        const pd_0:any = ((<any>comp.select.emit($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      if (('activate' === eventName)) {
        const pd_1:any = ((<any>comp.activate.emit($event)) !== false);
        allowDefault = (pd_1 && allowDefault);
      }
      return allowDefault;
    },import11.View_DataTableSelectionComponent_0,import11.RenderType_DataTableSelectionComponent),
      import0.ɵdid(24576,[[
        'selector',
        4
      ]
    ],0,import12.DataTableSelectionComponent,([] as any[]),{
      rows: [
        0,
        'rows'
      ]
      ,
      selected: [
        1,
        'selected'
      ]
      ,
      selectEnabled: [
        2,
        'selectEnabled'
      ]
      ,
      selectionType: [
        3,
        'selectionType'
      ]
      ,
      rowIdentity: [
        4,
        'rowIdentity'
      ]
      ,
      selectCheck: [
        5,
        'selectCheck'
      ]

    }
    ,{
      activate: 'activate',
      select: 'select'
    }
    ),
    import0.ɵted(0,['\n      ']),
    import0.ɵand(8388608,(null as any),0,1,(null as any),View_DataTableBodyComponent_1),
    import0.ɵdid(8192,(null as any),0,import4.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import0.ɵted(0,['\n      ']),
    import0.ɵand(8388608,(null as any),0,1,(null as any),View_DataTableBodyComponent_2),
    import0.ɵdid(8192,(null as any),0,import4.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import0.ɵted(0,['\n      ']),
    import0.ɵand(8388608,(null as any),0,1,(null as any),View_DataTableBodyComponent_4),
    import0.ɵdid(8192,(null as any),0,import4.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import0.ɵted(0,['\n    ']),
    import0.ɵted((null as any),['\n  '])
  ]
  ,(check,view) => {
    var comp:import10.DataTableBodyComponent = view.component;
    const currVal_0:any = comp.temp;
    const currVal_1:any = comp.selected;
    const currVal_2:any = comp.selectEnabled;
    const currVal_3:any = comp.selectionType;
    const currVal_4:any = comp.rowIdentity;
    const currVal_5:any = comp.selectCheck;
    check(view,3,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5);
    const currVal_6:any = comp.loadingIndicator;
    check(view,6,0,currVal_6);
    const currVal_7:any = ((comp.rows == null)? (null as any): comp.rows.length);
    check(view,9,0,currVal_7);
    const currVal_8:boolean = !((comp.rows == null)? (null as any): comp.rows.length);
    check(view,12,0,currVal_8);
  },(null as any));
}
const RenderType_DataTableBodyComponent_Host:import0.RendererTypeV2 = import0.ɵcrt({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {}
}
);
function View_DataTableBodyComponent_Host_0():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      import0.ɵeld(0,(null as any),(null as any),1,'datatable-body',[[
        'class',
        'datatable-body'
      ]
    ],[
      [
        2,
        'width',
        (null as any)
      ]
      ,
      [
        2,
        'height',
        (null as any)
      ]

    ]
    ,(null as any),(null as any),View_DataTableBodyComponent_0,RenderType_DataTableBodyComponent),
    import0.ɵdid(122880,(null as any),0,import10.DataTableBodyComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(check,view) => {
    check(view,1,0);
  },(check,view) => {
    const currVal_0:any = import0.ɵnov(view,1).bodyWidth;
    const currVal_1:any = import0.ɵnov(view,1).bodyHeight;
    check(view,0,0,currVal_0,currVal_1);
  });
}
export const DataTableBodyComponentNgFactory:import0.ComponentFactory<import10.DataTableBodyComponent> = import0.ɵccf('datatable-body',import10.DataTableBodyComponent,View_DataTableBodyComponent_Host_0);