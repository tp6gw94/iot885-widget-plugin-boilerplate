import { usePluginWidget } from 'iot885-plugin-core';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import packageJson from '../package.json';

type Meta = {
  field: string;
};

export const App = () => {
  const widget = usePluginWidget<Meta>({
    name: packageJson.name,
    mode: process.env.REACT_APP_MODE as any,
  });

  useEffect(() => {
    console.log(widget);
  }, [widget]);

  return <div></div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
