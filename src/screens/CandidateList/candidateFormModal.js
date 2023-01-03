import { Component } from "react";
import Input from "../../components/input/input.component";
import Select from "../../components/input/select.component";
import {
  addCandidate,
  updateCandidate,
} from "../../services/candidate.service";

export default class CandidateFormModal extends Component {
  state = {
    name: "",
    dob: "",
    age: "",
    address: "",
    state: "",
    pincode: "",
    email: "",
    result: "",
    mode: "new",
  };

  onSubmit = (event) => {
    const candidate = this.state;
    const { mode } = this.state;
    if (mode === "edit") {
      const candidateId = this.props.selectedCandidate._id;
      updateCandidate(candidateId, candidate);
    } else {
      addCandidate(candidate);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  setMode = () => {
    const { selectedCandidate } = this.props;
    const isEmpty = Object.keys(selectedCandidate).length === 0;
    if (!isEmpty) {
      const updatedState = {
        ...selectedCandidate,
        mode: "edit",
      };
      this.setState(updatedState);
    } else {
      this.setState({ mode: "new" });
    }
  };

  componentDidMount = () => {
    this.setMode();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.selectedCandidate !== prevProps.selectedCandidate) {
      this.setMode();
    }
  };

  render() {
    const { mode } = this.state;
    const { selectedCandidate } = this.props;
    return (
      <div className="modal fade" id="candidateFormModal" tabindex="-1">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">
                {mode === "new" ? "Create" : "Edit"} Candidate
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-6">
                    <Input
                      label="Name"
                      placeholder="enter your name"
                      type="text"
                      handleChange={this.handleChange}
                      name="name"
                      defaultValue={selectedCandidate.name}
                    />
                    <Input
                      label="Date of Birth"
                      placeholder="enter your date of birth"
                      type="date"
                      handleChange={this.handleChange}
                      name="dob"
                      defaultValue={selectedCandidate.dob}
                    />
                    <Input
                      label="Age"
                      placeholder="enter your age"
                      type="number"
                      handleChange={this.handleChange}
                      name="age"
                      defaultValue={selectedCandidate.age}
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      label="Address"
                      placeholder="enter your address"
                      type="text"
                      handleChange={this.handleChange}
                      name="address"
                      defaultValue={selectedCandidate.address}
                    />
                    <Select
                      label="State"
                      placeholder="enter your state"
                      type="datalist"
                      handleChange={this.handleChange}
                      name="state"
                      defaultValue={selectedCandidate.state}
                    />
                    <Input
                      label="Pincode"
                      placeholder="enter your pincode"
                      type="text"
                      handleChange={this.handleChange}
                      name="pincode"
                      defaultValue={selectedCandidate.pincode}
                    />
                    <div className="modal_footer_buttons">
                      <button
                        type="button"
                        className="deskala_white_btn mx-4"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="deskala_blue_btn">
                        {mode === "new" ? "Create" : "Update"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
