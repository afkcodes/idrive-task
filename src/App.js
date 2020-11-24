import { useEffect, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CircularProgress } from '@material-ui/core';

import './App.css';
import Header from './Components/Header/Header';
import getData from './utils/getData';
import Tweets from './Components/Tweets/Tweets';

const App = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getData.topics().then((data) => setTopics(data));
  }, []);
  return (
    <div className="app">
      <div className="content-main">
        <div className="header-main">
          <Header />
        </div>
        <div className="accordian-main">
          {topics ? (
            topics.map((topic, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="accordian-heading">
                  <Typography>
                    <span className="typography">{topic.value}</span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>{topic && <Tweets topic={topic.value} />}</AccordionDetails>
              </Accordion>
            ))
          ) : (
            <CircularProgress />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
