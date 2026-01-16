import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { styles } from './style';

interface InputProps extends TextInputProps {
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
}

export function Input({ label, hasError, errorMessage, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, isFocused && styles.labelActive]}>{label}</Text>}
      <TextInput
        style={[
          styles.field,
          isFocused && styles.fieldFocused,
          (hasError || !!errorMessage) && styles.fieldError
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor="#999"
        {...props}
      />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
}