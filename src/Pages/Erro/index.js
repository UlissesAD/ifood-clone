
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, View, ButtonContainer } from './style';


//import banner from '../../assets/img/banner.png';
import Button from '../../components/Button';

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Ocorreu um erro!!</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>tente novamente mais tarde</Text>
        </View>
        <ButtonContainer>
          <Button text="Voltar" onPress={() => navigation.navigate('Main')} />
        </ButtonContainer>
        <View/>
      </SafeAreaView>
    </>
  );
}
