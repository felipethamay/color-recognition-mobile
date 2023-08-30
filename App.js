import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext, theme } from './src/contexts/ThemeContext';
import LoadingScreen from './src/ui/screens/loading/LoadingScreen';
import HomeScreen from './src/ui/screens/home/HomeScreen';
import RegisterPatientScreenForm from './src/ui/screens/patient/register/RegisterPatientFormScreen';
import RegisterPatientScreenList from './src/ui/screens/patient/list/RegisterPatientScreenList';
import ExamScreen from './src/ui/screens/exam/ExamScreen';
import ResultsScreen from './src/ui/screens/results/ResultsScreen';
import CameraScreen from './src/ui/screens/camera/CameraScreen';
import AboutScreen from './src/ui/screens/about/AboutScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loading">
          <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Form" component={RegisterPatientScreenForm} options={{ title: 'CADASTRAR PACIENTE' }}/>
          <Stack.Screen name="List" component={RegisterPatientScreenList} />
          <Stack.Screen name="Exam" component={ExamScreen} options={{ title: 'REALIZAR EXAME' }}/>
          <Stack.Screen name="Camera" component={CameraScreen} options={{ title: '' }} />
          <Stack.Screen name="Results" component={ResultsScreen} options={{ title: 'RESULTADOS' }}/>
          <Stack.Screen name="About" component={AboutScreen} options={{ title: 'SOBRE' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;
