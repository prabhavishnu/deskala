import React, { Component } from "react";
import CandidatesTable from "../../components/table/table";
import "./CandidatesListStyles.css";
import "../Login/LoginScreenStyles.css";
import CandidateFormModal from "./candidateFormModal";
import { getCandidates } from "../../services/candidate.service";

export default class CandidatesList extends Component {
  state = {
    candidates: [],
    selectedCandidate: {},
  };
  componentDidMount = async () => {
    const candidates = await getCandidates();
    this.setState({ candidates });
  };

  addNewCandidate = () => {
    this.setState({ selectedCandidate: {} });
  };

  updateCandidate = (candidate) => {
    this.setState({ selectedCandidate: candidate });
  };

  render() {
    const { candidates, selectedCandidate } = this.state;
    return (
      <div>
        <div className="p-3">
          <h3 className="deskala_assignment_title">Deskala - Assignment</h3>
        </div>
        <hr className="m-0 mb-4" />
        <div style={{ paddingLeft: "100px" }}>
          <p>Candidates List: {candidates.length}</p>
          <CandidatesTable
            candidates={candidates}
            updateCandidate={this.updateCandidate}
          />
          <button
            type="button"
            className="Add_candidate_button btn btn-link"
            data-bs-toggle="modal"
            data-bs-target="#candidateFormModal"
            onClick={() => {
              this.addNewCandidate();
            }}
          >
            + Add new candidate
          </button>
          <CandidateFormModal selectedCandidate={selectedCandidate} />
        </div>
      </div>
    );
  }
}
