import { usePluginWidget } from 'iot885-plugin-core';
import React from 'react';
import ReactDOM from 'react-dom';
import packageJson from '../package.json';

type Meta = {
  field: string;
};

const App = () => {
  const { history, meta, property } = usePluginWidget<Meta>({
    name: packageJson.name,
  });
  if (!history) return null;
  return (
    <div>
      {JSON.stringify(history)}
      {JSON.stringify(meta)}
      {JSON.stringify(property)}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
