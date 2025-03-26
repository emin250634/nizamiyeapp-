import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../theme';

export const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={colors.background.gradient} style={styles.container}>
      <Text style={styles.title}>Nizamiye</Text>
      <Text style={styles.subtitle}>Eğitim Yönetim Sistemi</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: colors.text.white,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: colors.text.white,
    opacity: 0.8,
  },
}); 