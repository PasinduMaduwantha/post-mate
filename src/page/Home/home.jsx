import AuthForm from "../../components/Auth/AuthForm"
import './home.css'

export default function Home() {
  return (
    <div className="home-background">
      <div className='home-background-wrap'>
        <h2 className="home-title">
          LogIn to your Account
        </h2>
        <AuthForm />
      </div>
    </div>
  )
}
