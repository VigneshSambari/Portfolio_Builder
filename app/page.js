import NavBar from "@components/NavBar";
import LandingPage from "@components/landing_page/LandingPage";

export default function Home() {
  return (
    <div className="landing-page flex-col">
        <NavBar />
        <LandingPage />
      </div>
  )
}
