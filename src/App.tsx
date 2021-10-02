import React, { useState } from 'react';
import { useEffect } from 'react';
import generateMessage, { Message } from './Api';
import Header from './components/header';
import Card from './components/card';
import Button from './components/button';
import { Column, Row, Alert, ClearRow, ButtonRow } from './components/common';
import { Snackbar } from '@material-ui/core';


type MessageGroup = {
  errors: Message[];
  warnings: Message[];
  info: Message[];
}

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<MessageGroup>({ errors: [], warnings: [], info: [] });
  const [cleanUp, setCleanUp] = useState<null | (() => void)>(null);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>('');

  useEffect(() => {
    return start();
  }, []);

  const start = () => {
    const cleanUpCallback = generateMessage((message: Message) => {
      if (message.priority == 0) {
        setSnackbarMessage(message.message);
      }
      setMessages(group => {
        let errors = group.errors;
        let warnings = group.warnings;
        let info = group.info;
        if (message.priority === 0) {
          errors = [message, ...group.errors];
        } else if (message.priority === 1) {
          warnings = [message, ...group.warnings];
        } else if (message.priority === 2) {
          info = [message, ...group.info];
        }
        return { errors, warnings, info };
      });
    });
    setCleanUp(() => cleanUpCallback);
    return cleanUpCallback;
  }

  const stop = () => {
    if (cleanUp) {
      cleanUp();
      setCleanUp(null);
    }
  }

  const clearAll = () => {
    setMessages({ errors: [], warnings: [], info: [] });
  }

  const clear = (item: Message, type: string) => {
    let errors = messages.errors;
    let warnings = messages.warnings;
    let info = messages.info;
    let list: Message[] | null = null;
    if (type == "error") {
      list = errors;
    } else if (type == "warning") {
      list = warnings;
    } else if (type == "info") {
      list = info;
    }
    if (list) {
      const index = list.findIndex(x => x.message === item.message && x.priority === item.priority);
      if (index !== -1) {
        list.splice(index, 1);
      }
    }
    setMessages({ errors, warnings, info });
  }

  const closeSnackbar = () => {
    setSnackbarMessage(null);
  };

  const renderGroups = (title: string, type: string, list: Message[]) => {
    const background = type === 'error' ? '#F56236' : type === 'warning' ? '#FCE788' : '#88FCA3';
    return (
      <div>
        <h3>{title}</h3>
        <div>count {list.length}</div>
        <div>
          {list.map((item: Message) => {
            return <Card data-testid="card" key={item.message} background={background}>
              <div>{item.message}</div>
              <ClearRow onClick={() => clear(item, type)}>clear</ClearRow>
            </Card>;
          })
          }
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header data-testid="header">nunffsaid.com Coding Challenge</Header>
      <ButtonRow>
        {!cleanUp ?
          <Button data-testid="start-button" onClick={start}>Start</Button> :
          <Button data-testid="stop-button" onClick={stop}>Stop</Button>
        }
        <Button data-testid="clear-button" onClick={clearAll}>Clear</Button>
      </ButtonRow>
      <Row data-testid="row">
        <Column data-testid="column-1" width="33%">
          {renderGroups('Error Type 1', 'error', messages.errors)}
        </Column>
        <Column data-testid="column-2" width="33%">
          {renderGroups('Warning Type 2', 'warning', messages.warnings)}
        </Column>
        <Column data-testid="column-3" width="33%">
          {renderGroups('Info Type 3', 'info', messages.info)}
        </Column>
      </Row>
      <Snackbar data-testid="snackbar" open={!!snackbarMessage} autoHideDuration={2000} onClose={closeSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert>{snackbarMessage} <span style={{ cursor: 'pointer', marginLeft: '20px' }} onClick={closeSnackbar}>x</span></Alert>
      </Snackbar>
    </div>
  );
}

export default App;
