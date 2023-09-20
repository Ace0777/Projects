import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import { TextInput } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';


const CadastroView = ({ navigation }) => {

  const [checked, setChecked] = React.useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
  });
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('telaInicial');
        }}
      >
        <Text>Nome</Text>
        <TextInput
          mode="outlined"
          label="Outlined input"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
        />
        <Text>Login</Text>
        <TextInput
          mode="outlined"
          label="Outlined input"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
        />
        <Text>Senha</Text>
        <TextInput
          mode="outlined"
          label="Outlined input"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
        />
        <Text>Email</Text>
        <TextInput
          mode="outlined"
          label="Outlined input"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
        />
        <Text>Sexo</Text>

        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />

        <Text>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroView;
