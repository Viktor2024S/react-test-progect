import Header from "../Header/Header";
import PilotCard from "../PilotCard/PilotCard";
import officers from "../../officers.json";

export default function App() {
  const isOnline = 2 > 5;
  return (
    <div>
      <Header />
      <ul>
        {officers.map((officer) => {
          return (
            <li key={officer.id}>
              <PilotCard pilot={officer} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
