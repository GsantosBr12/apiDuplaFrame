import Header from "../content/header"
import CS2 from "../../public/Counter-Strike_2_logo.svg"
import './main.modules.css'

function Home() {
    return (
        < >
            <Header />
            <div className="home">
                <h1>Lista API do</h1>
                <img src={CS2} alt="" />
            </div>



        </>
    )
}

export default Home