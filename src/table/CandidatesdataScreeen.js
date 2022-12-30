import React, { Component } from "react";
import { tableRenderer } from "./table";
import "./CandidatesdataScreenStyles.css";
import { candidateFormModal } from "./candidateFormModal";

export default class CandidatesdataScreen extends Component {
  render() {
    return (
      <div>
        <div className="p-3">
          <h3 className="deskala_assignment_title">Deskala - Assignment</h3>
        </div>
        <hr className="m-0 mb-4" />
        <div style={{ paddingLeft: "100px" }}>
          <p>Candidates List 5</p>

          {tableRenderer()}
          <button
            type="button"
            className="Add_candidate_button btn btn-link"
            data-toggle="modal"
            data-target="#candidateFormModal"
          >
            + Add New Candidate
          </button>
          {/* {candidateFormModal()} */}
        </div>
        <div
          className="modal fade"
          id="candidateFormModal"
          tabindex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
