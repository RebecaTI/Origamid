// const Dom = {
//   seletor:'li',
//   element(){  //É o mesmo que elemento:function() { }
//     return document.querySelector(this.seletor);
//   },
//   ativar(){
//     this.element().classList.add('ativar'); 
//   },
// }

function Dom (seletor) {
    this.element = function(){ 
      return document.querySelector(seletor);
    };
    this.ativar = function(classe, fdfd) {
      this.element().classList.add(classe)
    }
    // this.ativar = function(){
    //   this.element().classList.add('ativar'); 
    // }
  }

const li = new Dom('li');
const ul = new Dom('ul');

const lastLi = new Dom('li:last-child');
lastLi.ativar('ativar');

