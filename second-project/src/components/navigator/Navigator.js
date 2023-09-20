import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from '../view/home/HomeView';
import TelaLogin from '../view/login/LoginView';
import TelaCadastro from '../view/cadastro/CadastroView';
import TelaDash from '../view/dashboard/DashboardView';

const Navigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="telaInicial">
        <Stack.Screen name="telaInicial" component={TelaInicial} />

        <Stack.Screen name="telaLogin" component={TelaLogin} />

        <Stack.Screen name="telaCad" component={TelaCadastro} />

        <Stack.Screen name="telaDash" component={TelaDash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
