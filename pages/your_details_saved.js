import YourDetailsPageContent from "../components/YourDetailsPageContent";
import { IncomingForm } from "formidable";

function YourDetailsSavedPage({ formData }) {
  return <YourDetailsPageContent formData={formData} />;
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

export default YourDetailsSavedPage;
