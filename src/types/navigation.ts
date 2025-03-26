import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Splash: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type EducationStackParamList = {
  Departments: undefined;
  Classes: {
    departmentId: string;
    departmentName: string;
  };
  StudentDetail: {
    studentId: string;
    studentName: string;
  };
  Assessment: {
    studentId: string;
    studentName: string;
  };
};

export type ProfileStackParamList = {
  ProfileHome: undefined;
  Settings: undefined;
  Surveys: undefined;
  Library: undefined;
  Requests: undefined;
}; 