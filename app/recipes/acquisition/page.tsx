// Renders the fetched api data from past-work/route.ts (Client side)
export const metadata = {
  title: 'Acquisition',
  description: 'My work and approach on increase user acquisition.',
};

async function getPastWork() {
  const response = await fetch('/api/auth/past-work');
  const data = await response.json();
  return data;
}

export default async function Acquisition() {
  const pastWork = await getPastWork();
  return (
    <div>
      <p>How I acquire users via product</p>
      {pastWork.map((work) => (
        <div key={work.id}>
          <h3>{work.title}</h3>
          <p>{work.description}</p>
          <p>{work.date}</p>
        </div>
      ))}
    </div>
  );
}
