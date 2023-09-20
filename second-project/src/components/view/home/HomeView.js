import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import TopBoard from '../../TopBoard/TopBoard';
import { IconButton, MD3Colors } from 'react-native-paper';

const HomeView = ({ navigation }) => {
  const style = StyleSheet.create({
    containerHV: {
      flex: 1,
      alignItems: 'stretch',
    },
    containerHVBtn: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'stretch',
    },
  });
  return (
    <View style={style.containerHV}>
      <TopBoard></TopBoard>

      <View style={style.containerHVBtn}>
        <IconButton
          icon="account-lock-outline"
          containerColor="#BBC"
          iconColor="blue"
          size={84}
          onPress={() => navigation.navigate('telaLogin')}
        />
        <IconButton
          icon="account-group"
          containerColor="#BBC"
          iconColor="blue"
          size={84}
          onPress={() => navigation.navigate('telaCad')}
        />
      </View>

      <Text>HOME</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('telaLogin');
        }}
      >
        <Text>LOGAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('telaCad');
        }}
      >
        <Text>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeView;
