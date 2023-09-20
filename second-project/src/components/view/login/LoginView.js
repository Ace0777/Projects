import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, TextInput } from 'react-native-paper';

const LoginView = ({ navigation }) => {
  return (
    <View style={estilo.container}>
      <Avatar.Text size={128} label="CS" style={estilo.logo} />

      <View style={estilo.body}>
        <TextInput
          style={estilo.edits}
          label="login"
          placeholder="informe o login"
        ></TextInput>

        <TextInput
          style={estilo.edits}
          label="senha"
          placeholder="informe a senha"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />

        <Button
          icon="account-check"
          mode="contained"
          style={estilo.edits}
          onPress={() => console.log('Pressed')}
        >
          LOGAR
        </Button>
      </View>
    </View>
  );
};

export default LoginView;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    margin: 25,
  },
  body: {
    flex: 3,
    margin: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  edits: {
    width: '100%',
  },
});
