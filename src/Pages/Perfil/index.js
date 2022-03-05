import { StatusBar } from 'expo-status-bar';
import {Text} from 'react-native';
import Button from '../../components/Button';
import { SafeAreaView, Image, View, ButtonContainer } from './style';

export default function App({ navigation }) {
  return (
    <SafeAreaView>
      <View>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Você não está conectado!</Text>
      </View>
      <ButtonContainer>
          <Button text="ENTRAR" theme="primary" onPress={() => navigation.navigate('Erro')} />
      </ButtonContainer>
      <View/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
