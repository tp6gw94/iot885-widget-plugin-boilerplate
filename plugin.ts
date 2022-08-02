import { WidgetPlugin, initPluginJson } from 'iot885-plugin-core/dist/plugin';

initPluginJson(
  new WidgetPlugin({
    author: 'author',
    name: 'name',
    version: '0.0.1',
    description: 'description',
  })
);
