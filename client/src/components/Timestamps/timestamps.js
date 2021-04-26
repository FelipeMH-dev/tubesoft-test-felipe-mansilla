import React from "react";
import { useFetch } from "../../hooks/useFetch";
export default function Timestamps() {
  const { error, loading, data } = useFetch(
    "http://localhost:4000/api/timestamps"
  );

  if (loading)
    return (
      <div className="container">
        <h4 className="text-center">Loading Timestamps...</h4>
      </div>
    );
  if (error) {
    return (
      <div className="container">
        <h4 className="text-center">Error</h4>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <table className="table  table-bordered  bg-success">
          <tbody>
            {data.data.map(({ id, timestamp }) => (
              <tr key={id} className="text-center text-white ">
                <th>{id}</th>
                <th>
                  <h4>{timestamp}</h4>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
