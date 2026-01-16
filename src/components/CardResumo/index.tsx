import React from 'react';
import { View, Text } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { styles } from './style';

interface CardResumoProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
}

export function CardResumo({ icon: Icon, title, value }: CardResumoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Icon size={24} color="#ff385c" strokeWidth={2.5} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  );
}