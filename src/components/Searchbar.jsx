import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Globalstyle';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';

export class Searchbar extends Component {
  handleSubmit = ({ searchImg }, { resetForm }) => {
    const img = { id: nanoid(), searchImg };
    this.props.onSubmit(img);
    resetForm();
  };

  render() {
      return (
        <Header>
          <Formik initialValues={{}} onSubmit={this.handleSubmit}>
            <SearchForm>
              <SearchFormButton type="submit">
                <SearchFormButtonLabel>Search</SearchFormButtonLabel>
              </SearchFormButton>

              <SearchFormInput
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
