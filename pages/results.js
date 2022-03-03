import HatForm from "../components/HatForm";
import { IncomingForm } from "formidable";

function ResultsPage({ formData }) {
  return (
    <>
      <form method="POST" action="/your_details_saved">
        <HatForm data={formData} hidden={true} />
        <h1>Results</h1>
        <p>Your heart is great!</p>
        <button>Back</button>
      </form>
      <a href="/your_details_new">Start again</a>
    </>
  );
}

export async function getServerSideProps({ req: request }) {
  const form = new IncomingForm();

  const formData = await new Promise((resolve, reject) => {
    form.parse(request, (error, fields) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(fields);
    });
  });

  return { props: { formData } };
}

export default ResultsPage;
