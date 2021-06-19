import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    color: "black"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  dot:{
    width: "calc(5 * 3.2rem)",
    height: "calc(5 * 3.2rem)",
    border: "1.6rem solid rgba(255, 255, 255, 0.02)",
    borderRadius: "50%"
  }
}));

export default class Career extends Component{
    render() {
        return (
            <section id="career-timeline" className="s-resume target-section">
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    9:30 am
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <img className={useStyles.dot} src="images/avatar.jpeg" alt=""></img>
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={useStyles.paper}>
                    <Typography variant="h6" component="h1" className="resume-block_header">
                      Eat
                    </Typography>
                    <Typography>Because you need strength</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    10:00 am
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={useStyles.paper}>
                    <Typography variant="h6" component="h1">
                      Code
                    </Typography>
                    <Typography>Because it&apos;s awesome!</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    <HotelIcon />
                  </TimelineDot>
                  <TimelineConnector className={useStyles.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={useStyles.paper}>
                    <Typography variant="h6" component="h1">
                      Sleep
                    </Typography>
                    <Typography>Because you need rest</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <RepeatIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={useStyles.paper}>
                    <Typography variant="h6" component="h1">
                      Repeat
                    </Typography>
                    <Typography>Because this is the life you love!</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            </section>
        );
    }
};