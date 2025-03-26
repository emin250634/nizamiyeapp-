import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing } from '../theme';

export const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Hoş Geldiniz</Text>
        <Text style={styles.subtitle}>Nizamiye Eğitim Sistemi</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Duyurular</Text>
          <Text style={styles.cardText}>Henüz duyuru bulunmamaktadır.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Öğrenci Bilgileri</Text>
          <Text style={styles.cardText}>Öğrenci bilgileri burada görüntülenecek.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sınıf Durumu</Text>
          <Text style={styles.cardText}>Sınıf durumu bilgileri burada görüntülenecek.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  header: {
    padding: spacing.lg,
    backgroundColor: colors.primary.main,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.white,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.white,
    opacity: 0.8,
  },
  content: {
    padding: spacing.md,
  },
  card: {
    backgroundColor: colors.background.paper,
    borderRadius: 10,
    padding: spacing.md,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  cardText: {
    fontSize: 14,
    color: colors.text.secondary,
  },
}); 