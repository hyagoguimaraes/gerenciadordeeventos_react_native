import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

export type StackList = {
  Login: undefined;
  Cadastro: undefined;
  MainTabs: undefined; 
};

export type TabList = {
  Home: undefined;
  Eventos: undefined;
  Perfil: undefined;
};

export type StackProps = StackScreenProps<StackList>;
export type TabProps = BottomTabScreenProps<TabList>;