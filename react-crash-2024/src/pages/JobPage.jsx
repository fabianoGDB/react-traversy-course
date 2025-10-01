import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, []);

  console.log(`/api/job/${id}`);
  console.log(job);
  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="text-2xl text-indigo-500">{job.title} </div>
      )}
    </>
  );
};

export default JobPage;
