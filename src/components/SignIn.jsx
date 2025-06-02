import { Pressable, TextInput, View } from "react-native";
import { useFormik } from "formik";
import { Button } from "./Text";
import theme from "../theme";

const initialValues = {
  username: "",
  password: "",
};

const styles = {
  form: {
    padding: 20,
  },
  input: {
    ...theme.input,
  },
  button: {
    ...theme.button,
  },
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        style={styles.input}
      />
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
