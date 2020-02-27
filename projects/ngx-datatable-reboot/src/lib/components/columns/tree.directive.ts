import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngx-datatable-tree-toggle]' })
export class DataTableColumnCellTreeToggleDirective {
  constructor(public template: TemplateRef<any>) {}
}
