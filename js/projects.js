const each_description = document.querySelectorAll(".projects-section .each .project-description");
let is_expanded = false;

function expandFunction(index) {

    if (is_expanded && each_description[index].classList.contains("expand"))  {
        each_description[index].classList.remove("expand");
        each_description[index].classList.add("minimize");
        is_expanded = false;
        return;
    }
    else if (is_expanded)   {
        for (let i = 0; i < each_description.length; ++i)   {
            if (each_description[i].classList.contains("expand"))   {
                each_description[i].classList.remove("expand");
                each_description[i].classList.add("minimize");
            }
        }
    }
    each_description[index].classList.remove("minimize");
    each_description[index].classList.add("expand");
    is_expanded = true;
}