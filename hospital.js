// all variables///////////////////////////////////////////////////////////////////

let cardiacDesease = ["hypertension", "stroke", "attack"];
let surgicalIssues = ["fracture", "tumoil", "opperation"];
let maternityIssues = ["bed rest", "delivery", "antinatal"];

let cardiacDoctor = ["cardiac doctor"];
let surgicalDoctor = ["surgical doctor"];
let maternityDoctor =["maternity doctor"];
let cardiacNurse = ["cardiac nurse"];
let surgicalNurse =["surgical nurse"];
let maternityNurse =["maternity nurse"];
 

class Hospital {
  constructor(name, location, departments) {
    this.name = name;
    this.location = location;
    this.departments = departments;
  }

  changeLocation = (newLocation) => {
    this.location = newLocation;
  };
}
class Department {
  constructor(doctors, nurses, patients) {
    this.doctors = doctors;
    this.nurses = nurses;
    this.patients = patients;
  }
  admitPatient = (newPatient) => {
    this.patients.push(newPatient);
  };

  recruteDoctor = (newdoctor) =>{
    this.doctors.push(newdoctor);
  }
  recruteNurse =(newNurse) =>{
    this.nurses.push(newNurse);
  }
}

let cardiac = new Department(
  ["Dr Andrew", "Dr Mike"],
  ["Mildred", "Carine"],
  ["Francine", "Mohamed"]
);
let surgical = new Department(
  ["Dr Alfred", "Dr paul"],
  ["Modest", "Cyndy"],
  ["Lewis", "Samuel"]
);
let maternity = new Department(
  ["Dr Ashu", "Dr Claud"],
  ["Pauline", "Carine"],
  ["Franca", "Leticia"]
);
let shisong = new Hospital("Shisong Hospital", "Kumbo-Bui", [
  cardiac,
  surgical,
  maternity,
]);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.getElementById("cardiac-doctors").innerHTML =
  cardiac.doctors.map((doctor) => {
    return `<li>${doctor}</li>`;
  });
document.getElementById("cardiac-nurses").innerHTML =
  cardiac.nurses.map((nurse) => {
    return `<li>${nurse}</li>`;
  });
document.getElementById("cardiac-patients").innerHTML =
  cardiac.patients.map((patient) => {
    return `<li>${patient}</li>`;
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("surgical-doctors").innerHTML =
surgical.doctors.map((doctor) => {
    return `<li>${doctor}</li>`;
  });
document.getElementById("surgical-nurses").innerHTML =
surgical.nurses.map((nurse) => {
    return `<li>${nurse}</li>`;
  });
document.getElementById("surgical-patients").innerHTML =
surgical.patients.map((patient) => {
    return `<li>${patient}</li>`;
  });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.getElementById("maternity-doctors").innerHTML =
maternity.doctors.map((doctor) => {
  return `<li>${doctor}</li>`;
});
document.getElementById("maternity-nurses").innerHTML =
maternity.nurses.map((nurse) => {
  return `<li>${nurse}</li>`;
});
document.getElementById("maternity-patients").innerHTML =
maternity.patients.map((patient) => {
  return `<li>${patient}</li>`;
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Mainfunc = () => {
  let search1 = document.getElementById("display1").value;
  let search2 = document.getElementById("display2").value;

  if (cardiacDesease.indexOf(search1) > -1) {
    cardiac.admitPatient(search2);

  } if (surgicalIssues.indexOf(search1) > -1) {
    surgical.admitPatient(search2);

  } if (maternityIssues.indexOf(search1) > -1) {
    maternity.admitPatient(search2);
  } else {
  }

  document.getElementById("cardiac-patients").innerHTML =
    cardiac.patients.map((patient) => {
      return `<li>${patient}</li>`;
      });
  document.getElementById("surgical-patients").innerHTML =
    surgical.patients.map((patient) => {
      return `<li>${patient}</li>`;
    });
  document.getElementById("maternity-patients").innerHTML =
    maternity.patients.map((patient) => {
      return `<li>${patient}</li>`;
    });
};

RecruteWorker =() =>{

   search1 = document.getElementById("display1").value;
   search2 = document.getElementById("display2").value;

  
  
   if (cardiacDoctor.indexOf(search1) > -1) {
    cardiac.recruteDoctor(search2);

  }
   
   if (cardiacNurse.indexOf(search1) > -1) {
    cardiac.recruteNurse(search2);

  }
  
   if (surgicalDoctor.indexOf(search1) > -1) {
    surgical.recruteDoctor(search2);

  }
  
   if (surgicalNurse.indexOf(search1) > -1) {
    surgical.recruteNurse(search2);

  }
  
   if (maternityDoctor.indexOf(search1) > -1) {
    maternity.recruteDoctor(search2);

  }
  
   if (maternityNurse.indexOf(search1) > -1) {
    maternity.recruteNurse(search2);

  };
  
  console.log(cardiac)
  console.log(maternity)

  console.log(surgical)


    document.getElementById("cardiac-doctors").innerHTML =
    cardiac.doctors.map((newDoctor) => {
      return `<li>${newDoctor}</li>`;
      });
    document.getElementById("cardiac-nurses").innerHTML =
    cardiac.nurses.map((newNurse) => {
      return `<li>${newNurse}</li>`;
      });
    document.getElementById("surgical-doctors").innerHTML =
    surgical.doctors.map((newDoctor) => {
      return `<li>${newDoctor}</li>`;
      });
    document.getElementById("surgical-nurses").innerHTML =
    surgical.nurses.map((newNurse) => {
      return `<li>${newNurse}</li>`;
      });
    document.getElementById("maternity-doctors").innerHTML =
    maternity.doctors.map((newDoctor) => {
      return `<li>${newDoctor}</li>`;
      });
    document.getElementById("maternity-nurses").innerHTML =
    maternity.nurses .map((newNurse) => {
      return `<li>${newNurse}</li>`;
      });

    document.getElementById("display1").value ="";
   document.getElementById("display2").value ="";

console.log(search1)
console.log(search2)
};
