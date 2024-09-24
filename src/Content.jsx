import React from 'react';

// Componente Header para mostrar el nombre del curso
const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

// Componente Part para mostrar cada parte del curso con sus ejercicios
const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

// Componente Content que representa tres Part y pasa los datos como props
const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  );
};

// Componente Total para mostrar el número total de ejercicios
const Total = ({ exercises1, exercises2, exercises3 }) => {
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

// Componente principal App
const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  );
};

export default App;
