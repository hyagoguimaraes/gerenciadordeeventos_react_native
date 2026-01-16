import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from "react-native";
import { Home as HomeIcon, Calendar, PlusCircle } from "lucide-react-native"; 
import { Home } from "../pages/Home";
import { Eventos } from "../pages/Evento";
import { useEventModal } from "../hooks/useEventModal";
import { styles } from "./style"; 

const Tab = createBottomTabNavigator();

export const TabsRouters = () => {
  const { openModal } = useEventModal();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bar,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewButton}>
              <View style={[styles.iconCircle, focused && styles.iconCircleActive]}>
                <HomeIcon size={22} color={focused ? "#ff385C" : "#717171"} />
              </View>
              <Text style={[styles.tabLabel, { color: focused ? "#ff385C" : "#717171" }]}>
                Início
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Eventos"
        component={Eventos}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewButton}>
              <View style={[styles.iconCircle, focused && styles.iconCircleActive]}>
                <Calendar size={22} color={focused ? "#ff385C" : "#717171"} />
              </View>
              <Text style={[styles.tabLabel, { color: focused ? "#ff385C" : "#717171" }]}>
                Eventos
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="NovoEvento"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewButton}>
              <View style={styles.iconCircle}>
                <PlusCircle size={22} color="#717171" />
              </View>
              <Text style={[styles.tabLabel, { color: "#717171" }]}>Novo</Text>
            </View>
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            openModal(); 
          },
        }}
      />
    </Tab.Navigator>
  );
};