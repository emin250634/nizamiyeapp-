import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors, spacing, typography } from '../theme';
import { supabase } from '../lib/supabase';

const { width } = Dimensions.get('window');

const quickActions = [
  {
    id: 1,
    title: 'Taleplerim',
    icon: 'assignment',
    route: 'Requests',
  },
  {
    id: 2,
    title: 'Anketler',
    icon: 'poll',
    route: 'Surveys',
  },
  {
    id: 3,
    title: 'Kütüphane',
    icon: 'local-library',
    route: 'Library',
  },
  {
    id: 4,
    title: 'Duyurular',
    icon: 'campaign',
    route: 'Announcements',
  },
];

const cardShadow: ViewStyle = {
  shadowColor: colors.grey[900],
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
};

export const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      // @ts-ignore
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error: any) {
      Alert.alert('Hata', error.message);
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      'Çıkış',
      'Çıkış yapmak istediğinize emin misiniz?',
      [
        {
          text: 'İptal',
          style: 'cancel',
        },
        {
          text: 'Çıkış Yap',
          style: 'destructive',
          onPress: handleLogout,
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton}>
          <MaterialIcons name="settings" size={24} color={colors.grey[600]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ÖĞRETMEN</Text>
        <Text style={styles.welcomeText}>Hoş Geldiniz</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <MaterialIcons name="person" size={48} color={colors.grey[400]} />
            </View>
            <TouchableOpacity style={styles.cameraButton}>
              <MaterialIcons name="photo-camera" size={20} color={colors.grey[600]} />
            </TouchableOpacity>
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.name}>MİKAİL SUÇİ</Text>
            <Text style={styles.title}>Arapça Bölüm Müdürü</Text>
            <Text style={styles.education}>
              Sarf,Nahiv,Belagat{'\n'}
              Atatürk Üniversitesi, İlahiyat Fakültesi
            </Text>
          </View>

          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>İletişim Bilgileri</Text>
            <View style={styles.contactItem}>
              <MaterialIcons name="email" size={20} color={colors.grey[600]} />
              <Text style={styles.contactText}>mikail259090@gmail.com</Text>
              <TouchableOpacity style={styles.copyButton}>
                <MaterialIcons name="content-copy" size={20} color={colors.grey[400]} />
              </TouchableOpacity>
            </View>
            <View style={styles.contactItem}>
              <MaterialIcons name="phone" size={20} color={colors.grey[600]} />
              <Text style={styles.contactText}>0553103 88 89</Text>
              <TouchableOpacity style={styles.copyButton}>
                <MaterialIcons name="content-copy" size={20} color={colors.grey[400]} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.quickAccess}>
          <Text style={styles.sectionTitle}>Hızlı Erişim</Text>
          <View style={styles.quickGrid}>
            {quickActions.map((action) => (
              <TouchableOpacity key={action.id} style={styles.quickCard}>
                <View style={styles.iconContainer}>
                  <MaterialIcons name={action.icon as any} size={24} color={colors.primary.main} />
                </View>
                <Text style={styles.quickCardTitle}>{action.title}</Text>
                <MaterialIcons name="chevron-right" size={24} color={colors.grey[400]} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="person-outline" size={24} color={colors.text.primary} />
            <Text style={styles.menuText}>Profil Bilgileri</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.grey[400]} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="settings" size={24} color={colors.text.primary} />
            <Text style={styles.menuText}>Ayarlar</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.grey[400]} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={confirmLogout}>
            <MaterialIcons name="logout" size={24} color={colors.error.main} />
            <Text style={[styles.menuText, { color: colors.error.main }]}>Çıkış Yap</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.grey[400]} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  header: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey[200],
  },
  settingsButton: {
    alignSelf: 'flex-end',
    padding: spacing.xs,
  },
  headerTitle: {
    ...typography.subtitle2,
    color: colors.text.primary,
    textAlign: 'center',
  },
  welcomeText: {
    ...typography.h6,
    color: colors.text.primary,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    padding: spacing.md,
  },
  profileImageContainer: {
    alignSelf: 'center',
    marginBottom: spacing.md,
  },
  profileImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: (width * 0.25) / 2,
    backgroundColor: colors.grey[200],
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: colors.background.paper,
    padding: spacing.xs,
    borderRadius: spacing.xl,
    borderWidth: 1,
    borderColor: colors.grey[200],
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  name: {
    ...typography.h6,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  title: {
    ...typography.subtitle1,
    color: colors.text.secondary,
    marginBottom: spacing.xs,
  },
  education: {
    ...typography.body2,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  contactInfo: {
    backgroundColor: colors.background.paper,
    padding: spacing.md,
    borderRadius: 12,
    ...cardShadow,
  },
  contactTitle: {
    ...typography.subtitle2,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  contactText: {
    ...typography.body2,
    color: colors.text.primary,
    marginLeft: spacing.sm,
    flex: 1,
  },
  copyButton: {
    padding: spacing.xs,
  },
  quickAccess: {
    padding: spacing.md,
  },
  sectionTitle: {
    ...typography.subtitle1,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  quickGrid: {
    gap: spacing.sm,
  },
  quickCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.paper,
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.sm,
    ...cardShadow,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary.light,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  quickCardTitle: {
    ...typography.subtitle2,
    color: colors.text.primary,
    flex: 1,
  },
  menu: {
    padding: spacing.md,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.paper,
    padding: spacing.md,
    borderRadius: 10,
    marginBottom: spacing.sm,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: colors.text.primary,
    marginLeft: spacing.md,
  },
}); 