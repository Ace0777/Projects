import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { TextInput } from 'react-native-paper';

const CadastroView = ({ navigation }) => {
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
        <SafeAreaView style={styles.container}>
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: 'walk',
                label: 'Walking',
              },
              {
                value: 'train',
                label: 'Transit',
              },
              { value: 'drive', label: 'Driving' },
            ]}
          />
        </SafeAreaView>

        <Text>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroView;
