import { Pressable, TextInput, View } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, ErrorText } from "./Text";
import theme from "../theme";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

const styles = {
  form: {
    padding: 20,
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

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.form}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          style={formik.errors.username ? styles.inputError : styles.input}
        />
        {formik.touched.username && formik.errors.username && (
          <ErrorText>{formik.errors.username}</ErrorText>
        )}
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          style={formik.errors.password ? styles.inputError : styles.input}
          error={true}
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorText>{formik.errors.password}</ErrorText>
        )}
      </View>
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Button>Sign in</Button>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <SignInForm onSubmit={onSubmit} />
    </>
  );
};

export default SignIn;
