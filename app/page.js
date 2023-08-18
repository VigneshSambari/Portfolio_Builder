import NavBar from "@components/NavBar";
import LandingPage from "@components/landing_page/LandingPage";
import { NavContextProvider } from "@context_handler/nav_context";

export default function Home() {
  return (
    <div className="landing-page flex-col">
        <NavContextProvider>
          <NavBar />
          <LandingPage />
        </NavContextProvider>
      </div>
  )
}
