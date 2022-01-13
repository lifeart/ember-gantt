import { templateOnlyComponent } from '@glimmer/runtime';
import layout from '../templates/components/gantt-line-title';
import { setComponentTemplate } from '@glimmer/manager';


export default setComponentTemplate(layout, templateOnlyComponent());
