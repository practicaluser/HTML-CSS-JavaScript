import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [point, setPoint] = useState(0);
  const [grade, setGrade] = useState('신입사원');
  const [salary, setSalary] = useState(5000);
  const [color, setColor] = useState('grey');

  const btnWork = () => {
    setPoint(point + 200);
    if (point === 1000) {
      setGrade('과장');
      setSalary(8000);
    }
    if (point === 2000) {
      setGrade('부장');
      setSalary(12000);
    }
  };

  useEffect(() => {
    if (grade === '과장') {
      setColor('green');
    }
    if (grade === '부장') {
      setColor('gold');
    }
  }, [grade]);

  return (
    <div className="App" style={{ backgroundColor: `${color}` }}>
      <button onClick={btnWork}>일 열심히 함</button>
      <h1>
        당신의 직급은 {grade} 입니다<br></br>
        연봉은 {salary}만원 입니다
      </h1>
    </div>
  );
}

export default App;
