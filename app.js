const state = {
  employeeList: [
    {
      name: 'Jan',
      officeNum: 1,
      phoneNum: '222-222-2222'
    },
    {
      name: 'Juan',
      officeNum: 304,
      phoneNum: '489-789-8789'
    },
    {
      name: 'Margie',
      officeNum: 789,
      phoneNum: '789-789-7897'
    },
    {
      name: 'Sara',
      officeNum: 32,
      phoneNum: '222-789-4654'
    },
    {
      name: 'Tyrell',
      officeNum: 3,
      phoneNum: '566-621-0452'
    },
    {
      name: 'Tasha',
      officeNum: 213,
      phoneNum: '789-766-5675'
    },
    {
      name: 'Ty',
      officeNum: 211,
      phoneNum: '789-766-7865'
    },
    {
      name: 'Sarah',
      officeNum: 345,
      phoneNum: '222-789-5231'
    }
  ],

  comand: '',

  runCommand: function (e) {
    e.preventDefault();
    let employeeList = state.employeeList;


    switch (comand.toLowerCase()) {
      case 'print':
        console.log('print');
        let htmlStr = '';

        employeeList.forEach(i => {
          htmlStr += `<p class = "printHide"> Name: ${i.name}</p>`;
          htmlStr += `<p class = "printHide"> Office Number: ${i.officeNum}</p>`;
          htmlStr += `<p class = "printHide"> Phone Number: ${i.phoneNum}</p>`;
        })
        render(htmlStr);
        break;

      case 'verify':
        console.log('vrify');
        let message = '';
        const userInput = $('#check').val();
        employeeList.forEach(employee => {
          if (employee.name.toLowerCase() === userInput.toLowerCase()) {
            message = '<p class ="hideText">Employee Found</p>';
          } else {
            message = '<p class ="hideText">Employee not found.</p>';
          }

        });
        render(message);

        break;

      case 'lookup':
        const value = $('#check').val();
        employeeList.forEach(employee => {
          if (employee.name.toLowerCase() === value.toLowerCase()) {
            console.log('whattttt');
            render(`<p class ="hideLookUp">Name: ${employee.name}</p><p class ="hideLookUp">Office Number: ${employee.officeNum}</p><p class ="hideLookUp"> Phone Number:${employee.phoneNum}</p>`);
          }
        })
        break;


      case 'contains':

        const input = $('#contain').val();

        employeeList.forEach(employee => {
          console.log(employee);
          if (employee.name.toLowerCase().includes(input)) {

            render(`<p class ="hideContains">Name: ${employee.name} </p><p class ="hideContains">Office Number: ${employee.officeNum}</p><p class ="hideContains">Phone Number:  ${employee.phoneNum}</p>`);
          }
        });
        break;

      case 'update':

        const name = $('#employeeName').val();
        const officeNum = $('#officeNumber').val();
        const newPhone = $('#phone').val();

        employeeList.forEach(i => {
          if (i.name.toLowerCase() === name.toLowerCase()) {
            i.name = name;
            i.officeNum = officeNum;
            i.phoneNum = newPhone;
          }
          render(`<p class = "hideUpdate">Name: ${i.name}</p> <p class = "hideUpdate">Office Number: ${i.officeNum}</p><p class = "hideUpdate">Phone Number: ${i.phoneNum}</p>`);
        });
        break;


      case 'add':
        let newName = $('#ad').val();
        let newOffice = $('#addd').val();
        let newTele = $('#adds').val();
        const newEmployee = {
          name: newName,
          officeNum: newOffice,
          phoneNum: newTele
        }
        employeeList.push(newEmployee);
        employeeList.forEach(employee => {
          render(`<p class ="hideAdd">Name: ${employee.name} </p><p class ="hideAdd">Office Number: ${employee.officeNum}</p><p class ="hideAdd">Phone Number:  ${employee.phoneNum}</p>`);

        })
        break;

      case 'delete':
        let nameDel = $('#dele').val();
        const newArr = employeeList.filter(employee => employee.name.toLowerCase() !== nameDel.toLowerCase());

        newArr.forEach(employee => {
          render(`<p class ="hideDelete">Name: ${employee.name} </p><p class ="hideDelete">Office Number: ${employee.officeNum}</p><p class ="hideDelete">Phone Number:  ${employee.phoneNum}</p>`);
        });
        break;
    }
  }
};



