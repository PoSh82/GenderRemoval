// ==UserScript==
// @name         GenderRemoval
// @namespace    https://
// @version      0.1
// @description  Looks every 3 seconds for new text and removes words ending with "Innen" or "In" in many combinations with special characters on any webpage in order to see and read only the generic masculine form of words.
// @author       PoSh82
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define the regular expression pattern
    var regexPattern = /(Innen|:Innen|\*Innen|\.Innen|_Innen|\/Innen|(Innen)|-Innen|\|Innen|\\Innen|;Innen|:innen|\*innen|\.innen|_innen|\/innen|(Innen)|-innen|\|innen|\\innen|;innen|·Innen|·innen|:In|\*In|_In|\/In|\|In|;In|·In|:in|\*in|_in|\|in|;in|·in|(?<=\w\b(?!Linked))In\b)\b/g;
    var regexPattern2 = /Menschin/gi;
    var regexPattern3 = /Personin/gi;
    var regexPattern4 = /Mitgliederin/gi;
    var regexPattern5 = /Menschinnen/gi;
    var regexPattern6 = /Personinnen/gi;
    var regexPattern7 = /Mitgliederinnen/gi;

    // Define the replacement text
    var replacementText = '';
    var replacementText2 = 'Mensch';
    var replacementText3 = 'Person';
    var replacementText4 = 'Mitglied';
    var replacementText5 = 'Menschen';
    var replacementText6 = 'Personen';
    var replacementText7 = 'Mitglieder';

    // Remove matching words
    function replaceText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = node.textContent.replace(regexPattern, replacementText);
            node.textContent = node.textContent.replace(regexPattern2, replacementText2);
            node.textContent = node.textContent.replace(regexPattern3, replacementText3);
            node.textContent = node.textContent.replace(regexPattern4, replacementText4);
            node.textContent = node.textContent.replace(regexPattern5, replacementText5);
            node.textContent = node.textContent.replace(regexPattern6, replacementText6);
            node.textContent = node.textContent.replace(regexPattern7, replacementText7);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            for (var i = 0; i < node.childNodes.length; i++) {
                replaceText(node.childNodes[i]);
            }
        }
    }

    // Infinite loop to continuously search for new displayed text
    setInterval(function() {
        const body = document.body;
        if (body) {
            replaceText(body);
        }
    }, 3000); // Adjust the interval as needed
})();
