type UserCardProps = {
  name: string;
  age: number;
  isStudent: boolean;
};
const UserCard: React.FC<UserCardProps> = ({ name, age, isStudent }) => {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}
    >
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isStudent ? "Student" : "Not a Student"}</p>
    </div>
  );
};

export default UserCard;
