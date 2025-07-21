
import './App.css'
// import WelcomeMessage from './components/WelcomeMessage'
// import Header from './components/Header'
// import MainContent from './components/MainContent'
// import Footer from './components/Footer'
// import UserProfile from './components/UserProfile'
import UserContext from './components/UserContext'
import ProfilePage from './components/ProfilePage';

// function App() {
//   const userData = {
//   name: "Abubakar Ado Garba",
//   age: "23",
//   bio: "I'm a Computer Engineer and Web Developer."
// };



function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };


  return (
    <UserContext.Provider value={userData}>
    {/* <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile /> 
    </> */}
    <ProfilePage userData={userData} />
    </UserContext.Provider>
  )
}

export default App
