import {BrowserRouter, Route, Routes} from "react-router-dom";

import ReactDOM from "react-dom";
import News from "./components/News";
import SpecificNews from "./components/SpecificNews";

import Navbar from "./components/Layout/Navbar";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<News/>}/>
                <Route path="/news/:id" element={<SpecificNews/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;


if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
