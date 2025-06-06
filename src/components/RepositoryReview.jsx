import { View, TextInput, Pressable } from "react-native";
import { Button, ErrorText } from "./Text";
import { useFormik } from "formik";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import theme from "../theme";
import useCreateReview from "../hooks/useCreateReview";

const styles = {
  form: {
    padding: 20,
    backgroundColor: theme.colors.white,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  input: {
    ...theme.input,
  },
  inputError: {
    ...theme.input,
    borderColor: theme.colors.border.error,
  },
  button: {
    ...theme.button,
  },
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .integer()
    .min(0, "Rating cannot be less than 0")
    .max(100, "Rating cannot be over 100")
    .required("Rating is required"),
  text: yup.string(),
});

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: 0,
  text: "",
};

const CreateReviewForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.form}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Repository owner name"
          value={formik.values.ownerName}
          onChangeText={formik.handleChange("ownerName")}
          style={formik.errors.ownerName ? styles.inputError : styles.input}
        />
        {formik.touched.ownerName && formik.errors.ownerName && (
          <ErrorText>{formik.errors.ownerName}</ErrorText>
        )}
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Repository name"
          value={formik.values.repositoryName}
          onChangeText={formik.handleChange("repositoryName")}
          style={
            formik.errors.repositoryName ? styles.inputError : styles.input
          }
        />
        {formik.touched.repositoryName && formik.errors.repositoryName && (
          <ErrorText>{formik.errors.repositoryName}</ErrorText>
        )}
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Rating between 0 and 100"
          value={formik.values.rating}
          onChangeText={formik.handleChange("rating")}
          style={formik.errors.rating ? styles.inputError : styles.input}
        />
        {formik.touched.rating && formik.errors.rating && (
          <ErrorText>{formik.errors.rating}</ErrorText>
        )}
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="text"
          value={formik.values.text}
          onChangeText={formik.handleChange("text")}
          style={formik.errors.text ? styles.inputError : styles.input}
          multiline
        />
        {formik.touched.text && formik.errors.text && (
          <ErrorText>{formik.errors.text}</ErrorText>
        )}
      </View>
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Button>Create a review</Button>
      </Pressable>
    </View>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate("/");

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      const result = await createReview({
        ownerName,
        repositoryName,
        rating: parseInt(rating, 10),
        text,
      });
      navigate(`/repository/${result.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <CreateReviewForm onSubmit={onSubmit} />
    </>
  );
};

export default CreateReview;
