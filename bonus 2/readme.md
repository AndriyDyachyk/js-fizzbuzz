PROBLEMA: Scrivere un programma che stampi in console i numeri da 1 a 100, ma se questi sono divisibili per 3 allora stampi "Fizz", se per 5 allora "Buzz" e se per entrabi allora "FizzBuzz"

SOLUZIONE:
1 - Creare un ciclo che stampi i numeri da 1 a 100 compreso
2 - Inserire nel ciclo una condizione per la quale nel caso in cui il valore sia un numero divisibile per 5 e per 3, restituisca "FizzBuzz" !(prima delle altre, altrimenti prenderà sempre la prima)!
3 - Inserire nel ciclo una seconda condizione per la quale se il valore corrisponde ad un numero divisibile per 3, restituisca "Fizz"
4 - Inserire nel ciclo una seconda condizione per la quale se il valore corrisponde ad un numero divisibile per 5, restituisca "Buzz"
5 - Else, stampa normalmente il numero in console

BONUS 1:
PROBLEMA: Creare un elemento nel DOM, aggiungendo un elemento html con il numero o la stringa corretta da mostrare.

SOLUZIONE:
1 - Creiamo un elemento nel dom nel quale voglia mostrare i numeri;
2 - Creiamo l'elemento con all'interno il numero o la scritta che vogliamo mostrare a seconda del caso (createElement);
3 - Al posto del console log inseriamo un .innerText per l'elemento creato e lo mettamo = a cio che vogliamo mostrare a seconda del valore di i; 
4 - Recuperiamo dal DOM l'elemento in cui vogliamo mosrare i nuemri (getElementBy) 
    4.1 - aggiungiamo l'elemento in sequenza con .append()


BONUS 2:
PROBLEMA: dare uno stile agli elementi da noi creati in precedenza a seconda di cosa viene mostrato come risultato

SOLUZIONE: 
1 - modificare l'elemento creato "p" con un "div" così da potergli dare caratteristiche aggiuntive
2 - aggiungere una classe al div creato in base al suo contenuto con .classList.add('')
3 - stilizzare nel css le classi dei div appena creati a piacimento
4 - stilizzare il resto degli elementi nel css a seconda di come si vogliono far apparire