function render(htmlStr) {
  $('#display').append(`<p>${htmlStr}</p>`);
}

function print(event) {
  comand = 'print';
  state.runCommand(event);
  hideVerify();
  hideLookUp();
  hideContains();
  hideUpdate();
  hideAdd();
  hideDelete();
}

function verify(event) {

  comand = 'verify';
  state.runCommand(event);
}

function showVerify() {
  $('#first').removeClass('inputf');
  $('#first').removeClass('hide');
  $('#first').addClass('show');
  hidePrint();
  hideLookUp();
  hideContains();
  hideUpdate();
  hideAdd();
  hideDelete();
}


function lookUp(event) {
  comand = 'lookUp'
  state.runCommand(event);
}
function showLookUp() {
  $('#second').removeClass('inputf');
  $('#second').removeClass('hide');
  $('#second').addClass('show');
  hidePrint();
  hideVerify();
  hideContains();
  hideUpdate();
  hideAdd();
  hideDelete();
}

function contains(event) {
  comand = 'contains';
  state.runCommand(event);
}
function showContains() {
  $('#third').removeClass('inputf');
  $('#third').removeClass('hide');
  $('#third').addClass('show');
  hidePrint();
  hideVerify();
  hideLookUp();
  hideUpdate();
  hideAdd();
  hideDelete();
}

function update(event) {
  comand = 'update';
  state.runCommand(event);
}
function showUpdate() {
  $('#fourth').removeClass('inputf');
  $('#fourth').removeClass('hide');
  $('#fourth').addClass('show');
  hidePrint();
  hideVerify();
  hideLookUp();
  hideContains();
  hideAdd();
  hideDelete();
}

function add(event) {
  comand = 'add';
  state.runCommand(event);
}
function showAdd() {
  $('#fifth').removeClass('inputf');
  $('#fifth').removeClass('hide');
  $('#fifth').addClass('show');
  hidePrint();
  hideVerify();
  hideLookUp();
  hideContains();
  hideUpdate();
  hideDelete();
}

function deletes(event) {
  comand = 'delete';
  state.runCommand(event);
}
function showDelete(event) {
  $('#sixth').removeClass('inputf');
  $('#sixth').removeClass('hide');
  $('#sixth').addClass('show');
  hidePrint();
  hideVerify();
  hideLookUp();
  hideContains();
  hideUpdate();
  hideAdd();
}

function hidePrint() {
  $('.printHide').addClass('hide');
}

function hideVerify() {
  $('#first').addClass('hide');
  $('.hideText').addClass('hide');
}

function hideLookUp() {
  $('.hideLookUp').addClass('hide');
  $('#second').addClass('hide');
}

function hideContains() {
  $('#third').addClass('hide');
  $('#third').removeClass('show');
  $('.hideContains').addClass('hide');
}

function hideUpdate(){
  $('#fourth').addClass('hide');
  $('#fourth').removeClass('show');
  $('.hideUpdate').addClass('hide');
}

function hideAdd(){
  $('#fifth').addClass('hide');
  $('#fifth').removeClass('show');
  $('.hideAdd').addClass('hide');
}

function hideDelete(){
  $('#sixth').addClass('hide');
  $('#sixth').removeClass('show');
  $('.hideDelete').addClass('hide');
}


$('#print').on('click', print);

$('#verify').on('click', showVerify);
$('#renders').on('click', verify);

$('#lookUp').on('click', showLookUp);
$('#lup').on('click', lookUp);

$('#contains').on('click', showContains);
$('#has').on('click', contains);

$('#update').on('click', showUpdate);
$('#up').on('click', update);

$('#add').on('click', showAdd);
$('#addition').on('click', add);

$('#delete').on('click', showDelete);
$('#remove').on('click', deletes);


