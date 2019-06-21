import React from 'react'
import { Formik, Form, Field, FormikProps, ErrorMessage } from 'formik'
import DatePicker from '../DatePicker'
import TextInput from '../TextInput'
import DropDown from '../DropDown'

class CreateTripForm extends React.Component {

    handleSubmit = (values, {
        props = this.props,
        setSubmitting
      }) => {
        console.log(values);
        this.props.createTripAction(values);
        setSubmitting(false);
        return;
    }

    render() {
        return (
            <Formik
            initialValues={{
                date: '',
                place: '',
                type: ''
             }}
             validate={(values) => {
               let errors = [];
               if(!values.date)
                  errors.date = "Date is Required";
               if(!values.place)
                  errors.place = "Place is required";
               if(!values.type)
                  errors.type = "Type is required";
                  //check if my values have errors
                  return errors;
             }}
             onSubmit={this.handleSubmit}
             render= {(formProps) => {
                return (
                    <Form>
                        <Field name="date" component={DatePicker} placeholder="Date"/>
                        <ErrorMessage name="date" />
                        <Field name="place" component={TextInput} placeholder="Place"/>
                        <ErrorMessage name="place" />
                        <Field name="type" component={DropDown} placeholder="Type"/>
                        <ErrorMessage name="type" />
                        <button
                            type="submit"
                            disabled={formProps.isSubmitting}>
                                Submit Form
                        </button>
                    </Form>
                )
             }}
            >

            </Formik>
        )
    }

}

export default CreateTripForm
