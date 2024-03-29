// let age: number = 23;
// let firstname: string = "John";
// let lastname: string = "Cena";
// let isUpdated: boolean = true;

// function display (id:number , name:string)
// {
//   console.log("Id = " + id + "Name = " + name);
//}

// ----------------Data Type:-----------------------

// 1- NUMBER-----------------------------------------------------

// let first:number = 123; //number
// let second: number = 0x37CF ; // hexadecimal
// let third: number = 0o377; // octal
// let fourth: number = 0b111001; // binary

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);

// 2- STRİNG ---------------------------------------------------

// let  employeefirstName: string = "Muro";
// let  employeefirstName: string = 'Muro';

// console.log(employeefirstName);

// let employeeName: string = "John Cena";
// let employeeDept: string = "Under Taker";

// let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department.";

// console.log(employeeDesc1);

// let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`

// console.log(employeeDesc2)

// 3- BOOLEAN------------------------------------------------

// let isPresent1: boolean = true;
// let isPresent2: boolean = false;

// console.log(isPresent1);
// console.log(isPresent2);

// 4- ARRAY ---------------------------------------------------

// let firstNames1: string[] = ['Burak' , 'Talip' , 'Mustafa'];
// console.log(firstNames1);

// let firstNames2: Array<string> = ['Burak' , 'Talip' , 'Mustafa'];
// console.log(firstNames2);

// let fruits: Array<strings>;
// fruits = ['Apple', 'Orange', 'Banana'];
// console.log(fruits);

// let ids: Array<number> ;
// ids = [23, 34, 435, 54, 54];
// console.log(ids);

//Multitype----------------------

// let values1: (string | number)[] = ["ali" , 23 , "fatma" , 546 ,  ];
// console.log(values1);

// console.log(values1[0]);

// let values2: Array<string | number> = ["ali" , 23 , "fatma" , 546];
// console.log(values2);

// console.log(values2[2])

// for(let i =0 ; i < values2.length ; i++){
//   console.log(values2[i]);
// }

// 5- TUPLE ----------------------------------------------------

// let Id: number = 1;
// let instructorName: string = "purple";

// let instructor : [number , string ,boolean , number , string] = [23 , "pink" , true , 34 , "probably"];

// console.log(instructor);

// let employee: [number , string][];
// employee = [[1,"red"] , [2, "blue"] , [3, "green"]];
// console.log(employee);

// 6- OBJECT -----------------------------------------------------

// type Person1 = {
//   firstName : string,
//   lastName : string,
//   age : number,
//   job : string

// };

// let  instructor : Person1;

// instructor =
//   {
//     firstName : 'Can',
//     lastName : 'Kulak',
//     age : 29 ,
//     job : 'computer engineering'
//   }

//   console.log(instructor);
//   console.log(instructor.firstName);
//   console.log(instructor.age);

// 2. gösterim

// let Person2 :{
//   firstName : string,
//   lastName : string,
//   age : number,
//   job : string

// } = {
//   firstName : 'Can',
//   lastName : 'Kulak',
//   age : 29 ,
//   job : 'computer engineering'
// }

// console.log(Person2);

// 7- ENUM -----------------------------------------------------

// enum Media {
//   Newspaper = 1,
//   Newsletter,
//   Magazin,
//   Book
// };

// console.log(Media);
// console.log(Media.Magazin);

// enum PrintMedia  {
//   Newspaper  = "NEWSPAPER",
//   Newsletter = "NEWSLETTER",
//   Magazin = "MAGAZİNE",
//   Book = "BOOK"

// };
// console.log(PrintMedia.Newsletter);

// 8- UNION -----------------------------------------------------------

// Tanımladığımız bir değişkene bir den fazla data type verebiliriz
//  burada union u kullanırız .

// let code : number | string | boolean ;

// code = 123;

// code = "papa";

// code = true ;

// console.log(code);

// 9- ANY -------------------------------------------------------------

