import { Component } from "react";
import "./tableStyles.css";
import {
  deleteCandidate,
  updateCandidate,
} from "../../services/candidate.service";
import CandidateFormModal from "../../screens/CandidateList/candidateFormModal";

export default class CandidatesTable extends Component {
  onDelete = (candidateId) => {
    let confirm = window.confirm(
      "Are you sure you want to delete this candidate?"
    );
    if (confirm) {
      deleteCandidate(candidateId);
      window.location.reload();
    }
  };

  onUpdate = (candidate) => {
    this.props.updateCandidate(candidate);
  };

  updateResult = (candidateId, event) => {
    const result = event.target.value;
    updateCandidate(candidateId, { result });
  };

  render() {
    const { candidates } = this.props;
    return (
      <table className="table mt-4 mb-4 candidate_table">
        <thead>
          <tr className="candidate_table_headers">
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col">State</th>
            <th scope="col">Result</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, idx) => (
            <tr>
              <th scope="row">{idx + 1}</th>
              <td>{candidate.name}</td>
              <td>{candidate.dob}</td>
              <td>{candidate.age}</td>
              <td>{candidate.address}</td>
              <td>{candidate.state}</td>
              <td>
                <select
                  defaultValue={candidate.result}
                  className="simple_dropdown"
                  onChange={(event) => this.updateResult(candidate._id, event)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Shortlisted">Shortlisted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
              <td>
                <div className="deskala_std_icons">
                  <i
                    className="fa fa-edit"
                    data-bs-toggle="modal"
                    data-bs-target="#candidateFormModal"
                    onClick={() => this.onUpdate(candidate)}
                  ></i>
                  <i
                    className="fa fa-trash"
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.onDelete(candidate._id)}
                  ></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
