import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';

export default function useHideNavigationBar() {
  useEffect(() => {
    try {
      NavigationBar.setPositionAsync("absolute");
      NavigationBar.setBackgroundColorAsync("#ffffff01");
    } catch (error) {
      console.error("Error hiding navigation bar:", error);
    }
  }, []); 
}