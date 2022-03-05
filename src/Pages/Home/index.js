import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';


import banner from '../../assets/img/banner.png';
import Button from '../../components/Button';

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Bem vindo!!!</Text>
          <Image source={banner} />
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Entre em sua conta </Text>
          <Text style={{ padding: 20 }}>Ou clique em pular para descobrir restaurantes que entregam em sua região</Text>
        </View>
        <ButtonContainer>
          <Button text="PULAR" onPress={() => navigation.navigate('Main')} />
          <Button text="ENTRAR" theme="primary" onPress={() => navigation.navigate('Erro')}/>
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}
