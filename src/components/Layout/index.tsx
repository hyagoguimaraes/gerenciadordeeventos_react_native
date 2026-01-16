import React, { ReactNode } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Navbar } from "../NavBar";
import { styles } from "./style";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SafeAreaView style={styles.layoutWrapper}>
      <Navbar />
      <View style={styles.mainContent}>
        {children}
      </View>
    </SafeAreaView>
  );
}