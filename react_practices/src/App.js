
import './App.css';
// import Comments from './Components/Comments/Comments';
import Footer from './Components/Footer/Footer';
import ImageSlider from './Components/ImageSlider/ImageSlider';
import Pagination from './Components/pagination/Pagination';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ComboBox from './Material_UI/ComboBox';
import Container from '@mui/material/Container';
import Farm_app from './Farmer_Project/Farm_app';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
   return (
      <>
         <Container maxWidth="lg">
            <Router>

               <div className="Head_componets">
                  {/* <ImageSlider/>   */}
                  {/* <Comments/> */}
                  {/* <Pagination/> */}
                  {/* <ComboBox/> */}

                  <Farm_app />

               </div>

            </Router>

         </Container>
         {/* <Footer/> */}
      </>
   )
}

export default App;
