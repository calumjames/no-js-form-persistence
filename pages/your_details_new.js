import YourDetailsPageContent from "../components/YourDetailsPageContent";

function YourDetailsNewPage({ formData }) {
  return <YourDetailsPageContent formData={formData} />;
}

export const getServerSideProps = async () => {
  return {
    props: {
      formData: {
        name: "",
      },
    },
  };
};

export default YourDetailsNewPage;
