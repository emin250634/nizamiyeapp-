import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors, spacing, typography } from '../theme';

const departments = [
  {
    id: 1,
    name: 'Hafızlık',
    icon: 'menu-book',
    description: 'Hafızlık eğitimi ve takibi',
  },
  {
    id: 2,
    name: 'Arapça',
    icon: 'language',
    description: 'Arapça dil eğitimi',
  },
  {
    id: 3,
    name: 'İslami İlimler',
    icon: 'school',
    description: 'Temel İslami ilimler eğitimi',
  },
];

export const DepartmentsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Eğitim Bölümleri</Text>
        <TouchableOpacity style={styles.searchButton}>
          <MaterialIcons name="search" size={24} color={colors.grey[800]} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {departments.map((department) => (
          <TouchableOpacity key={department.id} style={styles.card}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name={department.icon as any}
                size={32}
                color={colors.primary.main}
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{department.name}</Text>
              <Text style={styles.cardDescription}>{department.description}</Text>
            </View>
            <MaterialIcons
              name="chevron-right"
              size={24}
              color={colors.grey[400]}
            />
          </TouchableOpacity>
        ))}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey[200],
  },
  title: {
    ...typography.h6,
    color: colors.text.primary,
  },
  searchButton: {
    padding: spacing.xs,
  },
  content: {
    flex: 1,
    padding: spacing.md,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.background.paper,
    borderRadius: 12,
    marginBottom: spacing.sm,
    shadowColor: colors.grey[900],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    flex: 1,
    marginLeft: spacing.md,
  },
  cardTitle: {
    ...typography.subtitle1,
    color: colors.text.primary,
  },
  cardDescription: {
    ...typography.body2,
    color: colors.text.secondary,
    marginTop: spacing.xs,
  },
}); 