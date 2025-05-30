import PropTypes from 'prop-types';

export default function Props({ name, age, isStudent }) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Props.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Props.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
