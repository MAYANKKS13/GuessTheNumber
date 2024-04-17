import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [totalRounds, setTotalRounds] = useState(0);

  // useFonts({
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
  // });

  function inputNumberHandler(inputnumber){
    setUserNumber(inputnumber);
    setGameOver(false);
  }

  function gameOverHandler() {
    setGameOver(true);
  }

  function startNewGamehandler() {
    setUserNumber(null);
    setTotalRounds(0);
  }

  let screen = <StartGameScreen onInputNumber={inputNumberHandler} />;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} gameIsOver={gameOverHandler} />
  }

  if(gameOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundNumber={totalRounds} startNewGame={startNewGamehandler} />
  }



  return( 
    <LinearGradient colors={['#000000', '#6f6b7e']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/dice2.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>

    </LinearGradient>
   

  );
}

const styles = StyleSheet.create({
   rootScreen: {
     flex: 1
   },
   backImage: {
    opacity: 0.35
   }
});
