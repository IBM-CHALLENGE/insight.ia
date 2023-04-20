import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar translucent={false} backgroundColor='#3A39E6'/>
    </>
  );
}
