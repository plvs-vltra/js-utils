const listOfobjects = {
    MATH: MATH,
    WORD: WORD,
};



let form = {
    html: document.querySelector("#form"),
    objectSelector: document.querySelector("#form-objectSelector"),
    methodSelector: document.querySelector("#form-methodSelector"),



    selectedObject: null,
    selectedMethod: null,
};



function wrapValueToOptionTag(value, isDisable = false, isSelected = false){
    let option = document.createElement("option");
    option.textContent = value;
    option.setAttribute("value", value);

    if(isDisable) option.setAttribute("disabled", "");
    if(isSelected) option.setAttribute("selected", "");

    return option;
}



function wrapArray(array){        
    return wrappedArray = array.map(item => {
        return wrapValueToOptionTag(item.name);
    });
}



function renderObjectSelector(){
    let options = wrapArray(Object.values(listOfobjects));
    options.forEach(option => {
        form.objectSelector.appendChild(option)
    });
}



function renderMethodSelector(){
    form.methodSelector.innerHTML = "";
    form.methodSelector.children = [];

    let listOfMethods = Object.values(listOfobjects[form.selectedObject])
                              .filter(item => {
                                    if(typeof item == "function") return item.name;
                               });
    let options = wrapArray(listOfMethods);
    options.unshift(wrapValueToOptionTag("select helper method", true, true));


    options.forEach(option => {
        form.methodSelector.appendChild(option)
    });
};



function renderSelectorForm(){
    renderObjectSelector();

    form.methodSelector.addEventListener("click", event => {
        if(form.objectSelector.value !== "Select helper object"){
            form.selectedObject = form.objectSelector.value;
            renderMethodSelector();
        }
    }, false);

}



renderSelectorForm();