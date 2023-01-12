const generateManager = function (manager) {
    return `
    <div class="card" id="allCard">
        <div class="body">
            <div class="card-header-title">
            <h4>Manager ${manager.name}</h4>
            </div>
            <div class="content">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}
const generateEngineer = function (engineer) {
    return `
    <div class="card" id="allCard">
        <div class="body">
            <div class="card-header-title">
            <h4>Engineer ${engineer.name}</h4>
            </div>
            <div class="content">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}
const generateIntern = function (intern) {
    return `
    <div class="card" id="allCard">
        <div class="body">
            <div class="card-header-title">
            <h4>Intern ${intern.name}</h4>
            </div>
            <div class="content">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

generateHTML = (data) => {

    allTeams = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            allTeams.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            allTeams.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            allTeams.push(internCard);
        }
    }
    const employeeCard = allTeams.join('')
    const generateTeam = generateMarkdown(employeeCard); 
    return generateTeam;
}



function generateMarkdown(employeeCard) {
    // console.log(employeeCard);
    return `
   <!DOCTYPE html>
   <html lang="en">
   
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Team Directory</title>
       <link rel="stylesheet" href="./style.css">
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">
       <link
           href="https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
           rel="stylesheet">
   </head>
   
   <body>
       <header>
           <nav id="nav" class="navbar has-background-grey-light">
                   <div class="navbar-brand">
                       <h1 class="title">Team Directory</h1>
                       </div>
           </nav>
       </header>

       ${employeeCard}
   <section id="teamNames" class="column is-half is-offset-one-quarter">
       <div id="teamHere">
       </div>
   </section>
       <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
       <script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js"
         integrity="sha256-iu/zLUB+QgISXBLCW/mcDi/rnf4m4uEDO0wauy76x7U=" crossorigin="anonymous"></script>
       <script src="./assets/JS/script.js"></script>
       <script src="./assets/JS/modal.js"></script>
   </body>
   
   </html>

  `;
  }
  
  module.exports = generateMarkdown;
  