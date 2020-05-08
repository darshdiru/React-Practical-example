import React from "react";

function Modal(props) {
  return (
    <div className="container">
      <h2>Fading Modal</h2>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#myModal"
      >
        Open modal
      </button>

      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{props.title}</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">{props.content}</div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
