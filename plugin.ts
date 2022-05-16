import { initPluginJson } from 'iot885-plugin-core/scripts';
import { WidgetPlugin } from 'iot885-plugin-core/src/plugin';

initPluginJson(
  new WidgetPlugin({
    author: 'author',
    name: 'name',
    version: '0.0.1',
    description: 'description',
  })
);
