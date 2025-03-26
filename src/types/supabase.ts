export type UserRole = 'admin' | 'teacher' | 'parent';

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  phone: string;
  department_id?: string;
  created_at: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

export interface Class {
  id: string;
  name: string;
  department_id: string;
  teacher_id: string;
  created_at: string;
}

export interface Student {
  id: string;
  full_name: string;
  class_id: string;
  parent_id: string;
  created_at: string;
}

export interface Assessment {
  id: string;
  student_id: string;
  teacher_id: string;
  type: 'exam' | 'homework' | 'memorization';
  score: number;
  notes: string;
  created_at: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  department_id: string;
  created_by: string;
  created_at: string;
}

export interface Meeting {
  id: string;
  title: string;
  description: string;
  date: string;
  department_id: string;
  created_by: string;
  created_at: string;
} 