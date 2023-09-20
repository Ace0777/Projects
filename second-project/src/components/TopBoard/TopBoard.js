import foodImg from './img/food.jpg';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const widthTela = Dimensions.get('screen').width;

const TopBoard = () => {
  const style = StyleSheet.create({
    containerTB: {
      flex: 1,
      alignItems: 'center',
    },
    imgTB: {
      width: '100%',
      height: (1280 / 1920) * widthTela,
    },
  });

  return (
    <View style={style.containerTB}>
      <Image source={foodImg} style={style.imgTB}></Image>
    </View>
  );
};

export default TopBoard;
