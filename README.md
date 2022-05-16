## Widget Component

與 react 相同，更新 src/index.tsx 內的元件，並在 index.tsx 內綁定至 `#root` Element。

## Form & Info

更新 plugin.ts 內的內容。

`addField` 增加傳入的欄位資訊

```ts
new WidgetPlugin({
  author: 'author',
  name: 'name',
  version: '0.0.1',
  description: 'description',
})
  .addField({
    label: 'Test Text',
    type: 'text',
    name: 'test',
    defaultValue: 'test',
  })
  .addField({
    label: 'Test Select',
    name: 'test2',
    type: 'select',
    options: [{ label: 'Option 1', value: 'option1' }],
  })
```
## Build

完成後，請執行 `npm run build` 建置 plugin widget。

上傳 `plugin.json` 與 `dist/index.js`