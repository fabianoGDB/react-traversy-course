import { useParams, useLoaderData } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();
  return (
    <>
      {
        <div className="text-2xl text-indigo-500 text-center mt-4 bg-indigo-200">
          {job.title}
        </div>
      }
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);

  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
