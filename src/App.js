import React from 'react';
import { Container, Content, Row } from './styles';
import { useState } from 'react';
import Button from './components/button/Button';

import  Input  from './components/input/Input';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0');
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSomaNumeros = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const soma = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(soma));
      setOperation('');
    }
  };

  const handleSubNumeros = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  };

  const handleMultiNumeros = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const multiplica = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplica));
      setOperation('');
    }
  };

  const handleDivNumeros = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const dividir = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(dividir));
      setOperation('');
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSomaNumeros();
          break;
        case '-':
          handleSubNumeros();
          break;
        case 'x':
          handleMultiNumeros();
          break;
          case '/':
          handleDivNumeros();
          break;
        default:
          break;
      }
    } else {

    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="c" onClick={() => handleOnClear()} />
          <Button label="..." onClick={handleDivNumeros}/>
          <Button label="%" onClick={() => handleOnClear()} />
          <Button label="/" onClick={handleDivNumeros}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={handleMultiNumeros} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={handleSubNumeros} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSomaNumeros} />
          
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="," onClick={() => handleAddNumber(',')} />
          
          {/* <Button label="_" onClick={() => handleAddNumber('3')} /> */}
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