//  Type ı bilmiyorsak ve bir karmaşa varsa herhangi bir type dan türemiş
//  gibi kullanılabilir. Bütün data type ları kabul ediyor .

// let someThing1: any  = "Hello";
// let someThing2: any  =  123;
// let someThing3: any  = false;

// console.log(someThing1);
// console.log(someThing2);
// console.log(someThing3);

// 10- VOİD ----------------------------------------------------------

// Bir fonksiyonda fonksiyon geriye değer döndürmüyorsa void kullanılır.

// function sayHello(): void {
// let can = "can";
//   console.log("selam dünya");
// return can;
// }
// sayHello();

//  11- NEVER ----------------------------------------------------------

// function throwError (errorMsg: string ) : never {
//   throw new Error(errorMsg);
// }

// throwError("Hata");

// -----------------------------------------------------------------------

// TYPE INFERENCE:

// Data type ını yazmamama rağmen geliyor.

// let sayac = 0 ;
// console.log(typeof(sayac))

// TYPE ASSORTION:

// ------------- If Else Ternary Operator--------------------------------

// let x: number = 45;
// let y: number = 45;

// x > y
// ? console.log("X Y DEN BÜYÜKTÜR.")
//   : x < y
//   ? console.log("X Y DEN KÜÇÜKTÜR.")
//   : console.log(" X VE Y EŞİTTİR.");

// ---------------SWITCH CASE--------------------------

// let day: number = 5;
// switch (day) {
//   case 0:
//     console.log("Pazar");
//     break;
//   case 1:
//     console.log("Pazartesi");
//     break;
//   case 2:
//     console.log("salı");
//     break;
//   case 3:
//     console.log("çarşamba");
//     break;
//   case 4:
//     console.log("perşembe");
//     break;
//   case 5:
//     console.log("cuma");
//     break;
//   case 6:
//     console.log("cumartesi");
//     break;
//   default:
//     console.log("Böyle bir gün yok..");
// }

// ------------------FOR LOOP --------------------------

// for (let i = 0; i < 3; i++) {
//   console.log("i değerim: ", i);
// }

// let arr: number[] = [10, 20, 30, 40];

// for (let item of arr) {
//   console.log(item);
// }

// let str: string = "Alperen Aktuğ";

// for (let item of str) {
//   console.log(item);
// }

// for (let item in str) {
//   console.log(item);
// }

// ------------WHILE LOOP ------------------------------

// let counter: number = 10;

// while (counter < 5) {
//   console.log(counter);
//   counter++;

//   if (counter == 3) break;
// }

// do {
//   console.log(counter);
//   counter++;
// } while (counter < 5);

// ----------------FUNCTION-------------------------------

// function add(a: number, b: number): number {
//   return a + b;
// }

// let toplam: number = add(23, 20);
// console.log(toplam);
// console.log(typeof toplam);

// function bastir(): void {
//   console.log("Polat Alemdar");
// }

// bastir();

// function birlestir(ad: string, soyad: string): string {
//   return ad + " " + soyad;
// }

// let degisken: string = birlestir("Alp", "Korkmaz");

// console.log(degisken);

//-------OPTIONAL PARAMETERS ARROW FUNCTION --------------

// function carpim(a: number, b: number, c?: number) {
//   if (typeof c !== "undefined") {
//     return a * b * c;
//   }
//   return;
// }

// let degisken = carpim(5, 6, 3);

// console.log(degisken);

// function carpim(a: number, b: number): number {
//   return a * b;
// }

// let carpim = (a: number, b: number): number => {
//   return a * b;
// };

// let degisken = carpim(4, 5);

// console.log(degisken);

// let bastir = () => {
//   console.log("Polat Alemdar");
// };

// bastir();

//----------------Function Overloading----------------------------------

// function add(a: string, b: string): string;
// function add(a: number, b: number): number;

// function add(a: any, b: any): any {
//   return a + b;
// }

