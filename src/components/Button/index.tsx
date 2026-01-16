import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, TouchableOpacityProps } from "react-native";
import { styles } from "./style";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  children?: string;
  loading?: boolean;
  variant?: 'primary' | 'outline';
}

export function Button({
  title,
  children,
  loading,
  variant = 'primary',
  style,
  ...props
}: ButtonProps) {

  const buttonText = children || title;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'outline' ? styles.buttonOutline : styles.buttonPrimary,
        props.disabled || loading ? styles.buttonDisabled : null,
        style
      ]}
      activeOpacity={0.7}
      disabled={props.disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? "#ff385C" : "#fff"} />
      ) : (
        <Text style={[
          styles.text,
          variant === 'outline' ? styles.textOutline : styles.textPrimary
        ]}>
          {buttonText}
        </Text>
      )}
    </TouchableOpacity>
  );
}