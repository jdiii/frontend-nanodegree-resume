var bio = {
  name : 'Bruce Wayne',
  role : 'Superhero',
  contacts : {
    mobile : '555-555-5555',
    email : 'batman@gmail.com',
    github : 'jdiii',
    twitter : '@batman',
    location : 'New York, NY'
  },
  welcomeMessage : 'Welcome to Batman\'s resume',
  skills : ['Bat Husbandry', 'Fighting Crime', 'Experimental Gadgets', 'Hiding True Identity'],
  biopic : 'images/batman.jpg',
  display : function() {
    $('#header').prepend(HTMLheaderRole.replace('%data%',bio.role));
    $('#header').prepend(HTMLheaderName.replace('%data%',bio.name));

    $('#header').append(HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage));
    $('#header').append(HTMLbioPic.replace('%data%',bio.biopic));

    if (bio.skills.length > 0){
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
      title: 'Viglante Crime Fighter',
      location: 'Iowa City, IA',
      dates: 'May 1939 - Present',
      description: 'I keep Gotham safe.',
    },
    {
      employer: 'Wayne Enterprises',
      title: 'CEO',
      location: 'Cambridge, MA',
      dates: 'May 1939 - Present',
      description: 'I don\'t really do anything... Alfred runs the place'
    }
  ],
    display: function() {
      for (idx in work.jobs){
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(HTMLworkEmployer.replace('%data%',work.jobs[idx].employer));
        $('.work-entry:last').append(HTMLworkLocation.replace('%data%',work.jobs[idx].dates));
        $('.work-entry:last').append(HTMLworkTitle.replace('%data%',work.jobs[idx].title));
        $('.work-entry:last').append(HTMLworkDates.replace('%data%',work.jobs[idx].location));
        $('.work-entry:last').append(HTMLworkDescription.replace('%data%',work.jobs[idx].description));
      }
    }
};

var education = {
  schools: [{
    name: 'Gotham City U',
    location: 'Houston, TX',
    degree: 'BA',
    majors: 'Civil Engineering',
    dates: '1932-1936'
  },
  {
    name: 'Gotham City Business School',
    location: 'San Francisco, CA',
    degree: 'MBA',
    majors: 'Business',
    dates: '1936-1938'
  }],
  onlineCourses: [
    {
      title: 'Front-end developer nanodegree',
      school: 'Udacity',
      date: 'Spring 2016',
      url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }
  ],
  display: function() {
    for(idx in education.schools){
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(HTMLschoolName.replace('%data%',education.schools[idx].name));
      $('.education-entry:last').append(HTMLschoolDegree.replace('%data%',education.schools[idx].degree));
      $('.education-entry:last').append(HTMLschoolDates.replace('%data%',education.schools[idx].dates));
      $('.education-entry:last').append(HTMLschoolLocation.replace('%data%',education.schools[idx].location));
      $('.education-entry:last').append(HTMLschoolMajor.replace('%data%',education.schools[idx].majors));
    }
    for(idx in education.onlineCourses){
      $('#education').append(HTMLonlineClasses);
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(HTMLonlineTitle.replace('%data%',education.onlineCourses[idx].title));
      $('.education-entry:last').append(HTMLonlineSchool.replace('%data%',education.onlineCourses[idx].school));
      $('.education-entry:last').append(HTMLonlineDates.replace('%data%',education.onlineCourses[idx].date));
      $('.education-entry:last').append(HTMLonlineURL.replace('%data%',education.onlineCourses[idx].url));
    }
  }
};

var projects = {
  projects: [
    {
      title: 'Stopping the Joker',
      dates: '2008',
      description: 'The Joker was causing chaos in Gotham City so I stopped him.',
      images: ['images/joker.jpg']
    },
    {
      title: 'Stopping Two-face',
      dates: '2010',
      description: 'In the wake of the Joker a dude named Two-Face started wrecking havoc in Gotham. So I stopped him.',
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
//$('#main').append(internationalizeButton);

function inName(name){
  var names = name.trim().split(' ');
  var first = names[0];
  var last = names[1];
  console.log(first);
  console.log(last);
  first = first[0].toUpperCase() + first.slice(1,first.length).toLowerCase();
  last = last.toUpperCase();
  return first + ' ' + last;
}

$(document).click(function(loc) {
  console.log('Clicked on X: ' + loc.pageX + ', Y: ' + loc.pageY);
});
