import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ComboPage from './components/combo/ComboPage';
import ArtistList from './components/artist/ArtistList';
import ArtistProfile from './components/artist/ArtistProfile';
import ExclusiveBooking from './components/exclusive/ExclusiveBooking';
import OutForm from './components/outform/OutForm';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="combo" component={ComboPage} />
    <Route path="artistlist" component={ArtistList} />
    <Route path="artistprofile" component={ArtistProfile}/>
    <Route path="exclusivebook" component={ExclusiveBooking}/>
    <Route path="outform" component={OutForm}/>
  </Route>
);