// let degisken = add(5, 9);
// console.log(degisken);

// ----------------Rest Parameters-------------------------------------

// function sum(...numbers: number[]): number {
//   let total = 0;
//   numbers.forEach((num) => (total += num));
//   return total;
// }
// console.log(sum(10, 20));

// -----------------------  CLASS  ------------------------------------

// class Person {
//   id: number;
//   firstname: string;
//   lastname: string;

//   constructor(id: number, firstname: string, lastname: string) {
//     this.id = id;
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }

//   getFullName() {
//     return `${this.firstname} ${this.lastname}`;
//   }
//   getId() {
//     return `${this.id}`;
//   }
// }

// let kisibilgim = new Person(43, "Jimmy", "Butler");

// console.log(kisibilgim);

// console.log(kisibilgim.getFullName());

// console.log(kisibilgim.getId());

// --------------Access Modifiers(public , private , protected)----------

// class Person {
//   public id: number;
//   private firstname: string;
//   protected lastname: string;

//   constructor(id: number, firstname: string, lastname: string) {
//     this.id = id;
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
// }

// let kisibilgim = new Person(43, "Jimmy", "Butler");

// console.log(kisibilgim);

// public heryerden erişim  , private sadece class ın içinden erişim , protected class ve subclass dan erişim yine class dışından erişim yok.

// ----------------------Readonly -----------------------------------

// class Person {
//   readonly id: number;
//   private firstname: string;
//   protected lastname: string;

//   constructor(id: number, firstname: string, lastname: string) {
//     this.id = id;
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
// }

// let kisibilgim = new Person(43, "Jimmy", "Butler");
// kisibilgim.id = 5;

// console.log(kisibilgim);

// readonly le ekrana yazdırabiliriz değeri fakat değiştiremeyiz.

// -----------------------Inhertiance --------------------------------

// class Person {
//   id: number;
//   firstname: string;
//   lastname: string;

//   constructor(id: number, firstname: string, lastname: string) {
//     this.id = id;
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }

//   getFullName() {
//     return `${this.firstname} ${this.lastname}`;
//   }
// }

// class Employee extends Person {
//   constructor(id: number, firstname: string, lastname: string) {
//     super(id, firstname, lastname);
//   }
// }

// let employee = new Employee(29, "Vito", "Carleone");
// console.log(employee);

// console.log(employee.getFullName());

// let kisibilgim = new Person(43, "Jimmy", "Butler");

// console.log(kisibilgim);

// ----------------------Static Methods -----------------------------

// class circle {
//   static pi: number = 3.14;

//   pi = 3;

//   constructor() {
//     circle.pi++;
//   }

//   static hesapla(yaricap: number) {
//     return this.pi * yaricap * yaricap;
//   }
// }

// let objem = new circle();
// let objem2 = new circle();

// console.log(objem.pi);

// console.log(circle.pi);

// console.log(circle.hesapla(5));

//---------------  Abstract Class (soyut dınıf ) --------------------

// abstract class Department {
//   constructor(public name: string) {}

//   printName(): void {
//     console.log("Department name: " + this.name);
//   }

//   abstract printMeeting(): void;
// }

// class AccountingDepartment extends Department {
//   constructor() {
//     super("Accounting and Auditing");
//   }

//   printMeeting(): void {
//     console.log("Iam always int the top shit");
//   }

//   generateReports(): void {
//     console.log("You are mad I am back..");
//   }
// }
// let

// let department = new AccountingDepartment();
// department.printName();
// department.printMeeting();
// department.generateReports();

//-------------------Interface --------------------------------------

// TypeScript'te "interface" (arayüz) kavramı, bir nesnenin yapısını tanımlamak için kullanılan bir özelliktir. Bu yapının içinde sadece tür bilgileri bulunur, dolayısıyla derleme aşamasında interface'lerden herhangi bir kod üretimi gerçekleşmez. İnterface'ler genellikle bir nesnenin sahip olması gereken özellikleri ve bu özelliklerin türlerini belirtmek için kullanılır.

