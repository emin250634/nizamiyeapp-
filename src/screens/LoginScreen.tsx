import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography } from '../theme';
import { supabase } from '../lib/supabase';

const { width, height } = Dimensions.get('window');

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Hata', 'Lütfen email ve şifre giriniz.');
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        // Kullanıcı bilgilerini veritabanından al
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('*')
          .eq('id', data.user.id)
          .single();

        if (userError) throw userError;

        if (userData) {
          // @ts-ignore
          navigation.replace('Main');
        } else {
          Alert.alert('Hata', 'Kullanıcı bilgileri bulunamadı.');
        }
      }
    } catch (error: any) {
      Alert.alert(
        'Giriş Hatası',
        error.message === 'Invalid login credentials'
          ? 'Geçersiz email veya şifre.'
          : 'Bir hata oluştu. Lütfen tekrar deneyin.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={colors.background.gradient} style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Nizamiye</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={24} color={colors.grey[400]} />
          <TextInput
            style={styles.input}
            placeholder="E-posta"
            placeholderTextColor={colors.grey[400]}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            editable={!loading}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={24} color={colors.grey[400]} />
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            placeholderTextColor={colors.grey[400]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            editable={!loading}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}>
            <MaterialIcons
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={24}
              color={colors.grey[400]}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.loginButton, loading && styles.loginButtonDisabled]}
          onPress={handleLogin}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator color={colors.text.white} />
          ) : (
            <Text style={styles.loginButtonText}>Giriş Yap</Text>
          )}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: spacing.xl,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.text.white,
  },
  formContainer: {
    width: width * 0.85,
    backgroundColor: colors.background.paper,
    borderRadius: 20,
    padding: spacing.xl,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey[100],
    borderRadius: 10,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: spacing.sm,
    color: colors.text.primary,
  },
  eyeIcon: {
    padding: spacing.xs,
  },
  loginButton: {
    backgroundColor: colors.primary.main,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  loginButtonDisabled: {
    backgroundColor: colors.grey[400],
  },
  loginButtonText: {
    color: colors.text.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
