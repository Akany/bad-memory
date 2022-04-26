import { AuthProvider } from './components/authProvider';
import { Header } from './components/header';

function App() {
  return (
    <AuthProvider>
      <Header/>
    </AuthProvider>
  );
}

export default App;
