import { Pressable, TextInput, View } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, ErrorText } from "./Text";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";
import theme from "../theme";
import { useNavigate } from "react-router-native";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

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

export const SignUpForm = ({ onSubmit }) => {
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
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Password confirmation"
          secureTextEntry
          value={formik.values.passwordConfirmation}
          onChangeText={formik.handleChange("passwordConfirmation")}
          style={
            formik.errors.passwordConfirmation
              ? styles.inputError
              : styles.input
          }
          error={true}
        />
        {formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation && (
            <ErrorText>{formik.errors.passwordConfirmation}</ErrorText>
          )}
      </View>
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Button>Sign up</Button>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <SignUpForm onSubmit={onSubmit} />
    </>
  );
};

export default SignUp;
