import './App.css';
import React, { Component } from 'react'
import Header from './Header.js'
import Profile from './Profile.js';
import Education from './Education.js';
import Jobs from './Jobs.js'
import KeySkills from './KeySkills.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo : {
        name : "Alex Patchedjiev",
        title: "Game Developer & Shrine Researcher",
      },

      contactInfo : {
        email : "aap47@njit.edu",
        mobile : "123-456-7890",
      },

      profile : 
        "Alex Patchedjiev is a student at the New Jersey Institute of Technology." +
        "Alex is the current president of the NJIT chapter of IGDA." +
        "In addition, Alex has been working with Dr. Louis Hamilton's Rome Research Group." +
        "Alex is passionate about merging technology with art, the social sciences, and the humanities.",

      workExperience : [
        {
          jobName : "Grant-Funded Research: Street Shrine Database & Querying Interface (June-July 2023 & June-July 2024)",
          jobDescription : 
            "Designed and managed an SQL Server database in consideration with the data requirements of an interdisciplinary research group. " + 
            "Developed accessible tools for querying and visualizing data, for the benefit of non-technical members. " +
            "Presented the end-product and preliminary findings at a research forum.",
        },
        {
          jobName : "WJTB Business Manager (Dec 2022-Dec 2023)",
          jobDescription : "Oversaw organization finances, managing around $50,000 yearly while adhering to federal & university policy.",
        }
      ],

      skills : [
        "C Programming",
        "Python Programming",
        "SQL Queries",
        "Git CLI",
        "Godot Game Engine",
        "Blender 3D Modeling Software",
      ],

      education : {
        school : "New Jersey Institute of Technology",
        degree : "BS in Computer Science",
        year : "2021-2025",
        gpa: "3.855"
      },
    };
  }

  render() {
    return (
      <div>
        <Header personalInfo = {this.state.personalInfo} contactInfo = {this.state.contactInfo}></Header>
        <div class="line"></div>
        <Profile profile = {this.state.profile}></Profile>
        <div class = "body-line"></div>
        <Jobs workExperience = {this.state.workExperience}></Jobs>
        <div class = "body-line"></div>
        <KeySkills skills = {this.state.skills}></KeySkills>
        <div class = "body-line"></div>
        <Education education = {this.state.education}></Education>
      </div>
    );
  }
}

export default App;
