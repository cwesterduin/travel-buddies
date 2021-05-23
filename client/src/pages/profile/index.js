import React, { useEffect } from "react";
import {
  MyMap,
  NewHolidayButton,
  HolidayCards,
  CardContainer,
} from "../../components";
import { NavBar, Footer, Header} from "../../layout";
import { useDispatch, useSelector } from "react-redux";
import { loadUserHolidays } from "../../actions";
import './style.css'

function Profile() {
  const dispatch = useDispatch();
  const {id, user} = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(loadUserHolidays(id));
  }, []);
  return (  
    <div>
  <Header />  
  <NavBar />

    <div role="article" id="profile-page">
    
        <h4 id="profile-welcome-message">Hi {user}</h4>
        <NewHolidayButton />
      
      
      <div className="map-card-box-p">

        <CardContainer>
          <HolidayCards />
        </CardContainer>

        <div class="parent">
          <MyMap />
        </div>
        
      </div>

    </div>
    <Footer />
    </div>
  );
}

export default Profile;
