const Header = (props) => <h1>{props.course}</h1>;

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
        <Part key={part.id} part={part} />
    ))}
  </div>
);

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);

const Total = ({ parts }) => {

    const total = parts.reduce((sum, part) => sum + part.exercises, 0);

    return <p>Number of exercises {total}</p>;
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      
    </div>
  );
};

export default Course;
