const classes = ["encyption_project", "covid_tracker", "home_security", "personal_v1", "tic_tac_toe", "baccarat_game", "more_projects"]

const each_description = document.querySelectorAll(".projects-section .each .project-description");
let is_expanded = false;

function expandFunction(index) {

    if (is_expanded && each_description[index].classList.contains(classes[index]))  {
        each_description[index].classList.remove(classes[index]);
        each_description[index].classList.add("minimize");
        is_expanded = false;
        return;
    }
    else if (is_expanded)   {
        for (let i = 0; i < each_description.length; ++i)   {
            if (each_description[i].classList.contains(classes[i]))   {
                each_description[i].classList.remove(classes[i]);
                each_description[i].classList.add("minimize");
            }
        }
    }
    each_description[index].classList.remove("minimize");
    each_description[index].classList.add(classes[index]);
    is_expanded = true;
}