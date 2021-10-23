import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll ('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  const bindActionsToElems = (elements, action, obj, objKey) => {
    elements.forEach((item, index) => {
      item.addEventListener(action, () => {
        switch(item.nodeName) {
          case 'SPAN':
            obj[objKey] = index;
            break;
          case 'INPUT':
            if(item.getAttribute('type') === 'checkbox') {
                index === 0 ? obj[objKey] = 'Холодное' : obj[objKey] = 'Теплое';
                elements.forEach((checkbox) => {
                  if (checkbox !== item) {
                    checkbox.checked = false;
                  }
                })
            } else {
              obj[objKey] = item.value;
            }
            break;
          case 'SELECT':
            obj[objKey] = item.value;
            break;
        }
        console.log(state);
      })
    })
  }
  bindActionsToElems(windowForm, 'click', state, 'form');
  bindActionsToElems(windowWidth, 'input', state, 'width');
  bindActionsToElems(windowHeight, 'input', state, 'height');
  bindActionsToElems(windowType, 'change', state, 'type');
  bindActionsToElems(windowProfile, 'change', state, 'profile');
}

export default changeModalState;