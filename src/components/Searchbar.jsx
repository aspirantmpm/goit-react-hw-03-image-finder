import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Globalstyle';
import React, { Component } from 'react';
import { Formik } from 'formik';

export class Searchbar extends Component {
  handleSubmit = ({ searchImg } , { resetForm }) => {
    const img = { searchImg } ;
    this.props.onSubmit(img);
    console.log('p', this.props)
    resetForm();
  };

  render() {
    return (
      <Header>
        <Formik initialValues={{ searchImg: '' }} onSubmit={this.handleSubmit}>
          <SearchForm>
            <SearchFormButton type="submit">
              <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            </SearchFormButton>

            <SearchFormInput
              name="images"
              type="text"
              autocomplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </Formik>
      </Header>
    );
  }
}
