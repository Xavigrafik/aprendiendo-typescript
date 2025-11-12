// namespace es un  agrupador para usarlo en otro lado

namespace Validation {
    export const validateText = (text: string): boolean => {
        return (text.length > 3) ? true : false;
    };
    export const validateNum = (text: string): boolean => {
        return (text.length > 3) ? true : false;
    };
}


console.log("Validation namespace: " ,Validation.validateText('pepepe'));
console.log("Validation namespace: " ,Validation.validateText('pee'));