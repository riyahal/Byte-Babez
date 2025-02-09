import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Text, Image, TouchableOpacity, Platform } from 'react-native';
import MonacoEditor from 'react-monaco-editor';
import { useNavigation, useRoute } from '@react-navigation/native';