// interface Kisi {
//   ad: string;
//   yas: number;
// }

// function kisiBilgisiGoster(kisi: Kisi) {
//   console.log(`Ad: ${kisi.ad}, Yaş: ${kisi.yas}`);
// }

// let insan: Kisi = { ad: "Ahmet", yas: 30 };
// kisiBilgisiGoster(insan);

// interface Person {
//   firstname: string;
//   lastname: string;
//   age: number;
// }

// function getFullName(person: Person) {
//   return `Adı : ${person.firstname} |  Soyadı : ${person.lastname} | Yaşı : ${person.age} `;
// }

// let person = {
//   firstname: "James",
//   lastname: "Harden",
//   age: 24,
// };

// console.log(getFullName(person));

// ----------Interface Extend Etme --------------------------

// TypeScript'te bir interface'in başka bir interface'i "extend" etmesi, yani genişletmesi mümkündür. Bu, bir interface'in başka bir interface'in tüm özelliklerini almasını ve bu özelliklere ek olarak kendi özelliklerini de tanımlamasını sağlar. Böylece, kod tekrarını azaltabilir ve daha modüler yapılar oluşturabilirsiniz.

// interface Hayvan {
//   tur: string;
//   yas: number;
//   sesCikar(): void;
// }

// interface Kopek extends Hayvan {
//   tur: string;
//   yas: number;
//   sesCikar(): void;
//   kuyrukSalla(): void;
// }

// class GoldenRetriever implements Kopek {
//   tur: string;
//   yas: number;

//   constructor(tur: string, yas: number) {
//       this.tur = tur;
//       this.yas = yas;
//   }

//   sesCikar() {
//       console.log("Hav hav!");
//   }

//   kuyrukSalla() {
//       console.log("Kuyruk sallanıyor!");
//   }
// }

// let kopek: Kopek = new GoldenRetriever("Golden Retriever", 3);
// kopek.sesCikar(); // "Hav hav!"
// kopek.kuyrukSalla(); // "Kuyruk sallanıyor!"

// interface IPerson {
//   name: string;
//   gender: string;
// }

// interface IEmployee extends IPerson {
//   empNumber: number;
// }

// let employee: IEmployee = {
//   empNumber: 1,
//   gender: "male",
//   name: "Moriarty",
// };

// console.log(employee);

// interface IPerson {
//   name: string;
//   gender: string;
// }

// class Employee implements IPerson {
//   empNumber: number;
//   name: string;
//   gender: string;
// }

// ---------------------   GENERİCS   -----------------------------------

// function getRandomNumber(items: number[]): number {
//   let randomIndex = Math.floor(Math.random() * items.length);

//   return items[randomIndex];
// }

// let numbers = [1, 54, 65, 76, 86, 97];

// console.log(getRandomNumber(numbers));
// function getRandomString(items: string[]): string {
//   let randomIndex = Math.floor(Math.random() * items.length);

//   return items[randomIndex];
// }

// let adlarim = ["can", "ali", "ayşe", "fatma"];

// console.log(getRandomString(adlarim));

// let degiskenlerim = [true, false, true];
// function getRandomElement<T>(items: T[]): T {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }
// console.log(getRandomElement<number>(numbers));
// console.log(getRandomElement<string>(adlarim));
// console.log(getRandomElement<boolean>(degiskenlerim));

// -------------------Generic Constraints ---------------------------

// function merge<U extends object, V extends object>(obj1: U, obj2: V) {
//   return {
//     ...obj1,
//     ...obj2,
//   };
// }

// let person = merge({ name: "Faruk" }, { age: 28 });
// console.log(person);

// --------------Generic İnterface -----------------------------

// interface Months<U, V> {
//   key: U;
//   value: V;
// }

// let month: Months<number, string> = {
//   key: 1,
//   value: "January",
// };

// console.log(month);
