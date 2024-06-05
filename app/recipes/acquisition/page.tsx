export const metadata = {
   title: 'Acquisition',
   description: 'My work and approach on increase user acquisition.',
 };
 
 async function getPastWork() {
   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';
   console.log('Base URL:', baseUrl); // Debugging line to check base URL
   try {
     const response = await fetch(`${baseUrl}/api/past-work`);
     console.log('API Response Status:', response.status); // Debugging line to check response status
     if (!response.ok) {
       throw new Error('Failed to fetch data');
     }
     const data = await response.json();
     console.log('Fetched Data:', data); // Debugging line to check fetched data
     return data.rows; // Return only the rows property
   } catch (error) {
     console.error('Error fetching past work:', error);
     throw error;
   }
 }
 
 export default async function Acquisition() {
   try {
     const pastWork = await getPastWork();
     console.log('Past Work Data:', pastWork); // Debugging line to check past work data
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
   } catch (error) {
     console.error('Error in Acquisition component:', error);
     return <div>Error loading past work</div>;
   }
 }
 