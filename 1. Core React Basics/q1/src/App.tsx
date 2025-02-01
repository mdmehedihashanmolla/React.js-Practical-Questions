import UserCard from "./Components/UserCard";

const App: React.FC = () => {
  return (
    <div>
      <h1>React + TypeScript Props Example</h1>
      <UserCard name="MD Mehedi " age={21} isStudent={true} />
    </div>
  );
};

export default App;
