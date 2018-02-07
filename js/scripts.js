'use strict';
(function(){
    function validationForm(form,mailText,dateText,textText,textSuccess){
        this._form = document.getElementById(form);
        this._mailText = document.getElementById(mailText);
        this._dateText = document.getElementById(dateText);
        this._textText = document.getElementById(textText);
        this._succesText = document.getElementById(textSuccess);
        this._inputs = document.getElementsByClassName('textArea')
        this._error = false;
        this._event();
    };
    
    validationForm.prototype._event = function(){
        this._form.addEventListener('submit',this._formAction.bind(this), true);
        
    };
    validationForm.prototype._mailValidation = function(){
        this._mailRegExp =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(this._mailRegExp.test(this._inputs[0].value)==false){
            this._mailText.innerText = 'nieprawidłowy mail';
            this._error = true;
        };
        };
            
    validationForm.prototype._dateValidation = function(){
        this._dateRegExp =/\d{4}\-\d{2}\-\d{2}$/
        if(this._dateRegExp.test(this._inputs[1].value)==false){
            this._dateText.innerText = 'nieprawidłowa data';
            this._error = true;
        };    
    };
    validationForm.prototype._textValidation = function(){
        if(this._inputs[2].value.length<6){
            this._textText.innerText = 'text jest za krótki';
            this._error = true;
        };
    }
    validationForm.prototype._formAction = function(e){
        console.log(this._inputs[0].value);
        e.preventDefault();
        this._mailValidation();
        this._dateValidation();
        this._textValidation();
        if(this._error== false)
        this._succesText.innerText = 'wysłano na' + this._inputs[0].value ; 
    }
    
    new validationForm("form","infoMail","infoDate","infoText","infoSuccess")
})();

