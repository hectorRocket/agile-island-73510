import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import ValidateEmails from "../../utils/validateEmails";

const FIELDS = [
  {
    label: "Survey Title",
    name: "title",
    required: true
  },
  {
    label: "Subject Line",
    name: "subject",
    required: true
  },
  {
    label: "Email Body",
    name: "body",
    required: true
  },
  {
    label: "Recipient List",
    name: "emails",
    required: true
  }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">&nbsp;</div>
        <div className="col s1">&nbsp;</div>
        <div className="col s10">
          <form
            onSubmit={this.props.handleSubmit(() =>
              this.props.onSurveySubmit()
            )}
          >
            {this.renderFields()}
            <Link to="/surveys" className="red btn-flat left white-text">
              Cancel
            </Link>
            <button type="submit" className="teal btn-flat right white-text">
              Next &nbsp;
              <i className="material-icons right">done</i>
            </button>
          </form>
        </div>
        <div className="col s1">&nbsp;</div>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  errors.emails = ValidateEmails(values.emails || "");

  FIELDS.forEach(({ name, label, required }) => {
    if (required && !values[name]) {
      errors[name] = `You must provide ${label.toLowerCase()}`;
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);
