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
// TYPE INFERENCE 
// Data type ını yazmamama rağmen geliyor.
var sayac = 0;
console.log(typeof (sayac));
