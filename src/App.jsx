import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './layouts/NavBar';
import logo from './assets/icon/maxresdefault.jpg';
import CommonHeader from './components/CommonHeader';
import ContactHeader from './components/ContactHeader';
import DetailsCard from './components/DetailsCard';
import TableList from './components/TableList';
import LoginPage from './components/LoginPage';
import Timeline from './components/Timeline.jsx';
import Upload from './components/Upload.jsx';
import Waterfall from './components/Waterfall';
import ColorPicker from './components/ColorPicker';
import Oraniztional from './components/Organizational';
import HOC from './components/Hoc';
import Hook from './components/hooks/Hook';
import Book from './components/reading-list/Book';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <div className="shadow z-10">
          <div className="p-3">
            <div className="w-24">
              <img src={logo} alt="tailwind Logo" />
            </div>
          </div>
        </div>

        <div className="flex flex-grow">
          <NavBar />
          <div className="flex-1 bg-gray-100">
            <div className="flex justify-start items-start px-6 py-4 h-full">
              <Switch>
                <Route path="/commonheader">
                  <CommonHeader />
                </Route>
                <Route path="/contact">
                  <ContactHeader />
                </Route>
                <Route path="/detailcard">
                  <DetailsCard />
                </Route>
                <Route path="/tablelist">
                  <TableList />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/timeline">
                  <Timeline />
                </Route>
                <Route path="/upload">
                  <Upload />
                </Route>
                <Route path="/waterfall">
                  <Waterfall />
                </Route>
                <Route path="/colorpicker">
                  <ColorPicker />
                </Route>
                <Route path="/oraniztional">
                  <Oraniztional />
                </Route>
                <Route path="/hoc">
                  <HOC />
                </Route>
                <Route path="/hook_example">
                  <Hook />
                </Route>
                <Route path="/book">
                  <Book />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
