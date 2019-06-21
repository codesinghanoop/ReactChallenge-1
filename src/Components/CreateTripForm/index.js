import React from 'react'
import { Formik, Form, Field, FormikProps, ErrorMessage } from 'formik'
import DatePicker from '../DatePicker'
import TextInput from '../TextInput'
import DropDown from '../DropDown'
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    date: Yup.string()
      .required('Required'),
    place: Yup.string()
      .required('Required'),
    type: Yup.string()
      .required('Required'),
  });


class CreateTripForm extends React.Component {

    handleSubmit = (values, formData) => {
        console.log('onsubmit form',formData);
        this.props.createTripAction(values);
        formData.setSubmitting(false);
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
             validationSchema={formSchema}
             onSubmit={this.handleSubmit}
             render= {({ errors, touched, isSubmitting }) => {
                 console.log('the errors are',errors, touched)
                return (
                    <Form>
                        <Field name="date" component={DatePicker} placeholder="Date"/>
                        {errors.date && touched.date ? (
                            <div>{errors.date}</div>
                        ) : null}
                        <Field name="place" component={TextInput} placeholder="Place"/>
                        {errors.place && touched.place ? (
                            <div>{errors.place}</div>
                        ) : null}
                        <Field name="type" component={DropDown} placeholder="Type"/>
                        {errors.type && touched.type ? (
                            <div>{errors.type}</div>
                        ) : null}
                        <button
                            type="submit"
                            disabled={isSubmitting || Object.keys(errors).length}>
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
