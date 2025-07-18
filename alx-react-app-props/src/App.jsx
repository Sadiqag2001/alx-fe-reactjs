
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import UserContext from './UserContext'


function App() {
  const userData = {
  name: "Abubakar Ado Garba",
  age: "23",
  bio: "I'm a Computer Engineer and Web Developer."
};

  return (
    <UserContext.Provider value={userData}>
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile /> 
    </>
    </UserContext.Provider>
  )
}

export default App
