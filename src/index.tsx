import { Message, MessageType, Widget } from 'iot885-plugin-core';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import packageJson from '../package.json';

type Meta = {
  field: string;
};

export const App = () => {
  const [widget, setWidget] = useState<Widget<Meta>>();
  const [wh, setWH] = React.useState<{
    w: number | string;
    h: number | string;
  }>({ w: '100%', h: 200 });

  const messageEventLister = React.useCallback((evt: MessageEvent) => {
    const { payload, type } = evt.data as Message;
    if (type === MessageType.UPDATE) {
      setWidget(payload);
    }
    if (type === MessageType.SETUP_UI) {
      setWH(payload);
    }
  }, []);

  useEffect(() => {
    console.log(widget);
  }, [widget]);

  useEffect(() => {
    window.addEventListener('message', messageEventLister, false);
    parent.postMessage(
      {
        type: MessageType.MOUNTED,
        payload: window.iframeId,
        source: packageJson.name,
      },
      '*'
    );
  }, []);

  return <div></div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
