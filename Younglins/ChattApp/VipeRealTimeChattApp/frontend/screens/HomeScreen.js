import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const animatedValue = useRef(new Animated.Value(0)).current;

  const goToLoginScreen = () => {
    navigation.navigate('Login'); // Replace 'Login' with your LoginScreen route name
  };

  // Animation configuration
  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [animatedValue]);

  // Interpolate animated value for the logo animation
  const spin = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Touchable Animated Image */}
      <TouchableOpacity onPress={goToLoginScreen}>
        <Animated.Image
          source={require('../assets/images/Logo_1.png')} // Replace with your animated logo image path
          style={{
            width: 150,
            height: 150,
            transform: [{ rotate: spin }],
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
