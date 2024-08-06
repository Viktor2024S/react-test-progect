const PilotCard = ({ pilot: { active, avatar, name, rank, spec } }) => {
  return (
    <div>
      <img src={avatar} alt={name} />
      <p>Name: {name}</p>
      <p>Rank: {rank}</p>

      {active && <p>Spec: {spec}</p>}
      <p>Status: {active ? "active" : "not active"}</p>
    </div>
  );
};
export default PilotCard;

// !====== Варіант 1 ======
// export default function PilotCard({ pilot: { avatar, name, rank, spec } }) {
//   return (
//     <div>
//       <img src={avatar} alt={name} />
//       <p>Name: {name}</p>
//       <p>Rank: {rank}</p>
//       <p>Spec: {spec}</p>
//     </div>
//   );
// }
