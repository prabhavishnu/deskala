import { Component } from "react";
import "./tableStyles.css"
export const tableRenderer = () => (
  <table class="table mt-4 mb-4 candidate_table">
    <thead>
      <tr className="candidate_table_headers">
        <th scope="col"></th>
        <th scope="col">Name</th>
        <th scope="col">Date Of Birth</th>
        <th scope="col">Email</th>
        <th scope="col">Result</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>1</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
);
