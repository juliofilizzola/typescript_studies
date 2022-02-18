type color = 'RED' | 'BLACK' | 'BLUE';
type age = number;
type name = string;
type lastName = string;

type person = (age & name & lastName) | color;
