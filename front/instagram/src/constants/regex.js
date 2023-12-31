export const PHONE_OR_EMAIL 
    = /[a-zA-Z]{1}[a-zA-Z0-9]+@[0-9a-zA-Z]+\.[a-z]*\.?[a-z]$|^[0-9]{11}$/;

export const NAME
    = /^[가-힣]{2,6}$/;

export const USERNAME
    = /^[a-z._]{1}[a-z0-9_.]*$/;

export const PASSWORD
    = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,25}$/;