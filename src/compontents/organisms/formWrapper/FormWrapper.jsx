import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormWrapper.module.scss';
import Form from '../../molecules/form/Form';
import FormFooter from '../../molecules/formFooter/FormFooter';

const FormWrapper = (props) => {
  return (
    <div className={styles.formWrapper}>
      <Form />
    </div>
  );
};

FormWrapper.propTypes = {};

export default FormWrapper;
