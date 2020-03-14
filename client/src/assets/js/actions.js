function openPlatformModalMessage(message){
    document.querySelector('#pMessage').innerHTML= message; 
    openModal('modalMessage');
 }
 
function openConfirmationModal(){
    openModal('modalConfirmation');
}

function openImageModal(){
    openModal('modalImage');
}

function openModalMessageDejected(){
    openModal('modalMessageDejected');
}

let openModal = (modalId) => {
    var elem = document.querySelector(`#${modalId}`);
    let instance = M.Modal.init(elem, {});
    instance.open();
}
