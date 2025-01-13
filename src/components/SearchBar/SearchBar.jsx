import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";

const SearchBar = ({ handleChange, query }) => {
  const onSubmit = (values) => {
    handleChange(values.query);
  };

  const initialValues = {
    query,
  };
  return (
    <div className={s.searchBar}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field
            name="query"
            className={s.input}
            placeholder="Введіть назву фільму..."
          />
          <button type="submit">Шукати</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;