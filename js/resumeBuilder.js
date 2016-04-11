var bio = {
  name : 'Bruce Wayne',
  role : 'Formerly Known As The Batman',
  contacts : {
    mobile : '555-555-5555',
    email : 'batman@gmail.com',
    github : 'jdiii',
    twitter : '@batman',
    location : 'New York, NY'
  },
  welcomeMessage : 'Highly motivated individual with years of experience' +
  ' in the vigilante crime-fighting space. Now looking to make ' +
  ' a career change to front-end web development.',
  skills : ['Fighting Crime', 'Bat Husbandry', 'Experimental Gadgets', 'Hiding True Identity'],
  biopic : 'images/batman.jpg',
  display : function() {
    $('#header').prepend(HTMLheaderRole.replace('%data%',bio.role));
    $('#header').prepend(HTMLheaderName.replace('%data%',bio.name));
    $('#header').append(HTMLbioPic.replace('%data%',bio.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage));

    if (bio.skills.length > 0){
      //adding a section to clear the skills and bipic
      $('#header').append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
        $('#skills').append(HTMLskills.replace('%data%',bio.skills[i]));
      }
    }
    $('#topContacts').append(HTMLmobile.replace('%data%',bio.contacts.mobile));
    $('#topContacts').append(HTMLemail.replace('%data%',bio.contacts.email));
    $('#topContacts').append(HTMLtwitter.replace('%data%',bio.contacts.twitter));
    $('#topContacts').append(HTMLgithub.replace('%data%',bio.contacts.github));
    $('#topContacts').append(HTMLlocation.replace('%data%',bio.contacts.location));

  }
}

var work = {
  jobs: [
    {
      employer: 'Self-employed',
      title: 'Vigilante Crime Fighter',
      location: 'Iowa City, IA',
      dates: 'May 1939 - Present',
      description: 'I dress up in a bat suit and hunt down criminals.',
    },
    {
      employer: 'Wayne Enterprises',
      title: 'CEO',
      location: 'Cambridge, MA',
      dates: 'May 1939 - Present',
      description: 'Chief executive of Wayne Enterprises. Demonstrated strong management skills: I delegated all my duties to my butler.'
    }
  ],
    display: function() {
      for (idx in work.jobs){
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(HTMLworkEmployer.replace('%data%',work.jobs[idx].employer));
        $('.work-entry:last').append(HTMLworkLocation.replace('%data%',work.jobs[idx].dates));
        $('.work-entry:last').append(HTMLworkDates.replace('%data%',work.jobs[idx].location));
        $('.work-entry:last').append(HTMLworkTitle.replace('%data%',work.jobs[idx].title));
        $('.work-entry:last').append(HTMLworkDescription.replace('%data%',work.jobs[idx].description));
      }
    }
};

var education = {
  schools: [{
    name: 'Princeton University',
    location: 'Princeton, NJ',
    degree: 'Dropped Out',
    majors: 'Drama',
    dates: '1932-1936'
  },
  {
    name: 'Yale Law School',
    location: 'New Haven, Connecticut',
    degree: 'JD',
    majors: 'Law',
    dates: '1936-1938'
  }],
  onlineCourses: [
    {
      title: 'Front-End Developer Nanodegree',
      school: 'Udacity',
      date: 'Spring 2016',
      url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }
  ],
  display: function() {
    for(idx in education.schools){
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(HTMLschoolName.replace('%data%',education.schools[idx].name));
      $('.education-entry:last').append(HTMLschoolDates.replace('%data%',education.schools[idx].dates));
      $('.education-entry:last').append(HTMLschoolDegree.replace('%data%',education.schools[idx].degree));
      $('.education-entry:last').append(HTMLschoolLocation.replace('%data%',education.schools[idx].location));
      $('.education-entry:last').append(HTMLschoolMajor.replace('%data%',education.schools[idx].majors));
    }
    for(idx in education.onlineCourses){
      $('#education').append(HTMLonlineClasses);
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(HTMLonlineTitle.replace('%data%',education.onlineCourses[idx].title));
      $('.education-entry:last').append(HTMLonlineDates.replace('%data%',education.onlineCourses[idx].date));
      $('.education-entry:last').append(HTMLonlineSchool.replace('%data%',education.onlineCourses[idx].school));
      $('.education-entry:last').append(HTMLonlineURL.replace('%data%',education.onlineCourses[idx].url));
    }
  }
};

var projects = {
  projects: [
    {
      title: 'Bring the Joker to Justice',
      dates: '2008',
      description: 'The Joker created anarchy in Gotham City so I brought him to justice.',
      images: ['images/joker.jpg']
    },
    {
      title: 'Bringing Two-Face to Justice',
      dates: '2010',
      description: 'I brought a decent attorney turned insane criminal to justice.',
      images: ['images/twoface.jpg']
    }
  ],
  display : function(){
    for(idx in projects.projects){
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(HTMLprojectTitle.replace('%data%',projects.projects[idx].title));
      $('.project-entry:last').append(HTMLprojectDates.replace('%data%',projects.projects[idx].dates));
      $('.project-entry:last').append(HTMLprojectDescription.replace('%data%',projects.projects[idx].description));
      $('.project-entry:last').append(HTMLprojectImage.replace('%data%',projects.projects[idx].images[0]));
    }

  }
};

education.display();
bio.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);
