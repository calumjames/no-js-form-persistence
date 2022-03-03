import HatForm from "./HatForm";

export default ({ formData }) => {
  return (
    <>
      <h1>Your details</h1>
      <form method="POST" action="/results">
        <HatForm data={formData} />
        <button>Submit</button>
      </form>
      <a href="/your_details_new">Start again</a>
    </>
  );
};
