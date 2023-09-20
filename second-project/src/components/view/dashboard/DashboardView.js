import { Text, TouchableOpacity, View } from 'react-native';

const DashboardView = ({ navigation }) => {
  return (
    <View>
      <Text>DashboardView</Text>
      <TouchableOpacity onPress={() => navigation.navigate('telaLogin')}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardView;
