function StudentCard({ name, course, level }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Course: {course}</p>
      <p>Level: {level}</p>
    </div>
  );
}
export default StudentCard;
