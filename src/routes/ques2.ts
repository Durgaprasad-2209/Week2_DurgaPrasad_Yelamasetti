import express, { Request, Response } from 'express';
import { fetchAndStoreOrders } from './../service';


export const ques2router = express.Router()

ques2router.post('/array-operations', (req: Request, res: Response) => {
    const array: number[] = req.body.array;

    if (!Array.isArray(array)) {
        return res.status(400).send("invalid input");
    }


    const newArray1: number[] = array.concat([6, 7, 8]);
    console.log("concat:", newArray1);

    
    const index: number = array.lastIndexOf(3);
    console.log("lastIndexOf:", index);


    array.push(6);
    console.log("push:", array);

    
    const splicedArray: number[] = array.splice(1, 2);
    console.log("splice:", splicedArray);

    
    const poppedItem: number | undefined = array.pop();
    console.log("pop:", poppedItem);

    
    const slicedArray: number[] = array.slice(1, 3);
    console.log("slice:", slicedArray);

    
    const mappedArray: number[] = array.map((item) => item * 2);
    console.log("map:", mappedArray);

    
    const shiftedItem: number | undefined = array.shift();
    console.log("shift:", shiftedItem);

    const filteredArray: number[] = array.filter((item) => item > 2);
    console.log("filter:", filteredArray);

    array.unshift(0);
    console.log("unshift:", array);

   
    array.forEach((item) => console.log("foreach:", item));

    
    const foundItem: number | undefined = array.find((item) => item === 3);
    console.log("find:", foundItem);

    
    const joinedString: string = array.join("-");
    console.log("join:", joinedString);

    
    const foundIndex: number = array.findIndex((item) => item === 4);
    console.log("findindex:", foundIndex);

    
    const stringRepresentation: string = array.toString();
    console.log("tostring:", stringRepresentation);

    
    const someResult: boolean = array.some((item) => item > 3);
    console.log("some:", someResult);

    const stringToSplit: string = "Hello World";
    const splitArray: string[] = stringToSplit.split(" ");
    console.log("split:", splitArray);

    
    const everyResult: boolean = array.every((item) => item > 0);
    console.log("every:", everyResult);

    
    const replacedString: string = stringToSplit.replace("World", "Universe");
    console.log("replace:", replacedString);

   
    const includesResult: boolean = array.includes(3);
    console.log("includes:", includesResult);

   
    const indexOfItem: number = array.indexOf(2);
    console.log("indexOf:", indexOfItem);

    res.send({
        newArray1,
        index,
        updatedArray: array,
        splicedArray,
        poppedItem,
        slicedArray,
        mappedArray,
        shiftedItem,
        filteredArray,
        foundItem,
        joinedString,
        foundIndex,
        stringRepresentation,
        someResult,
        splitArray,
        everyResult,
        replacedString,
        includesResult,
        indexOfItem
    });


  });